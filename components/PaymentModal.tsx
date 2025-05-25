"use client";

import React, { useState } from "react";

// SVG Icons
const CloseIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

const CreditCardIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
  </svg>
);

const BankIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
  </svg>
);

const MoneyIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
  </svg>
);

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface PaymentModalProps {
  cartItems: CartItem[];
  total: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ cartItems, total }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    notes: ""
  });
  const [step, setStep] = useState(1); // 1: Method selection, 2: Info form, 3: Confirmation

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const paymentMethods = [
    {
      id: "efectivo",
      name: "Efectivo",
      description: "Pago contra entrega",
      icon: MoneyIcon,
      color: "from-green-500 to-green-600",
      details: "Sin comisiones adicionales. Pago al recibir el producto."
    },
    {
      id: "nequi",
      name: "Nequi",
      description: "Transferencia digital",
      icon: PhoneIcon,
      color: "from-blue-500 to-blue-600",
      details: "Transferir al número: 314 247 0366"
    },
    {
      id: "daviplata",
      name: "Daviplata",
      description: "Transferencia digital",
      icon: PhoneIcon,
      color: "from-purple-500 to-purple-600",
      details: "Transferir al número: 314 247 0366"
    },
    {
      id: "banco",
      name: "Transferencia Bancaria",
      description: "Banco Caja Social",
      icon: BankIcon,
      color: "from-yellow-500 to-yellow-600",
      details: "Cuenta de Ahorros: 24138619413"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitOrder = async () => {
    try {
      // Importar dinámicamente el servicio de email
      const { sendOrderEmail } = await import('../lib/emailService');
      
      // Preparar datos del pedido para EmailJS
      const orderData = {
        customer: customerInfo,
        items: cartItems,
        total,
        paymentMethod: paymentMethods.find(m => m.id === selectedMethod)?.name || selectedMethod
      };

      // Intentar enviar email de pedido con configuración real
      console.log('📧 Enviando email de pedido a lizrincon1693@gmail.com...');
      const emailSent = await sendOrderEmail(orderData);

      // Generar mensaje de WhatsApp (siempre se ejecuta)
      const itemsList = cartItems.map(item => 
        `• ${item.name} (Cantidad: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}`
      ).join('\n');

      const selectedPaymentMethod = paymentMethods.find(method => method.id === selectedMethod);
      
      const message = `🛍️ *NUEVO PEDIDO - Elegancia en Cuero*

👤 *Cliente:* ${customerInfo.name}
📧 *Email:* ${customerInfo.email}
📱 *Teléfono:* ${customerInfo.phone}
🏠 *Dirección:* ${customerInfo.address}
🌆 *Ciudad:* ${customerInfo.city}

🛒 *Productos:*
${itemsList}

💰 *TOTAL: ${formatPrice(total)}*

💳 *Pago:* ${selectedPaymentMethod?.name}
📋 *Detalles:* ${selectedPaymentMethod?.details}

📝 *Notas:* ${customerInfo.notes || 'Ninguna'}

⏰ *Pedido:* ${new Date().toLocaleString('es-CO')}
🆔 *ID:* ORD-${Date.now()}

${emailSent ? '✅ *Email enviado a lizrincon1693@gmail.com*' : '⚠️ *Solo por WhatsApp*'}

¡Gracias por tu compra! 🎒✨`;

      const whatsappUrl = `https://wa.me/573142470366?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setStep(3);
      
      if (emailSent) {
        console.log('✅ Email de pedido enviado exitosamente a Liz!');
      } else {
        console.log('⚠️ Email de pedido falló, pero WhatsApp funcionó');
      }
    } catch (error) {
      console.error('❌ Error al procesar el pedido:', error);
      
      // Fallback: solo WhatsApp si todo falla
      const itemsList = cartItems.map(item => 
        `• ${item.name} (x${item.quantity}) - ${formatPrice(item.price * item.quantity)}`
      ).join('\n');

      const selectedPaymentMethod = paymentMethods.find(method => method.id === selectedMethod);
      
      const message = `🛍️ *PEDIDO - Elegancia en Cuero*

Cliente: ${customerInfo.name}
Email: ${customerInfo.email}
Teléfono: ${customerInfo.phone}
Dirección: ${customerInfo.address}, ${customerInfo.city}

Productos:
${itemsList}

Total: ${formatPrice(total)}
Pago: ${selectedPaymentMethod?.name}

⚠️ *Solo por WhatsApp (error en email)*`;

      const whatsappUrl = `https://wa.me/573142470366?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setStep(3);
    }
  };

  const resetModal = () => {
    setIsOpen(false);
    setStep(1);
    setSelectedMethod("");
    setCustomerInfo({
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      notes: ""
    });
  };

  if (!isOpen) {
    return (
      <div className="text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-amber-500/25 overflow-hidden"
          disabled={cartItems.length === 0}
        >
          <span className="relative z-10">Proceder al Pago</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-amber-900/30 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-900/30">
          <h2 className="text-2xl font-bold text-amber-100">
            {step === 1 && "Método de Pago"}
            {step === 2 && "Información de Entrega"}
            {step === 3 && "¡Pedido Enviado!"}
          </h2>
          <button
            onClick={resetModal}
            className="w-10 h-10 bg-slate-700/50 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <div className="w-5 h-5 text-white">
              <CloseIcon />
            </div>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Step 1: Payment Method Selection */}
          {step === 1 && (
            <div>
              <p className="text-gray-300 mb-6 text-center">
                Selecciona tu método de pago preferido
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${
                      selectedMethod === method.id
                        ? "border-amber-500 bg-amber-900/20"
                        : "border-slate-600 hover:border-amber-400 bg-slate-800/50"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-6 h-6 text-white">
                          <method.icon />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-amber-100 mb-2">
                          {method.name}
                        </h3>
                        <p className="text-gray-400 mb-2">{method.description}</p>
                        <p className="text-sm text-amber-300">{method.details}</p>
                      </div>
                    </div>
                    
                    {selectedMethod === method.id && (
                      <div className="mt-4 flex items-center text-amber-400">
                        <div className="w-5 h-5 mr-2">
                          <CheckIcon />
                        </div>
                        <span className="font-semibold">Seleccionado</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedMethod}
                  className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Customer Information */}
          {step === 2 && (
            <div>
              <p className="text-gray-300 mb-6 text-center">
                Completa tus datos para el envío
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-amber-200 font-semibold mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
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
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    placeholder="314 247 0366"
                    required
                  />
                </div>

                <div>
                  <label className="block text-amber-200 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-amber-200 font-semibold mb-2">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    placeholder="Bogotá"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-amber-200 font-semibold mb-2">
                    Dirección de Entrega *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    placeholder="Calle 123 #45-67, Barrio, Ciudad"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-amber-200 font-semibold mb-2">
                    Notas Adicionales
                  </label>
                  <textarea
                    value={customerInfo.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300 resize-none"
                    rows={3}
                    placeholder="Instrucciones especiales de entrega, referencias, etc."
                  />
                </div>
              </div>

              {/* Order Summary */}
              <div className="mt-8 p-6 bg-slate-800/50 rounded-2xl border border-amber-900/30">
                <h3 className="text-xl font-bold text-amber-200 mb-4">Resumen del Pedido</h3>
                <div className="space-y-2 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-gray-300">
                      <span>{item.name} x{item.quantity}</span>
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-amber-900/30 pt-4">
                  <div className="flex justify-between text-xl font-bold text-amber-300">
                    <span>Total:</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 px-6 py-3 border-2 border-amber-400 text-amber-400 rounded-xl font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                >
                  Volver
                </button>
                <button
                  onClick={handleSubmitOrder}
                  disabled={!customerInfo.name || !customerInfo.phone || !customerInfo.address || !customerInfo.city}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Enviar Pedido
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <div className="w-12 h-12 text-white">
                  <CheckIcon />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-green-400 mb-4">
                ¡Pedido Enviado Exitosamente!
              </h3>
              
              <p className="text-xl text-gray-300 mb-8">
                Tu pedido ha sido enviado por WhatsApp. Te contactaremos pronto para confirmar los detalles.
              </p>

              <div className="bg-slate-800/50 rounded-2xl p-6 mb-8 border border-green-500/30">
                <h4 className="text-lg font-semibold text-green-300 mb-4">Próximos Pasos:</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-300">Recibirás confirmación por WhatsApp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-300">Coordinaremos la entrega contigo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-300">¡Disfruta tu nuevo bolso de cuero!</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={resetModal}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Seguir Comprando
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
                  <span>Ir a WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;