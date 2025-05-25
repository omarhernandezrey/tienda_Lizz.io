/* ---------------------------------------------------------------------------
   ContactoPage.tsx – Página "Contacto" mobile-first optimizada y completa
--------------------------------------------------------------------------- */

'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import {
  GENERAL_IMAGES,
  CAROUSEL_IMAGES
} from '../../data/productsData';

/* -------------------- Tipos -------------------- */
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

/* -------------------- Iconos SVG Optimizados -------------------- */
const PhoneIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" aria-label="WhatsApp">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const LoadingSpinner = () => (
  <div className="relative">
    <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 rounded-full" />
    <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
  </div>
);

/* -------------------- Componente Principal -------------------- */
const ContactoPage: React.FC = () => {
  /* Estados optimizados */
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

  /* Validación mejorada */
  const validateForm = useCallback((data: FormData): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    
    if (!data.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }
    
    if (!data.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Formato de email inválido';
    }
    
    if (!data.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^[\d\s\-\+\(\)]{7,15}$/.test(data.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Formato de teléfono inválido';
    }
    
    if (!data.subject) {
      newErrors.subject = 'Selecciona un asunto';
    }
    
    if (!data.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    return newErrors;
  }, []);

  /* Manejo de inputs optimizado */
  const handleInputChange = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  /* Submit optimizado */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      // Focus en el primer campo con error
      const firstErrorField = Object.keys(formErrors)[0] as keyof FormData;
      const element = document.getElementById(firstErrorField);
      element?.focus();
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Intentar envío por email
      let emailSent = false;
      try {
        const { sendContactEmail } = await import('../../lib/emailService');
        emailSent = await sendContactEmail(formData);
      } catch (emailError) {
        console.log('Email service no disponible, usando solo WhatsApp');
      }

      /* Mensaje de WhatsApp optimizado */
      const whatsappMessage = `📞 *NUEVO CONTACTO - Elegancia en Cuero*

👤 *Datos del Cliente:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}

📋 *Asunto:* ${formData.subject}

💬 *Mensaje:*
${formData.message}

⏰ *Enviado:* ${new Date().toLocaleString('es-CO', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'America/Bogota'
})}

${emailSent ? '✅ *Email enviado exitosamente*' : '📱 *Contacto vía WhatsApp únicamente*'}

¡Gracias por contactarnos! Te responderemos muy pronto.`;

      // Abrir WhatsApp
      const whatsappUrl = `https://wa.me/573142470366?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      setIsSubmitted(true);
      
      // Limpiar formulario después de un delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 1000);
      
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      
      // Fallback: solo WhatsApp básico
      const fallbackMessage = `📞 *CONTACTO - Elegancia en Cuero*

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Asunto: ${formData.subject}

Mensaje: ${formData.message}

⚠️ *Enviado por WhatsApp únicamente*`;

      window.open(
        `https://wa.me/573142470366?text=${encodeURIComponent(fallbackMessage)}`,
        '_blank',
        'noopener,noreferrer'
      );
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* Datos memoizados optimizados */
  const contactInfo: ContactInfo[] = useMemo(
    () => [
      {
        icon: PhoneIcon,
        title: 'Teléfono',
        content: '+57 314 247 0366',
        href: 'tel:+573142470366',
        color: 'from-blue-500 to-blue-600',
        description: 'Llamadas directas y mensajes'
      },
      {
        icon: WhatsAppIcon,
        title: 'WhatsApp',
        content: '+57 314 247 0366',
        href: 'https://wa.me/573142470366?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20bolsos%20de%20cuero.',
        color: 'from-green-500 to-green-600',
        description: 'Respuesta inmediata 24/7'
      },
      {
        icon: MailIcon,
        title: 'Email',
        content: 'lizrincon1693@gmail.com',
        href: 'mailto:lizrincon1693@gmail.com?subject=Consulta%20sobre%20bolsos%20de%20cuero',
        color: 'from-purple-500 to-purple-600',
        description: 'Consultas detalladas'
      },
      {
        icon: LocationIcon,
        title: 'Ubicación',
        content: 'Bogotá, Colombia',
        href: '#ubicacion',
        color: 'from-amber-500 to-orange-600',
        description: 'Entregas a domicilio'
      }
    ],
    []
  );

  const subjectOptions = useMemo(
    () => [
      'Consulta sobre productos',
      'Pedido personalizado',
      'Información de envíos',
      'Soporte post-venta',
      'Colaboraciones comerciales',
      'Cotización especial',
      'Cuidado y mantenimiento',
      'Otro'
    ],
    []
  );

  const faqs: FAQ[] = useMemo(
    () => [
      {
        question: '¿Cuánto tiempo demora el envío?',
        answer: 'En Bogotá: 1-2 días hábiles. Nacional: 3-5 días hábiles. Envío gratis en compras superiores a $150.000.',
        category: 'Envíos'
      },
      {
        question: '¿Los productos tienen garantía?',
        answer: 'Sí, todos nuestros bolsos tienen garantía de 6 meses contra defectos de fabricación y mano de obra.',
        category: 'Garantía'
      },
      {
        question: '¿Realizan productos personalizados?',
        answer: '¡Absolutamente! Creamos bolsos únicos según tus especificaciones de color, tamaño y diseño. Solicita tu cotización.',
        category: 'Personalización'
      },
      {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Efectivo contra entrega, Nequi, Daviplata, transferencias bancarias y tarjetas de crédito/débito.',
        category: 'Pagos'
      },
      {
        question: '¿Tienen tienda física para visitar?',
        answer: 'Trabajamos bajo pedido con entregas a domicilio. Puedes agendar una cita para ver productos en persona.',
        category: 'Ubicación'
      },
      {
        question: '¿Qué tipo de cuero utilizan?',
        answer: 'Usamos cuero genuino de la más alta calidad, principalmente vacuno, tratado con técnicas artesanales tradicionales.',
        category: 'Materiales'
      },
      {
        question: '¿Ofrecen servicio de reparación?',
        answer: 'Sí, reparamos y restauramos bolsos de cuero. Contáctanos para evaluar tu producto y cotizar el servicio.',
        category: 'Servicios'
      },
      {
        question: '¿Hacen envíos internacionales?',
        answer: 'Actualmente solo realizamos envíos dentro de Colombia. Para consultas internacionales, contáctanos directamente.',
        category: 'Envíos'
      }
    ],
    []
  );

  /* Reset optimizado */
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

  /* --------------------------- UI OPTIMIZADA --------------------------- */
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
      {/* Hero Section - Mobile First Optimizado */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 px-3 sm:px-4 lg:px-6">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide10}
            alt="Contacto - Elegancia en Cuero"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/85 to-amber-900/95" />
        </div>

        {/* Elementos decorativos optimizados */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-4 w-24 h-24 sm:top-16 sm:left-16 sm:w-48 sm:h-48 lg:top-20 lg:left-20 lg:w-64 lg:h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse" />
          <div className="absolute bottom-16 right-4 w-32 h-32 sm:bottom-32 sm:right-16 sm:w-64 sm:h-64 lg:bottom-40 lg:right-20 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }} />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 container mx-auto max-w-7xl">
          {/* Header optimizado */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white">
                  <MailIcon />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight">
              Contáctanos
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              ¿Tienes preguntas sobre nuestros productos? ¿Necesitas asesoría personalizada?
              <span className="text-amber-400 font-semibold"> Estamos aquí para ayudarte</span> a encontrar 
              el bolso perfecto que complemente tu estilo único.
            </p>
          </div>

          {/* Grid principal optimizado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {/* Información de Contacto */}
            <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-amber-100">
                Información de Contacto
              </h2>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-6 sm:mb-8 lg:mb-12">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group touch-manipulation"
                    aria-label={`Contactar vía ${contact.title}`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${contact.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white">
                        <contact.icon />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                        {contact.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base truncate">
                        {contact.content}
                      </p>
                      {contact.description && (
                        <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300 mt-1">
                          {contact.description}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              {/* Horarios optimizados */}
              <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-amber-900/30 rounded-xl sm:rounded-2xl">
                <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white">
                      <ClockIcon />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-amber-100">Horarios de Atención</h3>
                </div>
                
                <div className="space-y-2 text-xs sm:text-sm lg:text-base text-gray-300">
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-700/30 transition-colors duration-300">
                    <span>Lunes - Viernes:</span>
                    <span className="text-amber-300 font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-700/30 transition-colors duration-300">
                    <span>Sábados:</span>
                    <span className="text-amber-300 font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-700/30 transition-colors duration-300">
                    <span>Domingos:</span>
                    <span className="text-gray-400">Cerrado</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-amber-900/30">
                    <div className="flex items-center space-x-2 text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">WhatsApp disponible 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario optimizado */}
            <div className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-amber-100">
                Envíanos un Mensaje
              </h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                  {/* Nombre & Teléfono - Grid responsivo */}
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
                        className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-700/60 border ${
                          errors.name ? 'border-red-500 bg-red-900/10' : 'border-amber-900/30 focus:border-amber-500/50'
                        } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 text-sm sm:text-base`}
                        placeholder="Tu nombre completo"
                        required
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-2 text-red-400 text-xs sm:text-sm flex items-center space-x-1" role="alert">
                          <span>⚠️</span>
                          <span>{errors.name}</span>
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
                        className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-700/60 border ${
                          errors.phone ? 'border-red-500 bg-red-900/10' : 'border-amber-900/30 focus:border-amber-500/50'
                        } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 text-sm sm:text-base`}
                        placeholder="314 247 0366"
                        required
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-2 text-red-400 text-xs sm:text-sm flex items-center space-x-1" role="alert">
                          <span>⚠️</span>
                          <span>{errors.phone}</span>
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
                      className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-700/60 border ${
                        errors.email ? 'border-red-500 bg-red-900/10' : 'border-amber-900/30 focus:border-amber-500/50'
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 text-sm sm:text-base`}
                      placeholder="tu@email.com"
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-red-400 text-xs sm:text-sm flex items-center space-x-1" role="alert">
                        <span>⚠️</span>
                        <span>{errors.email}</span>
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
                      className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-700/60 border ${
                        errors.subject ? 'border-red-500 bg-red-900/10' : 'border-amber-900/30 focus:border-amber-500/50'
                      } rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 text-sm sm:text-base`}
                      required
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    >
                      <option value="" className="bg-slate-700">Selecciona un asunto</option>
                      {subjectOptions.map((option) => (
                        <option key={option} value={option} className="bg-slate-700">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p id="subject-error" className="mt-2 text-red-400 text-xs sm:text-sm flex items-center space-x-1" role="alert">
                        <span>⚠️</span>
                        <span>{errors.subject}</span>
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
                      className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-700/60 border ${
                        errors.message ? 'border-red-500 bg-red-900/10' : 'border-amber-900/30 focus:border-amber-500/50'
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none text-sm sm:text-base`}
                      rows={5}
                      placeholder="Cuéntanos en qué podemos ayudarte... ¿Buscas un bolso específico? ¿Tienes alguna duda sobre nuestros productos?"
                      required
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-red-400 text-xs sm:text-sm flex items-center space-x-1" role="alert">
                        <span>⚠️</span>
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Información adicional */}
                  <div className="p-3 sm:p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-400 text-lg mt-0.5">ℹ️</span>
                      <div>
                        <p className="text-blue-300 font-medium text-xs sm:text-sm">
                          Tu mensaje será enviado por WhatsApp y email
                        </p>
                        <p className="text-blue-400/80 text-xs mt-1">
                          Responderemos en menos de 2 horas en horario laboral
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botón enviar optimizado */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 sm:py-5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold text-sm sm:text-base lg:text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 min-h-[56px] sm:min-h-[64px] touch-manipulation overflow-hidden group"
                    aria-label={isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje'}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner />
                        <span>Enviando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300">
                          <SendIcon />
                        </div>
                        <span>Enviar Mensaje</span>
                        <div className="hidden sm:block text-lg">📨</div>
                      </>
                    )}
                    
                    {/* Efecto de brillo */}
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    )}
                  </button>
                </form>
              ) : (
                /* Estado de éxito optimizado */
                <div className="text-center p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl animate-bounce">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white">
                      <CheckIcon />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-3 sm:mb-4">
                    ¡Mensaje Enviado!
                  </h3>

                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 px-2 sm:px-4">
                    Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos muy pronto.
                  </p>

                  <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 min-h-[48px] sm:min-h-[56px] touch-manipulation transform hover:scale-[1.02]"
                    >
                      Enviar Otro Mensaje
                    </button>
                    <a
                      href="https://wa.me/573142470366?text=¡Hola!%20Acabo%20de%20enviar%20un%20mensaje%20por%20el%20formulario.%20¿Pueden%20ayudarme?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 min-h-[48px] sm:min-h-[56px] touch-manipulation transform hover:scale-[1.02]"
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
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 lg:px-6 bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-sm relative">
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
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-amber-100">
              Preguntas Frecuentes
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-4">
              Encuentra respuestas rápidas a las consultas más comunes sobre nuestros productos y servicios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-amber-900/30 rounded-xl sm:rounded-2xl hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group"
              >
                {faq.category && (
                  <span className="inline-block px-2 sm:px-3 py-1 bg-amber-600/20 text-amber-300 text-xs font-semibold rounded-full mb-3 sm:mb-4">
                    {faq.category}
                  </span>
                )}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-amber-200 mb-2 sm:mb-3 group-hover:text-amber-300 transition-colors duration-300 leading-tight">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA adicional en FAQ */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-blue-300 mb-2 sm:mb-3">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                Contáctanos directamente y resolveremos todas tus dudas
              </p>
              <a
                href="https://wa.me/573142470366?text=Hola,%20tengo%20una%20pregunta%20que%20no%20está%20en%20las%20FAQ."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 space-x-2 min-h-[44px] touch-manipulation transform hover:scale-[1.02]"
              >
                <span>💬</span>
                <span>Hacer Pregunta</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section optimizada */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 relative">
        <div className="absolute inset-0">
          <Image
            src={CAROUSEL_IMAGES.slide19}
            alt="Atención personalizada vía WhatsApp"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-amber-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto">
                <Image
                  src={GENERAL_IMAGES.logo}
                  alt="Elegancia en Cuero - Logo"
                  fill
                  className="opacity-80 object-contain hover:opacity-100 transition-opacity duration-300"
                  sizes="64px"
                />
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-amber-100">
              ¿Prefieres hablar directamente?
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 sm:px-4">
              Nuestro equipo está disponible por WhatsApp para brindarte atención personalizada e inmediata. 
              ¡Resolveremos todas tus dudas al instante!
            </p>

            <a
              href="https://wa.me/573142470366?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20bolsos%20de%20cuero.%20¿Pueden%20ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold text-sm sm:text-base lg:text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 space-x-3 min-h-[56px] sm:min-h-[64px] touch-manipulation group overflow-hidden"
              aria-label="Contactar vía WhatsApp"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300">
                <WhatsAppIcon />
              </div>
              <span>Chatear por WhatsApp</span>
              <span className="text-lg sm:text-xl">💬</span>
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>

            {/* Características del servicio */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <div className="p-3 sm:p-4 bg-slate-700/40 rounded-xl hover:bg-slate-700/60 transition-colors duration-300">
                <div className="text-xl sm:text-2xl mb-2">⚡</div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium">Respuesta inmediata</p>
                <p className="text-xs text-gray-400 mt-1">Menos de 5 minutos</p>
              </div>
              <div className="p-3 sm:p-4 bg-slate-700/40 rounded-xl hover:bg-slate-700/60 transition-colors duration-300">
                <div className="text-xl sm:text-2xl mb-2">🛍️</div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium">Asesoría personalizada</p>
                <p className="text-xs text-gray-400 mt-1">Recomendaciones únicas</p>
              </div>
              <div className="p-3 sm:p-4 bg-slate-700/40 rounded-xl hover:bg-slate-700/60 transition-colors duration-300">
                <div className="text-xl sm:text-2xl mb-2">📞</div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium">Disponible 24/7</p>
                <p className="text-xs text-gray-400 mt-1">Siempre conectados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer informativo optimizado */}
      <section className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6 bg-slate-900/90 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center sm:text-left">
            <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl">
              <h4 className="font-bold text-amber-300 mb-2 sm:mb-3 text-sm sm:text-base">Contacto Rápido</h4>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>📱</span>
                  <span>+57 314 247 0366</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>📧</span>
                  <span>lizrincon1693@gmail.com</span>
                </p>
              </div>
            </div>
            
            <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl">
              <h4 className="font-bold text-amber-300 mb-2 sm:mb-3 text-sm sm:text-base">Ubicación</h4>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>📍</span>
                  <span>Bogotá, Colombia</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>🚚</span>
                  <span>Entregas a domicilio</span>
                </p>
              </div>
            </div>
            
            <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl">
              <h4 className="font-bold text-amber-300 mb-2 sm:mb-3 text-sm sm:text-base">Horarios</h4>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>🕒</span>
                  <span>Lun-Vie: 8AM-6PM</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>🕒</span>
                  <span>Sáb: 9AM-4PM</span>
                </p>
              </div>
            </div>
            
            <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl">
              <h4 className="font-bold text-amber-300 mb-2 sm:mb-3 text-sm sm:text-base">Especialidades</h4>
              <div className="space-y-1 text-xs sm:text-sm text-gray-400">
                <p className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>👜</span>
                  <span>Bolsos de cuero premium</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>✨</span>
                  <span>Pedidos personalizados</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-amber-900/30 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2025 Elegancia en Cuero - Todos los derechos reservados
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoPage;