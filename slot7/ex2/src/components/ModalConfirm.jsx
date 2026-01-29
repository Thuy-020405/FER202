import React, { useState } from 'react';

const ModalConfirm = () => {
  // Trạng thái (useState): Tạo một biến isShowModal kiểu boolean [cite: 29]
  const [isShowModal, setIsShowModal] = useState(false);

  // Hàm xử lý khi nhấn Xác nhận [cite: 32, 33]
  const handleConfirm = () => {
    alert("Duyệt đơn hàng thành công!"); // Hiển thị 1 alert thành công [cite: 33]
    setIsShowModal(false); // Tự động đóng Modal [cite: 33]
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h3 style={{ color: '#333' }}>Ex2: Xử lý đơn hàng</h3>
      
      {/* Hành động: Click vào nút "Xử lý đơn hàng" -> Mở Modal [cite: 30] */}
      <button 
        onClick={() => setIsShowModal(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          cursor: 'pointer',
          borderRadius: '4px'
        }}
      >
        Xử lý đơn hàng
      </button>

      {/* Giao diện Modal xác nhận [cite: 27] */}
      {isShowModal && (
        <div style={{
          border: '1px solid #333',
          padding: '30px',
          marginTop: '20px',
          backgroundColor: '#fff',
          maxWidth: '500px',
          margin: '20px auto',
          textAlign: 'left'
        }}>
          {/* Nội dung câu hỏi xác nhận đã xóa phần  thừa  */}
          <p style={{ fontSize: '16px', marginBottom: '20px' }}>
            Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?
          </p>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            {/* Click vào nút "Xác nhận" -> Xử lý duyệt đơn  */}
            <button 
              onClick={handleConfirm}
              style={{ padding: '5px 15px', cursor: 'pointer' }}
            >
              Xác nhận
            </button>
            
            {/* Click vào nút "Hủy" -> Đóng Modal [cite: 31] */}
            <button 
              onClick={() => setIsShowModal(false)}
              style={{ padding: '5px 15px', cursor: 'pointer' }}
            >
              Hủy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalConfirm;