import React from 'react';
import { Table, Badge, Container, Image, Button } from 'react-bootstrap';
import { ListOfUsers } from '../data/ListOfUsers';

const ManageUsers = () => (
  <Container className="bg-white p-4 rounded-4 shadow-sm mt-3">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h4 className="fw-bold mb-0">Manage Users</h4>
      <Button variant="primary" size="sm">+ Add User</Button>
    </div>
    <Table hover responsive align="middle">
      <thead className="text-muted small">
        <tr>
          <th>USER</th>
          <th>USERNAME</th>
          <th>STATUS</th>
          <th className="text-end">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {ListOfUsers.map((user) => (
          <tr key={user.id}>
            <td className="d-flex align-items-center py-3">
              <Image src={user.avatar} roundedCircle width={36} height={36} className="me-3" />
              <div>
                <div className="fw-bold small">{user.name}</div>
                <div className="text-muted" style={{ fontSize: '0.7rem' }}>{user.email}</div>
              </div>
            </td>
            <td className="small">{user.username}</td>
            <td>
              <Badge pill bg={user.status === 'Active' ? 'success' : 'secondary'} className="px-2 py-1">
                {user.status}
              </Badge>
            </td>
            <td className="text-end">
              <Button variant="link" className="text-primary text-decoration-none small fw-bold p-0 me-3">Edit</Button>
              <Button variant="link" className="text-danger text-decoration-none small fw-bold p-0">Lock</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
);

export default ManageUsers;