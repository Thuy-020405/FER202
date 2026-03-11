import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const FilterBar = ({ accounts, onFilterChange }) => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [role, setRole] = useState('All');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    let result = [...accounts];
    if (search) {
      result = result.filter(a => 
        a.username.toLowerCase().includes(search.toLowerCase()) || 
        a.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (status !== 'All') {
      result = result.filter(a => a.status === status.toLowerCase());
    }

    if (role !== 'All') {
      result = result.filter(a => a.role === role.toLowerCase());
    }
    if (sortBy === 'username-az') result.sort((a, b) => a.username.localeCompare(b.username));
    if (sortBy === 'status') result.sort((a, b) => a.status.localeCompare(b.status));

    onFilterChange(result);
  }, [search, status, role, sortBy, accounts, onFilterChange]);

  return (
    <Row className="mb-4 g-2 align-items-center bg-light p-3 rounded shadow-sm">
      <Col md={5}>
        <Form.Control 
          placeholder="Search by username or email" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Col>
      <Col md={2}>
        <Form.Select onChange={(e) => setStatus(e.target.value)}>
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Locked">Locked</option>
        </Form.Select>
      </Col>
      <Col md={2}>
        <Form.Select onChange={(e) => setRole(e.target.value)}>
          <option value="All">All Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </Form.Select>
      </Col>
      <Col md={3}>
        <Form.Select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort by...</option>
          <option value="username-az">Username (A-Z)</option>
          <option value="status">Status</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default FilterBar;