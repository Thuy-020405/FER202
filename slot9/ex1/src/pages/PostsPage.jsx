import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Container, Spinner, Alert } from 'react-bootstrap'; // Thêm Alert
import { fetchAllPosts } from '../api/api';
// Import hook kiểm tra trạng thái mạng
import { useOnlineStatus } from '../hooks/useOnlineStatus'; 

const PostItem = lazy(() => import('../components/PostItem'));

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const isOnline = useOnlineStatus(); // Sử dụng hook để lấy trạng thái mạng

  useEffect(() => {
    // Chỉ thực hiện gọi API nếu có kết nối mạng
    if (isOnline) {
      fetchAllPosts().then(setPosts).catch(err => console.error("Lỗi tải bài viết:", err));
    }
  }, [isOnline]); // Chạy lại khi trạng thái mạng thay đổi

  return (
    <Container className="mt-4">
      {/* Hiển thị thông báo Alert nếu đang Offline */}
      {!isOnline && (
        <Alert variant="danger" className="text-center shadow-sm border-2">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          <strong>Mất kết nối Internet!</strong> Vui lòng kiểm tra lại mạng để xem các bài viết mới nhất.
        </Alert>
      )}

      <div className="p-4 mb-4 bg-danger text-white text-center rounded shadow">
        <h2><i className="bi bi-chat-left-text me-2"></i> Community Posts</h2>
      </div>

      <Suspense fallback={
        <div className="text-center my-5">
          <Spinner animation="grow" variant="danger" />
          <p className="mt-2 text-muted">Đang tải bài viết...</p>
        </div>
      }>
        {/* Chỉ render danh sách nếu có dữ liệu */}
        {posts.length > 0 ? (
          posts.map(p => <PostItem key={p.id} post={p} />)
        ) : (
          isOnline && <div className="text-center text-muted">Không có bài viết nào để hiển thị.</div>
        )}
      </Suspense>
    </Container>
  );
};

export default PostsPage;