// app/productos/page.tsx
/* ---------------------------------------------------------------------------
   ProductosPage.tsx – Catálogo completo (Mobile-First Optimizado y Completo)
   Mejoras aplicadas:
   1. ✅ Mobile First perfecto con diseño responsivo escalable (300px → 4K)
   2. ✅ Modernización visual completa con gradientes y animaciones avanzadas
   3. ✅ Corrección de todos los errores visuales y de comportamiento
   4. ✅ Preservación de funcionalidades existentes
   5. ✅ Prácticas profesionales de responsive design
   6. ✅ Página completamente terminada con todas las secciones
--------------------------------------------------------------------------- */

'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductList from '../../components/ProductList';
import {
  GENERAL_IMAGES,
  CAROUSEL_IMAGES,
  COMPANY_INFO,
  CURRENT_YEAR,
  YEARS_IN_BUSINESS,
  formatPrice,
  products,
  getCategories,
  getFeaturedProducts
} from '../../data/productsData';

/* ---------- Tipos optimizados ---------- */
interface Stat {
  number: string;
  label: string;
  icon: string;
  description?: string;
  color?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  category: string;
}

export default function ProductosPage() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /* ---------- SEO dinámico optimizado ---------- */
  useEffect(() => {
    setMounted(true);
    document.title = `Productos de Cuero Premium ${CURRENT_YEAR} | LEDER LIZ - ${products.length}+ Diseños Únicos`;
    
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute(
      'content',
      `Descubre nuestra exclusiva colección de ${products.length}+ bolsos de cuero genuino. Artesanía premium con garantía de ${COMPANY_INFO.warranty.period}. Envío gratis desde ${formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}. ${YEARS_IN_BUSINESS} años de experiencia.`
    );
    if (!meta.parentNode) document.head.appendChild(meta);

    const keywords = document.querySelector('meta[name="keywords"]') ?? document.createElement('meta');
    keywords.setAttribute('name', 'keywords');
    keywords.setAttribute('content', 'bolsos de cuero, productos premium, artesanía colombiana, LEDER LIZ, cuero genuino, billeteras, morrales');
    if (!keywords.parentNode) document.head.appendChild(keywords);

    // Simular carga para mejor UX
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  /* ---------- Stats optimizados ---------- */
  const stats: Stat[] = useMemo(
    () => [
      { 
        number: `${products.length}+`, 
        label: 'Productos Únicos', 
        icon: '🎒', 
        description: 'Diseños exclusivos disponibles',
        color: 'amber'
      },
      { 
        number: `${COMPANY_INFO.warranty.period}`, 
        label: 'Garantía Incluida', 
        icon: '🛡️', 
        description: 'En todos nuestros productos',
        color: 'green'
      },
      { 
        number: '1000+', 
        label: 'Clientes Satisfechos', 
        icon: '😊', 
        description: 'Desde nuestro inicio en 2020',
        color: 'blue'
      },
      { 
        number: '100%', 
        label: 'Cuero Auténtico', 
        icon: '✨', 
        description: 'Certificado y genuino',
        color: 'purple'
      }
    ],
    []
  );

  /* ---------- Características destacadas ---------- */
  const features: Feature[] = useMemo(() => [
    {
      title: 'Artesanía Tradicional',
      description: 'Técnicas heredadas por generaciones de maestros artesanos',
      icon: '🔨',
      color: 'amber'
    },
    {
      title: 'Cuero Premium',
      description: 'Selección cuidadosa de los mejores materiales disponibles',
      icon: '🏆',
      color: 'blue'
    },
    {
      title: 'Diseño Contemporáneo',
      description: 'Estilos modernos que complementan tu personalidad',
      icon: '🎨',
      color: 'purple'
    },
    {
      title: 'Durabilidad Garantizada',
      description: 'Productos diseñados para acompañarte toda la vida',
      icon: '🔒',
      color: 'green'
    }
  ], []);

  /* ---------- Testimoniales ---------- */
  const testimonials: Testimonial[] = useMemo(() => [
    {
      name: 'María José',
      location: 'Bogotá',
      rating: 5,
      comment: 'Increíble calidad del cuero y atención al detalle. Mi bolso se ve hermoso después de 2 años de uso diario.',
      category: 'Excelente calidad'
    },
    {
      name: 'Carlos Andrés',
      location: 'Medellín',
      rating: 5,
      comment: 'El servicio al cliente es excepcional. Me ayudaron a elegir el bolso perfecto y llegó súper rápido.',
      category: 'Servicio excepcional'
    },
    {
      name: 'Ana Lucía',
      location: 'Cali',
      rating: 5,
      comment: 'Llevo 3 productos de LEDER LIZ y todos siguen como nuevos. La garantía es real y la calidad incomparable.',
      category: 'Recomendado 100%'
    }
  ], []);

  const totalCategories = useMemo(() => getCategories().length, []);
  const featuredCount = useMemo(() => getFeaturedProducts().length, []);

  /* ---------- Loading state optimizado ---------- */
  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 flex items-center justify-center p-4">
        <div className="text-center max-w-sm mx-auto">
          <div className="relative mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-amber-600/30 rounded-full mx-auto animate-pulse"></div>
          </div>
          <h2 className="text-amber-400 text-lg sm:text-xl font-bold mb-2">LEDER LIZ</h2>
          <p className="text-amber-300/80 text-base sm:text-lg font-medium">Cargando productos premium...</p>
          <div className="mt-4 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            {products.length}+ productos únicos te esperan
          </div>
        </div>
      </div>
    );
  }

  /* ---------- UI Optimizada ---------- */
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
      {/* ---------------- HERO Optimizado ---------------- */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 px-3 sm:px-4 lg:px-6">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide1}
            alt="Colección de productos LEDER LIZ"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/85 to-amber-900/95" />
        </div>

        {/* Elementos decorativos optimizados */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-4 w-24 h-24 sm:top-16 sm:left-16 sm:w-48 sm:h-48 lg:top-20 lg:left-20 lg:w-64 lg:h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse" />
          <div
            className="absolute bottom-16 right-4 w-32 h-32 sm:bottom-32 sm:right-16 sm:w-64 sm:h-64 lg:bottom-40 lg:right-20 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse"
            style={{ animationDelay: '1000ms' }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse" style={{ animationDelay: '500ms' }} />
        </div>

        {/* Contenido hero optimizado */}
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            {/* Icono principal */}
            <div className="flex justify-center items-center mb-4 sm:mb-6">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 group">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-500 text-white text-xs font-bold px-1 sm:px-1.5 py-0.5 rounded-full animate-pulse">
                  {CURRENT_YEAR}
                </span>
              </div>
            </div>

            {/* Título principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight">
              Nuestros Productos
            </h1>

            {/* Subtítulo */}
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-amber-100 mb-3 sm:mb-4 lg:mb-6">
              Elegancia en Cuero Premium
            </div>

            {/* Descripción */}
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4 mb-6 sm:mb-8">
              Descubre nuestra colección exclusiva de bolsos de cuero auténtico, donde cada pieza cuenta una historia de{' '}
              <span className="text-amber-400 font-semibold">artesanía</span> y <span className="text-amber-400 font-semibold">elegancia</span>.
              {' '}Con {YEARS_IN_BUSINESS} años de experiencia, creamos productos que trascienden las tendencias.
            </p>

            {/* Badges informativos optimizados */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-4xl mx-auto">
              <div className="px-3 sm:px-4 py-2 sm:py-3 bg-green-600/20 border border-green-500/30 rounded-xl text-green-300 text-xs sm:text-sm font-bold hover:bg-green-600/30 transition-colors duration-300 flex items-center space-x-2">
                <span>🛡️</span>
                <span>Garantía de {COMPANY_INFO.warranty.period}</span>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 bg-blue-600/20 border border-blue-500/30 rounded-xl text-blue-300 text-xs sm:text-sm font-bold hover:bg-blue-600/30 transition-colors duration-300 flex items-center space-x-2">
                <span>🚚</span>
                <span>Envío gratis {'>'} {formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}</span>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 bg-purple-600/20 border border-purple-500/30 rounded-xl text-purple-300 text-xs sm:text-sm font-bold hover:bg-purple-600/30 transition-colors duration-300 flex items-center space-x-2">
                <span>📱</span>
                <span>Atención 24/7 WhatsApp</span>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 bg-amber-600/20 border border-amber-500/30 rounded-xl text-amber-300 text-xs sm:text-sm font-bold hover:bg-amber-600/30 transition-colors duration-300 flex items-center space-x-2">
                <span>🏆</span>
                <span>{products.length}+ Productos Únicos</span>
              </div>
            </div>

            {/* CTAs principales optimizados */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg sm:max-w-none mx-auto">
              <Link href="/politicas" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-xl hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 text-blue-300 hover:text-blue-200 font-bold min-h-[48px] sm:min-h-[56px] touch-manipulation transform hover:scale-[1.02] flex items-center justify-center space-x-2">
                  <span className="group-hover:scale-110 transition-transform duration-300">🛡️</span>
                  <span>Ver Garantías {CURRENT_YEAR}</span>
                </button>
              </Link>
              <Link href="#productos" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-xl font-bold transition-all duration-300 min-h-[48px] sm:min-h-[56px] touch-manipulation transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg hover:shadow-amber-500/25 overflow-hidden">
                  <span className="relative z-10">Explorar Catálogo</span>
                  <span className="group-hover:scale-110 transition-transform duration-300">🛍️</span>
                  <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Stats Optimizados ---------------- */}
      <section className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6 bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-sm relative">
        <div className="absolute inset-0">
          <Image 
            src={CAROUSEL_IMAGES.slide15} 
            alt="Estadísticas de calidad" 
            fill 
            className="object-cover opacity-10" 
            sizes="100vw" 
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Grid de estadísticas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-amber-900/30 rounded-xl sm:rounded-2xl hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-xl sm:text-2xl lg:text-3xl font-bold text-${stat.color}-300 mb-1 sm:mb-2 group-hover:text-${stat.color}-200 transition-colors duration-300`}>
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors duration-300">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Información adicional optimizada */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
            <div className="p-4 sm:p-6 bg-gradient-to-br from-amber-900/20 to-amber-800/20 border border-amber-500/30 rounded-xl sm:rounded-2xl text-center group hover:border-amber-400/50 transition-all duration-300">
              <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">📦</div>
              <h3 className="text-amber-300 font-bold mb-2 text-sm sm:text-base group-hover:text-amber-200 transition-colors duration-300">
                {totalCategories} Categorías
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">
                Bolsos, billeteras, morrales y más
              </p>
            </div>
            
            <div className="p-4 sm:p-6 bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl sm:rounded-2xl text-center group hover:border-green-400/50 transition-all duration-300">
              <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">⭐</div>
              <h3 className="text-green-300 font-bold mb-2 text-sm sm:text-base group-hover:text-green-200 transition-colors duration-300">
                {featuredCount} Destacados
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">
                Productos más populares
              </p>
            </div>
            
            <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl sm:rounded-2xl text-center group hover:border-blue-400/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🏆</div>
              <h3 className="text-blue-300 font-bold mb-2 text-sm sm:text-base group-hover:text-blue-200 transition-colors duration-300">
                {YEARS_IN_BUSINESS} Años
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">
                De experiencia en cuero
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Características destacadas ---------------- */}
      <section className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              ¿Por qué elegir LEDER LIZ?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-4">
              La diferencia está en los detalles que hacen único cada producto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-amber-900/30 rounded-xl sm:rounded-2xl hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group text-center"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-${feature.color}-300 mb-2 sm:mb-3 group-hover:text-${feature.color}-200 transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Catálogo Principal ---------------- */}
      <section id="productos" className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6 bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Catálogo Completo
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-4">
              Explora nuestra colección completa de productos de cuero premium, cada uno diseñado con pasión y dedicación
            </p>
          </div>

          <ProductList />
        </div>
      </section>

      {/* ---------------- Garantía & CTA Optimizada ---------------- */}
      <section className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 relative">
        <div className="absolute inset-0">
          <Image 
            src={CAROUSEL_IMAGES.slide19} 
            alt="Garantía y calidad LEDER LIZ" 
            fill 
            className="object-cover opacity-20" 
            sizes="100vw" 
          />
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-amber-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto">
                <Image 
                  src={GENERAL_IMAGES.logo} 
                  alt="LEDER LIZ Logo" 
                  fill 
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" 
                  sizes="80px" 
                />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-amber-100">
              Calidad Garantizada, Satisfacción Asegurada
            </h3>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto px-2 sm:px-4">
              Cada producto LEDER LIZ viene respaldado por nuestra garantía de {COMPANY_INFO.warranty.period} y 
              {YEARS_IN_BUSINESS} años de experiencia en artesanía de cuero premium. Tu inversión está protegida.
            </p>

            {/* Grid de garantías */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-xl text-center hover:bg-green-900/30 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl mb-2">🛡️</div>
                <h4 className="text-green-300 font-bold mb-1 text-sm sm:text-base">Garantía {COMPANY_INFO.warranty.period}</h4>
                <p className="text-gray-400 text-xs sm:text-sm">En todos los productos</p>
              </div>
              <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl text-center hover:bg-blue-900/30 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl mb-2">🚚</div>
                <h4 className="text-blue-300 font-bold mb-1 text-sm sm:text-base">Envío Gratis</h4>
                <p className="text-gray-400 text-xs sm:text-sm">Compras {'>'} {formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}</p>
              </div>
              <div className="p-4 bg-purple-900/20 border border-purple-500/30 rounded-xl text-center hover:bg-purple-900/30 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl mb-2">🔄</div>
                <h4 className="text-purple-300 font-bold mb-1 text-sm sm:text-base">Cambios Fáciles</h4>
                <p className="text-gray-400 text-xs sm:text-sm">Hasta 5 días hábiles</p>
              </div>
              <div className="p-4 bg-amber-900/20 border border-amber-500/30 rounded-xl text-center hover:bg-amber-900/30 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl mb-2">📱</div>
                <h4 className="text-amber-300 font-bold mb-1 text-sm sm:text-base">Soporte 24/7</h4>
                <p className="text-gray-400 text-xs sm:text-sm">WhatsApp disponible</p>
              </div>
            </div>

            {/* CTAs finales */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center max-w-4xl mx-auto mb-6 sm:mb-8">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 min-h-[56px] sm:min-h-[64px] touch-manipulation transform hover:scale-[1.02] group shadow-lg hover:shadow-green-500/25"
              >
                <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">📱</span>
                <span className="text-sm sm:text-base lg:text-lg">Consultar por WhatsApp</span>
              </a>
              
              <Link href="/contacto" className="flex-1">
                <button className="w-full px-6 sm:px-8 py-4 sm:py-5 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 min-h-[56px] sm:min-h-[64px] touch-manipulation transform hover:scale-[1.02] text-sm sm:text-base lg:text-lg">
                  <span>✉️</span>
                  <span>Contactar Asesor</span>
                </button>
              </Link>
              
              <Link href="/politicas" className="flex-1">
                <button className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30 text-blue-300 hover:from-blue-500/30 hover:to-blue-600/30 hover:text-blue-200 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 min-h-[56px] sm:min-h-[64px] touch-manipulation transform hover:scale-[1.02] text-sm sm:text-base lg:text-lg">
                  <span>🛡️</span>
                  <span>Ver Políticas</span>
                </button>
              </Link>
            </div>

            {/* Información adicional */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 sm:p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors duration-300">
                <div className="text-xl sm:text-2xl mb-2">🏆</div>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  {YEARS_IN_BUSINESS} años de experiencia
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors duration-300">
                <div className="text-xl sm:text-2xl mb-2">💎</div>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  Cuero 100% genuino certificado
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors duration-300">
                <div className="text-xl sm:text-2xl mb-2">🇨🇴</div>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  Hecho en Colombia con amor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Testimoniales y Confianza ---------------- */}
      <section className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              La Confianza de Nuestros Clientes
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-4">
              Miles de clientes han confiado en la calidad LEDER LIZ
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4 sm:p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-amber-900/30 rounded-xl sm:rounded-2xl hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="flex text-amber-400 mr-2">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400">{testimonial.category}</span>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.comment}"
                </p>
                <div className="text-xs text-amber-400 font-medium">- {testimonial.name}, {testimonial.location}</div>
              </div>
            ))}
          </div>

          {/* Estadísticas de confianza */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1">98%</div>
                <div className="text-xs sm:text-sm text-gray-400">Satisfacción</div>
              </div>
              <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 mb-1">1000+</div>
                <div className="text-xs sm:text-sm text-gray-400">Clientes</div>
              </div>
              <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-colors duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-400 mb-1">4.9</div>
                <div className="text-xs sm:text-sm text-gray-400">Calificación</div>
              </div>
              <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">{YEARS_IN_BUSINESS}</div>
                <div className="text-xs sm:text-sm text-gray-400">Años</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Llamada a la Acción Final ---------------- */}
      <section className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 relative">
        <div className="absolute inset-0">
          <Image 
            src={CAROUSEL_IMAGES.slide20 || CAROUSEL_IMAGES.slide1} 
            alt="Únete a la familia LEDER LIZ" 
            fill 
            className="object-cover opacity-20" 
            sizes="100vw" 
          />
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-amber-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              ¿Listo para Encontrar tu Bolso Perfecto?
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto px-2 sm:px-4">
              Únete a miles de clientes satisfechos que han elegido la calidad y elegancia de LEDER LIZ. 
              Nuestro equipo está listo para ayudarte a encontrar el producto perfecto que se adapte a tu estilo y necesidades.
            </p>

            {/* Grid de beneficios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="p-4 bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl mb-2">🎯</div>
                <h4 className="text-green-300 font-bold mb-1 text-sm sm:text-base">Asesoría Personalizada</h4>
                <p className="text-gray-400 text-xs sm:text-sm">Te ayudamos a elegir</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl mb-2">💎</div>
                <h4 className="text-blue-300 font-bold mb-1 text-sm sm:text-base">Calidad Premium</h4>
                <p className="text-gray-400 text-xs sm:text-sm">Cuero 100% genuino</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl mb-2">⚡</div>
                <h4 className="text-purple-300 font-bold mb-1 text-sm sm:text-base">Entrega Rápida</h4>
                <p className="text-gray-400 text-xs sm:text-sm">Envíos en 24-48h</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-amber-900/20 to-amber-800/20 border border-amber-500/30 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl mb-2">🛡️</div>
                <h4 className="text-amber-300 font-bold mb-1 text-sm sm:text-base">Garantía Total</h4>
                <p className="text-gray-400 text-xs sm:text-sm">{COMPANY_INFO.warranty.period} incluida</p>
              </div>
            </div>

            {/* CTAs principales */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <Link href="#productos" className="flex-1">
                <button className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-xl transition-all duration-300 min-h-[56px] sm:min-h-[64px] touch-manipulation transform hover:scale-[1.02] text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-amber-500/25 group overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Ver Todos los Productos</span>
                    <span className="group-hover:scale-110 transition-transform duration-300">🛍️</span>
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </Link>
              
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full px-6 sm:px-8 py-4 sm:py-5 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 rounded-xl font-bold transition-all duration-300 min-h-[56px] sm:min-h-[64px] touch-manipulation transform hover:scale-[1.02] text-sm sm:text-base lg:text-lg group">
                  <span className="flex items-center justify-center space-x-2">
                    <span className="group-hover:scale-110 transition-transform duration-300">📱</span>
                    <span>WhatsApp Directo</span>
                  </span>
                </button>
              </a>
            </div>

            {/* Enlaces adicionales */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
              <Link href="/contacto" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1">
                <span>✉️</span>
                <span>Contactar Asesor</span>
              </Link>
              <Link href="/politicas" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-1">
                <span>🛡️</span>
                <span>Ver Garantías</span>
              </Link>
              <Link href="/nosotros" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-1">
                <span>🏆</span>
                <span>Nuestra Historia</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Footer Final ---------------- */}
      <footer className="py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6 bg-slate-900/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
            <div className="text-center sm:text-left">
              <h5 className="text-amber-300 font-bold mb-2 text-sm sm:text-base">Productos</h5>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p>{products.length}+ diseños únicos</p>
                <p>{totalCategories} categorías disponibles</p>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h5 className="text-amber-300 font-bold mb-2 text-sm sm:text-base">Calidad</h5>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p>Cuero 100% genuino</p>
                <p>Garantía de {COMPANY_INFO.warranty.period}</p>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h5 className="text-amber-300 font-bold mb-2 text-sm sm:text-base">Envíos</h5>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p>Gratis {'>'} {formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}</p>
                <p>Entrega 24-48 horas</p>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h5 className="text-amber-300 font-bold mb-2 text-sm sm:text-base">Experiencia</h5>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p>{YEARS_IN_BUSINESS} años en el mercado</p>
                <p>1000+ clientes satisfechos</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-900/30 pt-4 sm:pt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © {CURRENT_YEAR} <span className="text-amber-400 font-semibold">LEDER LIZ</span> - Elegancia en Cuero Premium
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> • </span>
              {YEARS_IN_BUSINESS} años de experiencia artesanal • Bogotá, Colombia
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Todos los derechos reservados • Catálogo actualizado en {CURRENT_YEAR}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}