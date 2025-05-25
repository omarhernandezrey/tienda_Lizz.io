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

// Interfaces para mejor TypeScript
interface NavLink {
  href: string;
  label: string;
  badge?: string;
  description?: string;
  isNew?: boolean;
}

// SVG Icons optimizados con mejor accesibilidad
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useContext(CartContext);
  const pathname = usePathname();

  // Optimización del scroll con throttling
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

  // Cerrar menú móvil cuando cambie la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Memoización del total de items
  const totalItems = useMemo(() => 
    cartItems.reduce((sum, item) => sum + item.quantity, 0), 
    [cartItems]
  );

  // Enlaces de navegación memoizados
  const navLinks: NavLink[] = useMemo(() => [
    { 
      href: "/", 
      label: "Inicio",
      description: "Página principal"
    },
    { 
      href: "/productos", 
      label: "Productos",
      description: "Catálogo completo"
    },
    { 
      href: "/about", 
      label: "Nosotros",
      description: `${YEARS_IN_BUSINESS} años de experiencia`
    },
    { 
      href: "/politicas", 
      label: "Políticas", 
      badge: String(CURRENT_YEAR),
      description: "Garantías y términos",
      isNew: true
    },
    { 
      href: "/contacto", 
      label: "Contacto",
      description: "Atención personalizada"
    }
  ], []);

  // Función para cerrar menú móvil
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Verificar si es la ruta activa
  const isActiveRoute = useCallback((href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  }, [pathname]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          isScrolled 
            ? "bg-slate-900/98 backdrop-blur-xl border-b border-amber-500/20 shadow-xl" 
            : "bg-slate-900/50 backdrop-blur-md"
        }`}
        style={{ zIndex: 1000 }}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo - Mobile First */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
              aria-label="Ir a página principal de Elegancia en Cuero"
            >
              <div className="relative">
                {/* Logo con imagen optimizada */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 border border-amber-400/30 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={GENERAL_IMAGES.logo}
                      alt="LEDER LIZ Logo"
                      fill
                      className="object-contain p-1"
                      sizes="48px"
                      priority
                    />
                  </div>
                </div>
                {/* Accent dot con año */}
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full shadow-md flex items-center justify-center">
                  <span className="text-xs text-white font-bold leading-none">{String(CURRENT_YEAR).slice(-2)}</span>
                </div>
              </div>
              
              {/* Brand Text - Responsive */}
              <div className="hidden xs:block">
                <h1 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight">
                  <span className="hidden sm:inline">Elegancia en Cuero</span>
                  <span className="sm:hidden">LEDER LIZ</span>
                </h1>
                <p className="text-xs lg:text-sm text-amber-400/80 font-medium tracking-wide">
                  <span className="hidden sm:inline">Artesanía Premium</span>
                  <span className="sm:hidden">{CURRENT_YEAR}</span>
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - Optimizado */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 xl:px-4 py-2 transition-all duration-300 group rounded-lg ${
                    isActiveRoute(link.href)
                      ? 'text-amber-300 bg-amber-500/10'
                      : 'text-gray-200 hover:text-amber-300'
                  }`}
                  aria-current={isActiveRoute(link.href) ? 'page' : undefined}
                >
                  <span className="relative z-10 font-medium text-sm xl:text-base flex items-center space-x-2">
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="bg-amber-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                        {link.badge}
                      </span>
                    )}
                    {link.isNew && (
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                    )}
                  </span>
                  
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-orange-500/0 to-red-500/0 group-hover:from-amber-500/10 group-hover:via-orange-500/10 group-hover:to-red-500/10 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  
                  {/* Active/Hover indicator */}
                  <div className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-300 ${
                    isActiveRoute(link.href)
                      ? 'w-3/4 -translate-x-1/2'
                      : 'w-0 group-hover:w-3/4 group-hover:-translate-x-1/2'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Right Section - Mobile First */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Contacto rápido - Solo desktop */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="hidden xl:flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-green-600/20 to-green-700/20 hover:from-green-600/30 hover:to-green-700/30 rounded-lg border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group"
                aria-label="Llamar ahora"
              >
                <PhoneIcon />
                <span className="text-sm text-green-300 group-hover:text-green-200">Llamar</span>
              </a>

              {/* Cart Button - Responsive */}
              <Link 
                href="/cart" 
                className="relative group"
                aria-label={`Carrito de compras con ${totalItems} productos`}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-slate-700/80 to-slate-800/80 hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-amber-500/20 hover:border-amber-400/50 shadow-md hover:shadow-lg group-hover:scale-105 touch-manipulation ${
                  totalItems > 0 ? 'ring-2 ring-amber-400/30' : ''
                }`}>
                  <ShoppingBagIcon />
                </div>
                {/* Cart badge - Responsive */}
                {totalItems > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {totalItems > 99 ? '99+' : totalItems}
                    </span>
                  </div>
                )}
              </Link>

              {/* Mobile Menu Button - Optimizado */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-10 h-10 bg-gradient-to-br from-slate-700/80 to-slate-800/80 hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-amber-500/20 hover:border-amber-400/50 shadow-md touch-manipulation"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
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

          {/* Mobile Menu - Completamente rediseñado */}
          <div className={`lg:hidden transition-all duration-400 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100 pb-4 sm:pb-6" : "max-h-0 opacity-0 pb-0"
          }`}>
            <div className="mt-4 bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-950/95 backdrop-blur-xl rounded-2xl border border-amber-500/20 shadow-2xl overflow-hidden">
              {/* Header del menú móvil */}
              <div className="px-4 py-3 border-b border-amber-500/20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
                <div className="flex items-center space-x-3">
                  <div className="relative w-8 h-8">
                    <Image
                      src={GENERAL_IMAGES.logo}
                      alt="LEDER LIZ"
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                  <div>
                    <h2 className="text-amber-300 font-bold text-lg">LEDER LIZ</h2>
                    <p className="text-amber-400/70 text-xs">{YEARS_IN_BUSINESS} años de experiencia • {CURRENT_YEAR}</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Navigation Links */}
              <div className="p-4 space-y-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`group flex items-center px-4 py-4 transition-all duration-300 rounded-xl border-l-4 touch-manipulation ${
                      isActiveRoute(link.href)
                        ? 'text-amber-300 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-400'
                        : 'text-gray-200 hover:text-amber-300 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10 border-transparent hover:border-amber-400'
                    }`}
                    style={{ 
                      animationDelay: `${index * 80}ms`,
                      animation: isMenuOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-4">
                        <div className={`w-2 h-2 rounded-full transition-opacity duration-300 ${
                          isActiveRoute(link.href)
                            ? 'bg-gradient-to-r from-amber-400 to-orange-500 opacity-100'
                            : 'bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100'
                        }`} />
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-base">{link.label}</span>
                            {link.badge && (
                              <span className="bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                                {link.badge}
                              </span>
                            )}
                            {link.isNew && (
                              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                                NUEVO
                              </span>
                            )}
                          </div>
                          {link.description && (
                            <p className="text-xs text-gray-400 mt-1">{link.description}</p>
                          )}
                        </div>
                      </div>
                      <div className={`w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 rounded-full ${
                        isActiveRoute(link.href) ? 'w-6' : 'group-hover:w-6'
                      }`} />
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Mobile Cart Summary & Quick Actions */}
              <div className="px-4 py-4 border-t border-amber-500/20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 space-y-3">
                {/* Cart Summary */}
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

                {/* Quick Contact */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={COMPANY_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-lg transition-all duration-300 touch-manipulation"
                  >
                    <span className="text-lg">📱</span>
                    <span className="text-sm text-green-300 font-medium">WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg transition-all duration-300 touch-manipulation"
                  >
                    <PhoneIcon />
                    <span className="text-sm text-blue-300 font-medium">Llamar</span>
                  </a>
                </div>

                {/* Garantía destacada */}
                <div className="flex items-center justify-center space-x-2 px-3 py-2 bg-amber-600/10 border border-amber-500/30 rounded-lg">
                  <ShieldIcon />
                  <span className="text-xs text-amber-300 font-medium">6 meses de garantía en todos los productos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay para cerrar menú móvil */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
          style={{ zIndex: 999 }}
          onClick={closeMenu}
          aria-label="Cerrar menú"
        />
      )}

      {/* Keyframes para animaciones */}
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
        
        @media (min-width: 475px) {
          .xs\\:block {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;