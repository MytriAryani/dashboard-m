
import React, { useState, useEffect } from 'react';

const images = [
  "/carousel.png",
  "/carousel.png",
  "/carousel.png"
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  
  useEffect(() => {
    console.log('Active slide index:', activeIndex, 'Direction:', direction, 'Transitioning:', isTransitioning, 'Paused:', isPaused);
  }, [activeIndex, direction, isTransitioning, isPaused]);

 
  useEffect(() => {
    if (isPaused || isTransitioning) return;
    const interval = setInterval(() => {
      goToNext();
    }, 3000); 
    return () => clearInterval(interval);
  }, [isPaused, isTransitioning]);


  const goToSlide = (index) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setIsPaused(true); 
    setDirection(index > activeIndex ? 'right' : 'left');
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
      setTimeout(() => setIsPaused(false), 1000); 
    }, 500); 
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsPaused(true); 
    setDirection('left');
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
      setTimeout(() => setIsPaused(false), 1000); 
    }, 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsPaused(true);
    setDirection('right');
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
      setTimeout(() => setIsPaused(false), 1000); 
    }, 500);
  };

  return (
    <div
      className="w-full mt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)} 
    >
      <style>
        {`
          .carousel-item {
            transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
            transform: translateX(100%);
            opacity: 0;
            z-index: 1;
          }
          .carousel-item.active {
            transform: translateX(0);
            opacity: 1;
            z-index: 10;
          }
          .carousel-item.prev {
            transform: translateX(-100%);
            opacity: 0;
            z-index: 5;
          }
          .carousel-item.next {
            transform: translateX(100%);
            opacity: 0;
            z-index: 5;
          }
        `}
      </style>
      <div className="relative max-w-[80%] mx-auto">
        <div className="relative h-72 md:h-96 overflow-hidden rounded-lg">
          {images.map((src, index) => (
            <div
              key={index}
              className={`carousel-item absolute inset-0 ${
                index === activeIndex
                  ? 'active'
                  : direction === 'right' && index === (activeIndex - 1 + images.length) % images.length
                  ? 'prev'
                  : direction === 'left' && index === (activeIndex - 1 + images.length) % images.length
                  ? 'prev'
                  : 'next'
              }`}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === activeIndex ? 'bg-white' : 'bg-white/50'
              } ${isTransitioning ? 'pointer-events-none opacity-50' : ''}`}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      
        <button
          type="button"
          className={`absolute top-1/2 left-2 z-30 flex items-center justify-center w-8 h-8 px-2 cursor-pointer bg-white/30 hover:bg-white/50 rounded-full -translate-y-1/2 ${
            isTransitioning ? 'pointer-events-none opacity-50' : ''
          }`}
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </button>
        <button
          type="button"
          className={`absolute top-1/2 right-2 z-30 flex items-center justify-center w-8 h-8 px-2 cursor-pointer bg-white/30 hover:bg-white/50 rounded-full -translate-y-1/2 ${
            isTransitioning ? 'pointer-events-none opacity-50' : ''
          }`}
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
