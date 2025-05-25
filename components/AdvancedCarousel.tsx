"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CAROUSEL_IMAGES, 
  getCarouselImages,
  products,
  getProductsByCategory,
  COMPANY_INFO,
  PROMOTIONAL_MESSAGES,
  YEARS_IN_BUSINESS
} from '../data/productsData';

// SVG Icons optimizados
const ChevronLeftIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
  </svg>
);

const PlayIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const PauseIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
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
  badge?: string;
  stats?: string;
}

const AdvancedCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Crear slides dinámicos mejorados
  const createSlides = (): CarouselSlide[] => {
    const carouselImages = getCarouselImages();
    const bolsos = getProductsByCategory('Bolsos');
    const billeteras = getProductsByCategory('Billeteras');
    const morrales = getProductsByCategory('Morrales');
    const featuredProducts = products.filter(p => p.featured);
    
    return [
      {
        id: '1',
        image: carouselImages[0] || '/images/carrusel1.jpg',
        title: `${COMPANY_INFO.name}`,
        subtitle: 'Elegancia en Cuero Genuino',
        description: `${YEARS_IN_BUSINESS} años creando piezas únicas. Descubre nuestra colección de ${bolsos.length} bolsos premium diseñados para mujeres que valoran la calidad excepcional.`,
        cta: 'Ver Colección',
        href: '/productos',
        badge: 'Nueva Colección 2025',
        stats: `${products.length} productos disponibles`
      },
      {
        id: '2',
        image: carouselImages[5] || '/images/carrusel6.jpg',
        title: 'Artesanía Colombiana',
        subtitle: 'Tradición y Calidad',
        description: 'Cada pieza es creada a mano por maestros artesanos colombianos. Cuero 100% genuino con garantía de 6 meses que respalda nuestra calidad.',
        cta: 'Conoce Nuestra Historia',
        href: '/about',
        badge: 'Hecho a Mano',
        stats: 'Garantía 6 meses'
      },
      {
        id: '3',
        image: carouselImages[10] || '/images/carrusel11.jpg',
        title: 'Productos Destacados',
        subtitle: 'Lo Mejor de Nuestra Colección',
        description: `${featuredProducts.length} productos cuidadosamente seleccionados. Desde elegantes bolsos hasta prácticas billeteras, encuentra tu pieza perfecta.`,
        cta: 'Ver Destacados',
        href: '/productos',
        badge: 'Más Vendidos',
        stats: `${billeteras.length} billeteras disponibles`
      },
      {
        id: '4',
        image: carouselImages[15] || '/images/carrusel16.jpg',
        title: 'Envíos Seguros',
        subtitle: 'A Todo Colombia',
        description: `Envíos rápidos y seguros. Bogotá: ${COMPANY_INFO.shipping.local}. Nacional: ${COMPANY_INFO.shipping.national}. Pago contra entrega disponible.`,
        cta: 'Realizar Pedido',
        href: '/contacto',
        badge: 'Envío Gratis +$250k',
        stats: 'Pago contra entrega'
      },
      {
        id: '5',
        image: carouselImages[18] || '/images/carrusel19.jpg',
        title: 'Atención Personalizada',
        subtitle: 'Estamos Aquí Para Ti',
        description: `Contacto directo vía WhatsApp: ${COMPANY_INFO.phone}. Horarios: Lunes a Viernes ${COMPANY_INFO.schedule.monday_friday}, Sábados ${COMPANY_INFO.schedule.saturday}.`,
        cta: 'Contactar WhatsApp',
        href: COMPANY_INFO.whatsapp,
        badge: 'Atención Inmediata',
        stats: 'Respuesta en minutos'
      }
    ];
  };

  const slides = createSlides();

  // Touch handling para móviles
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

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
      interval = setInterval(nextSlide, 6000); // 6 segundos para mejor experiencia
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, isLoaded, nextSlide]);

  // Cargar componente
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Controles de teclado (solo en desktop)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (window.innerWidth > 768) { // Solo en desktop
        if (event.key === 'ArrowLeft') {
          prevSlide();
        } else if (event.key === 'ArrowRight') {
          nextSlide();
        } else if (event.key === ' ') {
          event.preventDefault();
          setIsPlaying(!isPlaying);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide, isPlaying]);

  if (!isLoaded) {
    return (
      <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-4 sm:mx-0">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-white/70 text-sm sm:text-base">Cargando experiencia...</p>
        </div>
      </div>
    );
  }

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group mx-4 sm:mx-0"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main Slide Image */}
      <div className="relative w-full h-full">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title}
          fill
          className="object-cover transition-all duration-1000 transform group-hover:scale-105"
          priority
          quality={90}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
        />
        
        {/* Overlay Gradient - Optimizado para móvil */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/90 via-black/60 to-black/30 sm:to-transparent" />
        
        {/* Slide Content - Mobile First */}
        <div className="absolute inset-0 flex items-end sm:items-center justify-start p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="w-full sm:max-w-2xl text-white">
            {/* Badge */}
            {currentSlideData.badge && (
              <div className="mb-3 sm:mb-4">
                <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs sm:text-sm font-bold text-white shadow-lg backdrop-blur-sm">
                  <StarIcon />
                  <span className="ml-1.5">{currentSlideData.badge}</span>
                </span>
              </div>
            )}
            
            {/* Title - Responsivo */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent leading-tight">
              {currentSlideData.title}
            </h2>
            
            {/* Subtitle */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-light text-amber-100 mb-3 sm:mb-6">
              {currentSlideData.subtitle}
            </h3>
            
            {/* Description - Oculto en móviles muy pequeños */}
            <p className="hidden sm:block text-sm md:text-base lg:text-lg text-gray-200 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
              {currentSlideData.description}
            </p>
            
            {/* Stats */}
            {currentSlideData.stats && (
              <p className="text-xs sm:text-sm text-amber-200 mb-4 sm:mb-6 font-medium">
                ✨ {currentSlideData.stats}
              </p>
            )}
            
            {/* CTA Button - Mobile Optimized */}
            <Link href={currentSlideData.href} className="inline-block">
              <button className="group/btn relative px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-sm sm:text-base lg:text-lg font-semibold shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-amber-500/25 overflow-hidden touch-manipulation">
                <span className="relative z-10">{currentSlideData.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Solo en desktop */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        aria-label="Slide anterior"
      >
        <div className="w-5 h-5 lg:w-6 lg:h-6 text-white">
          <ChevronLeftIcon />
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        aria-label="Siguiente slide"
      >
        <div className="w-5 h-5 lg:w-6 lg:h-6 text-white">
          <ChevronRightIcon />
        </div>
      </button>

      {/* Play/Pause Button - Solo en desktop */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="hidden md:flex absolute top-4 lg:top-6 right-4 lg:right-6 w-8 h-8 lg:w-10 lg:h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
      >
        <div className="w-4 h-4 lg:w-5 lg:h-5 text-white">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </div>
      </button>

      {/* Slide Indicators - Mobile Optimized */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentSlide
                ? 'bg-amber-400 scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/70 active:bg-white/80'
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

      {/* Auto-play indicator - Solo visible cuando está reproduciéndose */}
      {isPlaying && (
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="hidden sm:inline">Auto</span>
          </div>
        </div>
      )}

      {/* Slide Transition Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

      {/* Touch indicators for mobile */}
      <div className="md:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/70 text-xs text-center">
        <p>Desliza para navegar</p>
      </div>
    </div>
  );
};

export default AdvancedCarousel;