import React from 'react';
import './Statistics.css';

const Statistics = () => {
  const statsData = [
    { value: "500.000+", label: "Nhà tuyển dụng uy tín hàng đầu", icon: "🏢" },
    { value: "200.000+", label: "Doanh nghiệp hàng đầu liên kết", icon: "🤝" },
    { value: "2.000.000+", label: "Việc làm đã được kết nối thành công", icon: "💼" },
    { value: "1.200.000+", label: "Lượt tải ứng dụng di động", icon: "📱" }
  ];

  return (
    <div className="stats-container container">
      <div className="stats-grid">
        {statsData.map((item, index) => (
          <div key={index} className="stat-card shadow-sm">
            <div className="stat-icon">{item.icon}</div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;