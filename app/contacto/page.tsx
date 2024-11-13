"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';


const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="pt-24 bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 space-y-8">
        {/* Sección de información de contacto */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-100 p-4 sm:p-6 md:p-10 lg:p-12 rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-3 text-center">
            Contáctanos
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 mb-4 text-center">
            Estamos aquí para ayudarte. Comunícate con nosotros a través de los siguientes medios o llena el formulario más abajo.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-around items-center space-y-4 sm:space-y-0">
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800">Teléfono</h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-600">+57 3142470366</p>
            </div>
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800">Correo Electrónico</h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-600">info@tiendadebolsos.com</p>
            </div>
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800">Dirección</h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-600">Carrera 2N #39d-16sur, Bogotá, Colombia</p>
            </div>
          </div>

          {/* Ícono de WhatsApp más grande y animado */}
          <div className="flex justify-center mt-4">
            <Link
              href={`https://wa.me/573142470366?text=${encodeURIComponent(
                'Hola, cordial saludo. Quisiera información sobre los bolsos en cuero que ofrecen.'
              )}`}
              target="_blank"
              className="flex items-center space-x-2 bg-green-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 duration-300"
            >
              <FaWhatsapp className="text-3xl sm:text-4xl md:text-5xl animate-bounce" />
              <span className="text-sm sm:text-lg md:text-2xl font-semibold">Contáctanos por WhatsApp</span>
            </Link>
          </div>

          {/* Redes Sociales */}
          <div className="flex justify-center mt-6 space-x-4">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-blue-700 text-2xl sm:text-3xl hover:text-blue-800 transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-pink-500 text-2xl sm:text-3xl hover:text-pink-600 transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-blue-400 text-2xl sm:text-3xl hover:text-blue-500 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white p-4 sm:p-6 md:p-10 lg:p-12 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-blue-800">
              Envíanos un mensaje
            </h2>
            <div className="mb-3 sm:mb-4">
              <label htmlFor="nombre" className="block text-sm sm:text-lg font-semibold mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label htmlFor="email" className="block text-sm sm:text-lg font-semibold mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label htmlFor="asunto" className="block text-sm sm:text-lg font-semibold mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label htmlFor="mensaje" className="block text-sm sm:text-lg font-semibold mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 h-24 sm:h-32 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Enviar
            </button>

            {formStatus === 'success' && (
              <p className="text-green-600 mt-3 sm:mt-4 text-center">Correo enviado exitosamente.</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 mt-3 sm:mt-4 text-center">Error al enviar el correo. Inténtalo de nuevo.</p>
            )}
          </form>
        </div>

        {/* Mapa de ubicación de la tienda */}
        <div className="bg-white p-4 sm:p-6 md:p-10 lg:p-12 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-blue-800">
            Nuestra Ubicación
          </h2>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.704806879612!2d-74.13700078519695!3d4.609710543566923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99b9487e4b1f%3A0xa3f4bd3d2aab3e1c!2sCarrera%202N%20%2339d-16sur%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1698340893456!5m2!1ses!2sco"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
