'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const featuredProducts = [
    { id: 1, name: "Heritage Collection", description: "Bolsos clásicos atemporales" },
    { id: 2, name: "Modern Luxe", description: "Diseños contemporáneos sofisticados" },
    { id: 3, name: "Artisan Series", description: "Piezas únicas hechas a mano" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-amber-900/40" />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-500 to-red-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '500ms'}} />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-700">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
              ELEGANCIA
            </h1>
            <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-amber-100 mb-8 tracking-widest">
              EN CUERO
            </div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Bolsos de cuero auténtico que redefinen la <span className="text-amber-400 font-semibold">sofisticación</span>, 
            combinando <span className="text-amber-400 font-semibold">artesanía tradicional</span> con diseño contemporáneo
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/productos">
              <button className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-lg sm:text-xl font-semibold shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-amber-500/25">
                <span className="relative z-10">Explorar Colección</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </button>
            </Link>
            
            <button className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-amber-400 text-amber-400 rounded-full text-lg sm:text-xl font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm">
              Ver Historia
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-amber-400 to-transparent rounded-full" />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Nuestra Esencia
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre el proceso artesanal detrás de cada pieza única
            </p>
          </div>
          
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-2xl">
                    <svg className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-300">Video Promocional</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 px-6 bg-gradient-to-b from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Colecciones Exclusivas
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Cada pieza cuenta una historia de dedicación y maestría artesanal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-700 transform hover:-translate-y-4"
              >
                <div className="aspect-square bg-gradient-to-br from-amber-900/20 to-orange-900/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-orange-600/10 group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl" />
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {product.description}
                  </p>
                  <button className="w-full py-3 bg-gradient-to-r from-amber-600/80 to-orange-600/80 hover:from-amber-500 hover:to-orange-500 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                    Ver Colección
                  </button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/0 via-transparent to-amber-500/0 group-hover:from-amber-900/10 group-hover:to-amber-500/5 transition-all duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight">
                Nuestra Historia
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
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
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-3xl relative overflow-hidden backdrop-blur-sm border border-amber-900/50">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mx-auto mb-4 sm:mb-6 shadow-2xl" />
                    <p className="text-lg sm:text-xl text-amber-200 font-semibold">Artesanía Premium</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-60 animate-pulse" style={{animationDelay: '1000ms'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-16 sm:py-24 px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
            Calidad & Artesanía
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed">
            Cada bolso es una <span className="text-amber-400 font-semibold">obra maestra individual</span>, 
            elaborada por artesanos expertos que dedican pasión y precisión a cada detalle, 
            utilizando únicamente cuero de la más alta calidad para garantizar productos que no solo 
            cautivan visualmente, sino que <span className="text-amber-400 font-semibold">perduran como legados</span>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              { title: "Cuero Premium", desc: "Selección meticulosa de materiales" },
              { title: "Artesanía Experta", desc: "Técnicas tradicionales perfeccionadas" },
              { title: "Durabilidad Garantizada", desc: "Productos que trascienden el tiempo" }
            ].map((item, index) => (
              <div key={index} className="p-6 sm:p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mx-auto mb-4 sm:mb-6 shadow-xl" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-amber-100">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/productos">
            <button className="group relative px-12 sm:px-16 py-4 sm:py-6 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-xl sm:text-2xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-amber-500/25 overflow-hidden">
              <span className="relative z-10">Explorar Productos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 sm:py-16 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-amber-100">
            ¿Listo para descubrir la diferencia?
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Únete a miles de clientes que han elegido la excelencia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/productos">
              <button className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-base sm:text-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg">
                Ver Catálogo Completo
              </button>
            </Link>
            <Link href="/contacto">
              <button className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-amber-400 text-amber-400 rounded-full text-base sm:text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300">
                Contactar Asesor
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;