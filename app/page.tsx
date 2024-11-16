"use client";

import React from "react";
import AdvancedCarousel from "../components/AdvancedCarousel";
import IntroSection from "../components/IntroSection";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const images = [
    "/images/carrusel1.jpg",
    "/images/carrusel2.jpg",
    "/images/bolso22.jpg",
    "/images/bolso23.jpg",
    "/images/bolso24.jpg",
    "/images/bolso22.jpg",
    "/images/bolso23.jpg",
    "/images/bolso24.jpg",
    "/images/bolso26.jpg",
    "/images/bolso27.jpg",
    "/images/bolso28.jpg",
    "/images/bolso29.jpg",
    "/images/bolso30.jpg",
    "/images/bolso31.jpg",
    "/images/bolso32.jpg",
    "/images/bolso33.jpg",
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
