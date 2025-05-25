"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CAROUSEL_IMAGES, 
  getCarouselImages,
  products,
  getProductsByCategory 
} from '../data/productsData';

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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-7 0a4 4 0 118 0H8z"/>
  </svg>
);

const PauseIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6"/>
  </svg>
);

interface CarouselSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  href: string;
}

const AdvancedCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Crear slides dinámicos basados en las imágenes del carrusel y productos
  const createSlides = (): CarouselSlide[] => {
    const carouselImages = getCarouselImages();
    const bolsos = getProductsByCategory('Bolsos');
    const billeteras = getProductsByCategory('Billeteras');
    const morrales = getProductsByCategory('Morrales');
    
    return [
      {
        id: '1',
        image: carouselImages[0],
        title: 'Colección Elegance',
        subtitle: 'Sofisticación en cada detalle',
        description: `Descubre nuestra línea premium de ${bolsos.length} bolsos únicos, diseñados para mujeres que valoran la elegancia y la calidad excepcional.`,
        cta: 'Ver Bolsos',
        href: '/productos'
      },
      {
        id: '2',
        image: carouselImages[5],
        title: 'Artesanía Colombiana',
        subtitle: 'Tradición que perdura',
        description: 'Cada pieza es creada a mano por maestros artesanos colombianos, combinando técnicas ancestrales con diseño contemporáneo.',
        cta: 'Conoce Nuestra Historia',
        href: '/about'
      },
      {
        id: '3',
        image: carouselImages[10],
        title: 'Billeteras Premium',
        subtitle: 'Funcionalidad y estilo',
        description: `Explora nuestra colección de ${billeteras.length} billeteras de cuero genuino, perfectas para complementar tu look diario con clase.`,
        cta: 'Ver Billeteras',
        href: '/productos'
      },
      {
        id: '4',
        image: carouselImages[15],
        title: 'Morrales Urbanos',
        subtitle: 'Para aventuras sin límites',
        description: `${morrales.length} diseños resistentes y funcionales para quienes buscan comodidad sin sacrificar el estilo en su día a día.`,
        cta: 'Ver Morrales',
        href: '/productos'
      },
      {
        id: '5',
        image: carouselImages[18],
        title: 'Envíos a Todo Colombia',
        subtitle: 'Tu bolso perfecto te espera',
        description: 'Realizamos envíos seguros a todo el territorio nacional. Paga con Nequi, Daviplata o contra entrega.',
        cta: 'Realizar Pedido',
        href: '/contacto'
      }
    ];
  };

  const slides = createSlides();

  // Navegación del carrusel
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && isLoaded) {
      interval = setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, isLoaded, nextSlide]);

  // Cargar componente
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Controles de teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === ' ') {
        event.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide, isPlaying]);

  if (!isLoaded) {
    return (
      <div className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
      {/* Main Slide Image */}
      <div className="relative w-full h-full">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title}
          fill
          className="object-cover transition-all duration-1000 transform group-hover:scale-105"
          priority
          quality={95}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        
        {/* Slide Content */}
        <div className="absolute inset-0 flex items-center justify-start p-8 md:p-12 lg:p-16">
          <div className="max-w-2xl text-white">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-sm font-bold text-white shadow-lg">
                {currentSlide + 1} de {slides.length}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight">
              {currentSlideData.title}
            </h2>
            
            <h3 className="text-xl md:text-2xl font-light text-amber-100 mb-6">
              {currentSlideData.subtitle}
            </h3>
            
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              {currentSlideData.description}
            </p>
            
            <Link href={currentSlideData.href}>
              <button className="group/btn relative px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-amber-500/25 overflow-hidden">
                <span className="relative z-10">{currentSlideData.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        aria-label="Slide anterior"
      >
        <div className="w-6 h-6 text-white">
          <ChevronLeftIcon />
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        aria-label="Siguiente slide"
      >
        <div className="w-6 h-6 text-white">
          <ChevronRightIcon />
        </div>
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
      >
        <div className="w-5 h-5 text-white">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </div>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-amber-400 scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/30">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>

      {/* Slide Transition Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
    </div>
  );
};

export default AdvancedCarousel;