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

// SVG Icons optimizados con mejor accesibilidad y tamaños responsivos
const MenuIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.188z"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useContext(CartContext);
  const pathname = usePathname();

  // Optimización del scroll con throttling
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
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

  // Cerrar menú móvil al hacer scroll
  useEffect(() => {
    if (isMenuOpen && isScrolled) {
      setIsMenuOpen(false);
    }
  }, [isScrolled, isMenuOpen]);

  // Bloquear scroll del body cuando el menú esté abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ease-out ${
          isScrolled 
            ? "bg-slate-900/98 backdrop-blur-2xl border-b border-amber-500/30 shadow-2xl shadow-amber-500/5" 
            : "bg-slate-900/60 backdrop-blur-lg"
        }`}
        style={{ zIndex: 1000 }}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            {/* Logo - Mobile First con animaciones mejoradas */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0 z-10 relative"
              aria-label="Ir a página principal de Elegancia en Cuero"
            >
              <div className="relative">
                {/* Logo con efectos avanzados */}
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 border border-amber-400/40 overflow-hidden group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-amber-500/30 ${
                  isScrolled ? 'ring-2 ring-amber-400/20' : ''
                }`}>
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={GENERAL_IMAGES.logo}
                      alt="LEDER LIZ Logo"
                      fill
                      className="object-contain p-1"
                      sizes="48px"
                      priority
                    />
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                </div>
                {/* Accent dot con animación */}
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full shadow-lg flex items-center justify-center group-hover:scale-125 transition-all duration-300 animate-pulse">
                  <span className="text-[8px] sm:text-xs text-white font-bold leading-none">{String(CURRENT_YEAR).slice(-2)}</span>
                </div>
              </div>
              
              {/* Brand Text - Totalmente responsivo */}
              <div className="hidden min-[375px]:block">
                <h1 className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight group-hover:bg-gradient-to-r group-hover:from-amber-100 group-hover:via-amber-200 group-hover:to-orange-300 transition-all duration-300">
                  <span className="hidden sm:inline">Elegancia en Cuero</span>
                  <span className="sm:hidden">LEDER LIZ</span>
                </h1>
                <p className="text-[10px] sm:text-xs lg:text-sm text-amber-400/80 font-medium tracking-wide group-hover:text-amber-300/90 transition-colors duration-300">
                  <span className="hidden sm:inline">Artesanía Premium • {CURRENT_YEAR}</span>
                  <span className="sm:hidden">Desde {CURRENT_YEAR - YEARS_IN_BUSINESS}</span>
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - Completamente rediseñado */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 xl:px-4 py-2.5 transition-all duration-300 group rounded-xl hover:bg-gradient-to-br hover:from-slate-800/50 hover:to-slate-700/50 ${
                    isActiveRoute(link.href)
                      ? 'text-amber-300 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30'
                      : 'text-gray-200 hover:text-amber-300 border border-transparent hover:border-amber-500/20'
                  }`}
                  aria-current={isActiveRoute(link.href) ? 'page' : undefined}
                >
                  <span className="relative z-10 font-medium text-sm xl:text-base flex items-center space-x-2">
                    <span className="transition-all duration-300 group-hover:scale-105">{link.label}</span>
                    {link.badge && (
                      <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-md">
                        {link.badge}
                      </span>
                    )}
                    {link.isNew && (
                      <span className="relative">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute"></span>
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      </span>
                    )}
                  </span>
                  
                  {/* Active/Hover indicator con gradiente */}
                  <div className={`absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full transition-all duration-300 ${
                    isActiveRoute(link.href)
                      ? 'w-3/4 -translate-x-1/2 opacity-100'
                      : 'w-0 group-hover:w-3/4 group-hover:-translate-x-1/2 opacity-0 group-hover:opacity-100'
                  }`} />
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm ${
                    isActiveRoute(link.href) ? 'opacity-50' : ''
                  }`} />
                </Link>
              ))}
            </div>

            {/* Right Section - Mobile First mejorado */}
            <div className="flex items-center space-x-2 sm:space-x-3 z-10">
              {/* Contacto rápido - Mejor responsive */}
              <div className="hidden lg:flex items-center space-x-2">
                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-green-600/20 to-green-700/20 hover:from-green-600/40 hover:to-green-700/40 rounded-xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                  aria-label="Contactar por WhatsApp"
                >
                  <WhatsAppIcon />
                  <span className="text-sm text-green-300 group-hover:text-green-200 font-medium">WhatsApp</span>
                </a>
                
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-600/20 to-blue-700/20 hover:from-blue-600/40 hover:to-blue-700/40 rounded-xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="Llamar ahora"
                >
                  <PhoneIcon />
                  <span className="text-sm text-blue-300 group-hover:text-blue-200 font-medium">Llamar</span>
                </a>
              </div>

              {/* Cart Button - Completamente rediseñado */}
              <Link 
                href="/cart" 
                className="relative group z-10"
                aria-label={`Carrito de compras con ${totalItems} productos`}
              >
                <div className={`relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-amber-500 hover:to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 border border-amber-500/30 hover:border-amber-400/60 shadow-lg hover:shadow-xl hover:shadow-amber-500/20 group-hover:scale-110 touch-manipulation ${
                  totalItems > 0 ? 'ring-2 ring-amber-400/40 animate-pulse' : ''
                }`}>
                  <ShoppingBagIcon />
                  
                  {/* Glow effect para el carrito */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                </div>
                
                {/* Cart badge - Rediseñado completamente */}
                {totalItems > 0 && (
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                    <div className="relative">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 animate-bounce">
                        <span className="text-[10px] sm:text-xs font-bold text-white">
                          {totalItems > 99 ? '99+' : totalItems}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                )}
              </Link>

              {/* Mobile Menu Button - Rediseñado */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-amber-500 hover:to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 border border-amber-500/30 hover:border-amber-400/60 shadow-lg touch-manipulation group hover:scale-110 ${
                  isMenuOpen ? 'ring-2 ring-amber-400/50 bg-gradient-to-br from-amber-500 to-orange-600' : ''
                }`}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <div className={`absolute inset-0 transition-all duration-500 ${isMenuOpen ? 'rotate-180 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`}>
                    <MenuIcon />
                  </div>
                  <div className={`absolute inset-0 transition-all duration-500 ${isMenuOpen ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-75'}`}>
                    <CloseIcon />
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              </button>
            </div>
          </div>

          {/* Mobile Menu - Completamente rediseñado con animaciones fluidas */}
          <div className={`lg:hidden absolute left-0 right-0 top-full transition-all duration-500 ease-out transform ${
            isMenuOpen 
              ? "opacity-100 translate-y-0 pointer-events-auto" 
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}>
            <div className="mx-3 sm:mx-4 mt-2">
              <div className="bg-gradient-to-br from-slate-800/98 via-slate-900/98 to-slate-950/98 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-amber-500/30 shadow-2xl shadow-black/20 overflow-hidden">
                {/* Header del menú móvil con gradiente */}
                <div className="px-4 sm:px-6 py-4 border-b border-amber-500/20 bg-gradient-to-r from-slate-800/60 via-slate-900/60 to-slate-800/60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                        <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                          <Image
                            src={GENERAL_IMAGES.logo}
                            alt="LEDER LIZ"
                            fill
                            className="object-contain p-1"
                            sizes="40px"
                          />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-amber-300 font-bold text-lg sm:text-xl bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                          LEDER LIZ
                        </h2>
                        <p className="text-amber-400/70 text-xs sm:text-sm">
                          {YEARS_IN_BUSINESS} años • Premium {CURRENT_YEAR}
                        </p>
                      </div>
                    </div>
                    
                    {/* Badge de garantía */}
                    <div className="flex items-center space-x-1 px-2 py-1 bg-green-500/20 border border-green-400/30 rounded-full">
                      <ShieldIcon />
                      <span className="text-xs text-green-300 font-medium">6M Garantía</span>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Navigation Links con animaciones escalonadas */}
                <div className="p-4 sm:p-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={`group flex items-center px-4 py-4 sm:py-5 transition-all duration-300 rounded-xl sm:rounded-2xl border-l-4 touch-manipulation hover:scale-[1.02] ${
                        isActiveRoute(link.href)
                          ? 'text-amber-300 bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-red-500/20 border-amber-400 shadow-lg shadow-amber-500/10'
                          : 'text-gray-200 hover:text-amber-300 hover:bg-gradient-to-r hover:from-amber-500/10 hover:via-orange-500/5 hover:to-red-500/10 border-transparent hover:border-amber-400/60 hover:shadow-md hover:shadow-amber-500/5'
                      }`}
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: isMenuOpen ? 'slideInLeft 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-4">
                          {/* Dot indicator animado */}
                          <div className="relative">
                            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              isActiveRoute(link.href)
                                ? 'bg-gradient-to-r from-amber-400 to-orange-500 opacity-100 scale-100'
                                : 'bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                            }`} />
                            {isActiveRoute(link.href) && (
                              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-ping opacity-75" />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold text-base sm:text-lg transition-all duration-300 group-hover:scale-105">
                                {link.label}
                              </span>
                              {link.badge && (
                                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
                                  {link.badge}
                                </span>
                              )}
                              {link.isNew && (
                                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-md">
                                  NUEVO
                                </span>
                              )}
                            </div>
                            {link.description && (
                              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                {link.description}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        {/* Arrow indicator */}
                        <div className={`w-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 rounded-full ${
                          isActiveRoute(link.href) ? 'w-8' : 'group-hover:w-6'
                        }`} />
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Mobile Footer - Rediseñado con mejor UX */}
                <div className="px-4 sm:px-6 py-4 sm:py-6 border-t border-amber-500/20 bg-gradient-to-r from-slate-800/60 via-slate-900/60 to-slate-800/60 space-y-4">
                  {/* Cart Summary mejorado */}
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-xl border border-amber-500/20">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                          <ShoppingBagIcon />
                        </div>
                        {totalItems > 0 && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">{totalItems > 9 ? '9+' : totalItems}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-gray-300 font-semibold text-sm">Mi Carrito</span>
                        <p className="text-xs text-gray-400">
                          {totalItems === 0 ? 'Vacío' : `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`}
                        </p>
                      </div>
                    </div>
                    
                    <Link
                      href="/cart"
                      onClick={closeMenu}
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Ver
                    </Link>
                  </div>

                  {/* Quick Contact Actions - Rediseñado */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={COMPANY_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-br from-green-600/30 to-green-700/30 hover:from-green-600/50 hover:to-green-700/50 border border-green-500/40 hover:border-green-400/60 rounded-xl transition-all duration-300 touch-manipulation hover:scale-105 group"
                    >
                      <WhatsAppIcon />
                      <span className="text-sm text-green-300 group-hover:text-green-200 font-semibold">WhatsApp</span>
                    </a>
                    
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-br from-blue-600/30 to-blue-700/30 hover:from-blue-600/50 hover:to-blue-700/50 border border-blue-500/40 hover:border-blue-400/60 rounded-xl transition-all duration-300 touch-manipulation hover:scale-105 group"
                    >
                      <PhoneIcon />
                      <span className="text-sm text-blue-300 group-hover:text-blue-200 font-semibold">Llamar</span>
                    </a>
                  </div>

                  {/* Garantía y confianza */}
                  <div className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-emerald-600/20 to-green-600/20 border border-emerald-500/30 rounded-xl">
                    <ShieldIcon />
                    <div className="text-center">
                      <p className="text-xs text-emerald-300 font-semibold">
                        ✓ 6 meses de garantía
                      </p>
                      <p className="text-xs text-emerald-400/70">
                        En todos nuestros productos
                      </p>
                    </div>
                  </div>

                  {/* Footer info */}
                  <div className="text-center pt-2 border-t border-amber-500/10">
                    <p className="text-xs text-gray-400">
                      <span className="text-amber-400 font-semibold">{YEARS_IN_BUSINESS} años</span> creando calidad premium
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      © {CURRENT_YEAR} LEDER LIZ - Elegancia en Cuero
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay para cerrar menú móvil - Mejorado */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden transition-all duration-300"
          style={{ zIndex: 999 }}
          onClick={closeMenu}
          aria-label="Cerrar menú"
        />
      )}

      {/* Spacer para evitar que el contenido se oculte detrás del navbar */}
      <div className="h-14 sm:h-16 md:h-18 lg:h-20" />

      {/* Keyframes mejorados para animaciones */}
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Breakpoint personalizado para pantallas muy pequeñas */
        @media (min-width: 375px) {
          .min-\\[375px\\]\\:block {
            display: block;
          }
        }
        
        /* Mejoras de rendimiento */
        .navbar-blur {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        /* Smooth scroll en móviles */
        @media (max-width: 1024px) {
          html {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
        }
        
        /* Optimización para touch devices */
        @media (hover: none) and (pointer: coarse) {
          .touch-manipulation {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
          }
        }
        
        /* Fix para Safari en iOS */
        @supports (-webkit-touch-callout: none) {
          .fixed {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }
        
        /* Mejoras para pantallas de alta densidad */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .shadow-2xl {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;