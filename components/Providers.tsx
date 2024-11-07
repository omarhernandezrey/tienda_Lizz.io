// components/Providers.tsx
"use client";

import React from 'react';
import { CartProvider } from '../context/CartContext';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;