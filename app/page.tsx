'use client';

import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IntroSection from '../components/IntroSection';
import AdvancedCarousel from '../components/AdvancedCarousel';
import ProductList from '../components/ProductList';
import { 
  GENERAL_IMAGES, 
  CAROUSEL_IMAGES, 
  getProductsByCategory,
  getCategories,
  getFeaturedProducts,
  products,
  COMPANY_INFO,
  CURRENT_YEAR,
  YEARS_IN_BUSINESS,
  formatPrice
} from '../data/productsData';

export default function Home() {
  // SEO dinámico para la página principal - Optimizado
  useEffect(() => {
    document.title = `${COMPANY_INFO.fullName} ${CURRENT_YEAR} - Bolsos de Cuero Premium Artesanales`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Descubre ${products.length}+ bolsos de cuero genuino. ${YEARS_IN_BUSINESS} años de experiencia artesanal. Garantía ${COMPANY_INFO.warranty.period}. Envío gratis desde ${formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}.`
      );
    }
  }, []);

  // Memoización optimizada para mejor rendimiento
  const categories = useMemo(() => getCategories(), []);
  const featuredCategories = useMemo(() => categories.slice(0, 3), [categories]);
  const featuredProducts = useMemo(() => getFeaturedProducts(6), []);
  const totalProducts = useMemo(() => products.length, []);

  // Imágenes para categorías optimizadas
  const categoryImages = useMemo(() => [
    CAROUSEL_IMAGES.slide2,
    CAROUSEL_IMAGES.slide9,
    CAROUSEL_IMAGES.slide14
  ], []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - IntroSection component ya optimizado */}
      <IntroSection />
      
      {/* Stats Section - Mobile First con animaciones mejoradas */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background optimizado */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide20 || CAROUSEL_IMAGES.slide1}
            alt="Estadísticas de calidad"
            fill
            className="object-cover opacity-5 sm:opacity-8 md:opacity-10"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-amber-950/95" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header mejorado con animación */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent leading-tight">
                Nuestra Experiencia
              </h2>
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-sm sm:text-base font-bold rounded-full shadow-lg animate-pulse">
                {CURRENT_YEAR}
              </span>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-4 leading-relaxed">
              {YEARS_IN_BUSINESS} años creando productos de cuero excepcionales con garantía y calidad premium
            </p>
          </div>

          {/* Grid de estadísticas - Mobile First mejorado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Estadística 1 - Años de experiencia */}
            <div className="text-center p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-2xl hover:border-amber-500/50 transition-all duration-500 group hover:shadow-xl hover:shadow-amber-500/10 transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 filter drop-shadow-sm">🏆</div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-300 mb-1 sm:mb-2 group-hover:text-amber-200 transition-colors duration-300">
                {YEARS_IN_BUSINESS}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm md:text-base font-medium transition-colors duration-300">
                Años de Experiencia
              </div>
            </div>

            {/* Estadística 2 - Garantía */}
            <div className="text-center p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-green-900/30 rounded-2xl hover:border-green-500/50 transition-all duration-500 group hover:shadow-xl hover:shadow-green-500/10 transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 filter drop-shadow-sm">🛡️</div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-300 mb-1 sm:mb-2 group-hover:text-green-200 transition-colors duration-300">
                {COMPANY_INFO.warranty.period}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm md:text-base font-medium transition-colors duration-300">
                Garantía Incluida
              </div>
            </div>

            {/* Estadística 3 - Productos */}
            <div className="text-center p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-blue-900/30 rounded-2xl hover:border-blue-500/50 transition-all duration-500 group hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 filter drop-shadow-sm">📦</div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-300 mb-1 sm:mb-2 group-hover:text-blue-200 transition-colors duration-300">
                {totalProducts}+
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm md:text-base font-medium transition-colors duration-300">
                Productos Únicos
              </div>
            </div>

            {/* Estadística 4 - Calidad */}
            <div className="text-center p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-purple-900/30 rounded-2xl hover:border-purple-500/50 transition-all duration-500 group hover:shadow-xl hover:shadow-purple-500/10 transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 filter drop-shadow-sm">✨</div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-300 mb-1 sm:mb-2 group-hover:text-purple-200 transition-colors duration-300">
                100%
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm md:text-base font-medium transition-colors duration-300">
                Cuero Auténtico
              </div>
            </div>
          </div>

          {/* Enlace a políticas mejorado */}
          <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
            <Link href="/politicas">
              <button className="inline-flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-600/20 via-green-600/30 to-green-700/20 border border-green-500/30 rounded-xl hover:from-green-500/30 hover:to-green-600/30 hover:border-green-400/50 transition-all duration-300 text-green-300 hover:text-green-200 min-h-[48px] touch-manipulation transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                <span className="text-lg sm:text-xl">🛡️</span>
                <span className="font-medium text-sm sm:text-base">Ver garantías y políticas {CURRENT_YEAR}</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Preview Section - Mobile First mejorado */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background mejorado */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide7}
            alt="Categorías de productos"
            fill
            className="object-cover opacity-5 sm:opacity-8 md:opacity-10"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-amber-950/90" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header mejorado */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent leading-tight">
              Nuestras Categorías
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-4">
              Explora nuestra amplia gama de productos de cuero premium, cada uno diseñado con atención al detalle y respaldado por nuestra garantía
            </p>
          </div>

          {/* Grid responsive de categorías mejorado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-8 sm:mb-12 lg:mb-16">
            {featuredCategories.map((category, index) => {
              const productsInCategory = getProductsByCategory(category);

              return (
                <div 
                  key={category}
                  className="group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-3 lg:hover:-translate-y-4 hover:shadow-2xl hover:shadow-amber-500/20"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={categoryImages[index]}
                      alt={`Categoría ${category}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Category Badge mejorado */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg backdrop-blur-sm">
                        {productsInCategory.length} productos
                      </span>
                    </div>

                    {/* Garantía Badge mejorado */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <Link href="/politicas">
                        <span className="px-2 py-1 bg-green-600/90 hover:bg-green-500 text-white text-xs font-bold rounded-full shadow-lg transition-colors cursor-pointer backdrop-blur-sm">
                          🛡️ {COMPANY_INFO.warranty.period}
                        </span>
                      </Link>
                    </div>

                    {/* Category Info mejorada */}
                    <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-amber-300 transition-colors duration-300">
                        {category}
                      </h3>
                      <p className="text-gray-200 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed">
                        Descubre nuestra colección de {category.toLowerCase()} premium con garantía incluida
                      </p>
                      <Link href="/productos">
                        <button className="w-full py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-amber-600/90 to-orange-600/90 hover:from-amber-500 hover:to-orange-500 rounded-lg lg:rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm text-xs sm:text-sm lg:text-base min-h-[40px] sm:min-h-[44px] lg:min-h-[48px] touch-manipulation transform hover:scale-105">
                          Ver {category}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Categories Button mejorado */}
          <div className="text-center">
            <Link href="/productos">
              <button className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-base sm:text-lg lg:text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-amber-500/30 overflow-hidden min-h-[56px] lg:min-h-[64px] touch-manipulation">
                <span className="relative z-10">Ver Todas las Categorías</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Carousel Section - Mobile First mejorado */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-950/50 via-slate-900/50 to-slate-950/50 backdrop-blur-sm relative overflow-hidden">
        {/* Background Pattern mejorado */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide15}
            alt="Colección destacada"
            fill
            className="object-cover opacity-3 sm:opacity-4 md:opacity-5"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-amber-950/95" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header mejorado */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent leading-tight">
              Colección Destacada
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-4">
              Descubre nuestros diseños más exclusivos, creados con la más alta calidad artesanal y respaldados por nuestra garantía
            </p>
            
            {/* Badge de productos destacados mejorado */}
            <div className="mt-6 sm:mt-8 inline-flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-amber-600/20 border border-amber-500/30 rounded-full text-amber-300 text-sm sm:text-base font-medium hover:bg-amber-500/20 hover:border-amber-400/40 transition-all duration-300">
              <span className="text-base sm:text-lg">⭐</span>
              <span>{featuredProducts.length} productos destacados con garantía {COMPANY_INFO.warranty.period}</span>
            </div>
          </div>
          <AdvancedCarousel />
        </div>
      </section>

      {/* Brand Story Section - Mobile First mejorado */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 relative overflow-hidden">
        {/* Background mejorado */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide5}
            alt="Historia de la marca"
            fill
            className="object-cover opacity-15 sm:opacity-20"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-amber-950/95" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Contenido textual - Mobile First mejorado */}
            <div className="order-2 lg:order-1">
              {/* Logo y años de experiencia */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                    <Image
                      src={GENERAL_IMAGES.logo}
                      alt="Elegancia en Cuero Logo"
                      fill
                      className="opacity-90 object-contain filter drop-shadow-lg"
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <div className="text-amber-300 font-bold text-lg sm:text-xl lg:text-2xl">
                      {COMPANY_INFO.founded} - {CURRENT_YEAR}
                    </div>
                    <div className="text-gray-400 text-sm sm:text-base">
                      {YEARS_IN_BUSINESS} años de excelencia artesanal
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent leading-tight">
                Más que Productos, Creamos Experiencias
              </h2>
              
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                <p>
                  En <span className="text-amber-400 font-semibold">Elegancia en Cuero</span>, cada pieza es el resultado de 
                  años de perfeccionamiento artesanal. Combinamos técnicas tradicionales con diseño contemporáneo 
                  para crear bolsos que no solo complementan tu estilo, sino que cuentan tu historia.
                </p>
                <p>
                  Nuestro compromiso va más allá de la calidad del producto; nos dedicamos a crear vínculos duraderos 
                  con nuestros clientes, ofreciendo piezas que evolucionan contigo y se vuelven parte de tu identidad, 
                  respaldadas por nuestra garantía de {COMPANY_INFO.warranty.period}.
                </p>
              </div>

              {/* Garantía destacada mejorada */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-5 lg:p-6 bg-gradient-to-r from-green-600/20 via-green-600/25 to-green-700/20 border border-green-500/30 rounded-xl lg:rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl filter drop-shadow-sm">🛡️</span>
                  <div>
                    <h4 className="text-green-300 font-bold text-base sm:text-lg lg:text-xl">
                      Garantía de {COMPANY_INFO.warranty.period}
                    </h4>
                    <p className="text-green-400/80 text-sm sm:text-base lg:text-lg">
                      En todos nuestros productos contra defectos de fabricación
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Botones de acción mejorados */}
              <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link href="/about" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg lg:rounded-xl font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/25 min-h-[48px] lg:min-h-[56px] touch-manipulation transform hover:scale-105 text-sm sm:text-base lg:text-lg">
                    Conoce Nuestra Historia
                  </button>
                </Link>
                <Link href="/politicas" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-400 text-green-400 rounded-lg lg:rounded-xl font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25 min-h-[48px] lg:min-h-[56px] touch-manipulation transform hover:scale-105 text-sm sm:text-base lg:text-lg">
                    Ver Garantías {CURRENT_YEAR}
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Imagen - Mobile First mejorada */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <Image
                  src={CAROUSEL_IMAGES.slide11}
                  alt="Artesanía en cuero - Proceso de creación"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8">
                  <p className="text-white font-semibold text-sm sm:text-base lg:text-lg xl:text-xl bg-black/60 px-4 sm:px-6 py-2 sm:py-3 rounded-lg lg:rounded-xl backdrop-blur-sm shadow-lg">
                    Artesanía tradicional, diseño moderno
                  </p>
                </div>
              </div>
              
              {/* Decorative elements mejorados */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 w-12 h-12 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-60 animate-pulse" style={{animationDelay: '1000ms'}} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section - Mobile First mejorado */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background mejorado */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide19}
            alt="Todos nuestros productos"
            fill
            className="object-cover opacity-5 sm:opacity-8 md:opacity-10"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-amber-950/95" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header mejorado */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent leading-tight">
              Nuestros Productos
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-4">
              Cada bolso cuenta una historia de dedicación, pasión y maestría artesanal. 
              Descubre la pieza perfecta que se convertirá en tu compañera de vida.
            </p>

            {/* Información de productos y garantía mejorada */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm sm:text-base font-medium hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <span className="mr-2">📦</span>
                {totalProducts}+ productos disponibles
              </div>
              <Link href="/politicas">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm sm:text-base font-medium hover:bg-green-500/30 hover:border-green-400/40 transition-colors cursor-pointer transform hover:scale-105">
                  <span className="mr-2">🛡️</span>
                  Todos con garantía {COMPANY_INFO.warranty.period}
                </div>
              </Link>
            </div>
          </div>
          <ProductList />
        </div>
      </section>

      {/* Call to Action Section - Mobile First mejorado */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-amber-950 via-orange-900 to-red-950 relative overflow-hidden">
        {/* Background mejorado */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide1}
            alt="Únete a Elegancia en Cuero"
            fill
            className="object-cover opacity-20 sm:opacity-25 md:opacity-30"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
        </div>

        <div className="container mx-auto max-w-4xl lg:max-w-5xl text-center relative z-10">
          {/* Logo y año mejorado */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <Image
                  src={GENERAL_IMAGES.logo}
                  alt="LEDER LIZ Logo"
                  fill
                  className="opacity-90 object-contain filter drop-shadow-lg"
                  sizes="80px"
                />
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-300 filter drop-shadow-lg">
                {CURRENT_YEAR}
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white leading-tight">
            ¿Listo para encontrar tu bolso perfecto?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-6 sm:mb-8 lg:mb-10 max-w-2xl lg:max-w-3xl mx-auto px-4 leading-relaxed">
            Únete a miles de clientes satisfechos que han elegido la calidad y elegancia de nuestros productos respaldados por garantía
          </p>

          {/* Beneficios destacados mejorados */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12 max-w-2xl lg:max-w-3xl mx-auto">
            <div className="p-4 sm:p-5 lg:p-6 bg-black/40 hover:bg-black/50 rounded-xl lg:rounded-2xl backdrop-blur-sm transition-all duration-300 border border-white/10 hover:border-white/20">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 filter drop-shadow-sm">🛡️</div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 font-medium">Garantía {COMPANY_INFO.warranty.period}</p>
            </div>
            <div className="p-4 sm:p-5 lg:p-6 bg-black/40 hover:bg-black/50 rounded-xl lg:rounded-2xl backdrop-blur-sm transition-all duration-300 border border-white/10 hover:border-white/20">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 filter drop-shadow-sm">🚚</div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 font-medium">Envío gratis {'>'} {formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}</p>
            </div>
            <div className="p-4 sm:p-5 lg:p-6 bg-black/40 hover:bg-black/50 rounded-xl lg:rounded-2xl backdrop-blur-sm transition-all duration-300 border border-white/10 hover:border-white/20">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 filter drop-shadow-sm">📱</div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 font-medium">Soporte 24/7 WhatsApp</p>
            </div>
          </div>

          {/* Botones de acción mejorados */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Link href="/productos" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-slate-900 rounded-full text-base sm:text-lg lg:text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-white/25 min-h-[56px] lg:min-h-[64px] touch-manipulation">
                Explorar Productos
              </button>
            </Link>
            <Link href="/politicas" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 border-white text-white rounded-full text-base sm:text-lg lg:text-xl font-bold hover:bg-white hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-white/25 min-h-[56px] lg:min-h-[64px] touch-manipulation transform hover:scale-105">
                Ver Garantías {CURRENT_YEAR}
              </button>
            </Link>
          </div>

          {/* Contacto rápido mejorado */}
          <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center">
            <a 
              href={COMPANY_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-200 transition-colors text-sm sm:text-base lg:text-lg font-medium hover:underline"
            >
              <span className="mr-2">📱</span>
              WhatsApp: {COMPANY_INFO.phone}
            </a>
            <span className="hidden sm:inline text-gray-400 text-lg">•</span>
            <Link href="/contacto" className="text-amber-300 hover:text-amber-200 transition-colors text-sm sm:text-base lg:text-lg font-medium hover:underline">
              <span className="mr-2">✉️</span>
              Obtener Asesoría Personalizada
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}