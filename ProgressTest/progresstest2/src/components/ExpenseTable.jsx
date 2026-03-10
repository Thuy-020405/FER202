import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ExpenseTable = ({ expenses, onEdit, onDelete }) => {
  return (
    <Table hover responsive className="align-middle">
      <thead className="table-light">
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th></th> {/* Cột cho nút bấm */}
        </tr>
      </thead>
      <tbody>
        {expenses.map((ex) => (
          <tr key={ex.id}>
            <td>{ex.name}</td>
            <td>{Number(ex.amount).toLocaleString()} đ</td>
            <td>{ex.category}</td>
            <td>{ex.date}</td>
            <td className="text-end">
              <Button 
                variant="warning" 
                size="sm" 
                className="me-2 fw-bold" 
                onClick={() => onEdit(ex)}
                style={{ backgroundColor: '#ffc107', border: 'none', color: '#000' }}
              >
                Edit
              </Button>
              <Button 
                variant="danger" 
                size="sm" 
                className="fw-bold" 
                onClick={() => onDelete(ex.id)}
                style={{ backgroundColor: '#dc3545', border: 'none' }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ExpenseTable;