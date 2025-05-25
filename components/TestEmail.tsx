'use client';

import React, { useState } from 'react';

const TestEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>('');

  const testEmailService = async () => {
    setIsLoading(true);
    setResult('🧪 Probando EmailJS...');

    try {
      const { testEmailService, verifyConfiguration } = await import('../lib/emailService');
      
      // Mostrar configuración en consola
      verifyConfiguration();
      
      // Ejecutar prueba
      const success = await testEmailService();
      
      if (success) {
        setResult('✅ ¡ÉXITO! Email enviado a lizrincon1693@gmail.com. Revisa la bandeja de entrada de Liz.');
      } else {
        setResult('❌ Error: El email no se pudo enviar. Revisa la consola del navegador para más detalles.');
      }
    } catch (error) {
      console.error('Error en prueba:', error);
      setResult(`❌ Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testContactForm = async () => {
    setIsLoading(true);
    setResult('📝 Probando formulario de contacto...');

    try {
      const { sendContactEmail } = await import('../lib/emailService');
      
      const testData = {
        name: 'Cliente de Prueba',
        email: 'cliente@ejemplo.com',
        phone: '314 247 0366',
        subject: 'Consulta sobre productos',
        message: 'Hola, me interesa conocer más sobre sus bolsos de cuero. ¿Podrían enviarme más información? Gracias.'
      };
      
      const success = await sendContactEmail(testData);
      
      if (success) {
        setResult('✅ ¡Formulario de contacto funciona! Email enviado a lizrincon1693@gmail.com.');
      } else {
        setResult('❌ Error en formulario de contacto. Revisa la consola.');
      }
    } catch (error) {
      console.error('Error en prueba de contacto:', error);
      setResult(`❌ Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testOrderEmail = async () => {
    setIsLoading(true);
    setResult('🛒 Probando email de pedido...');

    try {
      const { sendOrderEmail } = await import('../lib/emailService');
      
      const testOrderData = {
        customer: {
          name: 'Ana García',
          email: 'ana@ejemplo.com',
          phone: '300 123 4567',
          address: 'Calle 123 #45-67',
          city: 'Bogotá',
          notes: 'Entrega en horario de oficina'
        },
        items: [
          { id: '1', name: 'Bolso Heritage Classic', price: 150000, quantity: 1 },
          { id: '2', name: 'Cartera Modern Luxe', price: 89000, quantity: 2 }
        ],
        total: 328000,
        paymentMethod: 'Nequi'
      };
      
      const success = await sendOrderEmail(testOrderData);
      
      if (success) {
        setResult('✅ ¡Email de pedido funciona! Enviado a lizrincon1693@gmail.com.');
      } else {
        setResult('❌ Error en email de pedido. Revisa la consola y verifica que el template de pedido esté configurado.');
      }
    } catch (error) {
      console.error('Error en prueba de pedido:', error);
      setResult(`❌ Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-800 border-2 border-amber-500 rounded-xl p-4 max-w-sm shadow-2xl">
      <h3 className="text-amber-400 font-bold mb-3 text-center">🧪 Test EmailJS</h3>
      <p className="text-gray-300 text-xs mb-4 text-center">
        Prueba si los emails llegan a <strong>lizrincon1693@gmail.com</strong>
      </p>
      
      <div className="space-y-2">
        <button
          onClick={testEmailService}
          disabled={isLoading}
          className="w-full px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? '⏳ Enviando...' : '📧 Test Básico'}
        </button>
        
        <button
          onClick={testContactForm}
          disabled={isLoading}
          className="w-full px-3 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? '⏳ Enviando...' : '📝 Test Contacto'}
        </button>
        
        <button
          onClick={testOrderEmail}
          disabled={isLoading}
          className="w-full px-3 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? '⏳ Enviando...' : '🛒 Test Pedido'}
        </button>
      </div>
      
      {result && (
        <div className="mt-3 p-3 bg-slate-700 rounded-lg border border-slate-600">
          <div className="text-xs text-gray-300 break-words">
            {result}
          </div>
        </div>
      )}
      
      <div className="mt-3 text-xs text-gray-400 text-center">
        Revisa la consola del navegador para más detalles
      </div>
    </div>
  );
};

export default TestEmail;