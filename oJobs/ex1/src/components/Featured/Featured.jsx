import React from 'react';
import './Featured.css';

const Featured = () => {
  const tags = ["Công nghệ", "Marketing", "Kế toán", "Quản lý"];
  const sideJobs = [
    { title: "Senior UI/UX Designer", company: "Techcombank - Hà Nội" },
    { title: "Marketing Manager", company: "Vinamilk - Hồ Chí Minh" },
    { title: "Fullstack Developer", company: "FPT Software - Đà Nẵng" }
  ];

  return (
    <section className="featured-section container">
      <div className="featured-header">
        <h2>| Top Công Việc Thu Hút</h2>
        <div className="tags">
          {tags.map(tag => <button key={tag} className="tag-btn">{tag}</button>)}
        </div>
      </div>

      <div className="featured-content">
        {/* Banner lớn bên trái */}
        <div className="main-featured-card">
          <img src="https://via.placeholder.com/600x350" alt="Main Job" />
          <div className="card-overlay">
            <span className="badge">Chuyên gia</span>
            <h3>Môi trường làm việc chuyên nghiệp tại các tập đoàn đa quốc gia</h3>
            <p>Khám phá văn hóa doanh nghiệp và lộ trình thăng tiến hấp dẫn đang chờ đón bạn.</p>
          </div>
        </div>

        {/* Danh sách bên phải */}
        <div className="side-featured">
          <div className="mini-list">
            <h4>Việc làm mới nhất</h4>
            {sideJobs.map((job, i) => (
              <div key={i} className="mini-item">
                <div className="mini-icon">📄</div>
                <div>
                  <p className="mini-title">{job.title}</p>
                  <p className="mini-desc">{job.company}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cv-builder-box">
            <p>Tạo CV cho riêng bạn ngay</p>
            <button className="cv-btn">Bắt đầu ngay</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;