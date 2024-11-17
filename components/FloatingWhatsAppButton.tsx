// components/FloatingWhatsAppButton.tsx
"use client";

import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton: React.FC = () => {
  const whatsappNumber = "573142470366"; // Número de WhatsApp con el prefijo internacional
  const message = encodeURIComponent(
    "Hola, estoy interesado en los productos de cuero que ofrecen en la tienda. ¿Me pueden dar más información, por favor?"
  );

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Ocultar botón si el footer es visible
        setIsVisible(footerTop > windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "bottom-6 opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
