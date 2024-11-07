// app/page.tsx
import React from 'react';
import ProductList from '../components/ProductList';
import Image from 'next/image';
import Link from 'next/link';
import { FaShippingFast, FaLock, FaWallet } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div>
      {/* Sección introductoria */}
      <div className="pt-24 bg-gray-100">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Bienvenido a Nuestra Tienda de Bolsos de Cuero
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Descubre los mejores bolsos de cuero elegantes y de alta calidad al mejor precio. Diseños exclusivos y modernos que se adaptan a tu estilo.
          </p>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mt-4">
            Ofrecemos opciones de pago fáciles y seguras a través de <strong>Nequi</strong> y <strong>Daviplata</strong>. ¡Compra ahora y recibe en la puerta de tu casa!
          </p>

          {/* Iconos de características */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">
            <div className="flex items-center">
              <FaShippingFast className="text-3xl text-blue-600 mr-2" />
              <span className="text-lg">Envíos a Todo el País</span>
            </div>
            <div className="flex items-center">
              <FaLock className="text-3xl text-blue-600 mr-2" />
              <span className="text-lg">Pago Seguro</span>
            </div>
            <div className="flex items-center">
              <FaWallet className="text-3xl text-blue-600 mr-2" />
              <span className="text-lg">Nequi y Daviplata</span>
            </div>
          </div>

          {/* Botón CTA */}
          <div className="mt-8">
            <Link
              href="/productos"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl hover:bg-blue-700 transition-colors duration-300"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </div>

      {/* Lista de productos */}
      <ProductList />
    </div>
  );
};

export default HomePage;
