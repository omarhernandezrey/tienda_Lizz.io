"use client";

import React, { useState, useEffect, useContext, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CartContext } from "../context/CartContext";
import { 
  GENERAL_IMAGES, 
  CURRENT_YEAR, 
  YEARS_IN_BUSINESS,
  COMPANY_INFO 
} from '../data/productsData';

// SVG Icons optimizados
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
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.188z"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useContext(CartContext);
  const pathname = usePathname();

  // Scroll handler optimizado
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let ticking = false;
      const updateScrollState = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
      
      window.addEventListener("scroll", updateScrollState, { passive: true });
      return () => window.removeEventListener("scroll", updateScrollState);
    }
  }, [handleScroll]);

  // Cerrar menú cuando cambie la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Bloquear scroll cuando el menú esté abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  // Total de items del carrito
  const totalItems = useMemo(() => 
    cartItems.reduce((sum, item) => sum + item.quantity, 0), 
    [cartItems]
  );

  // Enlaces de navegación
  const navLinks = useMemo(() => [
    { 
      href: "/", 
      label: "Inicio",
      icon: "🏠",
      description: "Página principal"
    },
    { 
      href: "/productos", 
      label: "Productos",
      icon: "👜",
      description: "Catálogo completo"
    },
    { 
      href: "/about", 
      label: "Nosotros",
      icon: "👥",
      description: `${YEARS_IN_BUSINESS} años de experiencia`
    },
    { 
      href: "/politicas", 
      label: "Políticas", 
      icon: "📋",
      badge: "2025",
      description: "Garantías y términos"
    },
    { 
      href: "/contacto", 
      label: "Contacto",
      icon: "📞",
      description: "Atención personalizada"
    }
  ], []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const isActiveRoute = useCallback((href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  }, [pathname]);

  return (
    <>
      {/* Navbar Principal */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-amber-500/20 shadow-lg" 
            : "bg-slate-900/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group z-10"
              onClick={closeMenu}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={GENERAL_IMAGES.logo}
                  alt="LEDER LIZ Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActiveRoute(link.href)
                      ? 'text-amber-300 bg-amber-500/20 border border-amber-500/30'
                      : 'text-gray-200 hover:text-amber-300 hover:bg-amber-500/10'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="ml-2 bg-amber-500 text-black text-xs px-2 py-1 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3 z-10">
              {/* Desktop Contact */}
              <div className="hidden lg:flex items-center space-x-2">
                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 rounded-lg border border-green-500/30 transition-all duration-300"
                >
                  <WhatsAppIcon />
                  <span className="text-sm text-green-300">WhatsApp</span>
                </a>
                
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center space-x-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg border border-blue-500/30 transition-all duration-300"
                >
                  <PhoneIcon />
                  <span className="text-sm text-blue-300">Llamar</span>
                </a>
              </div>

              {/* Cart Button */}
              <Link 
                href="/cart" 
                className="relative group"
                onClick={closeMenu}
              >
                <div className="w-11 h-11 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-amber-500 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-amber-500/30 hover:scale-105">
                  <ShoppingBagIcon />
                </div>
                
                {totalItems > 0 && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                    <span className="text-xs font-bold text-white">
                      {totalItems > 99 ? '99+' : totalItems}
                    </span>
                  </div>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 border touch-manipulation ${
                  isMenuOpen 
                    ? 'bg-gradient-to-br from-amber-500 to-orange-600 border-amber-400 text-white' 
                    : 'bg-gradient-to-br from-slate-700 to-slate-800 hover:from-amber-500 hover:to-orange-600 border-amber-500/30 text-amber-300 hover:text-white'
                }`}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                <div className="relative w-6 h-6">
                  <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                    <MenuIcon />
                  </div>
                  <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                    <CloseIcon />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        />
        
        {/* Menu Panel - Adaptado al alto completo y pegado a la izquierda */}
        <div className="absolute top-0 left-0 bottom-0 w-80 pt-16 pb-4">
          <div className={`h-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-r border-gray-200/20 dark:border-slate-700/30 transition-all duration-300 flex flex-col ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          
            {/* Menu Header - Solo espaciado */}
            <div className="px-6 py-6 border-b border-gray-200/20 dark:border-slate-700/30 flex-shrink-0">
              {/* Header vacío para espaciado */}
            </div>

            {/* Navigation Links */}
            <div className="flex-1 py-4 overflow-y-auto">
              <nav role="navigation" aria-label="Menú principal">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center px-6 py-4 transition-all duration-200 touch-manipulation active:scale-98 group ${
                      isActiveRoute(link.href)
                        ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-r-4 border-amber-500'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-4 w-full">
                      <div className={`text-2xl transition-transform duration-200 group-hover:scale-110 ${
                        isActiveRoute(link.href) ? 'scale-110' : ''
                      }`}>
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-lg">{link.label}</span>
                          {link.badge && (
                            <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              {link.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{link.description}</p>
                      </div>
                      
                      {isActiveRoute(link.href) && (
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      )}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Cart Summary y Footer */}
            <div className="border-t border-gray-200/20 dark:border-slate-700/30 flex-shrink-0">
              {/* Cart Summary */}
              <div className="px-6 py-4">
                <Link
                  href="/cart"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/50 rounded-2xl transition-all duration-300 active:scale-98 touch-manipulation hover:bg-gray-100 dark:hover:bg-slate-800/70"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                        <ShoppingBagIcon />
                      </div>
                      {totalItems > 0 && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-xs text-white font-bold">{totalItems > 9 ? '9+' : totalItems}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-gray-900 dark:text-white font-semibold text-base">Mi Carrito</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {totalItems === 0 ? 'Vacío' : `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`}
                      </p>
                    </div>
                  </div>
                  
                  <ChevronRightIcon />
                </Link>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-200/10 dark:border-slate-700/20">
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">{YEARS_IN_BUSINESS} años</span> de calidad premium
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    © {CURRENT_YEAR} LEDER LIZ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16" />

      {/* Estilos adicionales */}
      <style jsx global>{`
        @media (min-width: 475px) {
          .xs\\:block {
            display: block;
          }
        }
        
        /* Optimizaciones táctiles */
        .touch-manipulation {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
          touch-action: manipulation;
        }
        
        /* Scale personalizado para active states */
        .active\\:scale-98:active {
          transform: scale(0.98);
        }
        
        /* Mejoras para dispositivos iOS */
        @supports (-webkit-touch-callout: none) {
          .fixed {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }
        
        /* Scroll suave */
        @media (max-width: 1024px) {
          html {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .dark\\:bg-slate-900\\/95 {
            background-color: rgb(15 23 42 / 0.95);
          }
          .dark\\:bg-slate-800\\/50 {
            background-color: rgb(30 41 59 / 0.5);
          }
          .dark\\:bg-slate-800\\/70 {
            background-color: rgb(30 41 59 / 0.7);
          }
          .dark\\:bg-amber-900\\/20 {
            background-color: rgb(120 53 15 / 0.2);
          }
          .dark\\:text-white {
            color: rgb(255 255 255);
          }
          .dark\\:text-gray-300 {
            color: rgb(209 213 219);
          }
          .dark\\:text-gray-400 {
            color: rgb(156 163 175);
          }
          .dark\\:text-amber-400 {
            color: rgb(251 191 36);
          }
          .dark\\:border-slate-700\\/30 {
            border-color: rgb(51 65 85 / 0.3);
          }
          .dark\\:hover\\:bg-slate-800\\/50:hover {
            background-color: rgb(30 41 59 / 0.5);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;