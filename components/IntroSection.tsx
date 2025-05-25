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
  getCategories 
} from '../data/productsData';

// SVG Icons
const ShippingIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
  </svg>
);

const LockIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
  </svg>
);

const WalletIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
  </svg>
);

const MoneyIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
  </svg>
);

const BankIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
  </svg>
);

const StatsIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
  </svg>
);

const IntroSection = () => {
  const [heroBackground, setHeroBackground] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);

  useEffect(() => {
    // Configurar imágenes del carrusel para el fondo
    const images = getCarouselImages();
    setCarouselImages(images);
    setHeroBackground(images[0]);

    // Cambiar imagen de fondo cada 8 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = (prev + 1) % images.length;
        setHeroBackground(images[nextIndex]);
        return nextIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const categories = getCategories();
  const totalProducts = products.length;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white overflow-hidden">
      {/* Dynamic Hero Background */}
      {heroBackground && (
        <div className="absolute inset-0">
          <Image
            src={heroBackground}
            alt="Elegancia en Cuero - Fondo Hero"
            fill
            className="object-cover transition-opacity duration-2000"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-amber-900/70" />
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-500 to-red-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '500ms'}} />
      </div>

      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto text-center px-6">
          {/* Brand Logo */}
          <div className="mb-8">
            <Image
              src={GENERAL_IMAGES.logo}
              alt="Elegancia en Cuero Logo"
              width={120}
              height={120}
              className="mx-auto opacity-95 drop-shadow-2xl"
            />
          </div>

          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight">
              ELEGANCIA EN CUERO
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-light text-amber-100 mb-8 tracking-widest">
              Bolsos de Lujo Artesanales
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              Descubre nuestra colección de <span className="text-amber-400 font-semibold">{totalProducts} productos únicos</span> en 
              <span className="text-amber-400 font-semibold"> {categories.length} categorías</span>. 
              Pagos seguros a través de <span className="text-amber-400 font-semibold">Nequi</span> y <span className="text-amber-400 font-semibold">Daviplata</span>.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                { icon: StatsIcon, number: totalProducts, label: "Productos" },
                { icon: WalletIcon, number: categories.length, label: "Categorías" },
                { icon: ShippingIcon, number: "100%", label: "Nacional" },
                { icon: LockIcon, number: "24/7", label: "Seguridad" }
              ].map((stat, index) => (
                <div key={index} className="group p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-8 h-8 text-amber-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <stat.icon />
                  </div>
                  <div className="text-2xl font-bold text-amber-300 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Premium Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                { icon: ShippingIcon, title: "Envíos Nacionales", desc: "A todo Colombia con seguimiento" },
                { icon: LockIcon, title: "Pago Seguro", desc: "Transacciones 100% protegidas" },
                { icon: WalletIcon, title: "Múltiples Métodos", desc: "Nequi, Daviplata y más" }
              ].map((feature, index) => (
                <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-12 h-12 text-amber-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-amber-100">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/productos"
                className="group relative inline-block px-12 py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-amber-500/25 overflow-hidden"
              >
                <span className="relative z-10">Ver Productos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>

              <Link
                href="/about"
                className="px-12 py-4 border-2 border-amber-400 text-amber-400 rounded-full text-xl font-bold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
              >
                Nuestra Historia
              </Link>
            </div>
          </div>
        </div>

        {/* Payment Methods Section with Background */}
        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm py-16 relative">
          <div className="absolute inset-0">
            <Image
              src={CAROUSEL_IMAGES.slide12}
              alt="Métodos de pago seguros"
              fill
              className="object-cover opacity-10"
            />
          </div>
          
          <div className="container mx-auto text-center px-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Medios de Pago
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Ofrecemos múltiples opciones de pago para tu comodidad y seguridad
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Efectivo */}
              <div className="group p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl backdrop-blur-sm border border-amber-900/30 hover:border-green-500/50 transition-all duration-500 transform hover:-translate-y-4">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 text-white">
                      <MoneyIcon />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping opacity-75" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-green-100 group-hover:text-green-300 transition-colors duration-300">
                  Efectivo
                </h3>
                <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">
                  Pago Contra Entrega
                </p>
                <div className="mt-4 text-sm text-green-400 font-semibold">
                  ✓ Sin comisiones adicionales
                </div>
              </div>

              {/* Transferencia Digital */}
              <div className="group p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl backdrop-blur-sm border border-amber-900/30 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-4">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 text-white">
                      <PhoneIcon />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-ping opacity-75" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-blue-100 group-hover:text-blue-300 transition-colors duration-300">
                  Transferencia Digital
                </h3>
                <p className="text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  Nequi - Daviplata
                </p>
                <div className="bg-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-amber-400 tracking-wider">3142470366</p>
                  <p className="text-sm text-gray-400 mt-1">Número de celular</p>
                </div>
              </div>

              {/* Banco */}
              <div className="group p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl backdrop-blur-sm border border-amber-900/30 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-4">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 text-white">
                      <BankIcon />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-yellow-100 group-hover:text-yellow-300 transition-colors duration-300">
                  Cuenta de Ahorros
                </h3>
                <p className="text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  Banco Caja Social
                </p>
                <div className="bg-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-amber-400 tracking-wider">24138619413</p>
                  <p className="text-sm text-gray-400 mt-1">Número de cuenta</p>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-slate-800/60 to-slate-900/60 px-8 py-4 rounded-full backdrop-blur-sm border border-amber-900/30">
                <div className="w-6 h-6 text-amber-400">
                  <LockIcon />
                </div>
                <span className="text-lg font-semibold text-amber-100">Todas las transacciones son 100% seguras</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-amber-400 to-transparent rounded-full" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
};

export default IntroSection;