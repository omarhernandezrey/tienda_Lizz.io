"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

// SVG Icons
const FilterIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"/>
  </svg>
);

const SearchIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
  </svg>
);

const GridIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
  </svg>
);

// Sample products data - En tu proyecto real, esto vendrá de productsData.ts
const sampleProducts = [
  {
    id: "1",
    name: "Bolso Elegante Heritage Classic",
    price: 150000,
    originalPrice: 180000,
    image: "/images/bolso1.jpg",
    category: "Heritage",
    rating: 4.8,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Cartera Modern Luxe Executive",
    price: 89000,
    originalPrice: 120000,
    image: "/images/bolso2.jpg",
    category: "Modern Luxe",
    rating: 4.6,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: "3",
    name: "Bolso Artisan Series Handmade",
    price: 220000,
    image: "/images/bolso3.jpg",
    category: "Artisan",
    rating: 4.9,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "4",
    name: "Cartera Casual Weekend",
    price: 75000,
    image: "/images/bolso4.jpg",
    category: "Casual",
    rating: 4.3,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: "5",
    name: "Bolso Premium Elite Collection",
    price: 350000,
    originalPrice: 420000,
    image: "/images/bolso5.jpg",
    category: "Premium",
    rating: 5.0,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "6",
    name: "Cartera Compact Urban",
    price: 95000,
    image: "/images/bolso6.jpg",
    category: "Urban",
    rating: 4.4,
    isNew: true,
    isBestSeller: false,
  },
];

const ProductList: React.FC = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("featured");
  const [gridCols, setGridCols] = useState(3);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];

  // Filter and search logic
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // featured
        filtered.sort((a, b) => {
          if (a.isBestSeller && !b.isBestSeller) return -1;
          if (!a.isBestSeller && b.isBestSeller) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm, sortBy]);

  return (
    <div className="relative">
      {/* Search and Filter Bar */}
      <div className="mb-12 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-900/30 rounded-3xl p-6">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
                    : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-amber-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort and View Controls */}
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-slate-700/50 border border-amber-900/30 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300"
            >
              <option value="featured">Destacados</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
              <option value="rating">Mejor Calificados</option>
              <option value="name">Nombre A-Z</option>
            </select>

            {/* Grid View Controls */}
            <div className="flex space-x-2">
              {[2, 3, 4].map((cols) => (
                <button
                  key={cols}
                  onClick={() => setGridCols(cols)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    gridCols === cols
                      ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white"
                      : "bg-slate-700/50 text-gray-400 hover:text-amber-300"
                  }`}
                >
                  <div className="w-5 h-5">
                    <GridIcon />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mt-6 flex justify-between items-center text-gray-400">
          <span>
            Mostrando {filteredProducts.length} de {products.length} productos
            {selectedCategory !== "Todos" && ` en "${selectedCategory}"`}
            {searchTerm && ` para "${searchTerm}"`}
          </span>
          
          {/* Clear Filters */}
          {(selectedCategory !== "Todos" || searchTerm) && (
            <button
              onClick={() => {
                setSelectedCategory("Todos");
                setSearchTerm("");
              }}
              className="text-amber-400 hover:text-amber-300 transition-colors duration-300 font-medium"
            >
              Limpiar Filtros
            </button>
          )}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className={`grid gap-8 ${
          gridCols === 2 ? 'grid-cols-1 md:grid-cols-2' :
          gridCols === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        /* No Results State */
        <div className="text-center py-20">
          <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber-900/30">
            <div className="w-16 h-16 text-gray-400">
              <SearchIcon />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-gray-300">No se encontraron productos</h3>
          <p className="text-xl text-gray-400 mb-8">
            Intenta con diferentes términos de búsqueda o filtros
          </p>
          <button
            onClick={() => {
              setSelectedCategory("Todos");
              setSearchTerm("");
            }}
            className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Ver Todos los Productos
          </button>
        </div>
      )}

      {/* Loading Animation for Future Use */}
      <div className="hidden">
        <div className="flex justify-center items-center py-20">
          <div className="loading-spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;