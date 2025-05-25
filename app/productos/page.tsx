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

// Interfaces para TypeScript
interface Stat {
  number: string;
  label: string;
  icon: string;
  description?: string;
}

export default function ProductosPage() {
  const [mounted, setMounted] = useState(false);

  // SEO dinámico
  useEffect(() => {
    setMounted(true);
    document.title = `Productos de Cuero Premium ${CURRENT_YEAR} | LEDER LIZ`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Descubre nuestra colección de bolsos de cuero genuino. ${products.length}+ productos únicos con garantía de ${COMPANY_INFO.warranty.period}. Envío gratis desde ${formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}.`
      );
    }
  }, []);

  // Estadísticas dinámicas basadas en datos reales
  const stats: Stat[] = useMemo(() => [
    { 
      number: `${products.length}+`, 
      label: "Productos Únicos", 
      icon: "🎒",
      description: "Diseños exclusivos disponibles"
    },
    { 
      number: `${COMPANY_INFO.warranty.period}`, 
      label: "Garantía Incluida", 
      icon: "🛡️",
      description: "En todos nuestros productos"
    },
    { 
      number: "1000+", 
      label: "Clientes Satisfechos", 
      icon: "😊",
      description: "Desde nuestro inicio en 2020"
    },
    { 
      number: "100%", 
      label: "Cuero Auténtico", 
      icon: "✨",
      description: "Certificado y genuino"
    }
  ], []);

  const totalCategories = useMemo(() => getCategories().length, []);
  const featuredCount = useMemo(() => getFeaturedProducts().length, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-400 text-lg font-medium">Cargando productos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
      {/* Hero Section con imagen de fondo */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide1}
            alt="Colección de productos LEDER LIZ"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-amber-900/90" />
        </div>

        {/* Elementos de fondo animados - Mobile First */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-20 sm:w-64 sm:h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-5 w-48 h-48 sm:bottom-40 sm:right-20 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '1000ms'}} />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl">
          {/* Header optimizado para mobile */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Logo/Icono con año */}
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl relative">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {CURRENT_YEAR}
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Nuestros Productos
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mb-6">
              Descubre nuestra colección exclusiva de bolsos de cuero auténtico, 
              donde cada pieza cuenta una historia de <span className="text-amber-400 font-semibold">artesanía</span> y 
              <span className="text-amber-400 font-semibold"> elegancia</span>
            </p>

            {/* Badges de información */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
                🛡️ Garantía de {COMPANY_INFO.warranty.period}
              </div>
              <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                🚚 Envío gratis {'>'} {formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}
              </div>
              <div className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                📱 Atención 24/7 WhatsApp
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/politicas" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-lg hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 text-blue-300 hover:text-blue-200 font-medium min-h-[48px] touch-manipulation">
                  🛡️ Ver Garantías {CURRENT_YEAR}
                </button>
              </Link>
              <Link href="#productos" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-lg font-medium transition-all duration-300 min-h-[48px] touch-manipulation">
                  Explorar Catálogo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile First */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm relative">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-2xl hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-300 mb-1 sm:mb-2 group-hover:text-amber-200 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Información adicional */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="p-4 bg-slate-700/30 rounded-xl border border-amber-500/20">
                <h3 className="text-amber-300 font-bold mb-2 text-sm sm:text-base">
                  📦 {totalCategories} Categorías
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Bolsos, billeteras, morrales y más
                </p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-xl border border-green-500/20">
                <h3 className="text-green-300 font-bold mb-2 text-sm sm:text-base">
                  ⭐ {featuredCount} Destacados
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Productos más populares
                </p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-xl border border-blue-500/20 sm:col-span-2 lg:col-span-1">
                <h3 className="text-blue-300 font-bold mb-2 text-sm sm:text-base">
                  🏆 {YEARS_IN_BUSINESS} Años
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  De experiencia en cuero
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section id="productos" className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Encabezado de productos */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Catálogo Completo
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Explora nuestra colección completa de productos de cuero premium
            </p>
          </div>

          {/* Componente ProductList */}
          <ProductList />
        </div>
      </section>

      {/* Garantía y Políticas Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide18}
            alt="Garantía y calidad"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-amber-100">
              Tu Compra Está Protegida
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Todos nuestros productos incluyen garantía completa y políticas de satisfacción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Link href="/politicas">
              <div className="p-6 bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-2xl hover:border-green-400/50 transition-all duration-500 group cursor-pointer">
                <div className="text-center">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-green-300 group-hover:text-green-200 mb-3">
                    Garantía de {COMPANY_INFO.warranty.period}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm">
                    Cobertura completa contra defectos de fabricación
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/politicas#envios">
              <div className="p-6 bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-2xl hover:border-blue-400/50 transition-all duration-500 group cursor-pointer">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚚</div>
                  <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200 mb-3">
                    Envío Seguro
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm">
                    Gratis en compras superiores a {formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/politicas#cuidado">
              <div className="p-6 bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-2xl hover:border-purple-400/50 transition-all duration-500 group cursor-pointer">
                <div className="text-center">
                  <div className="text-4xl mb-4">🧴</div>
                  <h3 className="text-xl font-bold text-purple-300 group-hover:text-purple-200 mb-3">
                    Cuidado Premium
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm">
                    Guía completa para mantener tu cuero perfecto
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* CTA central para políticas */}
          <div className="text-center">
            <Link href="/politicas">
              <button className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-2xl font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 min-h-[56px] touch-manipulation">
                <span>📋</span>
                <span>Ver Todas las Políticas {CURRENT_YEAR}</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section - Optimizado */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide19}
            alt="Contacto personalizado"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-3xl p-8 sm:p-12">
            <div className="mb-6">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto">
                <Image
                  src={GENERAL_IMAGES.logo}
                  alt="LEDER LIZ Logo"
                  fill
                  className="opacity-80 object-contain"
                  sizes="64px"
                />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-amber-100">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contáctanos y te ayudaremos a encontrar el bolso perfecto para ti, 
              o incluso podemos crear uno personalizado según tus especificaciones.
            </p>

            {/* Beneficios del servicio personalizado */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="text-2xl mb-2">👥</div>
                <p className="text-sm text-gray-300">Asesoría personalizada</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="text-2xl mb-2">🎨</div>
                <p className="text-sm text-gray-300">Diseños a medida</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-sm text-gray-300">Respuesta inmediata</p>
              </div>
            </div>

            {/* Botones de contacto */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/contacto" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 min-h-[56px] touch-manipulation">
                  Contactar Asesor
                </button>
              </Link>
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center space-x-2 min-h-[56px] touch-manipulation">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                  </svg>
                  <span>WhatsApp</span>
                </button>
              </a>
            </div>

            {/* Horarios de atención */}
            <div className="mt-6 p-4 bg-slate-700/30 rounded-xl">
              <h4 className="text-amber-300 font-bold mb-2 text-sm sm:text-base">Horarios de Atención</h4>
              <div className="text-xs sm:text-sm text-gray-300 space-y-1">
                <p><span className="font-medium">Lun-Vie:</span> {COMPANY_INFO.schedule.monday_friday}</p>
                <p><span className="font-medium">Sáb:</span> {COMPANY_INFO.schedule.saturday}</p>
                <p><span className="font-medium">Dom:</span> {COMPANY_INFO.schedule.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}