import React from 'react';
import IntroSection from '../components/IntroSection';
import AdvancedCarousel from '../components/AdvancedCarousel';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <IntroSection />
      
      {/* Carousel Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Colección Destacada
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre nuestros diseños más exclusivos, creados con la más alta calidad artesanal
            </p>
          </div>
          <AdvancedCarousel />
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Nuestros Productos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada bolso cuenta una historia de dedicación, pasión y maestría artesanal
            </p>
          </div>
          <ProductList />
        </div>
      </section>
    </main>
  );
}