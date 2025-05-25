"use client";

import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { CartContext } from "../context/CartContext";
import { type Product } from "../data/productsData";

// SVG Icons
const ShoppingCartIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5.4A1 1 0 007 19h10a1 1 0 001-1v-1m-8 0h8m-8 0V9a1 1 0 011-1h6a1 1 0 011 1v8"/>
  </svg>
);

const HeartIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
  </svg>
);

const EyeIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

const StarIcon = ({ filled = false }) => (
  <svg className="w-full h-full" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
  </svg>
);

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const rating = 4.5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const Modal = () => (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
        onClick={closeModal}
      />
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl z-[99999]">
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 w-10 h-10 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-300 z-[99999]"
        >
          <div className="w-6 h-6 text-gray-300 hover:text-white">
            <XIcon />
          </div>
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="relative">
            <div 
              className="relative aspect-square rounded-2xl overflow-hidden cursor-none group/magnifier bg-gradient-to-br from-slate-700 to-slate-800"
              onMouseMove={(e) => {
                const container = e.currentTarget;
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;
                
                const magnifier = container.querySelector('.magnifier') as HTMLElement;
                const zoomedImage = container.querySelector('.zoomed-image') as HTMLElement;
                const overlay = container.querySelector('.magnifier-overlay') as HTMLElement;
                
                if (magnifier && zoomedImage && overlay) {
                  magnifier.style.left = `${x - 100}px`;
                  magnifier.style.top = `${y - 100}px`;
                  magnifier.style.opacity = '1';
                  magnifier.style.transform = 'scale(1)';
                  
                  zoomedImage.style.transform = `translate(-${xPercent * 3}%, -${yPercent * 3}%) scale(4)`;
                  
                  overlay.style.opacity = '0.3';
                }
              }}
              onMouseEnter={(e) => {
                const container = e.currentTarget;
                const magnifier = container.querySelector('.magnifier') as HTMLElement;
                const overlay = container.querySelector('.magnifier-overlay') as HTMLElement;
                
                if (magnifier && overlay) {
                  magnifier.style.opacity = '1';
                  overlay.style.opacity = '0.3';
                }
              }}
              onMouseLeave={(e) => {
                const container = e.currentTarget;
                const magnifier = container.querySelector('.magnifier') as HTMLElement;
                const overlay = container.querySelector('.magnifier-overlay') as HTMLElement;
                
                if (magnifier && overlay) {
                  magnifier.style.opacity = '0';
                  magnifier.style.transform = 'scale(0.8)';
                  overlay.style.opacity = '0';
                }
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300"
              />
              
              <div className="magnifier-overlay absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 pointer-events-none" />
              
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                  {product.category}
                </div>
              </div>

              <div className="magnifier absolute w-48 h-48 border-4 border-amber-400 rounded-full pointer-events-none opacity-0 transition-all duration-200 z-30 shadow-2xl transform scale-0.8">
                <div className="absolute -inset-2 rounded-full border-2 border-amber-400/50 animate-pulse" />
                
                <div className="absolute inset-2 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="zoomed-image object-cover origin-top-left transition-transform duration-100"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-12 h-0.5 bg-amber-400 shadow-lg"></div>
                    <div className="absolute top-1/2 left-1/2 w-0.5 h-12 bg-amber-400 shadow-lg transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-amber-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-amber-400 text-xs px-3 py-1 rounded-full font-semibold backdrop-blur-sm border border-amber-400/30">
                  4X ZOOM
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-black/80 to-slate-900/80 text-amber-300 text-sm px-4 py-2 rounded-xl opacity-0 group-hover/magnifier:opacity-100 transition-all duration-300 backdrop-blur-sm border border-amber-400/30 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-amber-400">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Mueve para ampliar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-amber-100 mb-4">
                {product.name}
              </h2>

              <p className="text-gray-400 text-sm mb-4">
                Código: #{product.id}
              </p>

              <div className="flex items-center space-x-2 mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-amber-400">
                      <StarIcon filled={i < fullStars || (i === fullStars && hasHalfStar)} />
                    </div>
                  ))}
                </div>
                <span className="text-gray-400">({rating}) • Elegancia en Cuero</span>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-amber-300">
                  {formatPrice(product.price)}
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-amber-200 mb-3">
                  Descripción
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-amber-200 mb-3">
                  Características
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Cuero genuino de alta calidad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Diseño artesanal colombiano</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Acabados premium</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Garantía de calidad</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => {
                  handleAddToCart();
                  closeModal();
                }}
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 flex items-center justify-center space-x-2"
              >
                <div className="w-6 h-6">
                  <ShoppingCartIcon />
                </div>
                <span>Agregar al Carrito</span>
              </button>

              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`w-full py-3 border-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isLiked 
                    ? 'border-red-500 text-red-500 bg-red-500/10' 
                    : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                <div className="w-5 h-5">
                  <HeartIcon />
                </div>
                <span>{isLiked ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 rounded-3xl transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl overflow-hidden">
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {product.category}
          </div>
        </div>

        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 rounded-full flex items-center justify-center transition-all duration-300 group/heart"
        >
          <div className={`w-5 h-5 transition-colors duration-300 ${
            isLiked ? 'text-red-500' : 'text-gray-400 group-hover/heart:text-red-400'
          }`}>
            <HeartIcon />
          </div>
        </button>

        <div className="relative aspect-square overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/20" />
          
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-xl" />
            </div>
          )}
          
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover group-hover:scale-110 transition-transform duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4">
            <button 
              onClick={openModal}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              title="Ver detalles"
            >
              <div className="w-6 h-6 text-white">
                <EyeIcon />
              </div>
            </button>
            <button 
              onClick={handleAddToCart}
              className="w-12 h-12 bg-amber-500/80 hover:bg-amber-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
              title="Agregar al carrito"
            >
              <div className="w-6 h-6 text-white">
                <ShoppingCartIcon />
              </div>
            </button>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-amber-100 mb-3 group-hover:text-amber-300 transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 text-amber-400">
                  <StarIcon filled={i < fullStars || (i === fullStars && hasHalfStar)} />
                </div>
              ))}
            </div>
            <span className="text-gray-400 text-sm">({rating})</span>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-amber-300">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 flex items-center justify-center space-x-2"
          >
            <div className="w-5 h-5">
              <ShoppingCartIcon />
            </div>
            <span>Agregar al Carrito</span>
          </button>
        </div>

        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {isModalOpen && mounted && createPortal(<Modal />, document.body)}
    </React.Fragment>
  );
};

export default ProductCard;