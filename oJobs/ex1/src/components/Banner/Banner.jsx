import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/1.webp",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.webp",
    "/images/5.jpg",
  ];

  // Tự động chuyển slide sau 3 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="banner-container container">
      {/* Nút điều hướng */}
      <button className="arrow prev" onClick={() => goToSlide(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}>&#10094;</button>
      <button className="arrow next" onClick={() => goToSlide(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}>&#10095;</button>

      {/* Khung trượt ảnh */}
      <div className="slider-wrapper">
        <div 
          className="images-inner" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Slide ${index}`} className="banner-img" />
          ))}
        </div>
      </div>

      {/* Dấu chấm điều hướng (Dots) */}
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;