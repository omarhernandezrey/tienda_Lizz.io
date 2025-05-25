'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { 
  GENERAL_IMAGES, 
  CAROUSEL_IMAGES,
  getOptimizedImage 
} from '../../data/productsData';

// Interfaces optimizadas
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ComponentType;
  title: string;
  content: string;
  href: string;
  color: string;
  description?: string;
}

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

// SVG Icons optimizados con mejor accesibilidad
const PhoneIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" aria-label="WhatsApp">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
  </svg>
);

const SendIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
  </svg>
);

const LoadingSpinner = () => (
  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" aria-label="Cargando" />
);

const ContactoPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Validación optimizada
  const validateForm = useCallback((data: FormData): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    
    if (!data.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!data.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Email inválido';
    if (!data.phone.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!data.subject) newErrors.subject = 'Selecciona un asunto';
    if (!data.message.trim()) newErrors.message = 'El mensaje es requerido';
    
    return newErrors;
  }, []);

  // Manejo optimizado de inputs
  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error específico cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  // Envío de formulario optimizado
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});

    try {
      // Importar dinámicamente el servicio de email
      const { sendContactEmail } = await import('../../lib/emailService');
      
      console.log('📧 Enviando email a lizrincon1693@gmail.com...');
      const emailSent = await sendContactEmail(formData);

      // Generar mensaje de WhatsApp optimizado
      const message = `📞 *NUEVO CONTACTO - Elegancia en Cuero*

👤 *Datos del Cliente:*
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}

📋 *Asunto:* ${formData.subject}

💬 *Mensaje:*
${formData.message}

⏰ *Enviado:* ${new Date().toLocaleString('es-CO', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

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

  // Datos memoizados para optimización
  const contactInfo: ContactInfo[] = useMemo(() => [
    {
      icon: PhoneIcon,
      title: "Teléfono",
      content: "+57 314 247 0366",
      href: "tel:+573142470366",
      color: "from-green-500 to-green-600",
      description: "Llamadas directas"
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      content: "+57 314 247 0366",
      href: "https://wa.me/573142470366",
      color: "from-green-500 to-green-600",
      description: "Respuesta inmediata"
    },
    {
      icon: MailIcon,
      title: "Email",
      content: "lizrincon1693@gmail.com",
      href: "mailto:lizrincon1693@gmail.com",
      color: "from-blue-500 to-blue-600",
      description: "Consultas detalladas"
    },
    {
      icon: LocationIcon,
      title: "Ubicación",
      content: "Bogotá, Colombia",
      href: "#",
      color: "from-purple-500 to-purple-600",
      description: "Entregas locales"
    }
  ], []);

  const subjectOptions = useMemo(() => [
    "Consulta sobre productos",
    "Pedido personalizado",
    "Información de envíos",
    "Soporte post-venta",
    "Colaboraciones",
    "Cotización especial",
    "Otro"
  ], []);

  const faqs: FAQ[] = useMemo(() => [
    {
      question: "¿Cuánto demora el envío?",
      answer: "Los envíos dentro de Bogotá tardan 1-2 días hábiles. A nivel nacional, entre 3-5 días hábiles.",
      category: "Envíos"
    },
    {
      question: "¿Los bolsos tienen garantía?",
      answer: "Sí, todos nuestros productos tienen garantía de 6 meses contra defectos de fabricación.",
      category: "Garantía"
    },
    {
      question: "¿Hacen productos personalizados?",
      answer: "¡Por supuesto! Podemos crear bolsos según tus especificaciones. Contáctanos para más detalles.",
      category: "Personalización"
    },
    {
      question: "¿Cuáles son los métodos de pago?",
      answer: "Aceptamos efectivo contra entrega, Nequi, Daviplata y transferencias bancarias.",
      category: "Pagos"
    },
    {
      question: "¿Tienen tienda física?",
      answer: "Trabajamos por pedidos y entregas. Puedes agendar una cita para ver productos en persona.",
      category: "Ubicación"
    },
    {
      question: "¿Qué tipo de cuero utilizan?",
      answer: "Utilizamos cuero genuino de alta calidad, principalmente cuero vacuno tratado con técnicas artesanales.",
      category: "Materiales"
    }
  ], []);

  const resetForm = useCallback(() => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setErrors({});
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
      {/* Hero Section con imagen de fondo */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide10}
            alt="Contacto - Elegancia en Cuero"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-amber-900/90" />
        </div>

        {/* Elementos de fondo animados - Mobile First */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-20 sm:w-64 sm:h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-5 w-48 h-48 sm:bottom-40 sm:right-20 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '1000ms'}} />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl">
          {/* Header optimizado para mobile */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="w-8 h-8 sm:w-10 sm:h-10 text-white">
                  <MailIcon />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Contáctanos
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              ¿Tienes preguntas sobre nuestros productos? ¿Necesitas asesoría personalizada? 
              <span className="text-amber-400 font-semibold"> Estamos aquí para ayudarte</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Información de Contacto - Mobile First */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-amber-100">
                Información de Contacto
              </h2>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 sm:p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 rounded-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group touch-manipulation"
                    aria-label={`Contactar vía ${contact.title}`}
                  >
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 text-white">
                        <contact.icon />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                        {contact.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base truncate">
                        {contact.content}
                      </p>
                      {contact.description && (
                        <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                          {contact.description}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              {/* Horarios optimizados */}
              <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                      <ClockIcon />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-amber-100">Horarios de Atención</h3>
                </div>
                <div className="space-y-2 text-sm sm:text-base text-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Lunes - Viernes:</span>
                    <span className="text-amber-300 font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sábados:</span>
                    <span className="text-amber-300 font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Domingos:</span>
                    <span className="text-gray-400">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto - Mobile First */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-amber-100">
                Envíanos un Mensaje
              </h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                  {/* Nombre y Teléfono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-amber-200 font-semibold mb-2 text-sm sm:text-base">
                        Nombre Completo *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.name ? 'border-red-500' : 'border-amber-900/30'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300 text-sm sm:text-base`}
                        placeholder="Tu nombre completo"
                        required
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-red-400 text-xs sm:text-sm" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-amber-200 font-semibold mb-2 text-sm sm:text-base">
                        Teléfono *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.phone ? 'border-red-500' : 'border-amber-900/30'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300 text-sm sm:text-base`}
                        placeholder="314 247 0366"
                        required
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-red-400 text-xs sm:text-sm" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-amber-200 font-semibold mb-2 text-sm sm:text-base">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.email ? 'border-red-500' : 'border-amber-900/30'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300 text-sm sm:text-base`}
                      placeholder="tu@email.com"
                      required
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-red-400 text-xs sm:text-sm" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Asunto */}
                  <div>
                    <label htmlFor="subject" className="block text-amber-200 font-semibold mb-2 text-sm sm:text-base">
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.subject ? 'border-red-500' : 'border-amber-900/30'} rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300 text-sm sm:text-base`}
                      required
                      aria-invalid={errors.subject ? 'true' : 'false'}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    >
                      <option value="">Selecciona un asunto</option>
                      {subjectOptions.map((option) => (
                        <option key={option} value={option} className="bg-slate-700">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-red-400 text-xs sm:text-sm" role="alert">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="message" className="block text-amber-200 font-semibold mb-2 text-sm sm:text-base">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.message ? 'border-red-500' : 'border-amber-900/30'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300 resize-none text-sm sm:text-base`}
                      rows={5}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      required
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-red-400 text-xs sm:text-sm" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Botón de envío */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 min-h-[56px] touch-manipulation"
                    aria-label={isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje'}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <div className="w-5 h-5 sm:w-6 sm:h-6">
                          <SendIcon />
                        </div>
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Estado de éxito optimizado */
                <div className="text-center p-8 sm:p-12 bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-3xl">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 text-white">
                      <CheckIcon />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">
                    ¡Mensaje Enviado!
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-gray-300 mb-8 px-4">
                    Gracias por contactarnos. Te responderemos muy pronto.
                  </p>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={resetForm}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 min-h-[48px] touch-manipulation"
                    >
                      Enviar Otro Mensaje
                    </button>
                    <a
                      href="https://wa.me/573142470366"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 min-h-[48px] touch-manipulation"
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
        </div>
      </section>

      {/* FAQ Section optimizada */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide15}
            alt="Preguntas frecuentes sobre bolsos de cuero"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-amber-100">
            Preguntas Frecuentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-2xl hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-1 group"
              >
                {faq.category && (
                  <span className="inline-block px-3 py-1 bg-amber-600/20 text-amber-300 text-xs font-semibold rounded-full mb-3">
                    {faq.category}
                  </span>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-amber-200 mb-3 group-hover:text-amber-300 transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA optimizado */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide19}
            alt="Atención personalizada vía WhatsApp"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-3xl p-8 sm:p-12">
            <div className="mb-6">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto">
                <Image
                  src={GENERAL_IMAGES.logo}
                  alt="Elegancia en Cuero - Logo"
                  fill
                  className="opacity-80 object-contain"
                  sizes="64px"
                />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-amber-100">
              ¿Prefieres hablar directamente?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Nuestro equipo está disponible por WhatsApp para brindarte atención personalizada e inmediata.
            </p>
            
            <a
              href="https://wa.me/573142470366?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20bolsos%20de%20cuero."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold text-base sm:text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 space-x-3 min-h-[56px] touch-manipulation"
              aria-label="Contactar vía WhatsApp"
            >
              <div className="w-6 h-6">
                <WhatsAppIcon />
              </div>
              <span>Chatear por WhatsApp</span>
            </a>

            {/* Información adicional */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-sm text-gray-300">Respuesta inmediata</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="text-2xl mb-2">🛍️</div>
                <p className="text-sm text-gray-300">Asesoría personalizada</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="text-2xl mb-2">📞</div>
                <p className="text-sm text-gray-300">Disponible todo el día</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer de contacto */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-slate-900/80 relative">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-400">
            <div>
              <h4 className="font-semibold text-amber-300 mb-2">Contacto Rápido</h4>
              <p>+57 314 247 0366</p>
              <p>lizrincon1693@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-300 mb-2">Ubicación</h4>
              <p>Bogotá, Colombia</p>
              <p>Entregas a domicilio</p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-300 mb-2">Horarios</h4>
              <p>Lun-Vie: 8AM-6PM</p>
              <p>Sáb: 9AM-4PM</p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-300 mb-2">Especialidades</h4>
              <p>Bolsos de cuero</p>
              <p>Pedidos personalizados</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoPage;