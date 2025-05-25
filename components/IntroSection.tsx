"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GENERAL_IMAGES, 
  CAROUSEL_IMAGES, 
  getRandomCarouselImage,
  getCarouselImages,
  products,
  getCategories,
  COMPANY_INFO,
  CURRENT_YEAR,
  YEARS_IN_BUSINESS,
  formatPrice
} from '../data/productsData';

// SVG Icons optimizados
const ShippingIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
  </svg>
);

const LockIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
  </svg>
);

const WalletIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
  </svg>
);

const MoneyIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
  </svg>
);

const BankIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
  </svg>
);

const StatsIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
  </svg>
);

const IntroSection = () => {
  const [heroBackground, setHeroBackground] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Configurar imágenes del carrusel para el fondo
    const images = getCarouselImages();
    setCarouselImages(images);
    setHeroBackground(images[0]);
    setIsLoaded(true);

    // Cambiar imagen de fondo cada 10 segundos para mejor experiencia
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = (prev + 1) % images.length;
        setHeroBackground(images[nextIndex]);
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const categories = getCategories();
  const totalProducts = products.length;
  const freeShippingThreshold = COMPANY_INFO.shipping.freeShippingFrom;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white overflow-hidden">
      {/* Dynamic Hero Background - Optimizado */}
      {heroBackground && isLoaded && (
        <div className="absolute inset-0">
          <Image
            src={heroBackground}
            alt="Elegancia en Cuero - Colección Premium"
            fill
            className="object-cover transition-opacity duration-3000 ease-in-out"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-amber-900/80" />
        </div>
      )}

      {/* Animated Background Elements - Mobile First */}
      <div className="fixed inset-0 opacity-[0.02] sm:opacity-[0.03] md:opacity-[0.04] lg:opacity-[0.05] pointer-events-none">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-5 sm:bottom-40 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '1000ms'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-amber-500 to-red-500 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '500ms'}} />
      </div>

      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Brand Logo con año */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="relative inline-block">
              <Image
                src={GENERAL_IMAGES.logo}
                alt="Elegancia en Cuero Logo"
                width={80}
                height={80}
                className="mx-auto opacity-95 drop-shadow-2xl sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]"
                priority
                sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs sm:text-sm font-bold text-white shadow-lg">
                {CURRENT_YEAR}
              </div>
            </div>
          </div>

          {/* Hero Section - Mobile First */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight">
              {COMPANY_INFO.fullName.toUpperCase()}
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-amber-100 mb-4 sm:mb-6 lg:mb-8 tracking-wide">
              Bolsos de Lujo Artesanales
            </div>
            
            {/* Badge de experiencia */}
            <div className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-500/30 rounded-full text-green-300 text-sm sm:text-base font-medium mb-6 sm:mb-8 lg:mb-10">
              <div className="w-4 h-4 sm:w-5 sm:h-5">
                <ShieldCheckIcon />
              </div>
              <span>{YEARS_IN_BUSINESS} años de experiencia • Garantía {COMPANY_INFO.warranty.period}</span>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-2xl lg:max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed font-light px-4">
              Descubre nuestra colección de <span className="text-amber-400 font-semibold">{totalProducts} productos únicos</span> en 
              <span className="text-amber-400 font-semibold"> {categories.length} categorías</span>. 
              Envío gratis desde <span className="text-green-400 font-semibold">{formatPrice(freeShippingThreshold)}</span>. 
              Pagos seguros a través de <span className="text-amber-400 font-semibold">Nequi</span> y <span className="text-amber-400 font-semibold">Daviplata</span>.
            </p>

            {/* Stats Section - Mobile First */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 max-w-4xl lg:max-w-6xl mx-auto">
              {[
                { icon: StatsIcon, number: `${totalProducts}+`, label: "Productos", color: "text-blue-400" },
                { icon: WalletIcon, number: categories.length, label: "Categorías", color: "text-purple-400" },
                { icon: ShippingIcon, number: "100%", label: "Nacional", color: "text-green-400" },
                { icon: LockIcon, number: "24/7", label: "Seguridad", color: "text-amber-400" }
              ].map((stat, index) => (
                <div key={index} className="group p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ${stat.color} mb-2 sm:mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-amber-300 mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Premium Features - Mobile First */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 max-w-4xl lg:max-w-6xl mx-auto">
              {[
                { 
                  icon: ShippingIcon, 
                  title: "Envíos Nacionales", 
                  desc: "A todo Colombia con seguimiento",
                  badge: `Gratis > ${formatPrice(freeShippingThreshold)}`,
                  color: "text-green-400"
                },
                { 
                  icon: LockIcon, 
                  title: "Pago Seguro", 
                  desc: "Transacciones 100% protegidas",
                  badge: "SSL Certificado",
                  color: "text-blue-400"
                },
                { 
                  icon: WalletIcon, 
                  title: "Múltiples Métodos", 
                  desc: "Nequi, Daviplata y más",
                  badge: "Pago contra entrega",
                  color: "text-purple-400"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber-500/20">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${feature.color} mb-3 sm:mb-4 lg:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-amber-100">{feature.title}</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-3 sm:mb-4">{feature.desc}</p>
                  <div className="px-3 py-1 bg-amber-600/20 border border-amber-500/30 rounded-full text-amber-300 text-xs sm:text-sm font-medium">
                    {feature.badge}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Mobile First */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
              <Link
                href="/productos"
                className="group relative inline-block w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-base sm:text-lg lg:text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-amber-500/30 overflow-hidden touch-manipulation"
              >
                <span className="relative z-10">Ver Productos Premium</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>

              <Link
                href="/about"
                className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 border-2 border-amber-400 text-amber-400 rounded-full text-base sm:text-lg lg:text-xl font-bold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm transform hover:scale-105 touch-manipulation"
              >
                Nuestra Historia
              </Link>
            </div>
          </div>
        </div>

        {/* Payment Methods Section - Mobile First */}
        <div className="bg-gradient-to-b from-slate-900/60 via-slate-800/50 to-slate-900/60 backdrop-blur-sm py-12 sm:py-16 lg:py-20 relative">
          <div className="absolute inset-0">
            <Image
              src={CAROUSEL_IMAGES.slide12 || CAROUSEL_IMAGES.slide1}
              alt="Métodos de pago seguros"
              fill
              className="object-cover opacity-5 sm:opacity-8 md:opacity-10"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-amber-950/95" />
          </div>
          
          <div className="container mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Medios de Pago {CURRENT_YEAR}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-2xl lg:max-w-3xl mx-auto px-4">
              Ofrecemos múltiples opciones de pago para tu comodidad y seguridad. Todas las transacciones están protegidas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl lg:max-w-7xl mx-auto">
              {/* Efectivo */}
              <div className="group p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-amber-900/30 hover:border-green-500/50 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-green-400/20">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white">
                      <MoneyIcon />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full animate-ping opacity-75" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-green-100 group-hover:text-green-300 transition-colors duration-300">
                  💵 Efectivo
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-3 sm:mb-4">
                  Pago Contra Entrega
                </p>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-xs sm:text-sm font-medium">
                  <span>✓</span>
                  <span>Sin comisiones adicionales</span>
                </div>
              </div>

              {/* Transferencia Digital */}
              <div className="group p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-amber-900/30 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-blue-400/20">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white">
                      <PhoneIcon />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400 rounded-full animate-ping opacity-75" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-blue-100 group-hover:text-blue-300 transition-colors duration-300">
                  📱 Transferencia Digital
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Nequi • Daviplata
                </p>
                <div className="bg-slate-700/50 rounded-xl lg:rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-slate-600/30">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-400 tracking-wider">{COMPANY_INFO.phone}</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Número de celular</p>
                </div>
              </div>

              {/* Banco */}
              <div className="group p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-amber-900/30 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-yellow-400/20">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white">
                      <BankIcon />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-ping opacity-75" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-yellow-100 group-hover:text-yellow-300 transition-colors duration-300">
                  🏦 Cuenta de Ahorros
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Banco Caja Social
                </p>
                <div className="bg-slate-700/50 rounded-xl lg:rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-slate-600/30">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-400 tracking-wider">24138619413</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Número de cuenta</p>
                </div>
              </div>
            </div>

            {/* Security Badge - Mobile First */}
            <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 bg-gradient-to-r from-slate-800/60 via-slate-800/40 to-slate-900/60 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-300">
                <div className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400">
                  <LockIcon />
                </div>
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-amber-100 text-center">
                  🛡️ Todas las transacciones son 100% seguras
                </span>
              </div>
            </div>

            {/* Additional Payment Info */}
            <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <div className="p-3 sm:p-4 bg-green-600/10 border border-green-500/20 rounded-xl text-center">
                <p className="text-green-300 font-medium text-sm sm:text-base">
                  🚚 Envío gratis {'>'} {formatPrice(freeShippingThreshold)}
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl text-center">
                <p className="text-blue-300 font-medium text-sm sm:text-base">
                  ⚡ Respuesta inmediata
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-purple-600/10 border border-purple-500/20 rounded-xl text-center">
                <p className="text-purple-300 font-medium text-sm sm:text-base">
                  📦 Entrega verificada
                </p>
              </div>
            </div>

            {/* WhatsApp Contact Button */}
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-500 rounded-full text-white font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 touch-manipulation"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6">
                  <WhatsAppIcon />
                </div>
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Mobile First */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 sm:h-16 bg-gradient-to-b from-amber-400 via-amber-500 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 lg:h-32 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
      
      {/* Image transition indicator */}
      {carouselImages.length > 0 && (
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex space-x-1 sm:space-x-2">
          {carouselImages.slice(0, 5).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                index === currentImageIndex ? 'bg-amber-400 scale-125' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default IntroSection;