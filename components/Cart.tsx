"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import PaymentModal from "./PaymentModal";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6 sm:p-16">
      <h1 className="text-3xl font-bold mb-10 text-center p-6">
        Carrito de Compras
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-md shadow-sm"
            >
              <div className="flex items-center space-x-4">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                )}
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Cantidad: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">
                  ${item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline mt-2"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-6">
            <h2 className="text-2xl font-bold">Total: ${total}</h2>
          </div>
          {/* Integración del modal */}
          <PaymentModal cartItems={cartItems} total={total} />
        </div>
      )}
    </div>
  );
};

export default Cart;
