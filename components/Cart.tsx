"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import PaymentModal from "./PaymentModal";

// Icons as SVG components
const ShoppingBagIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"/>
  </svg>
);

const TrashIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 7a1 1 0 0 0-1 1v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V8a1 1 0 0 0-2 0v11a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V8a1 1 0 0 0-1-1zM12 9v8a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm4 0v8a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zM7 3V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h5a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h5zM9 3h6V2H9v1z"/>
  </svg>
);

const HeartIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const LockIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 11H5a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a1 1 0 0 0-1-1zM8 10V7a4 4 0 0 1 8 0v3a1 1 0 0 1-2 0V7a2 2 0 0 0-4 0v3a1 1 0 0 1-2 0z"/>
  </svg>
);

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
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
              <div className="w-8 h-8 text-white">
                <ShoppingBagIcon />
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
            Carrito de Compras
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Revisa tus productos seleccionados y procede con tu compra segura
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber-900/30">
              <div className="w-12 h-12 text-gray-400">
                <ShoppingBagIcon />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-300">Tu carrito está vacío</h2>
            <p className="text-xl text-gray-400 mb-8">¿Qué tal si exploras nuestra colección?</p>
            <Link href="/productos">
              <button className="px-10 py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg transform hover:scale-105">
                Ver Productos
              </button>
            </Link>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Cart Items */}
            <div className="space-y-6 mb-12">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 rounded-3xl p-6 sm:p-8 transition-all duration-500 transform hover:-translate-y-2"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                    {/* Product Image */}
                    <div className="relative">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl overflow-hidden border border-amber-900/50 group-hover:border-amber-500/50 transition-all duration-500">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-amber-600/20 to-orange-600/20 flex items-center justify-center">
                            <div className="w-8 h-8 text-amber-400">
                              <ShoppingBagIcon />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg">
                        {item.quantity}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 text-center lg:text-left">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                        {item.name}
                      </h2>
                      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-amber-400 rounded-full mr-2" />
                          Cantidad: {item.quantity}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                          Precio unitario: {formatPrice(item.price)}
                        </span>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="text-center lg:text-right space-y-4">
                      <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl p-4 backdrop-blur-sm border border-amber-900/30">
                        <p className="text-sm text-gray-400 mb-1">Subtotal</p>
                        <p className="text-2xl sm:text-3xl font-bold text-amber-300">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                      
                      <div className="flex space-x-3 justify-center lg:justify-end">
                        <button className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-amber-900/30 hover:border-amber-500/50 group">
                          <div className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300">
                            <HeartIcon />
                          </div>
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-12 h-12 bg-gradient-to-br from-red-600/80 to-red-700/80 hover:from-red-500 hover:to-red-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-red-500/25 group"
                        >
                          <div className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300">
                            <TrashIcon />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-3xl p-8 sm:p-12">
              <div className="max-w-2xl mx-auto">
                {/* Total */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-300">Resumen de Compra</h2>
                  <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl p-6 backdrop-blur-sm border border-amber-900/50">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg text-gray-300">Subtotal:</span>
                      <span className="text-lg text-amber-300">{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg text-gray-300">Envío:</span>
                      <span className="text-lg text-green-400">Gratis</span>
                    </div>
                    <div className="border-t border-amber-900/50 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-amber-100">Total:</span>
                        <span className="text-3xl font-bold text-amber-300">{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-slate-700/60 to-slate-800/60 px-6 py-3 rounded-full backdrop-blur-sm border border-amber-900/30">
                    <div className="w-4 h-4 text-amber-400">
                      <LockIcon />
                    </div>
                    <span className="text-sm font-semibold text-amber-100">Compra 100% Segura</span>
                  </div>
                </div>

                {/* Payment Modal */}
                <PaymentModal cartItems={cartItems} total={total} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;