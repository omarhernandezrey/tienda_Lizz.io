"use client";

import React, { useState, useEffect } from "react";

interface AdvancedCarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const AdvancedCarousel: React.FC<AdvancedCarouselProps> = ({
  images,
  autoPlay = false,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const calculateClass = (index: number) => {
    const offset = (index - currentIndex + images.length) % images.length;
    switch (offset) {
      case 0:
        return "translate-x-0 scale-110 opacity-100 z-10"; // Imagen central
      case 1:
        return "translate-x-24 md:translate-x-36 lg:translate-x-48 scale-100 opacity-60 z-5"; // Imagen derecha
      case images.length - 1:
        return "-translate-x-24 md:-translate-x-36 lg:-translate-x-48 scale-100 opacity-60 z-5"; // Imagen izquierda
      case 2:
        return "translate-x-48 md:translate-x-64 lg:translate-x-80 scale-90 opacity-30 z-0"; // Más a la derecha
      case images.length - 2:
        return "-translate-x-48 md:-translate-x-64 lg:-translate-x-80 scale-90 opacity-30 z-0"; // Más a la izquierda
      default:
        return "hidden"; // Ocultar las demás imágenes
    }
  };

  return (
    <div className="relative flex items-center justify-center bg-transparent py-10 overflow-hidden">
      {/* Botón Anterior */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-3 md:left-4 text-gray-800 text-2xl bg-gray-200 p-3 rounded-full hover:bg-gray-300 z-10"
      >
        &lt;
      </button>

      {/* Carrusel */}
      <div className="relative w-full max-w-screen-2xl h-64 sm:h-72 md:h-80 lg:h-96 flex justify-center items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out ${calculateClass(
              index
            )}`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 object-contain"
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder.jpg"; // Imagen de respaldo si falla la carga
                e.currentTarget.alt = "Imagen no encontrada";
              }}
              style={{
                background: "none", // Quitar fondo
                boxShadow: "none", // Sin sombras
              }}
            />
          </div>
        ))}
      </div>

      {/* Botón Siguiente */}
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-3 md:right-4 text-gray-800 text-2xl bg-gray-200 p-3 rounded-full hover:bg-gray-300 z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default AdvancedCarousel;