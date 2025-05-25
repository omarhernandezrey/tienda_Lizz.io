"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { products, getCategories, type Product } from "../data/productsData";

// SVG Icons optimizados
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

const CloseIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

const ProductList: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("featured");
  const [gridCols, setGridCols] = useState(3);
  const [showFilters, setShowFilters] = useState(false);

  // Get categories from the actual data
  const categories = ["Todos", ...getCategories()];

  // Filter and search logic
  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
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
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "category":
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default: // featured
        // Keep original order for featured
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <div className="relative min-h-screen">
      {/* Search and Filter Bar - Mobile First Design */}
      <div className="mb-6 sm:mb-8 lg:mb-12">
        {/* Mobile Header */}
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Productos</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm border border-amber-900/30 rounded-xl text-white hover:from-slate-600/80 hover:to-slate-700/80 transition-all duration-300"
            >
              <div className="w-4 h-4">
                <FilterIcon />
              </div>
              <span className="text-sm font-medium">Filtros</span>
            </button>
          </div>
        </div>

        {/* Main Filter Container */}
        <div className={`
          ${showFilters ? 'block' : 'hidden'} lg:block
          bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md 
          border border-amber-900/30 rounded-2xl sm:rounded-3xl 
          p-4 sm:p-6 shadow-2xl shadow-black/20
          transition-all duration-300 ease-in-out
        `}>
          
          {/* Mobile Close Button */}
          <div className="lg:hidden flex justify-end mb-4">
            <button
              onClick={() => setShowFilters(false)}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="space-y-6 lg:space-y-0 lg:flex lg:items-center lg:gap-6">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-full lg:max-w-md">
              <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none z-10">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-slate-700/60 backdrop-blur-sm border border-amber-900/40 rounded-xl sm:rounded-2xl text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 hover:bg-slate-700/70"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <CloseIcon />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="overflow-x-auto pb-2 lg:pb-0">
              <div className="flex gap-2 sm:gap-3 min-w-max lg:min-w-0 lg:flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-600/25"
                        : "bg-slate-700/60 text-gray-300 hover:bg-slate-600/70 hover:text-amber-300 border border-slate-600/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-6">
              
              {/* Sort Dropdown */}
              <div className="flex-1 sm:flex-none">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full sm:w-auto px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-700/60 backdrop-blur-sm border border-amber-900/40 rounded-xl sm:rounded-2xl text-white text-sm sm:text-base focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 hover:bg-slate-700/70 cursor-pointer"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="name">Nombre A-Z</option>
                  <option value="category">Por Categoría</option>
                </select>
              </div>

              {/* Grid View Controls - Hidden on mobile */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs text-gray-400 mr-2">Vista:</span>
                {[2, 3, 4].map((cols) => (
                  <button
                    key={cols}
                    onClick={() => setGridCols(cols)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${
                      gridCols === cols
                        ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-600/25"
                        : "bg-slate-700/60 text-gray-400 hover:text-amber-300 hover:bg-slate-600/70 border border-slate-600/50"
                    }`}
                    title={`Vista de ${cols} columnas`}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5">
                      <GridIcon />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-gray-400 text-sm sm:text-base">
            <span className="leading-relaxed">
              Mostrando <span className="text-amber-400 font-semibold">{filteredProducts.length}</span> de <span className="text-white font-semibold">{products.length}</span> productos
              {selectedCategory !== "Todos" && (
                <span className="block sm:inline"> en <span className="text-amber-300 font-medium">"{selectedCategory}"</span></span>
              )}
              {searchTerm && (
                <span className="block sm:inline"> para <span className="text-amber-300 font-medium">"{searchTerm}"</span></span>
              )}
            </span>
            
            {/* Clear Filters */}
            {(selectedCategory !== "Todos" || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSearchTerm("");
                }}
                className="text-amber-400 hover:text-amber-300 transition-all duration-300 font-medium text-sm sm:text-base hover:scale-105 transform px-3 py-1.5 rounded-lg hover:bg-amber-500/10"
              >
                Limpiar Filtros
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid - Mobile First Grid System */}
      {filteredProducts.length > 0 ? (
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-fr" style={{
          gridTemplateColumns: gridCols === 2 ? 'repeat(auto-fit, minmax(300px, 1fr))' :
                               gridCols === 3 ? 'repeat(auto-fit, minmax(280px, 1fr))' :
                               'repeat(auto-fit, minmax(250px, 1fr))'
        }}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="opacity-0 animate-fadeInUp transform transition-all duration-500 hover:scale-[1.02]"
              style={{ 
                animationDelay: `${Math.min(index * 50, 1000)}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        /* No Results State - Mobile Optimized */
        <div className="text-center py-12 sm:py-16 lg:py-20 px-4">
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-amber-900/30 shadow-2xl shadow-black/20">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-400">
              <SearchIcon />
            </div>
          </div>
          
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-300 leading-tight">
              No se encontraron productos
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Intenta con diferentes términos de búsqueda o ajusta los filtros
            </p>
            <button
              onClick={() => {
                setSelectedCategory("Todos");
                setSearchTerm("");
                setShowFilters(false);
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold text-white hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-amber-600/25 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-4 focus:ring-amber-500/30"
            >
              Ver Todos los Productos
            </button>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        /* Scrollbar personalizado para categorías en mobile */
        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 2px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(245, 158, 11, 0.5);
          border-radius: 2px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 158, 11, 0.7);
        }

        /* Smooth transitions para todos los elementos interactivos */
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default ProductList;