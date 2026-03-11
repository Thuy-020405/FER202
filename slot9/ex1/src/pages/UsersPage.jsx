import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Container, Spinner, Alert } from 'react-bootstrap';
import { fetchAllUsers } from '../api/api';
// Import hook kiểm tra trạng thái mạng
import { useOnlineStatus } from '../hooks/useOnlineStatus'; 

const UserItem = lazy(() => import('../components/UserItem'));

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const isOnline = useOnlineStatus(); // Sử dụng hook để theo dõi trạng thái mạng

  useEffect(() => {
    // Chỉ gọi API fetch dữ liệu khi có mạng [cite: 62]
    if (isOnline) {
      fetchAllUsers()
        .then(setUsers)
        .catch(err => console.error("Lỗi khi tải danh sách người dùng:", err));
    }
  }, [isOnline]); // Chạy lại hiệu ứng khi trạng thái mạng thay đổi

  return (
    <Container className="mt-4">
      {/* Hiển thị thông báo Alert màu đỏ nếu mất kết nối (Offline) */}
      {!isOnline && (
        <Alert variant="danger" className="text-center shadow-sm border-2">
          <i className="bi bi-wifi-off me-2"></i>
          <strong>Mất kết nối Internet!</strong> Vui lòng kiểm tra lại đường truyền để tải danh sách thành viên.
        </Alert>
      )}

      <div className="p-4 mb-4 bg-dark text-white text-center rounded shadow">
        <h2><i className="bi bi-people-fill me-2"></i> Community Users</h2>
      </div>

      {/* Sử dụng Suspense để xử lý việc tải chậm (Lazy Loading) thành phần UserItem  */}
      <Suspense fallback={
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2 text-muted">Đang tải danh sách người dùng...</p>
        </div>
      }>
        {/* Render danh sách người dùng nếu có dữ liệu */}
        {users.length > 0 ? (
          users.map(u => <UserItem key={u.id} user={u} />)
        ) : (
          isOnline && <div className="text-center text-muted">Đang lấy dữ liệu từ máy chủ...</div>
        )}
      </Suspense>
    </Container>
  );
};

export default UsersPage;