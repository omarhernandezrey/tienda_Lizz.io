"use client";

import React from "react";
import AdvancedCarousel from "../components/AdvancedCarousel";
import IntroSection from "../components/IntroSection";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const images = [
    "/images/carrusel1.jpg",
    "/images/carrusel2.jpg",
    "/images/carrusel3.jpg",
    "/images/carrusel4.jpg",
    "/images/carrusel5.jpg",
    "/images/carrusel6.jpg",
    "/images/carrusel7.jpg",
    "/images/carrusel8.jpg",
    "/images/carrusel9.jpg",
    "/images/carrusel10.jpg",
    "/images/carrusel11.jpg",
    "/images/carrusel12.jpg",
    "/images/carrusel13.jpg",
    "/images/carrusel14.jpg",
    "/images/carrusel15.jpg",
    "/images/carrusel16.jpg",
    "/images/carrusel17.jpg",
    "/images/carrusel18.jpg",
    "/images/carrusel19.jpg",
  ];

  return (
    <div className="bg-white">
      {/* Sección Introductoria */}
      <IntroSection />

      {/* Carrusel Avanzado */}
      <div className="my-15">
        <AdvancedCarousel images={images} autoPlay={true} interval={3000} />
      </div>

      {/* Lista de Productos */}
      <ProductList />

      {/* Otra Sección */}
      <div className="my-10 text-center">
        <h2 className="text-2xl font-bold">¡Descubre nuestras ofertas!</h2>
        <p className="mt-4 text-gray-600">
          Encuentra los mejores bolsos a precios increíbles.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
