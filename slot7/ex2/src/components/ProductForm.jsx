import React, { useState } from 'react';

function ProductForm() {
  // Sử dụng một Object duy nhất để quản lý toàn bộ form [cite: 35]
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: ''
  });

  // Hàm xử lý chung cho tất cả các input sử dụng kỹ thuật "spread" [cite: 36]
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,     // Sao chép các giá trị hiện tại [cite: 36]
      [name]: value   // Cập nhật giá trị mới cho trường tương ứng
    });
  };

  return (
    <div className="product-form" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h2>Thêm Sản Phẩm Mới</h2>
      <div style={{ marginBottom: '10px' }}>
        <input 
          name="name" 
          placeholder="Tên sản phẩm" 
          value={product.name} 
          onChange={handleChange} 
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input 
          name="price" 
          placeholder="Giá sản phẩm" 
          value={product.price} 
          onChange={handleChange} 
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input 
          name="category" 
          placeholder="Danh mục" 
          value={product.category} 
          onChange={handleChange} 
        />
      </div>
      
      <div style={{ marginTop: '20px', backgroundColor: '#f9f9f9', padding: '10px' }}>
        <h4>Dữ liệu Real-time (State Object):</h4>
        <p><strong>Tên:</strong> {product.name}</p>
        <p><strong>Giá:</strong> {product.price}</p>
        <p><strong>Danh mục:</strong> {product.category}</p>
      </div>
    </div>
  );
}

export default ProductForm;