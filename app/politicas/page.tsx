// app/politicas/page.tsx
/* ---------------------------------------------------------------------------
   PoliticasPage.tsx – Página de políticas, garantías y envíos (Mobile First Optimizada)
   Mejoras aplicadas:
   1. ✅ Mobile First perfecto con diseño responsivo escalable (300px → 4K)
   2. ✅ Modernización visual completa con gradientes y animaciones
   3. ✅ Corrección de todos los errores visuales y de comportamiento
   4. ✅ Preservación de funcionalidades existentes
   5. ✅ Prácticas profesionales de responsive design
--------------------------------------------------------------------------- */

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

const PoliticasPage: React.FC = () => {
  // Estados optimizados
  const [activeTab, setActiveTab] = useState<'politicas' | 'cuidado' | 'envios'>('politicas');
  const [isLoading, setIsLoading] = useState(true);

  /* ---------------- SEO dinámico optimizado ---------------- */
  useEffect(() => {
    document.title = `Políticas y Garantías ${CURRENT_YEAR} | LEDER LIZ - ${YEARS_IN_BUSINESS} años de experiencia`;

    const metaDesc = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute(
      'content',
      `Conoce nuestras políticas de garantía de ${COMPANY_INFO.warranty.period}, cuidado del cuero premium y condiciones de servicio. ${YEARS_IN_BUSINESS} años de experiencia en artesanía de cuero genuino en Colombia.`
    );
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const metaKeywords = document.querySelector('meta[name="keywords"]') ?? document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute(
      'content',
      'políticas, garantías, cuero genuino, cambios, devoluciones, LEDER LIZ, artesanía, Colombia'
    );
    if (!metaKeywords.parentNode) document.head.appendChild(metaKeywords);

    // Simular carga para mejor UX
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  /* ---------------- Datos optimizados con mejores descripciones ---------------- */
  const warrantyPolicies = [
    { 
      id: 1, 
      title: 'Disponibilidad de Colores', 
      description: 'Los colores mostrados en la web son referenciales. La disponibilidad puede variar según el stock actual. Te contactaremos para confirmar opciones disponibles.', 
      icon: '🎨',
      category: 'Productos'
    },
    { 
      id: 2, 
      title: 'Tiempos de Entrega Estimados', 
      description: 'Las entregas están sujetas a los tiempos de las empresas transportadoras. Proporcionamos estimaciones basadas en nuestra experiencia histórica.', 
      icon: '⏰',
      category: 'Logística'
    },
    { 
      id: 3, 
      title: 'Inspección en Entrega', 
      description: 'Verifica el estado del empaque al recibir. Si encuentras daños, regístralo como observación en la guía del transportador y contáctanos inmediatamente.', 
      icon: '📦',
      category: 'Entrega'
    },
    { 
      id: 4, 
      title: 'Plazo para Cambios', 
      description: 'Tienes hasta 5 días hábiles desde la fecha de entrega para solicitar cambios. El producto debe estar en perfectas condiciones y con etiquetas originales.', 
      icon: '🔄',
      category: 'Cambios'
    },
    { 
      id: 5, 
      title: 'Política de Reembolsos', 
      description: 'Los cambios se realizan por productos de igual o mayor valor. Si eliges un producto más costoso, pagas la diferencia correspondiente.', 
      icon: '💰',
      category: 'Pagos'
    },
    { 
      id: 6, 
      title: 'Costo de Devolución', 
      description: 'Tienes derecho a solicitar que cubramos el costo del envío de devolución según las condiciones establecidas.', 
      icon: '↩️',
      category: 'Devoluciones'
    },
    { 
      id: 7, 
      title: 'Envío Gratuito Nacional', 
      description: `Disfruta de envío gratis en todo Colombia por compras superiores a ${formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}. ¡Aprovecha esta oportunidad!`, 
      icon: '🚚',
      category: 'Beneficios'
    },
    { 
      id: 8, 
      title: 'Tarifas de Envío', 
      description: 'Para compras menores al mínimo de envío gratis, el costo oscila entre $10.000-$15.000 según la ubicación de destino.', 
      icon: '💵',
      category: 'Costos'
    },
    { 
      id: 9, 
      title: 'Servicio de Mantenimiento', 
      description: 'Ofrecemos servicios de mantenimiento y restauración. El costo varía según el tipo de producto y trabajo requerido. Solicita tu cotización.', 
      icon: '🔧',
      category: 'Servicios'
    }
  ];

  const careRecommendations = [
    { 
      id: 1, 
      title: 'Hidratación Regular', 
      description: 'Aplica cremas especializadas para cuero cada 2-3 meses para mantener la flexibilidad y prevenir grietas. Usa productos de calidad premium.', 
      icon: '💧',
      priority: 'Alta'
    },
    { 
      id: 2, 
      title: 'Limpieza Especializada', 
      description: 'Utiliza únicamente productos hidratantes específicos para cuero. Estos mantienen el brillo natural y la suavidad característica del material.', 
      icon: '✨',
      priority: 'Alta'
    },
    { 
      id: 3, 
      title: 'Protección Química', 
      description: 'Evita el contacto con perfumes, alcohol, acetona y otros solventes. Estas sustancias pueden causar decoloración permanente o daños irreversibles.', 
      icon: '🚫',
      priority: 'Crítica'
    },
    { 
      id: 4, 
      title: 'Cuidado Manual Exclusivo', 
      description: 'Nunca laves productos de cuero en lavadora o con agua directa. El cuero requiere técnicas de limpieza manual especializadas para preservar su integridad.', 
      icon: '🚿',
      priority: 'Crítica'
    },
    { 
      id: 5, 
      title: 'Secado Adecuado', 
      description: 'Si el producto se moja, sécalo inmediatamente en la sombra a temperatura ambiente. Nunca uses secadores, radiadores o exposición solar directa.', 
      icon: '☂️',
      priority: 'Media'
    },
    { 
      id: 6, 
      title: 'Almacenamiento Correcto', 
      description: 'Guarda tus productos en lugares secos, ventilados y protegidos de la luz directa. Usa fundas de tela transpirable para mantener la forma.', 
      icon: '🏠',
      priority: 'Media'
    }
  ];

  const noChangeReasons = [
    { 
      id: 1, 
      title: 'Daños por Tintas o Químicos', 
      description: 'Manchas de tinta, bolígrafo, decoloraciones causadas por solventes, perfumes o productos de limpieza inadecuados no están cubiertas por la garantía.', 
      icon: '🖋️',
      severity: 'Alto'
    },
    { 
      id: 2, 
      title: 'Mal Uso del Producto', 
      description: 'El uso inadecuado, sobrecarga de peso, exposición a condiciones extremas o manejo incorrecto que cause deformaciones no tiene cobertura.', 
      icon: '⚠️',
      severity: 'Alto'
    },
    { 
      id: 3, 
      title: 'Productos en Promoción', 
      description: 'Los artículos adquiridos con descuentos especiales, ofertas o promociones tienen condiciones particulares y generalmente no admiten cambios.', 
      icon: '🏷️',
      severity: 'Medio'
    },
    { 
      id: 4, 
      title: 'Desgaste Natural', 
      description: 'El desgaste normal por uso prolongado, cambios de color naturales del cuero o pequeñas marcas por uso cotidiano no constituyen defectos.', 
      icon: '📅',
      severity: 'Bajo'
    }
  ];

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 flex items-center justify-center p-4">
        <div className="text-center max-w-sm mx-auto">
          <div className="relative mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-amber-600/30 rounded-full mx-auto animate-pulse"></div>
          </div>
          <h2 className="text-amber-400 text-lg sm:text-xl font-bold mb-2">LEDER LIZ</h2>
          <p className="text-amber-300/80 text-base sm:text-lg font-medium">Cargando políticas y garantías...</p>
          <div className="mt-4 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- Render Optimizado ---------------- */
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
      {/* ---------------- Hero Section Optimizado ---------------- */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 px-3 sm:px-4 lg:px-6">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide15}
            alt="Políticas y Garantías LEDER LIZ"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/85 to-amber-900/95" />
        </div>

        {/* Elementos decorativos */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-4 w-24 h-24 sm:top-16 sm:left-16 sm:w-48 sm:h-48 lg:top-20 lg:left-20 lg:w-64 lg:h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse" />
          <div className="absolute bottom-16 right-4 w-32 h-32 sm:bottom-32 sm:right-16 sm:w-64 sm:h-64 lg:bottom-40 lg:right-20 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }} />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl text-center">
          {/* Logo y encabezado optimizado */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transform hover:scale-110 transition-transform duration-300">
                <Image 
                  src={GENERAL_IMAGES.logo} 
                  alt="LEDER LIZ Logo" 
                  fill 
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" 
                  sizes="80px" 
                />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight">
              POLÍTICAS & GARANTÍAS
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200">
                LEDER LIZ
              </span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-amber-300 bg-slate-800/50 px-2 sm:px-3 py-1 rounded-lg backdrop-blur-sm">
                {CURRENT_YEAR}
              </span>
            </div>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              <span className="text-amber-400 font-semibold">{YEARS_IN_BUSINESS} años</span> comprometidos con la
              <span className="text-amber-400 font-semibold"> excelencia en cuero genuino</span> y el servicio excepcional
            </p>
          </div>

          {/* Tabs optimizados para mobile */}
          <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-8 lg:mb-12 bg-slate-800/60 backdrop-blur-sm rounded-2xl p-2 max-w-4xl mx-auto border border-amber-900/30">
            {[
              { key: 'politicas', label: 'Políticas & Garantía', icon: '📋', shortLabel: 'Políticas' },
              { key: 'cuidado', label: 'Cuidado del Cuero', icon: '🧴', shortLabel: 'Cuidado' },
              { key: 'envios', label: 'Envíos & Cambios', icon: '🚚', shortLabel: 'Envíos' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 touch-manipulation transform hover:scale-[1.02] ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-xl border border-amber-500/50'
                    : 'text-gray-300 hover:text-amber-300 hover:bg-slate-700/50 border border-transparent'
                }`}
              >
                <span className="text-lg sm:text-xl">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            ))}
          </div>

          {/* Indicadores de garantía */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="px-3 sm:px-4 py-2 sm:py-3 bg-green-600/20 border border-green-500/30 rounded-xl text-green-300 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 hover:bg-green-600/30 transition-colors duration-300">
              <span>🛡️</span>
              <span>{COMPANY_INFO.warranty.period} de garantía</span>
            </div>
            <div className="px-3 sm:px-4 py-2 sm:py-3 bg-blue-600/20 border border-blue-500/30 rounded-xl text-blue-300 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 hover:bg-blue-600/30 transition-colors duration-300">
              <span>🚚</span>
              <span>Envío gratis {'>'}$250k</span>
            </div>
            <div className="px-3 sm:px-4 py-2 sm:py-3 bg-amber-600/20 border border-amber-500/30 rounded-xl text-amber-300 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 hover:bg-amber-600/30 transition-colors duration-300">
              <span>🏆</span>
              <span>Cuero 100% genuino</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Contenido Principal ---------------- */}
      <section className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* --- Políticas & Garantía --- */}
          {activeTab === 'politicas' && (
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-amber-100">
                  POLÍTICAS Y GARANTÍA
                </h2>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-4xl mx-auto px-2 sm:px-4">
                  Conoce nuestras políticas de garantía, cambios y condiciones de servicio para una experiencia transparente
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {warrantyPolicies.map((policy) => (
                  <div
                    key={policy.id}
                    className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-amber-900/30 rounded-xl sm:rounded-2xl hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group"
                  >
                    <div className="text-center mb-3 sm:mb-4">
                      <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">{policy.icon}</div>
                      <div className="inline-block px-2 sm:px-3 py-1 bg-amber-600/20 text-amber-300 text-xs font-bold rounded-full mb-2 sm:mb-3">
                        {policy.category}
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-amber-200 group-hover:text-amber-300 transition-colors duration-300">
                        {policy.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center">
                      {policy.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sección de exclusiones optimizada */}
              <div className="mt-8 sm:mt-12 lg:mt-16">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center text-red-400">
                  🚫 EXCLUSIONES DE GARANTÍA
                </h3>
                <p className="text-sm sm:text-base text-gray-300 text-center mb-6 sm:mb-8 max-w-3xl mx-auto">
                  Los siguientes casos no están cubiertos por nuestra garantía. Conoce las limitaciones para evitar inconvenientes.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {noChangeReasons.map((reason) => (
                    <div
                      key={reason.id}
                      className="p-4 sm:p-6 bg-gradient-to-br from-red-900/30 to-red-800/30 border border-red-500/30 rounded-xl sm:rounded-2xl hover:border-red-400/50 transition-all duration-500 group"
                    >
                      <div className="text-center mb-3 sm:mb-4">
                        <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
                        <div className={`inline-block px-2 py-1 text-xs font-bold rounded-full mb-2 ${
                          reason.severity === 'Alto' ? 'bg-red-600/30 text-red-300' :
                          reason.severity === 'Medio' ? 'bg-yellow-600/30 text-yellow-300' :
                          'bg-orange-600/30 text-orange-300'
                        }`}>
                          Severidad: {reason.severity}
                        </div>
                        <h4 className="text-sm sm:text-base lg:text-lg font-bold text-red-300 group-hover:text-red-200 transition-colors duration-300">
                          {reason.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center">
                        {reason.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* --- Cuidado del Cuero --- */}
          {activeTab === 'cuidado' && (
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-amber-100">
                  CUIDADO DEL CUERO PREMIUM
                </h2>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-4xl mx-auto px-2 sm:px-4">
                  Mantén tus productos de cuero en perfectas condiciones siguiendo estas recomendaciones profesionales
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {careRecommendations.map((rec, idx) => (
                  <div
                    key={rec.id}
                    className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30 rounded-xl sm:rounded-2xl hover:border-green-400/50 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg group-hover:scale-110 transition-transform duration-300">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">{rec.icon}</div>
                        <div className={`inline-block px-2 py-1 text-xs font-bold rounded-full mb-2 sm:mb-3 ${
                          rec.priority === 'Crítica' ? 'bg-red-600/30 text-red-300' :
                          rec.priority === 'Alta' ? 'bg-orange-600/30 text-orange-300' :
                          'bg-yellow-600/30 text-yellow-300'
                        }`}>
                          Prioridad: {rec.priority}
                        </div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-green-300 group-hover:text-green-200 transition-colors duration-300 mb-2 sm:mb-3">
                          {rec.title}
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {rec.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consejos profesionales */}
              <div className="mt-6 sm:mt-8 lg:mt-12 space-y-4 sm:space-y-6">
                <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-2xl sm:rounded-3xl text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💡</div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-300 mb-3 sm:mb-4">Consejo Profesional</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                    El cuero es un material natural que mejora con el tiempo cuando se cuida adecuadamente.
                    Un mantenimiento regular no solo preserva su belleza, sino que
                    <span className="text-amber-400 font-semibold"> extiende significativamente su vida útil</span> y mantiene
                    su valor como inversión en calidad.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl text-center">
                    <div className="text-2xl mb-2">🏆</div>
                    <h4 className="text-blue-300 font-bold mb-2 text-sm sm:text-base">Calidad Premium</h4>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Nuestro cuero premium responde excelentemente al cuidado adecuado
                    </p>
                  </div>
                  <div className="p-4 bg-purple-900/20 border border-purple-500/30 rounded-xl text-center">
                    <div className="text-2xl mb-2">⏱️</div>
                    <h4 className="text-purple-300 font-bold mb-2 text-sm sm:text-base">Durabilidad Extendida</h4>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Con cuidado apropiado, nuestros productos duran décadas
                    </p>
                  </div>
                  <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-xl text-center">
                    <div className="text-2xl mb-2">🌟</div>
                    <h4 className="text-green-300 font-bold mb-2 text-sm sm:text-base">Belleza Atemporal</h4>
                    <p className="text-xs sm:text-sm text-gray-300">
                      El cuero bien cuidado desarrolla una pátina única y hermosa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- Envíos & Cambios --- */}
          {activeTab === 'envios' && (
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-amber-100">
                  ENVÍOS Y POLÍTICA DE CAMBIOS
                </h2>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-4xl mx-auto px-2 sm:px-4">
                  Información detallada sobre tiempos de entrega, costos de envío y procedimientos de cambio
                </p>
              </div>

              {/* Grid principal de información */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                {/* Información de Envíos */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-300 mb-4 sm:mb-6 flex items-center space-x-3">
                    <span className="text-2xl sm:text-3xl">🚚</span>
                    <span>Información de Envíos</span>
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { 
                        title: 'Bogotá y Alrededores', 
                        desc: COMPANY_INFO.shipping.local, 
                        bg: 'blue',
                        icon: '🏙️',
                        detail: 'Entrega el mismo día en horarios específicos'
                      },
                      { 
                        title: 'Nacional', 
                        desc: COMPANY_INFO.shipping.national, 
                        bg: 'blue',
                        icon: '🇨🇴',
                        detail: 'Cobertura en todas las ciudades principales'
                      },
                      { 
                        title: 'Envío Gratis', 
                        desc: `Compras superiores a ${formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}`, 
                        bg: 'green',
                        icon: '🎉',
                        detail: 'Promoción permanente en todo el país'
                      },
                      { 
                        title: 'Costo de Envío', 
                        desc: '$10.000 - $15.000 para compras menores', 
                        bg: 'orange',
                        icon: '💰',
                        detail: 'Varía según la distancia y zona de entrega'
                      }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`p-4 sm:p-6 bg-gradient-to-br from-${item.bg}-900/30 to-${item.bg}-800/30 border border-${item.bg}-500/30 rounded-xl sm:rounded-2xl hover:border-${item.bg}-400/50 transition-all duration-500 group`}
                      >
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className={`text-base sm:text-lg lg:text-xl font-bold text-${item.bg}-300 mb-2 group-hover:text-${item.bg}-200 transition-colors duration-300`}>
                              {item.title}
                            </h4>
                            <p className="text-gray-300 text-sm sm:text-base mb-2 group-hover:text-gray-200 transition-colors duration-300">
                              {item.desc}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Política de Cambios */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-300 mb-4 sm:mb-6 flex items-center space-x-3">
                    <span className="text-2xl sm:text-3xl">🔄</span>
                    <span>Política de Cambios</span>
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { 
                        title: 'Plazo Máximo', 
                        desc: 'Hasta 5 días hábiles desde la entrega',
                        icon: '⏰',
                        detail: 'Se cuenta desde la fecha de recepción del producto'
                      },
                      { 
                        title: 'Condiciones del Producto', 
                        desc: 'Sin usar, con etiquetas y empaque original',
                        icon: '📦',
                        detail: 'Debe mantener todas las características originales'
                      },
                      { 
                        title: 'Tipos de Cambio', 
                        desc: 'Por valor igual o superior, pagando diferencia',
                        icon: '💱',
                        detail: 'No se realizan devoluciones en efectivo'
                      },
                      { 
                        title: 'Gestión de Envío', 
                        desc: 'Cobertura del costo según condiciones',
                        icon: '📋',
                        detail: 'Evaluamos cada caso específicamente'
                      }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/30 rounded-xl sm:rounded-2xl hover:border-purple-400/50 transition-all duration-500 group"
                      >
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base sm:text-lg lg:text-xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors duration-300">
                              {item.title}
                            </h4>
                            <p className="text-gray-300 text-sm sm:text-base mb-2 group-hover:text-gray-200 transition-colors duration-300">
                              {item.desc}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Proceso de cambio paso a paso */}
              <div className="mt-8 sm:mt-12 lg:mt-16">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-300 mb-6 sm:mb-8 text-center">
                  📋 Proceso de Cambio Paso a Paso
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { 
                      step: 1, 
                      title: 'Contacto Inicial', 
                      desc: 'Comunícate dentro de 5 días hábiles vía WhatsApp o email', 
                      icon: '📞',
                      color: 'blue'
                    },
                    { 
                      step: 2, 
                      title: 'Evaluación Técnica', 
                      desc: 'Nuestro equipo verifica el estado y condiciones del producto', 
                      icon: '🔍',
                      color: 'green'
                    },
                    { 
                      step: 3, 
                      title: 'Aprobación', 
                      desc: 'Confirmamos la viabilidad del cambio y opciones disponibles', 
                      icon: '✅',
                      color: 'purple'
                    },
                    { 
                      step: 4, 
                      title: 'Intercambio', 
                      desc: 'Coordinamos la logística para realizar el cambio del producto', 
                      icon: '🔄',
                      color: 'amber'
                    }
                  ].map((p) => (
                    <div
                      key={p.step}
                      className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-amber-900/30 rounded-xl sm:rounded-2xl hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group"
                    >
                      <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-${p.color}-500 to-${p.color}-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base mx-auto mb-3 sm:mb-4 shadow-lg`}>
                        {p.step}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-amber-200 mb-2 sm:mb-3 group-hover:text-amber-300 transition-colors duration-300">
                        {p.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Información adicional */}
              <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl sm:rounded-2xl text-center">
                  <div className="text-3xl sm:text-4xl mb-3">📱</div>
                  <h4 className="text-blue-300 font-bold mb-2 sm:mb-3 text-sm sm:text-base">Comunicación Directa</h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    WhatsApp disponible 24/7 para consultas urgentes sobre envíos
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl sm:rounded-2xl text-center">
                  <div className="text-3xl sm:text-4xl mb-3">🔒</div>
                  <h4 className="text-green-300 font-bold mb-2 sm:mb-3 text-sm sm:text-base">Seguridad Garantizada</h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Empaques especiales que protegen tu producto durante el transporte
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-xl sm:rounded-2xl text-center">
                  <div className="text-3xl sm:text-4xl mb-3">🎯</div>
                  <h4 className="text-purple-300 font-bold mb-2 sm:mb-3 text-sm sm:text-base">Seguimiento Completo</h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Rastrea tu pedido en tiempo real desde el envío hasta la entrega
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------------- CTA Contacto Optimizado ---------------- */}
      <section className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 relative">
        <div className="absolute inset-0">
          <Image 
            src={CAROUSEL_IMAGES.slide19} 
            alt="Contacto LEDER LIZ" 
            fill 
            className="object-cover opacity-20" 
            sizes="100vw" 
          />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-amber-900/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
            <div className="mb-4 sm:mb-6">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto">
                <Image 
                  src={GENERAL_IMAGES.logo} 
                  alt="LEDER LIZ Logo" 
                  fill 
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" 
                  sizes="64px" 
                />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-amber-100">
              ¿Tienes dudas sobre nuestras políticas?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 sm:px-4">
              Nuestro equipo especializado está disponible para resolver todas tus consultas sobre garantías, envíos y cuidado del cuero
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-4xl mx-auto mb-6 sm:mb-8">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 min-h-[48px] sm:min-h-[56px] touch-manipulation transform hover:scale-[1.02] group"
              >
                <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">📱</span>
                <span className="text-sm sm:text-base">WhatsApp Directo</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 min-h-[48px] sm:min-h-[56px] touch-manipulation transform hover:scale-[1.02] group"
              >
                <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">📞</span>
                <span className="text-sm sm:text-base">Llamar Ahora</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Consulta sobre políticas y garantías`}
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 min-h-[48px] sm:min-h-[56px] touch-manipulation transform hover:scale-[1.02] group"
              >
                <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">✉️</span>
                <span className="text-sm sm:text-base">Enviar Email</span>
              </a>
            </div>

            {/* Horarios de atención optimizados */}
            <div className="p-3 sm:p-4 lg:p-6 bg-slate-700/40 rounded-xl backdrop-blur-sm">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-amber-300 mb-3 sm:mb-4 flex items-center justify-center space-x-2">
                <span>🕒</span>
                <span>Horarios de Atención</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm lg:text-base text-gray-300">
                <div className="text-center p-2 sm:p-3 bg-slate-800/50 rounded-lg">
                  <span className="font-semibold text-blue-300">Lunes - Viernes:</span>
                  <br />
                  <span>{COMPANY_INFO.schedule.monday_friday}</span>
                </div>
                <div className="text-center p-2 sm:p-3 bg-slate-800/50 rounded-lg">
                  <span className="font-semibold text-green-300">Sábados:</span>
                  <br />
                  <span>{COMPANY_INFO.schedule.saturday}</span>
                </div>
                <div className="text-center p-2 sm:p-3 bg-slate-800/50 rounded-lg">
                  <span className="font-semibold text-gray-400">Domingos:</span>
                  <br />
                  <span>{COMPANY_INFO.schedule.sunday}</span>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 text-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>WhatsApp disponible 24/7 para emergencias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Footer Optimizado ---------------- */}
      <footer className="py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6 bg-slate-900/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
            <div className="text-center sm:text-left">
              <h5 className="text-amber-300 font-bold mb-2 text-sm sm:text-base">Contacto</h5>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p>{COMPANY_INFO.phone}</p>
                <p>{COMPANY_INFO.email}</p>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h5 className="text-amber-300 font-bold mb-2 text-sm sm:text-base">Ubicación</h5>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p>Bogotá, Colombia</p>
                <p>Entregas a domicilio</p>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h5 className="text-amber-300 font-bold mb-2 text-sm sm:text-base">Garantía</h5>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p>{COMPANY_INFO.warranty.period}</p>
                <p>Cuero 100% genuino</p>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h5 className="text-amber-300 font-bold mb-2 text-sm sm:text-base">Experiencia</h5>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p>{YEARS_IN_BUSINESS} años</p>
                <p>Artesanía tradicional</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-900/30 pt-4 sm:pt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © {CURRENT_YEAR}{' '}
              <span className="text-amber-400 font-semibold">LEDER LIZ</span> - Elegancia en Cuero Premium •{' '}
              {YEARS_IN_BUSINESS} años de experiencia artesanal • Bogotá, Colombia
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Todos los derechos reservados • Políticas actualizadas en {CURRENT_YEAR}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PoliticasPage;