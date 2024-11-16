// components/Footer.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6 relative overflow-hidden">
      {/* Fondo animado de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-60 transform scale-150 -rotate-2"></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Sección de enlaces rápidos */}
        <div className="flex flex-col md:flex-row justify-between mb-8 space-y-6 md:space-y-0 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-2">Tienda de Bolsos</h2>
            <p className="text-gray-400 mb-4">Encuentra los mejores bolsos de cuero.</p>
            <Image
              src="/images/logo.png"
              alt="Tienda de Bolsos"
              width={80}
              height={80}
              className="rounded-full object-cover transform hover:scale-110 transition duration-500"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Enlaces Rápidos</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:text-pink-500 transition duration-200">Inicio</Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-pink-500 transition duration-200">Productos</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-500 transition duration-200">Sobre Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-pink-500 transition duration-200">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Contáctanos</h3>
            <p>+57 314 247 0366</p>
            <p>info@tiendadebolsos.com</p>
            <p>Bogotá, Colombia</p>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center md:justify-end space-x-6 mb-6">
          {[
            { href: 'https://facebook.com', icon: FaFacebookF, color: 'text-blue-500' },
            { href: 'https://www.instagram.com/lederliz_accesorios/profilecard/?igsh=MTkwaDRpcXBmbGJkaQ==', icon: FaInstagram, color: 'text-pink-500' },
            { href: 'https://twitter.com', icon: FaTwitter, color: 'text-blue-400' },
            { href: 'https://wa.me/573142470366', icon: FaWhatsapp, color: 'text-green-500' }
          ].map(({ href, icon: Icon, color }, index) => (
            <Link
              href={href}
              target="_blank"
              key={index}
              className={`text-2xl ${color} hover:scale-125 transform transition duration-300`}
            >
              <Icon />
            </Link>
          ))}
        </div>

        {/* Línea divisoria dorada y animada */}
        <div className="relative pt-4">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-glow"></div>
        </div>

        {/* Derechos reservados */}
        <div className="text-center text-sm text-gray-400 mt-4">
          <p>&copy; {new Date().getFullYear()} Tienda de Bolsos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
