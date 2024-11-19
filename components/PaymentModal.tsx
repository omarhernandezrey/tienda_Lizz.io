"use client";

import React, { useState } from "react";

interface PaymentModalProps {
  cartItems: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ cartItems, total }) => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappNumber = "573142470366";

  const handleConfirmPayment = () => {
    if (!selectedPayment) {
      alert("Por favor, selecciona un método de pago.");
      return;
    }

    const formattedCartItems = cartItems
      .map(
        (item) =>
          `- ${item.name} (Cantidad: ${item.quantity}, Subtotal: $${new Intl.NumberFormat(
            "es-CO"
          ).format(item.price * item.quantity)})`
      )
      .join("\n");

    const message = encodeURIComponent(`
Hola, he realizado un pedido en su tienda:
Productos:
${formattedCartItems}

Total: $${new Intl.NumberFormat("es-CO").format(total)}
Método de Pago: ${selectedPayment}

Por favor, confirma mi pedido. ¡Gracias!
    `);

    // URL de WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Abrir en una nueva ventana
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-600 transition"
      >
        Proceder con el Pago
      </button>

      {/* Modal de pago */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Confirmar Pago
            </h2>
            <p className="mb-4 text-gray-600">
              Selecciona el método de pago para continuar:
            </p>
            <div className="flex justify-around mb-6">
              <button
                onClick={() => setSelectedPayment("Nequi")}
                className={`px-4 py-2 rounded-md border ${
                  selectedPayment === "Nequi"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Nequi
              </button>
              <button
                onClick={() => setSelectedPayment("Daviplata")}
                className={`px-4 py-2 rounded-md border ${
                  selectedPayment === "Daviplata"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Daviplata
              </button>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:underline"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmPayment}
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentModal;
