'use client';

import React, { useState } from 'react';

// SVG Icons
const PhoneIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
  </svg>
);

const SendIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
  </svg>
);

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Importar dinámicamente el servicio de email
      const { sendContactEmail } = await import('../../lib/emailService');
      
      // Intentar enviar email usando EmailJS con configuración real
      console.log('📧 Enviando email a lizrincon1693@gmail.com...');
      const emailSent = await sendContactEmail(formData);

      // Generar mensaje de WhatsApp
      const message = `📞 *NUEVO CONTACTO - Elegancia en Cuero*

👤 *Datos del Cliente:*
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}

📋 *Asunto:* ${formData.subject}

💬 *Mensaje:*
${formData.message}

⏰ *Enviado:* ${new Date().toLocaleString('es-CO')}

${emailSent ? '✅ *Email enviado a lizrincon1693@gmail.com*' : '⚠️ *Solo enviado por WhatsApp*'}`;

      const whatsappUrl = `https://wa.me/573142470366?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitted(true);
      
      if (emailSent) {
        console.log('✅ Email enviado exitosamente a Liz!');
      } else {
        console.log('⚠️ Email falló, pero WhatsApp funcionó');
      }
    } catch (error) {
      console.error('❌ Error al procesar el formulario:', error);
      
      // Fallback: solo WhatsApp si todo falla
      const message = `📞 *CONTACTO - Elegancia en Cuero*

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Asunto: ${formData.subject}
Mensaje: ${formData.message}

⚠️ *Solo por WhatsApp (error en email)*`;

      const whatsappUrl = `https://wa.me/573142470366?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white pt-24 pb-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="w-10 h-10 text-white">
                <MailIcon />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
            Contáctanos
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes preguntas sobre nuestros productos? ¿Necesitas asesoría personalizada? 
            <span className="text-amber-400 font-semibold"> Estamos aquí para ayudarte</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-amber-100">Información de Contacto</h2>
            
            <div className="space-y-6 mb-12">
              {[
                {
                  icon: PhoneIcon,
                  title: "Teléfono",
                  content: "+57 314 247 0366",
                  href: "tel:+573142470366",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: WhatsAppIcon,
                  title: "WhatsApp",
                  content: "+57 314 247 0366",
                  href: "https://wa.me/573142470366",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: MailIcon,
                  title: "Email",
                  content: "lizrincon1693@gmail.com",
                  href: "mailto:lizrincon1693@gmail.com",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: LocationIcon,
                  title: "Ubicación",
                  content: "Bogotá, Colombia",
                  href: "#",
                  color: "from-purple-500 to-purple-600"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-8 h-8 text-white">
                      <contact.icon />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {contact.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Horarios */}
            <div className="p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 text-white">
                    <ClockIcon />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-amber-100">Horarios de Atención</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="text-amber-300">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="text-amber-300">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="text-gray-400">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-amber-100">Envíanos un Mensaje</h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-200 font-semibold mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-amber-200 font-semibold mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      placeholder="314 247 0366"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-amber-200 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-amber-200 font-semibold mb-2">
                    Asunto *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="Consulta sobre productos">Consulta sobre productos</option>
                    <option value="Pedido personalizado">Pedido personalizado</option>
                    <option value="Información de envíos">Información de envíos</option>
                    <option value="Soporte post-venta">Soporte post-venta</option>
                    <option value="Colaboraciones">Colaboraciones</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-amber-200 font-semibold mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300 resize-none"
                    rows={6}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner w-6 h-6" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <div className="w-6 h-6">
                        <SendIcon />
                      </div>
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="text-center p-12 bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-3xl">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <div className="w-10 h-10 text-white">
                    <CheckIcon />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-green-400 mb-4">
                  ¡Mensaje Enviado!
                </h3>
                
                <p className="text-xl text-gray-300 mb-8">
                  Gracias por contactarnos. Te responderemos muy pronto.
                </p>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    Enviar Otro Mensaje
                  </button>
                  <a
                    href="https://wa.me/573142470366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <div className="w-5 h-5">
                      <WhatsAppIcon />
                    </div>
                    <span>WhatsApp Directo</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-100">Preguntas Frecuentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "¿Cuánto demora el envío?",
                answer: "Los envíos dentro de Bogotá tardan 1-2 días hábiles. A nivel nacional, entre 3-5 días hábiles."
              },
              {
                question: "¿Los bolsos tienen garantía?",
                answer: "Sí, todos nuestros productos tienen garantía de 6 meses contra defectos de fabricación."
              },
              {
                question: "¿Hacen productos personalizados?",
                answer: "¡Por supuesto! Podemos crear bolsos según tus especificaciones. Contáctanos para más detalles."
              },
              {
                question: "¿Cuáles son los métodos de pago?",
                answer: "Aceptamos efectivo contra entrega, Nequi, Daviplata y transferencias bancarias."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-2xl hover:border-amber-500/50 transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-amber-200 mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-amber-100">
            ¿Prefieres hablar directamente?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está disponible por WhatsApp para brindarte atención personalizada e inmediata.
          </p>
          <a
            href="https://wa.me/573142470366?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20bolsos%20de%20cuero."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 space-x-3"
          >
            <div className="w-6 h-6">
              <WhatsAppIcon />
            </div>
            <span>Chatear por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;