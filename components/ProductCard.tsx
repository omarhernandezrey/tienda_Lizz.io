// components/ProductCard.tsx
"use client";

import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  addToCart: (product: { id: string; name: string; price: number }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  addToCart,
}) => {
  return (
    <div className="flex flex-col border rounded-lg p-4 h-full">
      <div className="flex-grow flex items-center justify-center bg-gray-100 overflow-hidden rounded-md">
        <div className="relative w-full h-56">
          <Image
            src={image}
            alt={name}
            layout="fill" // Ocupa todo el contenedor
            objectFit="contain" // Se adapta sin recortar contenido
            className="object-center"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <h2 className="text-lg font-semibold text-center">{name}</h2>
        <p className="text-gray-700 mt-2 text-center">${price.toLocaleString()}</p>
        <button
          onClick={() => addToCart({ id, name, price })}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md w-full hover:bg-blue-600 transition-colors duration-200"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
