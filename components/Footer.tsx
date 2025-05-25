"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { GENERAL_IMAGES, UI_ICONS, COMPANY_INFO, CURRENT_YEAR, YEARS_IN_BUSINESS } from '../data/productsData';

// SVG Icons optimizados
const FacebookIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const LocationIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
  </svg>
);

const HeartIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500" />
      
      {/* Background Effects - Mobile First */}
      <div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03] md:opacity-[0.04] lg:opacity-[0.05] pointer-events-none">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '1000ms'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '2000ms'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          
          {/* Brand Section - Mobile First */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-2xl border border-amber-400/20">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">EC</span>
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent leading-tight">
                  {COMPANY_INFO.fullName}
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">Bolsos de Lujo Artesanales</p>
                <p className="text-amber-300 text-xs sm:text-sm font-medium">{CURRENT_YEAR} • {YEARS_IN_BUSINESS} años de experiencia</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base text-center sm:text-left max-w-md mx-auto sm:mx-0">
              Especialistas en bolsos de cuero auténtico de alta calidad. Combinamos 
              <span className="text-amber-400 font-semibold"> artesanía tradicional colombiana</span> con 
              diseño contemporáneo para crear piezas únicas con 
              <span className="text-green-400 font-semibold"> garantía de {COMPANY_INFO.warranty.period}</span>.
            </p>

            {/* Garantía y Calidad */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center space-x-2 px-3 py-2 bg-green-600/20 border border-green-500/30 rounded-lg backdrop-blur-sm">
                <div className="w-4 h-4 text-green-400">
                  <ShieldCheckIcon />
                </div>
                <span className="text-green-300 text-sm font-medium">Garantía {COMPANY_INFO.warranty.period}</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-amber-600/20 border border-amber-500/30 rounded-lg backdrop-blur-sm">
                <span className="text-amber-400 text-sm">🏆</span>
                <span className="text-amber-300 text-sm font-medium">{YEARS_IN_BUSINESS} años de experiencia</span>
              </div>
            </div>

            {/* Social Media - Mobile First */}
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {[
                { 
                  icon: FacebookIcon, 
                  href: "https://facebook.com/eleganciaencuero", 
                  color: "hover:text-blue-400",
                  bgHover: "hover:from-blue-600 hover:to-blue-700"
                },
                { 
                  icon: InstagramIcon, 
                  href: "https://instagram.com/eleganciaencuero", 
                  color: "hover:text-pink-400",
                  bgHover: "hover:from-pink-600 hover:to-purple-600"
                },
                { 
                  icon: WhatsAppIcon, 
                  href: COMPANY_INFO.whatsapp, 
                  color: "hover:text-green-400",
                  bgHover: "hover:from-green-600 hover:to-green-700"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-slate-800/60 to-slate-900/60 ${social.bgHover} rounded-xl lg:rounded-2xl flex items-center justify-center transition-all duration-300 ${social.color} group border border-slate-700/50 hover:border-slate-600/50 shadow-lg hover:shadow-xl transform hover:scale-105 touch-manipulation`}
                  aria-label={`Síguenos en ${social.href.includes('whatsapp') ? 'WhatsApp' : social.href.includes('instagram') ? 'Instagram' : 'Facebook'}`}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform duration-300">
                    <social.icon />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Mobile First */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-amber-100">Enlaces Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "🏠 Inicio", href: "/" },
                { label: "🛍️ Productos", href: "/productos" },
                { label: "👥 Nosotros", href: "/about" },
                { label: "📞 Contacto", href: "/contacto" },
                { label: "🛒 Carrito", href: "/cart" },
                { label: "📋 Políticas", href: "/politicas" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-300 transition-all duration-300 flex items-center justify-center sm:justify-start group text-sm sm:text-base touch-manipulation"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Mobile First */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-amber-100">Contacto</h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                { 
                  icon: PhoneIcon, 
                  title: "WhatsApp", 
                  content: COMPANY_INFO.phone,
                  href: COMPANY_INFO.whatsapp,
                  description: "Atención personalizada"
                },
                { 
                  icon: MailIcon, 
                  title: "Email", 
                  content: COMPANY_INFO.email,
                  href: `mailto:${COMPANY_INFO.email}`,
                  description: "Consultas y pedidos"
                },
                { 
                  icon: LocationIcon, 
                  title: "Ubicación", 
                  content: COMPANY_INFO.location,
                  href: "#",
                  description: "Bogotá, Colombia"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start space-x-3 text-gray-400 hover:text-amber-300 transition-all duration-300 group justify-center sm:justify-start p-2 rounded-lg hover:bg-slate-800/30 touch-manipulation"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mt-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <contact.icon />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">{contact.title}</p>
                    <p className="font-semibold text-sm sm:text-base">{contact.content}</p>
                    <p className="text-xs text-gray-500">{contact.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Schedule Info */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <h4 className="text-amber-300 font-semibold text-sm sm:text-base mb-2">⏰ Horarios de Atención</h4>
              <div className="text-xs sm:text-sm text-gray-400 space-y-1">
                <p>📅 Lunes - Viernes: {COMPANY_INFO.schedule.monday_friday}</p>
                <p>📅 Sábados: {COMPANY_INFO.schedule.saturday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods - Mobile First */}
        <div className="border-t border-gray-800/50 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-center text-amber-100">
            💳 Métodos de Pago Aceptados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { name: "💵 Efectivo", desc: "Pago contra entrega", color: "border-green-500/30" },
              { name: "📱 Nequi", desc: COMPANY_INFO.phone, color: "border-purple-500/30" },
              { name: "💸 Daviplata", desc: COMPANY_INFO.phone, color: "border-red-500/30" },
              { name: "🏦 Transferencia", desc: "Banco Caja Social", color: "border-blue-500/30" }
            ].map((payment, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border ${payment.color} rounded-xl lg:rounded-2xl px-3 py-3 sm:px-4 sm:py-4 text-center hover:border-opacity-70 transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                <p className="font-bold text-amber-200 text-sm sm:text-base mb-1">{payment.name}</p>
                <p className="text-xs sm:text-sm text-gray-400">{payment.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Envío gratis info */}
          <div className="mt-4 sm:mt-6 text-center p-3 sm:p-4 bg-green-600/10 border border-green-500/20 rounded-xl">
            <p className="text-green-300 font-medium text-sm sm:text-base">
              🚚 Envío GRATIS en compras superiores a $250,000
            </p>
          </div>
        </div>

        {/* Newsletter Subscription - Mobile First */}
        <div className="border-t border-gray-800/50 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="max-w-md lg:max-w-lg mx-auto text-center">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-amber-100">
                📧 Newsletter Exclusivo
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Recibe las últimas novedades, ofertas exclusivas y tips de cuidado para tu bolso
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email aquí..."
                required
                className="flex-1 px-4 py-3 sm:py-4 bg-slate-800/60 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 text-sm sm:text-base"
              />
              <button 
                type="submit"
                disabled={isSubscribed}
                className="px-6 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 disabled:from-green-600 disabled:to-green-700 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-sm sm:text-base transform hover:scale-105 disabled:scale-100 touch-manipulation"
              >
                {isSubscribed ? '✅ ¡Suscrito!' : 'Suscribirse'}
              </button>
            </form>
            
            <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
              * No spam. Puedes cancelar en cualquier momento.
            </p>
          </div>
        </div>

        {/* Bottom Section - Mobile First */}
        <div className="border-t border-gray-800/50 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-gray-400">
              <p>© {CURRENT_YEAR} {COMPANY_INFO.fullName}. Todos los derechos reservados.</p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Link href="/politicas" className="hover:text-amber-300 transition-colors duration-300 touch-manipulation">
                  Términos y Condiciones
                </Link>
                <Link href="/politicas" className="hover:text-amber-300 transition-colors duration-300 touch-manipulation">
                  Política de Privacidad
                </Link>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-400">
              <span>Hecho con</span>
              <div className="w-4 h-4 text-red-400 animate-pulse">
                <HeartIcon />
              </div>
              <span>en Colombia 🇨🇴</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              Empresa registrada • Artesanía colombiana premium • Cuero 100% genuino
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500" />
    </footer>
  );
};

export default Footer;