"use client";

import React from 'react';
import Link from 'next/link';

// SVG Icons
const FacebookIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.566-3.239-1.469-.316-.36-.316-.889 0-1.249.316-.36.829-.36 1.145 0 .474.541 1.163.862 1.893.862.73 0 1.419-.321 1.893-.862.316-.36.829-.36 1.145 0 .316.36.316.889 0 1.249-.791.903-1.942 1.469-3.239 1.469z"/>
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-2xl font-bold text-white">EC</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  Elegancia en Cuero
                </h2>
                <p className="text-gray-400">Bolsos de Lujo Artesanales</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Especialistas en bolsos de cuero auténtico de alta calidad. Combinamos 
              <span className="text-amber-400 font-semibold"> artesanía tradicional</span> con 
              diseño contemporáneo para crear piezas únicas que perduran en el tiempo.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: FacebookIcon, href: "#", color: "hover:text-blue-400" },
                { icon: InstagramIcon, href: "#", color: "hover:text-pink-400" },
                { icon: WhatsAppIcon, href: "#", color: "hover:text-green-400" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} group`}
                >
                  <div className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                    <social.icon />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-100">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/productos" },
                { label: "Nosotros", href: "/about" },
                { label: "Contacto", href: "/contacto" },
                { label: "Carrito", href: "/cart" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-100">Contacto</h3>
            <div className="space-y-4">
              {[
                { 
                  icon: PhoneIcon, 
                  title: "Teléfono", 
                  content: "+57 314 247 0366",
                  href: "tel:+573142470366"
                },
                { 
                  icon: MailIcon, 
                  title: "Email", 
                  content: "lizrincon1693@gmail.com",
                  href: "mailto:lizrincon1693@gmail.com"
                },
                { 
                  icon: LocationIcon, 
                  title: "Ubicación", 
                  content: "Bogotá, Colombia",
                  href: "#"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-start space-x-3 text-gray-400 hover:text-amber-300 transition-colors duration-300 group"
                >
                  <div className="w-5 h-5 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{contact.title}</p>
                    <p className="font-medium">{contact.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-center text-amber-100">
            Métodos de Pago Aceptados
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { name: "Efectivo", desc: "Pago contra entrega" },
              { name: "Nequi", desc: "314 247 0366" },
              { name: "Daviplata", desc: "314 247 0366" },
              { name: "Banco Caja Social", desc: "Cuenta 24138619413" }
            ].map((payment, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-xl px-4 py-3 text-center hover:border-amber-500/50 transition-all duration-300"
              >
                <p className="font-semibold text-amber-200">{payment.name}</p>
                <p className="text-xs text-gray-400">{payment.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold mb-4 text-amber-100">
              Suscríbete a nuestro Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Recibe las últimas novedades y ofertas exclusivas
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-slate-800/60 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>© {currentYear} Elegancia en Cuero. Todos los derechos reservados.</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-amber-300 transition-colors duration-300">
                  Términos y Condiciones
                </Link>
                <Link href="#" className="hover:text-amber-300 transition-colors duration-300">
                  Política de Privacidad
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Hecho con</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span>en Colombia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500" />
    </footer>
  );
};

export default Footer;