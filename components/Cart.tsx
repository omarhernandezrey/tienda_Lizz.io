// components/Cart.tsx
"use client";

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-24">
      <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <div>
                <h2 className="text-xl">{item.name}</h2>
                <p>Cantidad: {item.quantity}</p>
              </div>
              <div>
                <p>${item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <h2 className="text-2xl mt-4">Total: ${total}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;