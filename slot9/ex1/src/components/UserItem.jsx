import React from 'react';
const UserItem = ({ user }) => (
  <div className="p-3 border mb-3 shadow-sm bg-white rounded">
    <h5 className="fw-bold text-primary">{user.name}</h5>
    <p className="mb-0 text-muted">{user.email}</p>
  </div>
);
export default UserItem;