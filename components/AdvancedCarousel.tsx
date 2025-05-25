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

// SVG Icons optimizados y mejorados
const ChevronLeftIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/>
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
  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
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
  isExternal?: boolean;
}

const AdvancedCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Crear slides dinámicos mejorados con más contenido
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
        title: `${COMPANY_INFO.name} 2025`,
        subtitle: 'Elegancia en Cuero Genuino',
        description: `${YEARS_IN_BUSINESS} años creando piezas únicas. Descubre nuestra colección de ${bolsos.length} bolsos premium diseñados para mujeres que valoran la calidad excepcional y la artesanía colombiana.`,
        cta: 'Explorar Colección',
        href: '/productos',
        badge: 'Nueva Colección 2025',
        stats: `${products.length}+ productos con garantía ${COMPANY_INFO.warranty.period}`
      },
      {
        id: '2',
        image: carouselImages[5] || '/images/carrusel6.jpg',
        title: 'Artesanía Colombiana',
        subtitle: 'Tradición y Calidad Premium',
        description: `Cada pieza es creada a mano por maestros artesanos colombianos con más de ${YEARS_IN_BUSINESS} años de experiencia. Cuero 100% genuino con garantía de ${COMPANY_INFO.warranty.period} que respalda nuestra calidad excepcional.`,
        cta: 'Conoce Nuestra Historia',
        href: '/about',
        badge: 'Hecho a Mano',
        stats: `Garantía ${COMPANY_INFO.warranty.period} incluida`
      },
      {
        id: '3',
        image: carouselImages[10] || '/images/carrusel11.jpg',
        title: 'Productos Destacados',
        subtitle: 'Lo Mejor de Nuestra Colección',
        description: `${featuredProducts.length} productos cuidadosamente seleccionados por su calidad excepcional. Desde elegantes bolsos hasta prácticas billeteras y morrales versátiles, encuentra tu pieza perfecta.`,
        cta: 'Ver Destacados',
        href: '/productos',
        badge: 'Más Vendidos 2025',
        stats: `${billeteras.length} billeteras y ${morrales.length} morrales disponibles`
      },
      {
        id: '4',
        image: carouselImages[15] || '/images/carrusel16.jpg',
        title: 'Envíos Seguros',
        subtitle: 'A Todo Colombia con Garantía',
        description: `Envíos rápidos y seguros a todo el país. Bogotá: ${COMPANY_INFO.shipping.local}. Nacional: ${COMPANY_INFO.shipping.national}. Pago contra entrega disponible. Envío gratis en compras superiores a $250,000.`,
        cta: 'Realizar Pedido',
        href: '/contacto',
        badge: 'Envío Gratis +$250k',
        stats: 'Pago contra entrega disponible'
      },
      {
        id: '5',
        image: carouselImages[18] || '/images/carrusel19.jpg',
        title: 'Atención Personalizada',
        subtitle: 'Estamos Aquí Para Ti 24/7',
        description: `Contacto directo vía WhatsApp: ${COMPANY_INFO.phone}. Horarios de atención: Lunes a Viernes ${COMPANY_INFO.schedule.monday_friday}, Sábados ${COMPANY_INFO.schedule.saturday}. Asesoría personalizada para encontrar tu producto ideal.`,
        cta: 'Contactar WhatsApp',
        href: COMPANY_INFO.whatsapp,
        badge: 'Respuesta Inmediata',
        stats: 'Asesoría personalizada gratuita',
        isExternal: true
      }
    ];
  };

  const slides = createSlides();

  // Touch handling optimizado para móviles
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true); // Pausar auto-play durante interacción
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    // Reanudar auto-play después de 3 segundos
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Navegación del carrusel optimizada
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    // Reanudar auto-play después de 5 segundos
    setTimeout(() => setIsPaused(false), 5000);
  }, []);

  // Auto-play functionality mejorada
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && isLoaded && !isPaused) {
      interval = setInterval(nextSlide, 7000); // 7 segundos para mejor experiencia de lectura
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, isLoaded, isPaused, nextSlide]);

  // Cargar componente
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Controles de teclado mejorados (solo en desktop)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (window.innerWidth > 768) { // Solo en desktop
        switch(event.key) {
          case 'ArrowLeft':
            event.preventDefault();
            prevSlide();
            break;
          case 'ArrowRight':
            event.preventDefault();
            nextSlide();
            break;
          case ' ':
            event.preventDefault();
            setIsPlaying(!isPlaying);
            break;
          case 'Escape':
            setIsPlaying(false);
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide, isPlaying]);

  // Pausar auto-play cuando el usuario está inactivo
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Loading state mejorado
  if (!isLoaded) {
    return (
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-3 sm:mx-4 md:mx-0 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 transform -skew-y-6"></div>
        </div>
        
        <div className="text-center relative z-10">
          <div className="relative mb-6">
            <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-amber-500/30 border-t-amber-500 mx-auto"></div>
            <div className="absolute inset-0 rounded-full border-4 border-amber-300/20 animate-pulse"></div>
          </div>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg font-medium">
            Cargando experiencia premium...
          </p>
          <p className="text-amber-300/60 text-xs sm:text-sm mt-2">
            {COMPANY_INFO.name} • {YEARS_IN_BUSINESS} años de experiencia
          </p>
        </div>
      </div>
    );
  }

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-3xl group mx-3 sm:mx-4 md:mx-0 transition-all duration-500"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => window.innerWidth > 768 && setIsPaused(true)}
      onMouseLeave={() => window.innerWidth > 768 && setIsPaused(false)}
    >
      {/* Main Slide Image */}
      <div className="relative w-full h-full">
        <Image
          src={currentSlideData.image}
          alt={`${currentSlideData.title} - ${currentSlideData.subtitle}`}
          fill
          className="object-cover transition-all duration-1000 transform group-hover:scale-105"
          priority
          quality={95}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
        />
        
        {/* Overlay Gradient - Optimizado para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/95 via-black/70 to-black/30 sm:to-transparent" />
        
        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Slide Content - Mobile First mejorado */}
        <div className="absolute inset-0 flex items-end sm:items-center justify-start p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="w-full sm:max-w-2xl lg:max-w-3xl text-white">
            {/* Badge mejorado */}
            {currentSlideData.badge && (
              <div className="mb-3 sm:mb-4 lg:mb-6">
                <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs sm:text-sm lg:text-base font-bold text-white shadow-lg backdrop-blur-sm border border-white/20 hover:from-amber-400 hover:to-orange-400 transition-all duration-300">
                  {currentSlideData.id === '2' ? <ShieldIcon /> : <StarIcon />}
                  <span className="ml-1.5 sm:ml-2">{currentSlideData.badge}</span>
                </span>
              </div>
            )}
            
            {/* Title - Responsivo mejorado */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-amber-200 via-amber-300 to-orange-300 bg-clip-text text-transparent leading-tight filter drop-shadow-sm">
              {currentSlideData.title}
            </h2>
            
            {/* Subtitle mejorado */}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-amber-100 mb-3 sm:mb-4 lg:mb-6 leading-tight filter drop-shadow-sm">
              {currentSlideData.subtitle}
            </h3>
            
            {/* Description - Visible en móvil pero truncada */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 lg:mb-8 leading-relaxed line-clamp-2 sm:line-clamp-3 lg:line-clamp-none filter drop-shadow-sm">
              {currentSlideData.description}
            </p>
            
            {/* Stats mejorado */}
            {currentSlideData.stats && (
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
                  <span className="text-amber-300 mr-2 text-sm sm:text-base">✨</span>
                  <p className="text-xs sm:text-sm lg:text-base text-amber-200 font-medium">
                    {currentSlideData.stats}
                  </p>
                </div>
              </div>
            )}
            
            {/* CTA Button - Mobile Optimized mejorado */}
            <Link 
              href={currentSlideData.href} 
              className="inline-block"
              {...(currentSlideData.isExternal && {
                target: "_blank",
                rel: "noopener noreferrer"
              })}
            >
              <button className="group/btn relative px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-sm sm:text-base lg:text-lg xl:text-xl font-semibold shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-amber-500/30 overflow-hidden touch-manipulation border border-amber-400/20 hover:border-amber-300/40">
                <span className="relative z-10 flex items-center">
                  {currentSlideData.cta}
                  {currentSlideData.isExternal && (
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Solo en desktop con mejor diseño */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-4 xl:left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 xl:w-14 xl:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/20 shadow-lg"
        aria-label="Slide anterior"
      >
        <div className="w-6 h-6 xl:w-7 xl:h-7 text-white">
          <ChevronLeftIcon />
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-4 xl:right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 xl:w-14 xl:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/20 shadow-lg"
        aria-label="Siguiente slide"
      >
        <div className="w-6 h-6 xl:w-7 xl:h-7 text-white">
          <ChevronRightIcon />
        </div>
      </button>

      {/* Play/Pause Button - Solo en desktop mejorado */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="hidden lg:flex absolute top-4 xl:top-6 right-4 xl:right-6 w-10 h-10 xl:w-12 xl:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
        aria-label={isPlaying ? 'Pausar reproducción automática' : 'Reanudar reproducción automática'}
      >
        <div className="w-5 h-5 xl:w-6 xl:h-6 text-white">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </div>
      </button>

      {/* Slide Indicators - Mobile Optimized mejorado */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 touch-manipulation ${
              index === currentSlide
                ? 'w-8 h-3 sm:w-10 sm:h-3 lg:w-12 lg:h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg scale-110'
                : 'w-3 h-3 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-white/50 hover:bg-white/70 active:bg-white/80 rounded-full'
            }`}
            aria-label={`Ir al slide ${index + 1}: ${slides[index].title}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full animate-pulse opacity-75" />
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar mejorada */}
      <div className="absolute bottom-0 left-0 w-full h-1 sm:h-1.5 bg-black/30">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 transition-all duration-500 shadow-lg"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>

      {/* Auto-play indicator mejorado */}
      {isPlaying && !isPaused && (
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <div className="flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-xs sm:text-sm border border-white/10 shadow-lg">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-sm"></div>
            <span className="hidden sm:inline font-medium">Auto</span>
            <span className="sm:hidden">•</span>
          </div>
        </div>
      )}

      {/* Slide Transition Effect mejorado */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

      {/* Touch indicators for mobile mejorado */}
      <div className="sm:hidden absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 text-xs text-center bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
        <p>← Desliza para navegar →</p>
      </div>

      {/* Keyboard shortcuts indicator - Solo desktop */}
      <div className="hidden lg:block absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white/50 text-xs bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
          ← → Navegar • Espacio Pausar
        </div>
      </div>

      {/* Loading overlay durante transiciones */}
      <div className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 pointer-events-none ${
        currentSlide !== currentSlide ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
};

export default AdvancedCarousel;