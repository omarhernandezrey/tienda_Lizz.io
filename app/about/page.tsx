import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto p-4">
        {/* Sección de encabezado */}
        <div className="text-center mb-16 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 sm:p-10 md:p-14 lg:p-20 xl:p-24 rounded-3xl shadow-3xl transition-all duration-700 hover:shadow-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-yellow-500 drop-shadow-lg">
            Elegancia en Cuero
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-900 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
            Bolsos de cuero auténtico de alta calidad, combinando diseño sofisticado, resistencia y precios accesibles.
          </p>
        </div>

        {/* Sección de video */}
        <div className="mb-12">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/DnTtuRlFAnw"
              title="Video Promocional"
              allowFullScreen
            ></iframe>
          </div>
        </div>

{/* Sección de imágenes destacadas */}
<div className="mb-12 bg-gradient-to-b from-gray-50 to-white p-6 sm:p-10 md:p-12 lg:p-16 rounded-3xl shadow-2xl">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-blue-900 text-center tracking-wide">
    Nuestros Productos Destacados
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
    {[1, 2, 3].map((item) => (
      <div
        key={item}
        className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
      >
        <Image
          src={`/images/Bolso_Destacado_${item}.jpg`}
          alt={`Bolso Destacado ${item}`}
          width={400}
          height={400}
          className="object-cover w-full h-full group-hover:opacity-80 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-end p-4">
          <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
            Bolso Elegante {item}
          </h3>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Sección de contenido */}
        <div className="text-gray-800 leading-relaxed bg-gradient-to-b from-gray-100 to-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg rounded-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-center text-blue-800">
            Nuestra Historia
          </h2>
          <p className="mb-4 sm:mb-8 text-base sm:text-lg md:text-xl text-gray-700">
            Nacimos con la pasión de ofrecer bolsos de cuero auténtico que combinan elegancia, durabilidad y precios accesibles. Creemos que la calidad no debe estar reñida con el costo, y trabajamos arduamente para hacer realidad esa visión.
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-center text-blue-800">
            Calidad y Artesanía
          </h2>
          <p className="mb-4 sm:mb-8 text-base sm:text-lg md:text-xl text-gray-700">
            Cada uno de nuestros bolsos es elaborado por artesanos expertos que cuidan cada detalle. Utilizamos cuero de la más alta calidad para garantizar productos que no solo se ven bien, sino que también perduran en el tiempo.
          </p>

          {/* Botón actualizado */}
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-lg sm:text-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-blue-700"
            >
              Explorar Productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
