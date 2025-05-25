// app/politicas/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  GENERAL_IMAGES, 
  CAROUSEL_IMAGES,
  COMPANY_INFO,
  CURRENT_YEAR,
  YEARS_IN_BUSINESS,
  formatPrice
} from '../../data/productsData';

// Iconos optimizados
const ShieldIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const TruckIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const LeatherIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const PoliticasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'politicas' | 'cuidado' | 'envios'>('politicas');

  // SEO dinámico usando useEffect
  useEffect(() => {
    // Actualizar el título de la página
    document.title = `Políticas y Garantías ${CURRENT_YEAR} | LEDER LIZ`;
    
    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Conoce nuestras políticas de garantía, cuidado del cuero y condiciones de servicio. ${YEARS_IN_BUSINESS} años de experiencia en artesanía de cuero.`
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = `Conoce nuestras políticas de garantía, cuidado del cuero y condiciones de servicio. ${YEARS_IN_BUSINESS} años de experiencia en artesanía de cuero.`;
      document.head.appendChild(meta);
    }

    // Actualizar meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'políticas, garantías, cuero, cambios, devoluciones, LEDER LIZ');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'políticas, garantías, cuero, cambios, devoluciones, LEDER LIZ';
      document.head.appendChild(meta);
    }
  }, []);

  // Datos de políticas y garantías
  const warrantyPolicies = [
    {
      id: 1,
      title: "Política de Colores",
      description: "No siempre preguntar por tu color de preferencia, no siempre están disponibles los colores exhibidos en la página.",
      icon: "🎨"
    },
    {
      id: 2,
      title: "Tiempos de Entrega",
      description: "Las entregas no se pueden realizar en un horario exacto estamos sujetos a tiempos estimas por la empresa de envíos.",
      icon: "⏰"
    },
    {
      id: 3,
      title: "Daños en Empaque",
      description: "En caso que el producto tenga señales de daño o rupturas en su empaque al momento de la entrega, favor registrarlo en la guía del transportador como una observación y comunicarse.",
      icon: "📦"
    },
    {
      id: 4,
      title: "Tiempo de Cambio",
      description: "Solamente hacer el cambio de nuestros productos el tiempo máximo para solicitar un cambio es de 5 días hábiles, a partir de la fecha de entrega del producto.",
      icon: "🔄"
    },
    {
      id: 5,
      title: "Reembolsos",
      description: "El cliente debe realizarse sobre el mismo valor o superior del producto comprado, pagando el excedente, según sea el caso.",
      icon: "💰"
    },
    {
      id: 6,
      title: "Devoluciones",
      description: "El cliente tiene derecho a solicitar el costo del envío de la devolución.",
      icon: "↩️"
    },
    {
      id: 7,
      title: "Envío Gratis Nacional",
      description: `El envío gratis a nivel nacional, por compras superiores a ${formatPrice(250000)}`,
      icon: "🚚"
    },
    {
      id: 8,
      title: "Envío con Costo",
      description: `Por compras inferiores al valor mencionado, el costo del envío $10.000-15.000`,
      icon: "💵"
    },
    {
      id: 9,
      title: "Mantenimiento",
      description: "Costo del mantenimiento de los productos varía el costo de acorde al producto",
      icon: "🔧"
    }
  ];

  const careRecommendations = [
    {
      id: 1,
      title: "Mantener el cuero hidratado",
      description: "Utiliza cremas especializadas para cuero cada 2-3 meses",
      icon: "💧"
    },
    {
      id: 2,
      title: "Limpiar con cremas especiales",
      description: "Usa productos hidratantes específicos para mantener su brillo y suavidad",
      icon: "✨"
    },
    {
      id: 3,
      title: "Evitar perfumes y alcohol",
      description: "No aplicar sustancias químicas que puedan dañar el cuero",
      icon: "🚫"
    },
    {
      id: 4,
      title: "No lavar en lavadora",
      description: "El cuero requiere cuidado manual especializado",
      icon: "🚿"
    },
    {
      id: 5,
      title: "Proteger de la humedad",
      description: "Si se ha mojado el producto dejarlo secar en la sombra, ya que es una piel tratada",
      icon: "☂️"
    }
  ];

  const noChangeReasons = [
    {
      id: 1,
      title: "Manchas de tinta o bolígrafo",
      description: "Decoloraciones causadas por solventes o limpiadores inadecuados",
      icon: "🖋️"
    },
    {
      id: 2,
      title: "Uso inadecuado",
      description: "El uso inadecuado de los accesorios puede deformarlos, por lo tanto, la garantía no cubre ese tipo de daños",
      icon: "⚠️"
    },
    {
      id: 3,
      title: "Productos en promoción",
      description: "Los productos en promoción o con descuento no tienen cambio",
      icon: "🏷️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide15}
            alt="Políticas y Garantías LEDER LIZ"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-amber-900/90" />
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          {/* Logo y encabezado */}
          <div className="mb-8 sm:mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src={GENERAL_IMAGES.logo}
                  alt="LEDER LIZ Logo"
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              LEDER LIZ
            </h1>
            
            <div className="text-right mb-6">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-200">
                {CURRENT_YEAR}
              </span>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              <span className="text-amber-400 font-semibold">{YEARS_IN_BUSINESS} años</span> comprometidos con la 
              <span className="text-amber-400 font-semibold"> excelencia en cuero genuino</span>
            </p>
          </div>

          {/* Navegación de pestañas */}
          <div className="flex flex-col sm:flex-row justify-center mb-8 sm:mb-12 bg-slate-800/50 rounded-2xl p-2 max-w-2xl mx-auto">
            {[
              { key: 'politicas', label: 'Políticas & Garantía', icon: '📋' },
              { key: 'cuidado', label: 'Cuidado del Cuero', icon: '🧴' },
              { key: 'envios', label: 'Envíos & Cambios', icon: '🚚' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 px-4 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center space-x-2 touch-manipulation ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-amber-300 hover:bg-slate-700/50'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contenido de pestañas */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* Pestaña Políticas y Garantía */}
          {activeTab === 'politicas' && (
            <div className="space-y-8 sm:space-y-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-amber-100">
                  POLÍTICAS Y GARANTÍA
                </h2>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                  Conoce nuestras políticas de garantía, cambios y condiciones de servicio
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {warrantyPolicies.map((policy) => (
                  <div
                    key={policy.id}
                    className="p-4 sm:p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-2xl hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-1 group"
                  >
                    <div className="text-center mb-4">
                      <div className="text-3xl sm:text-4xl mb-3">{policy.icon}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-amber-200 group-hover:text-amber-300 transition-colors duration-300">
                        {policy.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center">
                      {policy.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sección de No se realizan cambios */}
              <div className="mt-12 sm:mt-16">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-red-400">
                  NO SE REALIZAN CAMBIOS POR:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {noChangeReasons.map((reason) => (
                    <div
                      key={reason.id}
                      className="p-4 sm:p-6 bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-2xl hover:border-red-400/50 transition-all duration-500 group"
                    >
                      <div className="text-center mb-4">
                        <div className="text-3xl sm:text-4xl mb-3">{reason.icon}</div>
                        <h4 className="text-lg sm:text-xl font-bold text-red-300 group-hover:text-red-200 transition-colors duration-300">
                          {reason.title}
                        </h4>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center">
                        {reason.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Pestaña Cuidado del Cuero */}
          {activeTab === 'cuidado' && (
            <div className="space-y-8 sm:space-y-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-amber-100">
                  RECOMENDACIONES PARA EL USO Y CUIDADO DEL CUERO
                </h2>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                  Mantén tus productos de cuero en perfecto estado siguiendo estas recomendaciones
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {careRecommendations.map((recommendation, index) => (
                  <div
                    key={recommendation.id}
                    className="p-4 sm:p-6 bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-2xl hover:border-green-400/50 transition-all duration-500 transform hover:-translate-y-1 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl mb-3">{recommendation.icon}</div>
                        <h3 className="text-lg sm:text-xl font-bold text-green-300 group-hover:text-green-200 transition-colors duration-300 mb-3">
                          {recommendation.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {recommendation.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consejo especial */}
              <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-3xl text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl sm:text-2xl font-bold text-amber-300 mb-4">
                  Consejo Profesional
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  El cuero es un material natural que mejora con el tiempo cuando se cuida adecuadamente. 
                  Un mantenimiento regular no solo preserva su belleza, sino que también 
                  <span className="text-amber-400 font-semibold"> extiende significativamente su vida útil</span>.
                </p>
              </div>
            </div>
          )}

          {/* Pestaña Envíos y Cambios */}
          {activeTab === 'envios' && (
            <div className="space-y-8 sm:space-y-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-amber-100">
                  ENVÍOS Y POLÍTICA DE CAMBIOS
                </h2>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                  Información detallada sobre tiempos de entrega, costos de envío y procedimientos de cambio
                </p>
              </div>

              {/* Información de envíos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-300 mb-6">
                    🚚 Información de Envíos
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-2xl">
                      <h4 className="text-lg font-bold text-blue-300 mb-2">Bogotá y Alrededores</h4>
                      <p className="text-gray-300">{COMPANY_INFO.shipping.local}</p>
                    </div>
                    
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-2xl">
                      <h4 className="text-lg font-bold text-blue-300 mb-2">Nacional</h4>
                      <p className="text-gray-300">{COMPANY_INFO.shipping.national}</p>
                    </div>
                    
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-2xl">
                      <h4 className="text-lg font-bold text-green-300 mb-2">Envío Gratis</h4>
                      <p className="text-gray-300">
                        Compras superiores a {formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}
                      </p>
                    </div>
                    
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-orange-900/20 to-orange-800/20 border border-orange-500/30 rounded-2xl">
                      <h4 className="text-lg font-bold text-orange-300 mb-2">Costo de Envío</h4>
                      <p className="text-gray-300">$10.000 - $15.000 para compras menores</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-300 mb-6">
                    🔄 Política de Cambios
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-2xl">
                      <h4 className="text-lg font-bold text-purple-300 mb-2">Tiempo Límite</h4>
                      <p className="text-gray-300">Máximo 5 días hábiles desde la entrega</p>
                    </div>
                    
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-2xl">
                      <h4 className="text-lg font-bold text-purple-300 mb-2">Condiciones</h4>
                      <p className="text-gray-300">Producto sin usar, con etiquetas originales</p>
                    </div>
                    
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-2xl">
                      <h4 className="text-lg font-bold text-purple-300 mb-2">Reembolsos</h4>
                      <p className="text-gray-300">Cambio por valor igual o superior, pagando diferencia</p>
                    </div>
                    
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-2xl">
                      <h4 className="text-lg font-bold text-purple-300 mb-2">Costo de Devolución</h4>
                      <p className="text-gray-300">El cliente puede solicitar cobertura del envío</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proceso de cambio */}
              <div className="mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-amber-300 mb-6 text-center">
                  📋 Proceso de Cambio Paso a Paso
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { step: 1, title: "Contacto", desc: "Comunícate dentro de 5 días hábiles", icon: "📞" },
                    { step: 2, title: "Evaluación", desc: "Verificamos estado del producto", icon: "🔍" },
                    { step: 3, title: "Aprobación", desc: "Confirmamos viabilidad del cambio", icon: "✅" },
                    { step: 4, title: "Intercambio", desc: "Realizamos el cambio del producto", icon: "🔄" }
                  ].map((process) => (
                    <div key={process.step} className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-amber-900/30 rounded-2xl hover:border-amber-500/50 transition-all duration-500">
                      <div className="text-3xl mb-3">{process.icon}</div>
                      <div className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                        {process.step}
                      </div>
                      <h4 className="text-lg font-bold text-amber-200 mb-2">{process.title}</h4>
                      <p className="text-sm text-gray-300">{process.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide19}
            alt="Contacto LEDER LIZ"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-3xl p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-100">
              ¿Tienes dudas sobre nuestras políticas?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
              Nuestro equipo está disponible para resolver todas tus consultas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 min-h-[56px] touch-manipulation"
              >
                <span>📱</span>
                <span>WhatsApp</span>
              </a>
              
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 min-h-[56px] touch-manipulation"
              >
                <span>📞</span>
                <span>Llamar</span>
              </a>
              
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 min-h-[56px] touch-manipulation"
              >
                <span>✉️</span>
                <span>Email</span>
              </a>
            </div>

            {/* Horarios */}
            <div className="mt-6 p-4 bg-slate-700/30 rounded-xl">
              <h4 className="text-lg font-bold text-amber-300 mb-2">Horarios de Atención</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p><span className="font-medium">Lun-Vie:</span> {COMPANY_INFO.schedule.monday_friday}</p>
                <p><span className="font-medium">Sábado:</span> {COMPANY_INFO.schedule.saturday}</p>
                <p><span className="font-medium">Domingo:</span> {COMPANY_INFO.schedule.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer con año */}
      <footer className="py-6 px-4 sm:px-6 bg-slate-900/90 text-center">
        <div className="container mx-auto">
          <p className="text-gray-400 text-sm sm:text-base">
            © {CURRENT_YEAR} <span className="text-amber-400 font-semibold">LEDER LIZ</span> - 
            Elegancia en Cuero • {YEARS_IN_BUSINESS} años de experiencia • 
            Bogotá, Colombia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PoliticasPage;