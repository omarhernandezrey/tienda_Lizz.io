"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../context/CartContext";

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
      setIsScrolled(window.scrollY > 50);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-slate-900/95 backdrop-blur-lg border-b border-amber-900/30 shadow-2xl" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">EC</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Elegancia en Cuero
              </h1>
              <p className="text-xs text-gray-400">Bolsos de Lujo Artesanales</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-300 hover:text-amber-300 transition-colors duration-300 group"
              >
                <span className="relative z-10 font-medium">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 to-orange-600/0 group-hover:from-amber-600/20 group-hover:to-orange-600/20 rounded-lg transition-all duration-300" />
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Link href="/cart" className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-amber-900/30 hover:border-amber-500/50 shadow-lg">
                <ShoppingBagIcon />
              </div>
              {totalItems > 0 && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-xs font-bold text-white">{totalItems}</span>
                </div>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-amber-900/30 hover:border-amber-500/50"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="py-6 space-y-4 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-lg rounded-2xl border border-amber-900/30 mt-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 text-gray-300 hover:text-amber-300 hover:bg-amber-900/20 transition-all duration-300 border-l-4 border-transparent hover:border-amber-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
            
            {/* Mobile Cart Info */}
            <div className="px-6 py-3 border-t border-amber-900/30 mt-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Productos en carrito:</span>
                <span className="text-amber-300 font-bold">{totalItems}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;