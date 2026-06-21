'use client';
// src/components/carousel/Carousel.tsx
import { useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '../icons';
import './Carousel.css';

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () =>
    setCurrentIndex((prev) => (prev + images.length - 1) % images.length);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="carousel-container">
      <div className="arrow previous" onClick={handlePrevious}>
        <IconChevronLeft />
      </div>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <div className="arrow next" onClick={handleNext}>
        <IconChevronRight />
      </div>
    </div>
  );
};

export default Carousel;
