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
  const parallaxOffset = scrollY * 0.5;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-400 text-lg font-medium">Cargando experiencia...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white overflow-hidden">
      {/* Hero Section - Mobile First */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
        {/* Hero Background optimizado */}
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Elegancia en Cuero - Artesanía Premium"
              fill
              className="object-cover object-center"
              priority
              quality={85}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLniU3Faut/wBlTiNtqNgoBrNsNBqKKASL/9k="
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-amber-900/70" />
          </div>
        )}
        
        {/* Elementos de fondo animados - optimizados para mobile */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-20 sm:w-64 sm:h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" 
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          />
          <div 
            className="absolute bottom-20 right-5 w-48 h-48 sm:bottom-40 sm:right-20 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" 
            style={{ animationDelay: '1000ms', transform: `translateY(${-parallaxOffset}px)` }}
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-amber-500 to-red-500 rounded-full blur-2xl sm:blur-3xl animate-pulse" 
            style={{ animationDelay: '500ms' }}
          />
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <div className="mb-6 sm:mb-8 transform hover:scale-105 transition-transform duration-700">
            {/* Título principal con año 2025 */}
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
                ELEGANCIA
              </h1>
              <span className="ml-4 text-2xl sm:text-3xl md:text-4xl font-bold text-amber-200 bg-slate-800/50 px-3 py-1 rounded-lg backdrop-blur-sm">
                {CURRENT_YEAR}
              </span>
            </div>
            <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-amber-100 mb-4 sm:mb-6 tracking-widest">
              EN CUERO
            </div>
            <div className="text-lg sm:text-xl md:text-2xl text-amber-300/80 font-medium">
              {YEARS_IN_BUSINESS} años de experiencia artesanal
            </div>
          </div>
          
          {/* Descripción optimizada para mobile */}
          <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 max-w-4xl mx-auto mb-8 sm:mb-12 font-light px-2">
            Bolsos de cuero auténtico que redefinen la <span className="text-amber-400 font-semibold">sofisticación</span>, 
            combinando <span className="text-amber-400 font-semibold">artesanía tradicional</span> con diseño contemporáneo
          </p>

          {/* Badges de confianza */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
            <div className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
              ✓ {COMPANY_INFO.warranty.period} de garantía
            </div>
            <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
              🚚 Envío gratis {'>'} {formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}
            </div>
            <div className="px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium">
              🏆 Cuero 100% genuino
            </div>
          </div>

          {/* Botones de acción - Mobile First */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Link href="/productos" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-base sm:text-lg lg:text-xl font-semibold shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-amber-500/25 min-h-[56px] touch-manipulation">
                <span className="relative z-10">Explorar Colección</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </button>
            </Link>
            
            <Link href="/politicas" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 sm:px-12 py-4 border-2 border-amber-400 text-amber-400 rounded-full text-base sm:text-lg lg:text-xl font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm min-h-[56px] touch-manipulation">
                Ver Garantías {CURRENT_YEAR}
              </button>
            </Link>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 sm:h-16 bg-gradient-to-b from-amber-400 to-transparent rounded-full" />
        </div>
      </section>

      {/* Video Section optimizada */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide3}
            alt="Proceso artesanal en cuero"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/90" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Nuestra Esencia
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Descubre el proceso artesanal detrás de cada pieza única
            </p>
          </div>
          
          <div className="relative group max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
              <div className="aspect-video relative">
                <Image
                  src={CAROUSEL_IMAGES.slide8}
                  alt="Video promocional - Artesanía en cuero premium"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 touch-manipulation">
                      <svg className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-white font-semibold">Video Promocional</p>
                    <p className="text-sm text-amber-300 mt-2">{YEARS_IN_BUSINESS} años de tradición</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colecciones destacadas - Grid responsive */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-900/50 to-slate-800/50 backdrop-blur-sm relative">
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
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Colecciones Exclusivas
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Cada pieza cuenta una historia de dedicación y maestría artesanal
            </p>
          </div>

          {/* Grid responsivo optimizado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-4"
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
                  
                  {/* Badge de categoría */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                      {product.category}
                    </span>
                  </div>

                  {/* Badge de garantía */}
                  <div className="absolute top-4 right-4">
                    <Link href="/politicas">
                      <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded-full shadow-lg hover:bg-green-500 transition-colors cursor-pointer">
                        🛡️ 6m
                      </span>
                    </Link>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3">
                    <Link href={product.link || "/productos"}>
                      <button className="w-full py-3 bg-gradient-to-r from-amber-600/80 to-orange-600/80 hover:from-amber-500 hover:to-orange-500 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm text-sm sm:text-base min-h-[48px] touch-manipulation">
                        Ver Colección
                      </button>
                    </Link>
                    
                    {/* Enlace a garantías */}
                    <Link href="/politicas#cuidado">
                      <div className="text-center">
                        <span className="text-xs text-green-400 hover:text-green-300 transition-colors cursor-pointer">
                          🛡️ Ver cuidados y garantía
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

      {/* Historia Section - Layout responsivo */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Contenido de texto */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight">
                Nuestra Historia
              </h2>
              
              {/* Timeline de la empresa */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-xl border border-amber-500/30">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">📅</span>
                  <span className="text-amber-300 font-bold text-lg">{COMPANY_INFO.founded} - {CURRENT_YEAR}</span>
                </div>
                <p className="text-gray-300 text-sm">
                  {YEARS_IN_BUSINESS} años transformando el cuero en obras de arte
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

              {/* Link a políticas */}
              <div className="mt-6">
                <Link href="/politicas">
                  <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-lg hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 text-blue-300 hover:text-blue-200">
                    <span>🛡️</span>
                    <span className="font-medium">Ver nuestras garantías y políticas</span>
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Imagen destacada */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square relative overflow-hidden rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-amber-900/50 shadow-2xl">
                <Image
                  src={PRODUCT_IMAGES['bolso-elegance-azul']}
                  alt="Artesanía Premium - Bolso Elegance de cuero azul"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-orange-600/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-base sm:text-lg lg:text-xl text-white font-semibold bg-black/60 px-4 py-2 rounded-lg backdrop-blur-sm">
                      Artesanía Premium
                    </p>
                    <p className="text-sm text-amber-300 mt-2">
                      Desde {COMPANY_INFO.founded}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Elementos flotantes decorativos */}
              <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-60 animate-pulse" style={{animationDelay: '1000ms'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Calidad & Artesanía con enlaces a políticas */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm relative">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
            Calidad & Artesanía
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Cada bolso es una <span className="text-amber-400 font-semibold">obra maestra individual</span>, 
            elaborada por artesanos expertos que dedican pasión y precisión a cada detalle, 
            utilizando únicamente cuero de la más alta calidad para garantizar productos que no solo 
            cautivan visualmente, sino que <span className="text-amber-400 font-semibold">perduran como legados</span>.
          </p>

          {/* Banner de garantía */}
          <div className="mb-12 sm:mb-16">
            <Link href="/politicas">
              <div className="inline-flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-500/30 rounded-2xl hover:from-green-500/30 hover:to-green-600/30 transition-all duration-300 cursor-pointer group">
                <span className="text-2xl">🛡️</span>
                <div className="text-left">
                  <p className="text-green-300 font-bold group-hover:text-green-200">
                    Garantía de {COMPANY_INFO.warranty.period} en todos nuestros productos
                  </p>
                  <p className="text-green-400/80 text-sm group-hover:text-green-300/80">
                    Ver políticas completas de garantía y cuidado →
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Grid de características */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {craftsmanshipItems.map((item, index) => (
              <div 
                key={index} 
                className="p-6 sm:p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="relative mb-6">
                  {/* Icono emoji */}
                  <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                  
                  {/* Imagen del producto */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 relative mx-auto rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={item.image}
                      alt={`${item.title} - Ejemplo de producto`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="80px"
                    />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base mb-4">
                  {item.desc}
                </p>
                
                {/* Badge de garantía */}
                {item.warranty && (
                  <div className="inline-flex items-center space-x-1 px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium">
                    <span>✓</span>
                    <span>{item.warranty}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Información adicional de calidad */}
          <div className="mb-12 sm:mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-800/40 rounded-xl border border-blue-500/30">
              <h4 className="text-blue-300 font-bold mb-2">📦 Envío Seguro</h4>
              <p className="text-gray-400 text-sm">
                Empaque especializado para proteger tu producto durante el envío
              </p>
            </div>
            <div className="p-4 bg-slate-800/40 rounded-xl border border-purple-500/30">
              <h4 className="text-purple-300 font-bold mb-2">🔄 Cambios Fáciles</h4>
              <p className="text-gray-400 text-sm">
                Política de cambios de hasta 5 días hábiles después de la entrega
              </p>
            </div>
            <div className="p-4 bg-slate-800/40 rounded-xl border border-orange-500/30">
              <h4 className="text-orange-300 font-bold mb-2">🧴 Cuidado Premium</h4>
              <p className="text-gray-400 text-sm">
                Guía completa de cuidado para mantener tu cuero como nuevo
              </p>
            </div>
          </div>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link href="/productos">
              <button className="group relative px-8 sm:px-12 lg:px-16 py-4 sm:py-6 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-lg sm:text-xl lg:text-2xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-amber-500/25 overflow-hidden min-h-[64px] touch-manipulation">
                <span className="relative z-10">Explorar Productos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </Link>

            <Link href="/politicas">
              <button className="px-8 sm:px-12 lg:px-16 py-4 sm:py-6 border-2 border-green-400 text-green-400 rounded-full text-lg sm:text-xl lg:text-2xl font-bold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm min-h-[64px] touch-manipulation">
                Ver Garantías {CURRENT_YEAR}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA optimizado */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide19}
            alt="Únete a la excelencia en cuero"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Logo con año */}
          <div className="mb-6">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto">
              <Image
                src={GENERAL_IMAGES.logo}
                alt="Elegancia en Cuero - Logo oficial"
                fill
                className="opacity-80 object-contain"
                sizes="64px"
              />
            </div>
          </div>
          
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-amber-100">
            ¿Listo para descubrir la diferencia?
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            Únete a miles de clientes que han elegido la excelencia desde {COMPANY_INFO.founded}
          </p>
          
          {/* Estadísticas de confianza */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400">{YEARS_IN_BUSINESS}+</div>
              <div className="text-sm text-gray-400">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">6</div>
              <div className="text-sm text-gray-400">Meses de garantía</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-gray-400">Cuero genuino</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-400">Soporte WhatsApp</div>
            </div>
          </div>
          
          {/* Botones finales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link href="/productos" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-base sm:text-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg min-h-[56px] touch-manipulation">
                Ver Catálogo Completo
              </button>
            </Link>
            <Link href="/contacto" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 sm:px-10 py-4 border-2 border-amber-400 text-amber-400 rounded-full text-base sm:text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 min-h-[56px] touch-manipulation">
                Contactar Asesor
              </button>
            </Link>
          </div>

          {/* Enlaces adicionales */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/politicas" className="text-green-400 hover:text-green-300 transition-colors">
              🛡️ Garantías y Políticas
            </Link>
            <Link href="/politicas#cuidado" className="text-blue-400 hover:text-blue-300 transition-colors">
              🧴 Cuidado del Cuero
            </Link>
            <Link href="/politicas#envios" className="text-purple-400 hover:text-purple-300 transition-colors">
              🚚 Envíos y Cambios
            </Link>
            <a href={COMPANY_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">
              📱 WhatsApp Directo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;