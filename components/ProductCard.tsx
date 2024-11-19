"use client";

import React from "react";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  addToCart: (product: { id: string; name: string; price: number; image: string }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  addToCart,
}) => {
  const formattedPrice = new Intl.NumberFormat("es-ES").format(price);

  return (
    <div className="flex flex-col border rounded-lg p-4 h-full">
      <div className="flex-grow flex items-center justify-center bg-gray-100 overflow-hidden rounded-md">
        <div className="relative w-full h-56">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <h2 className="text-lg font-semibold text-center">{name}</h2>
        <p className="text-gray-700 mt-2 text-center">${formattedPrice}</p>
        <button
          onClick={() => addToCart({ id, name, price, image })}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md w-full hover:bg-blue-600 transition-colors duration-200"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
