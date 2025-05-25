"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// SVG Icons
const ChevronLeftIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
  </svg>
);

const PlayIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 5h10a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const PauseIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

// Carousel slides data
const carouselSlides = [
  {
    id: 1,
    image: "/images/carrusel1.jpg",
    title: "Colección Heritage",
    subtitle: "Elegancia Clásica",
    description: "Bolsos atemporales que combinan tradición y sofisticación para la mujer moderna.",
    buttonText: "Explorar Heritage",
    buttonLink: "/productos?category=Heritage"
  },
  {
    id: 2,
    image: "/images/carrusel2.jpg",
    title: "Modern Luxe",
    subtitle: "Diseño Contemporáneo",
    description: "Líneas modernas y acabados premium para quienes buscan vanguardia y estilo.",
    buttonText: "Ver Modern Luxe",
    buttonLink: "/productos?category=Modern"
  },
  {
    id: 3,
    image: "/images/carrusel3.jpg",
    title: "Artisan Series",
    subtitle: "Hecho a Mano",
    description: "Piezas únicas elaboradas por maestros artesanos con técnicas tradicionales.",
    buttonText: "Descubrir Artisan",
    buttonLink: "/productos?category=Artisan"
  },
  {
    id: 4,
    image: "/images/carrusel4.jpg",
    title: "Premium Collection",
    subtitle: "Lujo Exclusivo",
    description: "La máxima expresión de calidad y diseño en materiales excepcionales.",
    buttonText: "Ver Premium",
    buttonLink: "/productos?category=Premium"
  },
  {
    id: 5,
    image: "/images/carrusel5.jpg",
    title: "Urban Style",
    subtitle: "Para la Ciudad",
    description: "Funcionalidad y estilo urbano para acompañarte en tu día a día.",
    buttonText: "Explorar Urban",
    buttonLink: "/productos?category=Urban"
  }
];

const AdvancedCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleImageLoad = (slideId: number) => {
    setImageLoaded(prev => ({ ...prev, [slideId]: true }));
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl shadow-2xl">
      {/* Main Slides */}
      <div className="relative w-full h-full">
        {carouselSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <div className="relative w-full h-full">
              {!imageLoaded[slide.id] && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl shadow-2xl" />
                </div>
              )}
              
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  imageLoaded[slide.id] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(slide.id)}
                priority={index === 0}
              />
              
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-2xl">
                  {/* Subtitle */}
                  <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-amber-600/80 to-orange-600/80 backdrop-blur-sm rounded-full">
                    <span className="text-white font-semibold text-sm tracking-wide uppercase">
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
                    <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <a
                    href={slide.buttonLink}
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-amber-500/25"
                  >
                    <span className="mr-3">{slide.buttonText}</span>
                    <div className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300">
                      <ChevronRightIcon />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
      >
        <div className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300">
          <ChevronLeftIcon />
        </div>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
      >
        <div className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300">
          <ChevronRightIcon />
        </div>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-amber-400 w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 z-10"
      >
        <div className="w-5 h-5 text-white">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </div>
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / carouselSlides.length) * 100}%`,
          }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-semibold z-10">
        <span className="text-amber-400">{currentSlide + 1}</span>
        <span className="text-gray-300 mx-1">/</span>
        <span className="text-gray-300">{carouselSlides.length}</span>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse opacity-60" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse opacity-60" style={{animationDelay: '1s'}} />
    </div>
  );
};

export default AdvancedCarousel;