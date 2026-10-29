import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = ({ images = [], autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  if (!images || images.length === 0) {
    return <div className="text-neutral-400">No images provided for the carousel.</div>;
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-[275px] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800 group">
      {/* Main Image Container */}
      <div className="relative h-64 sm:h-96 md:h-[400px] w-full flex items-center justify-center overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
            {/* Optional Caption Overlay */}
            {image.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-transparent p-6 text-white">
                <p className="text-xxs sm:text-base font-small">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Visible on Hover) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/60 hover:bg-neutral-900/90 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/60 hover:bg-neutral-900/90 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;