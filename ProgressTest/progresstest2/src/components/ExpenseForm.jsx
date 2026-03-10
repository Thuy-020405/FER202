import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const ExpenseForm = ({ onSave, editingExpense, clearEdit }) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: '',
    date: ''
  });

  useEffect(() => {
    if (editingExpense) {
      setFormData(editingExpense);
    } else {
      setFormData({ name: '', amount: '', category: '', date: '' });
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.category.trim() || formData.amount <= 0) {
      alert('Name and Category must not be empty and Amount must be greater than 0');
      return;
    }
    onSave(formData);

    setFormData({ name: '', amount: '', category: '', date: '' });
  };

  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-3">{editingExpense ? 'Edit Expense' : 'Add Expense'}</h5>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label className="small text-muted">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Electricity Bill"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-light border-0 py-2"
          />
        </Form.Group>

        <Row>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="small text-muted">Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="0"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="bg-light border-0 py-2"
              />
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="small text-muted">Category</Form.Label>
              <Form.Select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="bg-light border-0 py-2 text-muted"
              >
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Mua sắm">Mua sắm</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label className="small text-muted">Date</Form.Label>
          <Form.Control
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="bg-light border-0 py-2"
          />
        </Form.Group>

        <div className="d-flex justify-content-end gap-2">
          <Button 
            variant="secondary" 
            className="px-4 py-2 fw-bold border-0 shadow-sm" 
            style={{ backgroundColor: '#6c757d' }}
            onClick={() => {
              setFormData({ name: '', amount: '', category: '', date: '' });
              if(editingExpense) clearEdit();
            }}
          >
            Reset
          </Button>
          <Button 
            variant="primary" 
            type="submit" 
            className="px-4 py-2 fw-bold border-0 shadow-sm"
            style={{ backgroundColor: '#4361ee' }}
          >
            {editingExpense ? 'Save' : 'Add expense'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ExpenseForm;