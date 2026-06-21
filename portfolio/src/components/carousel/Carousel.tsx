'use client';
// src/components/carousel/Carousel.tsx
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';

const FontAwesomeIcon = dynamic(
  () => import('@fortawesome/react-fontawesome').then((m) => m.FontAwesomeIcon),
  { ssr: false, loading: () => null }
);

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
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <div className="arrow next" onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default Carousel;
