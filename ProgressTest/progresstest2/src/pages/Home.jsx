import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import AuthApi from '../services/AuthApi'; 
import TotalExpenseCard from '../components/TotalExpenseCard';
import FilterBar from '../components/FilterBar';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Footer from '../components/Footer';

const Home = () => {
  const { user } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('');
  const [editingExpense, setEditingExpense] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (user) loadData();
  }, [user]);

  const loadData = async () => {
    try {
      const data = await AuthApi.getExpenses(user.id);
      setExpenses(data);
    } catch (error) {
      console.error("Connection error");
    }
  };

  const handleSave = async (formData) => {
    const dataWithUser = { ...formData, userId: user.id };
    if (editingExpense) {
      await AuthApi.updateExpense(editingExpense.id, dataWithUser);
    } else {
      await AuthApi.addExpense(dataWithUser);
    }
    setEditingExpense(null);
    loadData();
  };

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (deleteId) {
      await AuthApi.deleteExpense(deleteId);
      setShowDeleteModal(false);
      setDeleteId(null);
      loadData();
    }
  };

  const filteredExpenses = expenses.filter(ex => 
    filter === '' || ex.category === filter
  );

  return (
    <div className="bg-light d-flex flex-column min-vh-100">
      <main className="flex-grow-1 pb-4">
        <Container className="pt-3">
          <Row className="mb-3">
            <Col md={4}>
              <Card className="border-light shadow-sm p-3 h-100">
                <small className="text-muted fw-bold mb-2 d-block">Total of Expenses</small>
                <TotalExpenseCard expenses={filteredExpenses} />
              </Card>
            </Col>
            <Col md={8}>
              <Card className="border-light shadow-sm p-3 h-100">
                <small className="text-muted fw-bold mb-1 d-block">Filter</small>
                <FilterBar filter={filter} setFilter={setFilter} />
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Card className="border-light shadow-sm p-4 h-100">
                <ExpenseForm 
                  onSave={handleSave} 
                  editingExpense={editingExpense} 
                  clearEdit={() => setEditingExpense(null)} 
                />
              </Card>
            </Col>
            <Col md={8}>
              <Card className="border-light shadow-sm p-4 h-100">
                <h6 className="fw-bold mb-4">Expense Management</h6>
                <ExpenseTable 
                  expenses={filteredExpenses} 
                  onEdit={setEditingExpense} 
                  onDelete={openDeleteModal} 
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold h5">Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3">
          Do you really want to delete this expense?
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
};

export default Home;