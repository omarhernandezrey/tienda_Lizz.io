// components/ProductList.tsx
"use client";

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from './ProductCard';
import { products } from '../data/productsData';

const ProductList: React.FC = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
