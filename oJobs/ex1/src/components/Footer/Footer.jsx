import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-ojobs">
      <div className="footer-content container">
        {/* Khối giới thiệu thương hiệu */}
        <div className="footer-brand">
          <div className="brand-logo">
            <div className="logo-icon-small">Ổ</div>
            <span className="logo-name">Jobs</span>
          </div>
          <p className="brand-desc">
            Nền tảng tuyển dụng thông minh giúp kết nối ứng viên và nhà tuyển dụng một cách nhanh chóng và hiệu quả nhất.
          </p>
        </div>

        {/* Khối Liên hệ */}
        <div className="footer-info">
          <h4>Liên hệ</h4>
          <p>📍 Tòa nhà Innovation, Công viên phần mềm Quang Trung, TP. HCM</p>
        </div>

        {/* Khối Hotline */}
        <div className="footer-info">
          <h4>Hotline</h4>
          <p>📞 1900 6789 (Hỗ trợ 24/7)</p>
        </div>

        {/* Khối Email */}
        <div className="footer-info">
          <h4>Email</h4>
          <p>✉️ support@ojobs.vn</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2024 OJOBS PLATFORM. ALL RIGHTS RESERVED.</p>
        <div className="footer-links">
          <span>CHÍNH SÁCH BẢO MẬT</span>
          <span>ĐIỀU KHOẢN DỊCH VỤ</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;