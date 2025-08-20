'use client';

import React from 'react';
import './Slider.css'; // Importing CSS for styling

interface SliderProps {
  images: string[]; // Array of image URLs
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
      <button className="slider-button next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;