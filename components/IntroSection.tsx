// components/IntroSection.tsx

import React from 'react';
import Link from 'next/link';
import { FaShippingFast, FaLock, FaWallet, FaMoneyBillAlt, FaMobileAlt, FaUniversity } from 'react-icons/fa';

const IntroSection: React.FC = () => {
  return (
    <div className="bg-white pt-24 pb-10"> {/* Margen inferior ajustado a pb-10 */}
      <div className="container mx-auto text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-800">
          Bienvenido a Nuestra Tienda de Bolsos
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Encuentra bolsos de cuero elegantes y de alta calidad. Pagos seguros a través de <strong>Nequi</strong> y <strong>Daviplata</strong>.
        </p>

        {/* Características */}
        <div className="flex flex-wrap justify-center items-center space-x-6 space-y-4 md:space-y-0 mb-10">
          <div className="flex items-center text-gray-700">
            <FaShippingFast className="text-2xl mr-2 text-blue-500" />
            <span>Envíos a Todo el País</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaLock className="text-2xl mr-2 text-blue-500" />
            <span>Pago Seguro</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaWallet className="text-2xl mr-2 text-blue-500" />
            <span>Nequi y Daviplata</span>
          </div>
        </div>

        {/* Botón CTA */}
        <Link
          href="/productos"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition"
        >
          Ver Productos
        </Link>
      </div>

      {/* Medios de Pago */}
      <div className="mt-10 container mx-auto text-center"> {/* Margen superior ajustado a mt-10 */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Medios de Pago</h2>
        <div className="flex flex-wrap justify-center space-x-8">
          <div className="flex flex-col items-center text-gray-600">
            <FaMoneyBillAlt className="text-4xl text-green-500 mb-2" />
            <p className="font-medium">Efectivo</p>
            <p>Pago Contra Entrega</p>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <FaMobileAlt className="text-4xl text-blue-500 mb-2" />
            <p className="font-medium">Transferencia</p>
            <p>Nequi - Daviplata</p>
            <p className="font-bold">3142470366</p>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <FaUniversity className="text-4xl text-yellow-500 mb-2" />
            <p className="font-medium">Cuenta de Ahorros</p>
            <p>Banco Caja Social</p>
            <p className="font-bold">24138619413</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
