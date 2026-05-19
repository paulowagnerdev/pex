import React from 'react';
import './bannerComponent.css';
import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import logo from '../../../assets/logo.svg';
import { useState, useEffect } from 'react';

const BannerComponent = () => {

  const images = [banner1, banner2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner-component">
      {images.map((img, index) => (
        <div
          key={index}
          className={`banner-image ${
            index === current ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="overlay">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Sua Landing Page</h1>
        <p>Texto do banner aqui</p>
      </div>
    </section>
  );
};

export default BannerComponent;
