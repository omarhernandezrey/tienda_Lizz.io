"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { CartContext } from "../context/CartContext";

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

const StarIcon = ({ filled = false }) => (
  <svg className="w-full h-full" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
  </svg>
);

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  rating?: number;
  originalPrice?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const rating = product.rating || 4.5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-900/30 hover:border-amber-500/50 rounded-3xl transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl overflow-hidden">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col space-y-2">
        {product.isNew && (
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            NUEVO
          </div>
        )}
        {product.isBestSeller && (
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            MÁS VENDIDO
          </div>
        )}
        {discount > 0 && (
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            -{discount}%
          </div>
        )}
      </div>

      {/* Favorite Button */}
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

      {/* Image Section */}
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
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4">
          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
            <div className="w-6 h-6 text-white">
              <EyeIcon />
            </div>
          </button>
          <button 
            onClick={handleAddToCart}
            className="w-12 h-12 bg-amber-500/80 hover:bg-amber-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <div className="w-6 h-6 text-white">
              <ShoppingCartIcon />
            </div>
          </button>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Category */}
        {product.category && (
          <p className="text-amber-400 text-sm font-medium mb-2 uppercase tracking-wide">
            {product.category}
          </p>
        )}

        {/* Product Name */}
        <h3 className="text-xl font-bold text-amber-100 mb-3 group-hover:text-amber-300 transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
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

        {/* Price Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-amber-300">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-lg">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
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

      {/* Decorative Elements */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ProductCard;