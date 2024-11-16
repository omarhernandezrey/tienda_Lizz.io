// components/Navbar.tsx
"use client";

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  FaShoppingCart,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaEnvelope,
} from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-900 p-4 fixed w-full z-20 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Menú Hamburguesa para Móviles */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none transition-transform transform hover:scale-110"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Logo con animación de escala */}
        <div className="flex-1 flex justify-center md:justify-start items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Tienda de Bolsos"
              width={50}
              height={50}
              className="rounded-full object-cover bg-transparent transition-transform transform hover:scale-125"
            />
          </Link>
        </div>

        {/* Carrito de Compras para Móviles */}
        <div className="flex items-center md:hidden">
          <Link
            href="/cart"
            className="text-white text-3xl relative transition-transform transform hover:scale-110"
          >
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full px-2 py-0.5 text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Menú para Escritorio */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-8">
          <Link
            href="/"
            className="nav-link text-white font-semibold transition-transform transform hover:scale-110 hover:text-gray-300 duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="nav-link text-white font-semibold transition-transform transform hover:scale-110 hover:text-gray-300 duration-200"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/productos"
            className="nav-link text-white font-semibold transition-transform transform hover:scale-110 hover:text-gray-300 duration-200"
          >
            Productos
          </Link>
          <Link
            href="/contacto"
            className="nav-link text-white font-semibold transition-transform transform hover:scale-110 hover:text-gray-300 duration-200"
          >
            Contacto
          </Link>
          {/* Carrito de Compras */}
          <Link
            href="/cart"
            className="text-white text-3xl relative transition-transform transform hover:scale-110"
          >
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full px-2 py-0.5 text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Menú Móvil */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-60 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Menú Lateral */}
          <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 p-6 md:hidden transition-transform transform translate-x-0 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              {/* Logo más pequeño con ajuste de contenido */}
              <Image
                src="/images/logo.png"
                alt="Tienda de Bolsos"
                width={80}
                height={80}
                className="rounded-full object-cover bg-transparent transition-transform transform hover:scale-125 mb-6"
              />

              {/* Enlaces del Menú con íconos y animación de escala */}
              <ul className="space-y-4 w-full">
                <li className="flex items-center space-x-2">
                  <FaHome className="text-teal-400 text-xl" />
                  <Link
                    href="/"
                    className="nav-link text-white text-lg font-medium transition-transform transform hover:scale-110 hover:bg-gray-800 p-2 rounded-md duration-200 flex-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <FaInfoCircle className="text-teal-400 text-xl" />
                  <Link
                    href="/about"
                    className="nav-link text-white text-lg font-medium transition-transform transform hover:scale-110 hover:bg-gray-800 p-2 rounded-md duration-200 flex-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <FaBoxOpen className="text-teal-400 text-xl" />
                  <Link
                    href="/productos"
                    className="nav-link text-white text-lg font-medium transition-transform transform hover:scale-110 hover:bg-gray-800 p-2 rounded-md duration-200 flex-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Productos
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope className="text-teal-400 text-xl" />
                  <Link
                    href="/contacto"
                    className="nav-link text-white text-lg font-medium transition-transform transform hover:scale-110 hover:bg-gray-800 p-2 rounded-md duration-200 flex-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div className="mt-8 flex justify-around space-x-4">
              <Link href="https://www.facebook.com/share/15Zz37gpUp/">
                <FaFacebookF className="text-white text-2xl hover:text-teal-400 transition duration-200" />
              </Link>
              <Link href="https://www.instagram.com/lederliz_accesorios/profilecard/?igsh=MTkwaDRpcXBmbGJkaQ==">
                <FaInstagram className="text-white text-2xl hover:text-teal-400 transition duration-200" />
              </Link>
              <Link href="#">
                <FaTwitter className="text-white text-2xl hover:text-teal-400 transition duration-200" />
              </Link>
              <Link href="https://wa.me/573142470366">
                <FaWhatsapp className="text-white text-2xl hover:text-teal-400 transition duration-200" />
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
