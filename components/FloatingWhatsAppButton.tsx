"use client";

import React, { useState, useEffect } from 'react';

// Extiende la interfaz Window para incluir 'gtag'
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const WhatsAppIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
  </svg>
);

const StarIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Mostrar el botón después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-mostrar tooltip después de 5 segundos para engagement
  useEffect(() => {
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        // Ocultar tooltip después de 3 segundos
        setTimeout(() => setShowTooltip(false), 3000);
      }, 5000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const phoneNumber = "573142470366";
  const message = "¡Hola! Me interesa conocer más sobre sus bolsos de cuero premium. ¿Podrían brindarme información sobre productos, precios y garantías? 😊";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    // Analytics tracking (si está configurado)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_contact', {
        event_category: 'engagement',
        event_label: 'floating_button'
      });
    }
  };

  return (
    <div 
      className={`
        fixed 
        bottom-4 right-4
        sm:bottom-6 sm:right-6
        lg:bottom-8 lg:right-8
        z-50 
        transition-all 
        duration-700 
        ease-out
        ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}
      `}
    >
      {/* Tooltip Mejorado - Mobile First */}
      <div 
        className={`
          absolute 
          bottom-full 
          right-0 
          mb-3 sm:mb-4
          transition-all 
          duration-300 
          ease-out
          ${(isHovered || showTooltip) ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95'}
        `}
      >
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-2xl border border-green-500/30 backdrop-blur-sm max-w-[200px] sm:max-w-none">
          {/* Contenido del tooltip */}
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400">
              <StarIcon />
            </div>
            <p className="text-xs sm:text-sm font-bold text-amber-300">¿Necesitas ayuda?</p>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 mb-1">Chatea con nosotros</p>
          <p className="text-xs text-green-400 font-medium">Respuesta inmediata ⚡</p>
          
          {/* Flecha del tooltip */}
          <div className="absolute bottom-0 right-3 sm:right-4 transform translate-y-full">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-slate-800"></div>
          </div>
          
          {/* Brillo sutil */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl sm:rounded-2xl pointer-events-none"></div>
        </div>
      </div>

      {/* Main Button - Mobile First */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block touch-manipulation"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulse Animation Rings - Responsivos */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 sm:opacity-25 lg:opacity-30 animate-ping"></div>
        <div 
          className="absolute inset-0 rounded-full bg-green-400 opacity-15 sm:opacity-20 animate-ping" 
          style={{animationDelay: '0.5s', animationDuration: '2s'}}
        ></div>
        <div 
          className="absolute inset-0 rounded-full bg-green-600 opacity-10 sm:opacity-15 animate-ping" 
          style={{animationDelay: '1s', animationDuration: '3s'}}
        ></div>
        
        {/* Button Principal - Tamaños Responsivos */}
        <div className="
          relative 
          w-14 h-14
          sm:w-16 sm:h-16
          lg:w-18 lg:h-18
          bg-gradient-to-br 
          from-green-500 
          via-green-600
          to-green-700
          hover:from-green-400 
          hover:via-green-500
          hover:to-green-600 
          rounded-full 
          flex 
          items-center 
          justify-center 
          shadow-2xl 
          transform 
          group-hover:scale-110 
          group-active:scale-95
          transition-all 
          duration-300 
          border-3 sm:border-4 
          border-white/20
          hover:border-white/30
          hover:shadow-green-500/50
        ">
          <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:scale-110 transition-transform duration-300">
            <WhatsAppIcon />
          </div>
          
          {/* Shine effect mejorado */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
        </div>

        {/* Notification Badge Mejorado */}
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg animate-bounce border border-white/30">
          <span className="text-xs font-bold text-white">!</span>
        </div>

        {/* Badge de "Nuevo" */}
        <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg">
          <span className="text-xs font-bold text-white">24/7</span>
        </div>
      </a>

      {/* Background Glow Mejorado */}
      <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-15 sm:opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10 transform scale-150"></div>
      
      {/* Secondary Glow */}
      <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-10 sm:opacity-15 group-hover:opacity-25 transition-opacity duration-500 -z-20 transform scale-200"></div>

      {/* Ripple Effect en Click */}
      <div className="absolute inset-0 rounded-full bg-green-300 opacity-0 group-active:opacity-40 group-active:scale-150 transition-all duration-200 -z-10"></div>
    </div>
  );
};

export default FloatingWhatsAppButton;