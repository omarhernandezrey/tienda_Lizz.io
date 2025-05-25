'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GENERAL_IMAGES, 
  CAROUSEL_IMAGES, 
  PRODUCT_IMAGES,
  getRandomCarouselImage,
  getCarouselImages,
  products,
  getCategories,
  getOptimizedImage,
  COMPANY_INFO,
  CURRENT_YEAR,
  YEARS_IN_BUSINESS,
  formatPrice
} from '../../data/productsData';

// Tipos para mejor TypeScript
interface FeaturedProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

interface CraftsmanshipItem {
  title: string;
  desc: string;
  image: string;
  icon: string;
  warranty?: string;
}

const AboutPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [heroImage, setHeroImage] = useState('');
  const [featuredImages, setFeaturedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // SEO dinámico
  useEffect(() => {
    document.title = `Nosotros - ${YEARS_IN_BUSINESS} años de experiencia | LEDER LIZ ${CURRENT_YEAR}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Conoce la historia de LEDER LIZ. ${YEARS_IN_BUSINESS} años creando bolsos de cuero genuino con artesanía tradicional y diseño contemporáneo en Colombia.`
      );
    }
  }, []);

  // Optimización de scroll con throttling
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let ticking = false;
      const updateScrollY = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
      
      window.addEventListener('scroll', updateScrollY, { passive: true });
      return () => window.removeEventListener('scroll', updateScrollY);
    }
  }, [handleScroll]);

  // Inicialización optimizada de imágenes
  useEffect(() => {
    const initializeImages = () => {
      try {
        // Imagen hero aleatoria
        const randomHero = getRandomCarouselImage();
        setHeroImage(randomHero);
        
        // Imágenes para colecciones destacadas
        const carouselImages = getCarouselImages();
        setFeaturedImages([
          carouselImages[5] || CAROUSEL_IMAGES.slide6,
          carouselImages[10] || CAROUSEL_IMAGES.slide11,
          carouselImages[15] || CAROUSEL_IMAGES.slide16
        ]);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing images:', error);
        // Fallback images
        setHeroImage(CAROUSEL_IMAGES.slide1);
        setFeaturedImages([
          CAROUSEL_IMAGES.slide6,
          CAROUSEL_IMAGES.slide11,
          CAROUSEL_IMAGES.slide16
        ]);
        setIsLoading(false);
      }
    };

    initializeImages();
  }, []);

  // Memoización de productos destacados con enlaces a políticas
  const featuredProducts: FeaturedProduct[] = useMemo(() => [
    { 
      id: 1, 
      name: "Colección Elegance", 
      description: "Bolsos clásicos atemporales que definen la sofisticación. Garantía de 6 meses incluida.",
      image: featuredImages[0] || CAROUSEL_IMAGES.slide6,
      category: "Bolsos",
      link: "/productos?categoria=bolsos&coleccion=elegance"
    },
    { 
      id: 2, 
      name: "Línea Comfort", 
      description: "Diseños ergonómicos que combinan comodidad y estilo. Cuero premium con garantía extendida.",
      image: featuredImages[1] || CAROUSEL_IMAGES.slide11,
      category: "Bolsos",
      link: "/productos?categoria=bolsos&coleccion=comfort"
    },
    { 
      id: 3, 
      name: "Serie Billeteras", 
      description: "Accesorios únicos de cuero premium hechos a mano. Durabilidad garantizada por 6 meses.",
      image: featuredImages[2] || CAROUSEL_IMAGES.slide16,
      category: "Billeteras",
      link: "/productos?categoria=billeteras"
    }
  ], [featuredImages]);

  // Datos de artesanía memoizados con información de garantía
  const craftsmanshipItems: CraftsmanshipItem[] = useMemo(() => [
    { 
      title: "Cuero Premium", 
      desc: "Selección meticulosa de los mejores materiales certificados",
      image: PRODUCT_IMAGES['billetera-passion-cafe'],
      icon: "🏆",
      warranty: "6 meses de garantía"
    },
    { 
      title: "Artesanía Experta", 
      desc: "Técnicas tradicionales perfeccionadas por maestros artesanos",
      image: PRODUCT_IMAGES['morral-piloto-miel'],
      icon: "✨",
      warranty: "Calidad garantizada"
    },
    { 
      title: "Durabilidad Garantizada", 
      desc: "Productos diseñados para durar toda la vida con mantenimiento adecuado",
      image: PRODUCT_IMAGES['bolso-true-azul'],
      icon: "🔒",
      warranty: "Garantía extendida"
    }
  ], []);

  // Efecto parallax optimizado
  const parallaxOffset = scrollY * 0.3;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 flex items-center justify-center p-4">
        <div className="text-center max-w-sm mx-auto">
          <div className="relative mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-amber-600/30 rounded-full mx-auto animate-pulse"></div>
          </div>
          <h2 className="text-amber-400 text-lg sm:text-xl font-bold mb-2">LEDER LIZ</h2>
          <p className="text-amber-300/80 text-base sm:text-lg font-medium">Preparando experiencia premium...</p>
          <div className="mt-4 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white overflow-hidden">
      {/* Hero Section - Mobile First Optimizado */}
      <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 lg:px-6">
        {/* Hero Background optimizado */}
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Elegancia en Cuero - Artesanía Premium"
              fill
              className="object-cover object-center"
              priority
              quality={90}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLniU3Faut/wBlTiNtqNgoBrNsNBqKKASL/9k="
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-amber-900/75" />
          </div>
        )}
        
        {/* Elementos de fondo animados - optimizados para mobile */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-8 left-4 w-24 h-24 sm:top-16 sm:left-16 sm:w-48 sm:h-48 lg:top-20 lg:left-20 lg:w-64 lg:h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse" 
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          />
          <div 
            className="absolute bottom-16 right-4 w-32 h-32 sm:bottom-32 sm:right-16 sm:w-64 sm:h-64 lg:bottom-40 lg:right-20 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse" 
            style={{ animationDelay: '1000ms', transform: `translateY(${-parallaxOffset}px)` }}
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-amber-500 to-red-500 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse" 
            style={{ animationDelay: '500ms' }}
          />
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-3 sm:px-4">
          <div className="mb-4 sm:mb-6 lg:mb-8 transform hover:scale-105 transition-transform duration-700">
            {/* Título principal con año 2025 - Mobile First */}
            <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
              <h1 className="text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
                ELEGANCIA
              </h1>
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200 bg-slate-800/60 px-2 sm:px-3 py-1 rounded-lg backdrop-blur-sm border border-amber-500/30">
                {CURRENT_YEAR}
              </span>
            </div>
            <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-amber-100 mb-3 sm:mb-4 lg:mb-6 tracking-widest">
              EN CUERO
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-300/80 font-medium">
              {YEARS_IN_BUSINESS} años de experiencia artesanal
            </div>
          </div>
          
          {/* Descripción optimizada para mobile */}
          <p className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-200 max-w-5xl mx-auto mb-6 sm:mb-8 lg:mb-12 font-light px-2 sm:px-4">
            Bolsos de cuero auténtico que redefinen la <span className="text-amber-400 font-semibold">sofisticación</span>, 
            combinando <span className="text-amber-400 font-semibold">artesanía tradicional</span> con diseño contemporáneo
          </p>

          {/* Badges de confianza - Grid responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto">
            <div className="px-4 py-3 bg-green-600/20 border border-green-500/30 rounded-2xl text-green-300 text-sm font-medium flex items-center justify-center space-x-2 hover:bg-green-600/30 transition-colors duration-300">
              <span>✓</span>
              <span>{COMPANY_INFO.warranty.period} de garantía</span>
            </div>
            <div className="px-4 py-3 bg-blue-600/20 border border-blue-500/30 rounded-2xl text-blue-300 text-sm font-medium flex items-center justify-center space-x-2 hover:bg-blue-600/30 transition-colors duration-300">
              <span>🚚</span>
              <span>Envío gratis {'>'} {formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}</span>
            </div>
            <div className="px-4 py-3 bg-amber-600/20 border border-amber-500/30 rounded-2xl text-amber-300 text-sm font-medium flex items-center justify-center space-x-2 hover:bg-amber-600/30 transition-colors duration-300">
              <span>🏆</span>
              <span>Cuero 100% genuino</span>
            </div>
          </div>

          {/* Botones de acción - Mobile First optimizados */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center max-w-lg sm:max-w-none mx-auto">
            <Link href="/productos" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl text-sm sm:text-base lg:text-lg xl:text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-amber-500/30 min-h-[56px] sm:min-h-[64px] touch-manipulation overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Explorar Colección</span>
                  <span className="text-lg">👜</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </Link>
            
            <Link href="/politicas" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5 border-2 border-amber-400 text-amber-400 rounded-2xl text-sm sm:text-base lg:text-lg xl:text-xl font-bold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm min-h-[56px] sm:min-h-[64px] touch-manipulation flex items-center justify-center space-x-2">
                <span>🛡️</span>
                <span>Ver Garantías {CURRENT_YEAR}</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Indicador de scroll mejorado */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-1">
            <div className="w-1 h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-amber-400 to-transparent rounded-full" />
            <div className="text-amber-400/60 text-xs font-medium hidden sm:block">Desliza</div>
          </div>
        </div>
      </section>

      {/* Video Section optimizada - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-24 px-3 sm:px-4 lg:px-6 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide3}
            alt="Proceso artesanal en cuero"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-800/95" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Nuestra Esencia
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-4">
              Descubre el proceso artesanal detrás de cada pieza única que llevará tu elegancia al siguiente nivel
            </p>
          </div>
          
          <div className="relative group max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700">
              <div className="aspect-video relative">
                <Image
                  src={CAROUSEL_IMAGES.slide8}
                  alt="Video promocional - Artesanía en cuero premium"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 touch-manipulation hover:from-amber-400 hover:to-orange-400">
                      <svg className="w-4 sm:w-6 lg:w-8 xl:w-10 h-4 sm:h-6 lg:h-8 xl:h-10 text-white ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white font-bold">Video Promocional</p>
                    <p className="text-xs sm:text-sm text-amber-300 mt-1 sm:mt-2">{YEARS_IN_BUSINESS} años de tradición artesanal</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-lg opacity-70 animate-pulse" />
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-lg opacity-70 animate-pulse" style={{animationDelay: '1000ms'}} />
          </div>
        </div>
      </section>

      {/* Colecciones destacadas - Grid responsivo optimizado */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-24 px-3 sm:px-4 lg:px-6 bg-gradient-to-b from-slate-900/60 to-slate-800/60 backdrop-blur-sm relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide12}
            alt="Colecciones exclusivas de cuero"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Colecciones Exclusivas
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-4xl mx-auto px-2 sm:px-4">
              Cada pieza cuenta una historia de dedicación y maestría artesanal, creada con los mejores materiales
            </p>
          </div>

          {/* Grid responsivo optimizado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-700 transform hover:-translate-y-1 sm:hover:-translate-y-2 lg:hover:-translate-y-4"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.description}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-700" />
                  
                  {/* Badges mejorados */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col space-y-2">
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg">
                      {product.category}
                    </span>
                  </div>

                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <Link href="/politicas">
                      <span className="px-2 py-1 bg-green-600 hover:bg-green-500 text-white text-xs font-bold rounded-full shadow-lg transition-colors cursor-pointer flex items-center space-x-1">
                        <span>🛡️</span>
                        <span className="hidden sm:inline">6m</span>
                      </span>
                    </Link>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3">
                    <Link href={product.link || "/productos"}>
                      <button className="w-full py-3 sm:py-4 bg-gradient-to-r from-amber-600/80 to-orange-600/80 hover:from-amber-500 hover:to-orange-500 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm text-sm sm:text-base min-h-[48px] touch-manipulation transform hover:scale-[1.02]">
                        Ver Colección
                      </button>
                    </Link>
                    
                    <Link href="/politicas#cuidado">
                      <div className="text-center">
                        <span className="text-xs text-green-400 hover:text-green-300 transition-colors cursor-pointer flex items-center justify-center space-x-1">
                          <span>🛡️</span>
                          <span>Ver cuidados y garantía</span>
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia Section - Layout responsivo optimizado */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-24 px-3 sm:px-4 lg:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Contenido de texto */}
            <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight">
                Nuestra Historia
              </h2>
              
              {/* Timeline de la empresa */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-800/60 to-slate-900/60 rounded-xl sm:rounded-2xl border border-amber-500/30 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl">📅</span>
                  <span className="text-amber-300 font-bold text-base sm:text-lg lg:text-xl">{COMPANY_INFO.founded} - {CURRENT_YEAR}</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  {YEARS_IN_BUSINESS} años transformando el cuero en obras de arte únicas
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                <p>
                  Nacimos con la <span className="text-amber-400 font-semibold">pasión inquebrantable</span> de crear bolsos 
                  de cuero auténtico que trascienden las tendencias pasajeras, combinando elegancia atemporal 
                  con durabilidad excepcional.
                </p>
                <p>
                  Creemos firmemente que la <span className="text-amber-400 font-semibold">verdadera calidad</span> no 
                  debe ser un privilegio exclusivo. Cada pieza es el resultado de técnicas artesanales transmitidas 
                  por generaciones, fusionadas con innovación contemporánea.
                </p>
                <p>
                  Nuestro compromiso trasciende la creación de productos; <span className="text-amber-400 font-semibold">
                  cultivamos experiencias</span> que acompañan momentos especiales y perduran como testimonios 
                  de excelencia artesanal.
                </p>
              </div>

              {/* Link a políticas optimizado */}
              <div className="pt-2">
                <Link href="/politicas">
                  <button className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-xl hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 text-blue-300 hover:text-blue-200 min-h-[48px] touch-manipulation transform hover:scale-[1.02]">
                    <span className="text-lg sm:text-xl">🛡️</span>
                    <span className="font-medium text-sm sm:text-base">Ver nuestras garantías y políticas</span>
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Imagen destacada */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-sm border border-amber-900/50 shadow-2xl group">
                <Image
                  src={PRODUCT_IMAGES['bolso-elegance-azul']}
                  alt="Artesanía Premium - Bolso Elegance de cuero azul"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-orange-600/30 group-hover:from-amber-500/40 group-hover:to-orange-500/40 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white font-bold bg-black/70 px-3 sm:px-4 py-2 sm:py-3 rounded-xl backdrop-blur-sm">
                      Artesanía Premium
                    </p>
                    <p className="text-xs sm:text-sm text-amber-300 mt-2 bg-black/50 px-2 py-1 rounded-lg">
                      Desde {COMPANY_INFO.founded}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Elementos flotantes decorativos optimizados */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-8 lg:-right-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-8 lg:-left-8 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-60 animate-pulse" style={{animationDelay: '1000ms'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Calidad & Artesanía con enlaces a políticas - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-24 px-3 sm:px-4 lg:px-6 bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-sm relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide18}
            alt="Calidad y artesanía en cuero"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
            Calidad & Artesanía
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 leading-relaxed px-2 sm:px-4">
            Cada bolso es una <span className="text-amber-400 font-semibold">obra maestra individual</span>, 
            elaborada por artesanos expertos que dedican pasión y precisión a cada detalle, 
            utilizando únicamente cuero de la más alta calidad para garantizar productos que no solo 
            cautivan visualmente, sino que <span className="text-amber-400 font-semibold">perduran como legados</span>.
          </p>

          {/* Banner de garantía optimizado para mobile */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <Link href="/politicas">
              <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 px-4 sm:px-6 py-4 sm:py-5 bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-500/30 rounded-2xl hover:from-green-500/30 hover:to-green-600/30 transition-all duration-300 cursor-pointer group max-w-md sm:max-w-none mx-auto">
                <span className="text-2xl sm:text-3xl">🛡️</span>
                <div className="text-center sm:text-left">
                  <p className="text-green-300 font-bold group-hover:text-green-200 text-sm sm:text-base">
                    Garantía de {COMPANY_INFO.warranty.period} en todos nuestros productos
                  </p>
                  <p className="text-green-400/80 text-xs sm:text-sm group-hover:text-green-300/80">
                    Ver políticas completas de garantía y cuidado →
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Grid de características optimizado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {craftsmanshipItems.map((item, index) => (
              <div 
                key={index} 
                className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group"
              >
                <div className="relative mb-4 sm:mb-6">
                  {/* Icono emoji */}
                  <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">{item.icon}</div>
                  
                  {/* Imagen del producto */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 relative mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={item.image}
                      alt={`${item.title} - Ejemplo de producto`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="80px"
                    />
                  </div>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4">
                  {item.desc}
                </p>
                
                {/* Badge de garantía */}
                {item.warranty && (
                  <div className="inline-flex items-center space-x-1 px-2 sm:px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium">
                    <span>✓</span>
                    <span>{item.warranty}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Información adicional de calidad - Grid responsivo */}
          <div className="mb-8 sm:mb-12 lg:mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-blue-500/30 hover:bg-slate-800/70 transition-colors duration-300">
              <h4 className="text-blue-300 font-bold mb-2 text-sm sm:text-base flex items-center justify-center space-x-2">
                <span>📦</span>
                <span>Envío Seguro</span>
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Empaque especializado para proteger tu producto durante el envío
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-purple-500/30 hover:bg-slate-800/70 transition-colors duration-300">
              <h4 className="text-purple-300 font-bold mb-2 text-sm sm:text-base flex items-center justify-center space-x-2">
                <span>🔄</span>
                <span>Cambios Fáciles</span>
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Política de cambios de hasta 5 días hábiles después de la entrega
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-orange-500/30 hover:bg-slate-800/70 transition-colors duration-300">
              <h4 className="text-orange-300 font-bold mb-2 text-sm sm:text-base flex items-center justify-center space-x-2">
                <span>🧴</span>
                <span>Cuidado Premium</span>
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Guía completa de cuidado para mantener tu cuero como nuevo
              </p>
            </div>
          </div>

          {/* CTAs principales optimizados */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center max-w-lg sm:max-w-none mx-auto">
            <Link href="/productos" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl text-base sm:text-lg lg:text-xl xl:text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-amber-500/30 overflow-hidden min-h-[56px] sm:min-h-[64px] touch-manipulation">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Explorar Productos</span>
                  <span className="text-lg sm:text-xl">🛍️</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </Link>

            <Link href="/politicas" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 border-2 border-green-400 text-green-400 rounded-2xl text-base sm:text-lg lg:text-xl xl:text-2xl font-bold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm min-h-[56px] sm:min-h-[64px] touch-manipulation flex items-center justify-center space-x-2">
                <span>🛡️</span>
                <span>Ver Garantías {CURRENT_YEAR}</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA optimizado - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide19}
            alt="Únete a la excelencia en cuero"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Logo con año */}
          <div className="mb-4 sm:mb-6">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto">
              <Image
                src={GENERAL_IMAGES.logo}
                alt="Elegancia en Cuero - Logo oficial"
                fill
                className="opacity-80 object-contain hover:opacity-100 transition-opacity duration-300"
                sizes="64px"
              />
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-amber-100">
            ¿Listo para descubrir la diferencia?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 px-2 sm:px-4">
            Únete a miles de clientes que han elegido la excelencia desde {COMPANY_INFO.founded}
          </p>
          
          {/* Estadísticas de confianza - Grid optimizado */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 max-w-3xl mx-auto">
            <div className="text-center p-3 bg-slate-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-400 mb-1">{YEARS_IN_BUSINESS}+</div>
              <div className="text-xs sm:text-sm text-gray-400">Años de experiencia</div>
            </div>
            <div className="text-center p-3 bg-slate-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1">6</div>
              <div className="text-xs sm:text-sm text-gray-400">Meses de garantía</div>
            </div>
            <div className="text-center p-3 bg-slate-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 mb-1">100%</div>
              <div className="text-xs sm:text-sm text-gray-400">Cuero genuino</div>
            </div>
            <div className="text-center p-3 bg-slate-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400">Soporte WhatsApp</div>
            </div>
          </div>
          
          {/* Botones finales optimizados */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg sm:max-w-none mx-auto mb-6 sm:mb-8">
            <Link href="/productos" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl text-sm sm:text-base lg:text-lg font-bold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px] touch-manipulation transform hover:scale-[1.02]">
                Ver Catálogo Completo
              </button>
            </Link>
            <Link href="/contacto" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 sm:py-5 border-2 border-amber-400 text-amber-400 rounded-2xl text-sm sm:text-base lg:text-lg font-bold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 min-h-[56px] touch-manipulation transform hover:scale-[1.02]">
                Contactar Asesor
              </button>
            </Link>
          </div>

          {/* Enlaces adicionales optimizados */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
            <Link href="/politicas" className="text-green-400 hover:text-green-300 transition-colors flex items-center space-x-1 px-2 py-1 rounded-lg hover:bg-green-900/20">
              <span>🛡️</span>
              <span>Garantías y Políticas</span>
            </Link>
            <Link href="/politicas#cuidado" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1 px-2 py-1 rounded-lg hover:bg-blue-900/20">
              <span>🧴</span>
              <span>Cuidado del Cuero</span>
            </Link>
            <Link href="/politicas#envios" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-1 px-2 py-1 rounded-lg hover:bg-purple-900/20">
              <span>🚚</span>
              <span>Envíos y Cambios</span>
            </Link>
            <a href={COMPANY_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-1 px-2 py-1 rounded-lg hover:bg-amber-900/20">
              <span>📱</span>
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;