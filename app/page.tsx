import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IntroSection from '../components/IntroSection';
import AdvancedCarousel from '../components/AdvancedCarousel';
import ProductList from '../components/ProductList';
import { 
  GENERAL_IMAGES, 
  CAROUSEL_IMAGES, 
  getProductsByCategory,
  getCategories 
} from '../data/productsData';

export default function Home() {
  const categories = getCategories();
  const featuredCategories = categories.slice(0, 3); // Primeras 3 categorías

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <IntroSection />
      
      {/* Categories Preview Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide7}
            alt="Categorías de productos"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-800/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Nuestras Categorías
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explora nuestra amplia gama de productos de cuero premium, cada uno diseñado con atención al detalle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCategories.map((category, index) => {
              const productsInCategory = getProductsByCategory(category);
              const categoryImages = [
                CAROUSEL_IMAGES.slide2,
                CAROUSEL_IMAGES.slide9,
                CAROUSEL_IMAGES.slide14
              ];

              return (
                <div 
                  key={category}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 transition-all duration-700 transform hover:-translate-y-4"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={categoryImages[index]}
                      alt={`Categoría ${category}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                        {productsInCategory.length} productos
                      </span>
                    </div>

                    {/* Category Info */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                        {category}
                      </h3>
                      <p className="text-gray-200 text-sm mb-4">
                        Descubre nuestra colección de {category.toLowerCase()} premium
                      </p>
                      <Link href="/productos">
                        <button className="w-full py-2 bg-gradient-to-r from-amber-600/90 to-orange-600/90 hover:from-amber-500 hover:to-orange-500 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm text-sm">
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
              <button className="group relative px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-amber-500/25 overflow-hidden">
                <span className="relative z-10">Ver Todas las Categorías</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Carousel Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900/50 to-slate-800/50 backdrop-blur-sm relative">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide15}
            alt="Colección destacada"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Colección Destacada
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestros diseños más exclusivos, creados con la más alta calidad artesanal
            </p>
          </div>
          <AdvancedCarousel />
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide5}
            alt="Historia de la marca"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Image
                  src={GENERAL_IMAGES.logo}
                  alt="Elegancia en Cuero Logo"
                  width={80}
                  height={80}
                  className="opacity-90"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Más que Productos, Creamos Experiencias
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                En <span className="text-amber-400 font-semibold">Elegancia en Cuero</span>, cada pieza es el resultado de 
                años de perfeccionamiento artesanal. Combinamos técnicas tradicionales con diseño contemporáneo 
                para crear bolsos que no solo complementan tu estilo, sino que cuentan tu historia.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Nuestro compromiso va más allá de la calidad del producto; nos dedicamos a crear vínculos duraderos 
                con nuestros clientes, ofreciendo piezas que evolucionan contigo y se vuelven parte de tu identidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg">
                    Conoce Nuestra Historia
                  </button>
                </Link>
                <Link href="/contacto">
                  <button className="px-6 py-3 border-2 border-amber-400 text-amber-400 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300">
                    Contacta con Nosotros
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={CAROUSEL_IMAGES.slide11}
                  alt="Artesanía en cuero - Proceso de creación"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    Artesanía tradicional, diseño moderno
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-60 animate-pulse" style={{animationDelay: '1000ms'}} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide19}
            alt="Todos nuestros productos"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Nuestros Productos
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada bolso cuenta una historia de dedicación, pasión y maestría artesanal. 
              Descubre la pieza perfecta que se convertirá en tu compañera de vida.
            </p>
          </div>
          <ProductList />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide1}
            alt="Únete a Elegancia en Cuero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            ¿Listo para encontrar tu bolso perfecto?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Únete a miles de clientes satisfechos que han elegido la calidad y elegancia de nuestros productos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/productos">
              <button className="px-8 py-4 bg-white text-slate-900 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105">
                Explorar Productos
              </button>
            </Link>
            <Link href="/contacto">
              <button className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Obtener Asesoría
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}