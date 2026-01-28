import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-wrapper container">
      <div className="search-container shadow-md">
        {/* Ô nhập vị trí công việc */}
        <div className="search-input-group">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Vị trí tuyển dụng, tên công ty" 
            className="search-input"
          />
        </div>

        <div className="divider"></div>

        {/* Ô chọn địa điểm */}
        <div className="search-input-group">
          <span className="location-icon">📍</span>
          <select className="search-select">
            <option value="">Địa điểm</option>
            <option value="hn">Hà Nội</option>
            <option value="hcm">TP. Hồ Chí Minh</option>
            <option value="dn">Đà Nẵng</option>
          </select>
        </div>

        {/* Nút tìm kiếm */}
        <button className="btn-search">
          <span className="btn-icon">🔍</span>
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default SearchBar;