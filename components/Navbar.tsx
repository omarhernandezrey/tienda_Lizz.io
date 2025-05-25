"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../context/CartContext";
import { GENERAL_IMAGES } from '../data/productsData';
// Usar: GENERAL_IMAGES.logo

// SVG Icons
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"/>
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useContext(CartContext);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/about", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-900/98 backdrop-blur-xl border-b border-amber-500/20 shadow-xl" 
          : "bg-slate-900/50 backdrop-blur-md"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="relative">
              {/* Logo Icon */}
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 border border-amber-400/30">
                <span className="text-lg lg:text-xl font-black text-white tracking-tight">EC</span>
              </div>
              {/* Accent dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full animate-pulse shadow-md" />
            </div>
            
            {/* Brand Text */}
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight">
                Elegancia en Cuero
              </h1>
              <p className="text-xs lg:text-sm text-amber-400/80 font-medium tracking-wide">
                Artesanía Premium
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Redesigned */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-200 hover:text-amber-300 transition-all duration-300 group rounded-lg"
              >
                <span className="relative z-10 font-medium text-sm xl:text-base">
                  {link.label}
                </span>
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-orange-500/0 to-red-500/0 group-hover:from-amber-500/10 group-hover:via-orange-500/10 group-hover:to-red-500/10 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />
                {/* Active indicator */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Cart Button - Redesigned */}
            <Link href="/cart" className="relative group">
              <div className={`w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-slate-700/80 to-slate-800/80 hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-amber-500/20 hover:border-amber-400/50 shadow-md hover:shadow-lg group-hover:scale-105 ${
                totalItems > 0 ? 'ring-2 ring-amber-400/30' : ''
              }`}>
                <ShoppingBagIcon />
              </div>
              {/* Cart badge */}
              {totalItems > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-xs lg:text-sm font-bold text-white">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                </div>
              )}
            </Link>

            {/* Mobile Menu Button - Redesigned */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 bg-gradient-to-br from-slate-700/80 to-slate-800/80 hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-amber-500/20 hover:border-amber-400/50 shadow-md"
            >
              <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                  <MenuIcon />
                </div>
                <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
                  <CloseIcon />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Completely Redesigned */}
        <div className={`lg:hidden transition-all duration-400 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
        }`}>
          <div className="mt-4 bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-950/95 backdrop-blur-xl rounded-2xl border border-amber-500/20 shadow-2xl overflow-hidden">
            {/* Mobile Navigation Links */}
            <div className="p-4 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center px-4 py-4 text-gray-200 hover:text-amber-300 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10 transition-all duration-300 rounded-xl border-l-4 border-transparent hover:border-amber-400"
                  style={{ 
                    animationDelay: `${index * 80}ms`,
                    animation: isMenuOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
                  }}
                >
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="font-medium text-base">{link.label}</span>
                    <div className="ml-auto w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 rounded-full" />
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Mobile Cart Summary */}
            <div className="px-4 py-4 border-t border-amber-500/20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <ShoppingBagIcon />
                  </div>
                  <span className="text-gray-300 font-medium">Carrito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-amber-300 font-bold text-lg">{totalItems}</span>
                  <span className="text-gray-400 text-sm">
                    {totalItems === 1 ? 'producto' : 'productos'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes for mobile menu animation */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;