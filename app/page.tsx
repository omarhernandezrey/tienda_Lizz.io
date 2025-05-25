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
  // SEO dinámico para la página principal
  useEffect(() => {
    document.title = `${COMPANY_INFO.fullName} ${CURRENT_YEAR} - Bolsos de Cuero Premium Artesanales`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Descubre ${products.length}+ bolsos de cuero genuino. ${YEARS_IN_BUSINESS} años de experiencia artesanal. Garantía ${COMPANY_INFO.warranty.period}. Envío gratis desde ${formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}.`
      );
    }
  }, []);

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
      
      {/* Stats Section - Nueva sección con datos dinámicos */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide20 || CAROUSEL_IMAGES.slide1}
            alt="Estadísticas de calidad"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/90" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header con año 2025 */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Nuestra Experiencia
              </h2>
              <span className="ml-3 px-3 py-1 bg-amber-500 text-black text-sm font-bold rounded-full">
                {CURRENT_YEAR}
              </span>
            </div>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              {YEARS_IN_BUSINESS} años creando productos de cuero excepcionales
            </p>
          </div>

          {/* Grid de estadísticas - Mobile First */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-2xl hover:border-amber-500/50 transition-all duration-500 group">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🏆</div>
              <div className="text-xl sm:text-2xl font-bold text-amber-300 mb-1 group-hover:text-amber-200">
                {YEARS_IN_BUSINESS}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 text-sm sm:text-base font-medium">
                Años de Experiencia
              </div>
            </div>

            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-green-900/30 rounded-2xl hover:border-green-500/50 transition-all duration-500 group">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🛡️</div>
              <div className="text-xl sm:text-2xl font-bold text-green-300 mb-1 group-hover:text-green-200">
                {COMPANY_INFO.warranty.period}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 text-sm sm:text-base font-medium">
                Garantía Incluida
              </div>
            </div>

            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-blue-900/30 rounded-2xl hover:border-blue-500/50 transition-all duration-500 group">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📦</div>
              <div className="text-xl sm:text-2xl font-bold text-blue-300 mb-1 group-hover:text-blue-200">
                {totalProducts}+
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 text-sm sm:text-base font-medium">
                Productos Únicos
              </div>
            </div>

            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-purple-900/30 rounded-2xl hover:border-purple-500/50 transition-all duration-500 group">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">✨</div>
              <div className="text-xl sm:text-2xl font-bold text-purple-300 mb-1 group-hover:text-purple-200">
                100%
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 text-sm sm:text-base font-medium">
                Cuero Auténtico
              </div>
            </div>
          </div>

          {/* Enlace a políticas */}
          <div className="mt-8 text-center">
            <Link href="/politicas">
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-500/30 rounded-lg hover:from-green-500/30 hover:to-green-600/30 transition-all duration-300 text-green-300 hover:text-green-200 min-h-[48px] touch-manipulation">
                <span>🛡️</span>
                <span className="font-medium">Ver garantías y políticas {CURRENT_YEAR}</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Preview Section - Mobile First */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide7}
            alt="Categorías de productos"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-800/80" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Nuestras Categorías
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Explora nuestra amplia gama de productos de cuero premium, cada uno diseñado con atención al detalle
            </p>
          </div>

          {/* Grid responsive de categorías */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {featuredCategories.map((category, index) => {
              const productsInCategory = getProductsByCategory(category);

              return (
                <div 
                  key={category}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-4"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={categoryImages[index]}
                      alt={`Categoría ${category}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg">
                        {productsInCategory.length} productos
                      </span>
                    </div>

                    {/* Garantía Badge */}
                    <div className="absolute top-4 right-4">
                      <Link href="/politicas">
                        <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded-full shadow-lg hover:bg-green-500 transition-colors cursor-pointer">
                          🛡️ {COMPANY_INFO.warranty.period}
                        </span>
                      </Link>
                    </div>

                    {/* Category Info */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                        {category}
                      </h3>
                      <p className="text-gray-200 text-sm mb-3 sm:mb-4">
                        Descubre nuestra colección de {category.toLowerCase()} premium
                      </p>
                      <Link href="/productos">
                        <button className="w-full py-2 sm:py-3 bg-gradient-to-r from-amber-600/90 to-orange-600/90 hover:from-amber-500 hover:to-orange-500 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm text-sm min-h-[40px] touch-manipulation">
                          Ver {category}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Categories Button */}
          <div className="text-center">
            <Link href="/productos">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-base sm:text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-amber-500/25 overflow-hidden min-h-[56px] touch-manipulation">
                <span className="relative z-10">Ver Todas las Categorías</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Carousel Section - Mobile First */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-slate-900/50 to-slate-800/50 backdrop-blur-sm relative">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide15}
            alt="Colección destacada"
            fill
            className="object-cover opacity-5"
            sizes="100vw"
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Colección Destacada
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Descubre nuestros diseños más exclusivos, creados con la más alta calidad artesanal
            </p>
            
            {/* Badge de productos destacados */}
            <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium">
              <span>⭐</span>
              <span>{featuredProducts.length} productos destacados con garantía</span>
            </div>
          </div>
          <AdvancedCarousel />
        </div>
      </section>

      {/* Brand Story Section - Mobile First */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-800 to-slate-900 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide5}
            alt="Historia de la marca"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Contenido textual - Mobile First */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                    <Image
                      src={GENERAL_IMAGES.logo}
                      alt="Elegancia en Cuero Logo"
                      fill
                      className="opacity-90 object-contain"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <div className="text-amber-300 font-bold text-lg sm:text-xl">
                      {COMPANY_INFO.founded} - {CURRENT_YEAR}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {YEARS_IN_BUSINESS} años de excelencia
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Más que Productos, Creamos Experiencias
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                <p>
                  En <span className="text-amber-400 font-semibold">Elegancia en Cuero</span>, cada pieza es el resultado de 
                  años de perfeccionamiento artesanal. Combinamos técnicas tradicionales con diseño contemporáneo 
                  para crear bolsos que no solo complementan tu estilo, sino que cuentan tu historia.
                </p>
                <p>
                  Nuestro compromiso va más allá de la calidad del producto; nos dedicamos a crear vínculos duraderos 
                  con nuestros clientes, ofreciendo piezas que evolucionan contigo y se vuelven parte de tu identidad.
                </p>
              </div>

              {/* Garantía destacada */}
              <div className="mt-6 p-4 bg-green-600/20 border border-green-500/30 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h4 className="text-green-300 font-bold">
                      Garantía de {COMPANY_INFO.warranty.period}
                    </h4>
                    <p className="text-green-400/80 text-sm">
                      En todos nuestros productos contra defectos de fabricación
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation">
                    Conoce Nuestra Historia
                  </button>
                </Link>
                <Link href="/politicas" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 min-h-[48px] touch-manipulation">
                    Ver Garantías {CURRENT_YEAR}
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Imagen - Mobile First */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={CAROUSEL_IMAGES.slide11}
                  alt="Artesanía en cuero - Proceso de creación"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <p className="text-white font-semibold text-base sm:text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    Artesanía tradicional, diseño moderno
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-60 animate-pulse" style={{animationDelay: '1000ms'}} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section - Mobile First */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-800 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide19}
            alt="Todos nuestros productos"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Nuestros Productos
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Cada bolso cuenta una historia de dedicación, pasión y maestría artesanal. 
              Descubre la pieza perfecta que se convertirá en tu compañera de vida.
            </p>

            {/* Información de productos y garantía */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                📦 {totalProducts}+ productos disponibles
              </div>
              <Link href="/politicas">
                <div className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium hover:bg-green-500/30 transition-colors cursor-pointer">
                  🛡️ Todos con garantía {COMPANY_INFO.warranty.period}
                </div>
              </Link>
            </div>
          </div>
          <ProductList />
        </div>
      </section>

      {/* Call to Action Section - Mobile First */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide1}
            alt="Únete a Elegancia en Cuero"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          {/* Logo y año */}
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                <Image
                  src={GENERAL_IMAGES.logo}
                  alt="LEDER LIZ Logo"
                  fill
                  className="opacity-90 object-contain"
                  sizes="64px"
                />
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-amber-300">
                {CURRENT_YEAR}
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            ¿Listo para encontrar tu bolso perfecto?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Únete a miles de clientes satisfechos que han elegido la calidad y elegancia de nuestros productos
          </p>

          {/* Beneficios destacados */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="p-4 bg-black/30 rounded-xl backdrop-blur-sm">
              <div className="text-2xl mb-2">🛡️</div>
              <p className="text-sm text-gray-200">Garantía {COMPANY_INFO.warranty.period}</p>
            </div>
            <div className="p-4 bg-black/30 rounded-xl backdrop-blur-sm">
              <div className="text-2xl mb-2">🚚</div>
              <p className="text-sm text-gray-200">Envío gratis {'>'} {formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}</p>
            </div>
            <div className="p-4 bg-black/30 rounded-xl backdrop-blur-sm">
              <div className="text-2xl mb-2">📱</div>
              <p className="text-sm text-gray-200">Soporte 24/7 WhatsApp</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Link href="/productos" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full text-base sm:text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105 min-h-[56px] touch-manipulation">
                Explorar Productos
              </button>
            </Link>
            <Link href="/politicas" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-full text-base sm:text-lg font-bold hover:bg-white hover:text-slate-900 transition-all duration-300 min-h-[56px] touch-manipulation">
                Ver Garantías {CURRENT_YEAR}
              </button>
            </Link>
          </div>

          {/* Contacto rápido */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href={COMPANY_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-200 transition-colors text-sm"
            >
              📱 WhatsApp: {COMPANY_INFO.phone}
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <Link href="/contacto" className="text-amber-300 hover:text-amber-200 transition-colors text-sm">
              ✉️ Obtener Asesoría Personalizada
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}