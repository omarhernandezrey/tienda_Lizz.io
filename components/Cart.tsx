"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import PaymentModal from "./PaymentModal";

// Icons as SVG components optimizados
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

const ShieldCheckIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
  </svg>
);

const PlusIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
  </svg>
);

const MinusIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.566"/>
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

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const freeShippingThreshold = 250000;
  const needsMoreForFreeShipping = Math.max(0, freeShippingThreshold - total);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white pt-20 sm:pt-24 pb-16 sm:pb-20">
      {/* Animated Background Elements - Mobile First */}
      <div className="fixed inset-0 opacity-[0.02] sm:opacity-[0.03] md:opacity-[0.04] lg:opacity-[0.05] pointer-events-none">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-5 sm:bottom-40 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '1000ms'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '2000ms'}} />
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header - Mobile First */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-2xl border border-amber-400/20 animate-pulse">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white">
                <ShoppingBagIcon />
              </div>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent leading-tight">
            Carrito de Compras
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl lg:max-w-2xl mx-auto px-4">
            Revisa tus productos seleccionados y procede con tu compra 100% segura
          </p>
          
          {/* Cart Summary Badge */}
          {cartItems.length > 0 && (
            <div className="mt-4 sm:mt-6 inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-amber-600/20 border border-amber-500/30 rounded-full text-amber-300 text-sm sm:text-base font-medium">
              <span className="text-lg sm:text-xl">🛍️</span>
              <span>{totalItems} producto{totalItems !== 1 ? 's' : ''} • {formatPrice(total)}</span>
            </div>
          )}
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State - Mobile First */
          <div className="text-center py-12 sm:py-16 lg:py-20">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-900/60 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-amber-900/30 backdrop-blur-sm">
              <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-gray-400">
                <ShoppingBagIcon />
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-300">Tu carrito está vacío</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 px-4">¿Qué tal si exploras nuestra colección de productos premium?</p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md mx-auto">
              <Link href="/productos" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-base sm:text-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg transform hover:scale-105 min-h-[48px] touch-manipulation">
                  Ver Productos
                </button>
              </Link>
              <Link href="/" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-amber-400 text-amber-400 rounded-full text-base sm:text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 min-h-[48px] touch-manipulation">
                  Volver al Inicio
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            {/* Free Shipping Progress Bar */}
            {needsMoreForFreeShipping > 0 && (
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-green-600/20 via-green-600/30 to-green-700/20 border border-green-500/30 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                <div className="text-center mb-3 sm:mb-4">
                  <p className="text-green-300 font-medium text-sm sm:text-base">
                    🚚 ¡Te faltan {formatPrice(needsMoreForFreeShipping)} para envío gratis!
                  </p>
                </div>
                <div className="w-full bg-green-900/30 rounded-full h-2 sm:h-3">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-500 h-2 sm:h-3 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((total / freeShippingThreshold) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* Cart Items - Mobile First */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    {/* Product Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl lg:rounded-2xl overflow-hidden border border-amber-900/50 group-hover:border-amber-500/50 transition-all duration-500">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-amber-600/20 to-orange-600/20 flex items-center justify-center">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400">
                              <ShoppingBagIcon />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Quantity Badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-lg border border-amber-400/20">
                        {item.quantity}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 text-center sm:text-left min-w-0">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-amber-100 group-hover:text-amber-300 transition-colors duration-300 truncate">
                        {item.name}
                      </h2>
                      
                      {/* Product Details */}
                      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-gray-400 text-sm sm:text-base">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-amber-400 rounded-full mr-2" />
                          Precio: {formatPrice(item.price)}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                          Subtotal: {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>

                      {/* Quantity Controls - Mobile Optimized */}
                      <div className="mt-3 sm:mt-4 flex items-center justify-center sm:justify-start space-x-3">
                        <span className="text-sm text-gray-400">Cantidad:</span>
                        <div className="flex items-center space-x-2 bg-slate-700/50 rounded-lg p-1">
                          <span className="px-3 py-1 bg-amber-600/20 border border-amber-500/30 rounded-md text-amber-300 font-semibold text-sm">
                            {item.quantity}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">
                          (Para cambiar cantidad, contacta WhatsApp)
                        </p>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="text-center space-y-3 sm:space-y-4">
                      {/* Total Price */}
                      <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-xl lg:rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-amber-900/30">
                        <p className="text-xs sm:text-sm text-gray-400 mb-1">Subtotal</p>
                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-300">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-2 sm:space-x-3 justify-center">
                        <button 
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-amber-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-amber-900/30 hover:border-amber-500/50 group/heart touch-manipulation"
                          aria-label="Agregar a favoritos"
                        >
                          <div className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover/heart:text-white transition-colors duration-300">
                            <HeartIcon />
                          </div>
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600/80 to-red-700/80 hover:from-red-500 hover:to-red-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-red-500/25 group/trash touch-manipulation"
                          aria-label="Eliminar producto"
                        >
                          <div className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover/trash:scale-110 transition-transform duration-300">
                            <TrashIcon />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section - Mobile First */}
            <div className="bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="max-w-3xl mx-auto">
                {/* Total */}
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-300">Resumen de Compra</h2>
                  
                  <div className="bg-gradient-to-r from-amber-600/20 via-amber-600/30 to-orange-600/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm border border-amber-900/50">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-base sm:text-lg text-gray-300">Subtotal ({totalItems} producto{totalItems !== 1 ? 's' : ''}):</span>
                        <span className="text-base sm:text-lg text-amber-300 font-semibold">{formatPrice(total)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-base sm:text-lg text-gray-300">Envío:</span>
                        <span className="text-base sm:text-lg text-green-400 font-semibold">
                          {total >= freeShippingThreshold ? 'Gratis' : 'Calculado en checkout'}
                        </span>
                      </div>
                      
                      {total >= freeShippingThreshold && (
                        <div className="flex justify-center">
                          <div className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
                            🎉 ¡Envío gratis aplicado!
                          </div>
                        </div>
                      )}
                      
                      <div className="border-t border-amber-900/50 pt-3 sm:pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-100">Total:</span>
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-300">{formatPrice(total)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-slate-700/60 to-slate-800/60 px-3 sm:px-4 py-2 sm:py-3 rounded-full backdrop-blur-sm border border-amber-900/30">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400">
                      <LockIcon />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-amber-100">Compra Segura</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-green-700/60 to-green-800/60 px-3 sm:px-4 py-2 sm:py-3 rounded-full backdrop-blur-sm border border-green-900/30">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 text-green-400">
                      <ShieldCheckIcon />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-green-100">Garantía 6 Meses</span>
                  </div>
                </div>

                {/* Payment Modal */}
                <PaymentModal cartItems={cartItems} total={total} />

                {/* Continue Shopping */}
                <div className="mt-6 sm:mt-8 text-center">
                  <Link href="/productos">
                    <button className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 text-amber-400 hover:text-amber-300 transition-colors duration-200 text-sm sm:text-base font-medium">
                      <span>←</span>
                      <span>Continuar comprando</span>
                    </button>
                  </Link>
                </div>

                {/* WhatsApp Contact for Quantity Changes */}
                <div className="mt-4 sm:mt-6 text-center">
                  <a 
                    href="https://wa.me/573112345678?text=Hola,%20quiero%20modificar%20las%20cantidades%20en%20mi%20carrito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 hover:text-green-200 hover:bg-green-500/30 transition-all duration-200 text-sm sm:text-base font-medium"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5">
                      <WhatsAppIcon />
                    </div>
                    <span>Modificar cantidades por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;