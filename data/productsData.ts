// data/productsData.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

// ========================================
// SISTEMA DE MEDIOS CENTRALIZADO
// ========================================

// Configuración base de rutas
export const MEDIA_CONFIG = {
  basePath: '/images',
  quality: 85,
  formats: ['webp', 'jpg', 'png'],
  sizes: {
    thumbnail: { width: 150, height: 150 },
    card: { width: 400, height: 400 },
    modal: { width: 800, height: 800 },
    carousel: { width: 1200, height: 600 },
    hero: { width: 1920, height: 1080 }
  }
};

// ========================================
// IMÁGENES DE PRODUCTOS
// ========================================
export const PRODUCT_IMAGES = {
  // Bolsos Force
  'bolso-force-rojo': '/images/bolso1.jpg',
  'bolso-force-cafe': '/images/bolso2.jpg',
  'bolso-force-dorado': '/images/bolso3.jpg',
  'bolso-force-combinado': '/images/bolso4.jpg',
  
  // Bolsos Commitment
  'bolso-commitment-azul-1': '/images/bolso5.jpg',
  'bolso-commitment-azul-2': '/images/bolso6.jpg',
  'bolso-commitment-cafe': '/images/bolso7.jpg',
  'bolso-commitment-rojo': '/images/bolso8.jpg',
  
  // Pasaporteras
  'pasaportera-mariposas-azul': '/images/bolso9.jpg',
  'pasaportera-mariposas-cafe': '/images/bolso10.jpg',
  
  // Bolsos Manos Libres
  'bolso-manos-libres-cafe-1': '/images/bolso11.jpg',
  'bolso-manos-libres-negro-1': '/images/bolso12.jpg',
  'bolso-manos-libres-negro-2': '/images/bolso13.jpg',
  'bolso-manos-libres-cafe-2': '/images/bolso14.jpg',
  'bolso-manos-libres-negro-3': '/images/bolso15.jpg',
  
  // Morrales Piloto
  'morral-piloto-negro-rojo': '/images/bolso16.jpg',
  'morral-piloto-miel': '/images/bolso17.jpg',
  
  // Billeteras
  'billetera-roja': '/images/bolso18.jpg',
  'billetera-cafe-naranja': '/images/bolso19.jpg',
  'billetera-negro-rojo': '/images/bolso20.jpg',
  'billetera-cafe-1': '/images/bolso21.jpg',
  'billetera-cafe-2': '/images/bolso22.jpg',
  'billetera-roja-premium': '/images/bolso23.jpg',
  'billetera-azul': '/images/bolso24.jpg',
  
  // Bolsos Elegance
  'bolso-elegance-azul': '/images/bolso25.jpg',
  'bolso-elegance-negro': '/images/bolso31.jpg',
  'bolso-elegance-tricolor-1': '/images/bolso32.jpg',
  'bolso-elegance-clasico': '/images/bolso33.jpg',
  'bolso-elegance-tricolor-2': '/images/bolso41.jpg',
  'bolso-elegance-plateado': '/images/bolso42.jpg',
  'bolso-elegance-nude': '/images/bolso43.jpg',
  'bolso-elegance-miel': '/images/bolso44.jpg',
  
  // Bolsos Comfort
  'bolso-comfort-natural': '/images/bolso26.jpg',
  'bolso-comfort-azul': '/images/bolso27.jpg',
  'bolso-comfort-rojo': '/images/bolso28.jpg',
  'bolso-comfort-dorado': '/images/bolso29.jpg',
  
  // Bolsos con Strap
  'bolso-elegance-strap-1': '/images/bolso30.jpg',
  'bolso-elegance-strap-tricolor': '/images/bolso45.jpg',
  'bolso-elegance-strap-azul': '/images/bolso46.jpg',
  'bolso-elegance-strap-rojo': '/images/bolso47.jpg',
  
  // Billeteras Passion
  'billetera-passion-roja': '/images/bolso34.jpg',
  'billetera-passion-cafe': '/images/bolso35.jpg',
  'billetera-passion-blanca': '/images/bolso36.jpg',
  'billetera-passion-cafe-2': '/images/bolso37.jpg',
  
  // Otros Bolsos
  'bolso-fidelity-rojo': '/images/bolso38.jpg',
  'bolso-true-azul': '/images/bolso39.jpg',
  'bolso-true-blanco': '/images/bolso40.jpg',
};

// ========================================
// IMÁGENES DE CARRUSEL
// ========================================
export const CAROUSEL_IMAGES = {
  slide1: '/images/carrusel1.jpg',
  slide2: '/images/carrusel2.jpg',
  slide3: '/images/carrusel3.jpg',
  slide4: '/images/carrusel4.jpg',
  slide5: '/images/carrusel5.jpg',
  slide6: '/images/carrusel6.jpg',
  slide7: '/images/carrusel7.jpg',
  slide8: '/images/carrusel8.jpg',
  slide9: '/images/carrusel9.jpg',
  slide10: '/images/carrusel10.jpg',
  slide11: '/images/carrusel11.jpg',
  slide12: '/images/carrusel12.jpg',
  slide13: '/images/carrusel13.jpg',
  slide14: '/images/carrusel14.jpg',
  slide15: '/images/carrusel15.jpg',
  slide16: '/images/carrusel16.jpg',
  slide17: '/images/carrusel17.jpg',
  slide18: '/images/carrusel18.jpg',
  slide19: '/images/carrusel19.jpg',
};

// ========================================
// IMÁGENES GENERALES
// ========================================
export const GENERAL_IMAGES = {
  logo: '/images/logo.png',
  heroBackground: CAROUSEL_IMAGES.slide1,
  aboutHero: CAROUSEL_IMAGES.slide5,
  contactHero: CAROUSEL_IMAGES.slide10,
  notFound: CAROUSEL_IMAGES.slide15,
  loading: '/images/logo.png',
};

// ========================================
// ICONOS Y ELEMENTOS UI
// ========================================
export const UI_ICONS = {
  next: '/next.svg',
  vercel: '/vercel.svg',
  file: '/file.svg',
  globe: '/globe.svg',
  window: '/window.svg',
};

// ========================================
// VIDEOS (para futuro uso)
// ========================================
export const VIDEOS = {
  hero: '/videos/hero-background.mp4',
  productShowcase: '/videos/product-showcase.mp4',
  craftProcess: '/videos/craft-process.mp4',
};

// ========================================
// FUNCIÓN PARA OBTENER IMÁGENES
// ========================================
export const getImage = (category: 'product' | 'carousel' | 'general' | 'ui', key: string): string => {
  switch (category) {
    case 'product':
      return PRODUCT_IMAGES[key as keyof typeof PRODUCT_IMAGES] || GENERAL_IMAGES.notFound;
    case 'carousel':
      return CAROUSEL_IMAGES[key as keyof typeof CAROUSEL_IMAGES] || GENERAL_IMAGES.notFound;
    case 'general':
      return GENERAL_IMAGES[key as keyof typeof GENERAL_IMAGES] || '/images/logo.png';
    case 'ui':
      return UI_ICONS[key as keyof typeof UI_ICONS] || '/next.svg';
    default:
      return '/images/logo.png';
  }
};

// ========================================
// FUNCIÓN PARA GENERAR URLs OPTIMIZADAS
// ========================================
export const getOptimizedImage = (
  imagePath: string, 
  size: keyof typeof MEDIA_CONFIG.sizes = 'card',
  format: string = 'webp'
): string => {
  // Para Next.js Image optimization
  const { width, height } = MEDIA_CONFIG.sizes[size];
  return `${imagePath}?w=${width}&h=${height}&q=${MEDIA_CONFIG.quality}&f=${format}`;
};

// ========================================
// DATOS DE PRODUCTOS ACTUALIZADOS
// ========================================
export const products: Product[] = [
  {
    id: '1',
    name: 'Bolso Force Rojo',
    description: 'Elegante bolso Force en cuero genuino color rojo. Diseño moderno y funcional perfecto para cualquier ocasión.',
    price: 135000,
    image: PRODUCT_IMAGES['bolso-force-rojo'],
    category: 'Bolsos',
  },
  {
    id: '2',
    name: 'Bolso Force Café',
    description: 'Bolso Force en cuero genuino color café. Ideal para el día a día con su diseño versátil y elegante.',
    price: 135000,
    image: PRODUCT_IMAGES['bolso-force-cafe'],
    category: 'Bolsos',
  },
  {
    id: '3',
    name: 'Bolso Force Dorado',
    description: 'Exclusivo bolso Force en cuero color dorado. Aporta sofisticación y brillo a tu look.',
    price: 135000,
    image: PRODUCT_IMAGES['bolso-force-dorado'],
    category: 'Bolsos',
  },
  {
    id: '4',
    name: 'Bolso Force Combinado',
    description: 'Bolso Force en cuero con hermosa combinación de colores rojo y beige. Único y llamativo.',
    price: 135000,
    image: PRODUCT_IMAGES['bolso-force-combinado'],
    category: 'Bolsos',
  },
  {
    id: '5',
    name: 'Bolso Commitment Azul',
    description: 'Bolso Commitment en cuero color azul. Diseño comprometido con la elegancia y funcionalidad.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-commitment-azul-1'],
    category: 'Bolsos',
  },
  {
    id: '6',
    name: 'Bolso Commitment Azul',
    description: 'Bolso Commitment en cuero color azul. Variante de diseño con detalles únicos y acabados premium.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-commitment-azul-2'],
    category: 'Bolsos',
  },
  {
    id: '7',
    name: 'Bolso Commitment Café',
    description: 'Bolso Commitment en cuero color café. Clásico y atemporal, perfecto para cualquier estilo.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-commitment-cafe'],
    category: 'Bolsos',
  },
  {
    id: '8',
    name: 'Bolso Commitment Rojo',
    description: 'Bolso Commitment en cuero color rojo. Vibrante y elegante, ideal para destacar con estilo.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-commitment-rojo'],
    category: 'Bolsos',
  },
  {
    id: '9',
    name: 'Pasaportera Mariposas Azul',
    description: 'Pasaportera en cuero con hermosos diseños de mariposas sobre fondo azul. Perfecta para viajes.',
    price: 68000,
    image: PRODUCT_IMAGES['pasaportera-mariposas-azul'],
    category: 'Accesorios',
  },
  {
    id: '10',
    name: 'Pasaportera Mariposas Café',
    description: 'Pasaportera en cuero con delicados diseños de mariposas sobre fondo café. Funcional y elegante.',
    price: 68000,
    image: PRODUCT_IMAGES['pasaportera-mariposas-cafe'],
    category: 'Accesorios',
  },
  {
    id: '11',
    name: 'Bolso Manos Libres Café',
    description: 'Bolso en cuero con diseño manos libres color café. Libertad de movimiento sin sacrificar el estilo.',
    price: 175000,
    image: PRODUCT_IMAGES['bolso-manos-libres-cafe-1'],
    category: 'Bolsos',
  },
  {
    id: '12',
    name: 'Bolso Manos Libres Negro',
    description: 'Bolso en cuero con diseño manos libres color negro. Elegancia y practicidad en un solo producto.',
    price: 175000,
    image: PRODUCT_IMAGES['bolso-manos-libres-negro-1'],
    category: 'Bolsos',
  },
  {
    id: '13',
    name: 'Bolso Manos Libres Negro',
    description: 'Bolso en cuero con diseño manos libres color negro. Variante con detalles diferenciados.',
    price: 175000,
    image: PRODUCT_IMAGES['bolso-manos-libres-negro-2'],
    category: 'Bolsos',
  },
  {
    id: '14',
    name: 'Bolso Manos Libres Café',
    description: 'Bolso en cuero con diseño manos libres color café. Modelo alternativo con acabados especiales.',
    price: 175000,
    image: PRODUCT_IMAGES['bolso-manos-libres-cafe-2'],
    category: 'Bolsos',
  },
  {
    id: '15',
    name: 'Bolso Manos Libres Negro',
    description: 'Bolso en cuero con diseño manos libres color negro. Tercera variante con características únicas.',
    price: 175000,
    image: PRODUCT_IMAGES['bolso-manos-libres-negro-3'],
    category: 'Bolsos',
  },
  {
    id: '16',
    name: 'Morral Piloto Negro/Rojo',
    description: 'Morral en cuero tipo piloto con combinación de negro y rojo. Resistente y con gran capacidad.',
    price: 250000,
    image: PRODUCT_IMAGES['morral-piloto-negro-rojo'],
    category: 'Morrales',
  },
  {
    id: '17',
    name: 'Morral Piloto Miel',
    description: 'Morral en cuero tipo piloto color miel. Diseño robusto ideal para aventuras urbanas.',
    price: 250000,
    image: PRODUCT_IMAGES['morral-piloto-miel'],
    category: 'Morrales',
  },
  {
    id: '18',
    name: 'Billetera Roja',
    description: 'Billetera en cuero genuino color rojo. Compacta y funcional con múltiples compartimentos.',
    price: 43000,
    image: PRODUCT_IMAGES['billetera-roja'],
    category: 'Billeteras',
  },
  {
    id: '19',
    name: 'Billetera Café/Naranja',
    description: 'Billetera en cuero color café con elegante franja naranja. Diseño distintivo y moderno.',
    price: 43000,
    image: PRODUCT_IMAGES['billetera-cafe-naranja'],
    category: 'Billeteras',
  },
  {
    id: '20',
    name: 'Billetera Negro/Rojo',
    description: 'Billetera en cuero con combinación de negro y rojo. Estilo clásico con toque vibrante.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-negro-rojo'],
    category: 'Billeteras',
  },
  {
    id: '21',
    name: 'Billetera Café',
    description: 'Billetera en cuero color café. Diseño atemporal y versátil para uso diario.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-cafe-1'],
    category: 'Billeteras',
  },
  {
    id: '22',
    name: 'Billetera Café Clásica',
    description: 'Billetera en cuero color café con diseño clásico. Funcionalidad y elegancia tradicional.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-cafe-2'],
    category: 'Billeteras',
  },
  {
    id: '23',
    name: 'Billetera Roja Premium',
    description: 'Billetera en cuero color rojo con acabados premium. Calidad superior y diseño refinado.',
    price: 45000,
    image: PRODUCT_IMAGES['billetera-roja-premium'],
    category: 'Billeteras',
  },
  {
    id: '24',
    name: 'Billetera Azul',
    description: 'Billetera en cuero color azul. Fresca y moderna, perfecta para un estilo contemporáneo.',
    price: 45000,
    image: PRODUCT_IMAGES['billetera-azul'],
    category: 'Billeteras',
  },
  {
    id: '25',
    name: 'Bolso Elegance Azul',
    description: 'Bolso Elegance en cuero color azul. Sofisticación y distinción en cada detalle.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-azul'],
    category: 'Bolsos',
  },
  {
    id: '26',
    name: 'Bolso Comfort Natural',
    description: 'Bolso Comfort en cuero natural. Comodidad y estilo en perfecta armonía.',
    price: 85000,
    image: PRODUCT_IMAGES['bolso-comfort-natural'],
    category: 'Bolsos',
  },
  {
    id: '27',
    name: 'Bolso Comfort Azul',
    description: 'Bolso Comfort en cuero color azul. Diseño ergonómico que prioriza la comodidad.',
    price: 85000,
    image: PRODUCT_IMAGES['bolso-comfort-azul'],
    category: 'Bolsos',
  },
  {
    id: '28',
    name: 'Bolso Comfort Rojo',
    description: 'Bolso Comfort en cuero color rojo. Vibrante y cómodo para el uso cotidiano.',
    price: 90000,
    image: PRODUCT_IMAGES['bolso-comfort-rojo'],
    category: 'Bolsos',
  },
  {
    id: '29',
    name: 'Bolso Comfort Dorado',
    description: 'Bolso Comfort en cuero color dorado. Luminoso y elegante con máximo confort.',
    price: 80000,
    image: PRODUCT_IMAGES['bolso-comfort-dorado'],
    category: 'Bolsos',
  },
  {
    id: '30',
    name: 'Bolso Elegance + Strap',
    description: 'Bolso Elegance en cuero con correa strap adicional. Versatilidad y elegancia combinadas.',
    price: 180000,
    image: PRODUCT_IMAGES['bolso-elegance-strap-1'],
    category: 'Bolsos',
  },
  {
    id: '31',
    name: 'Bolso Elegance Negro',
    description: 'Bolso Elegance en cuero color negro. Clásico intemporal que nunca pasa de moda.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-negro'],
    category: 'Bolsos',
  },
  {
    id: '32',
    name: 'Bolso Elegance Tricolor',
    description: 'Bolso Elegance en cuero con combinación negro, beige y rojo. Diseño único y llamativo.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-tricolor-1'],
    category: 'Bolsos',
  },
  {
    id: '33',
    name: 'Bolso Elegance Clásico',
    description: 'Bolso Elegance en cuero con diseño clásico. Refinamiento y distinción en cada detalle.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-clasico'],
    category: 'Bolsos',
  },
  {
    id: '34',
    name: 'Billetera Passion Roja',
    description: 'Billetera Passion en cuero rojo. Diseño apasionado con acabados de alta calidad.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-passion-roja'],
    category: 'Billeteras',
  },
  {
    id: '35',
    name: 'Billetera Passion Café',
    description: 'Billetera Passion en cuero café. Pasión por los detalles en un diseño sofisticado.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-passion-cafe'],
    category: 'Billeteras',
  },
  {
    id: '36',
    name: 'Billetera Passion Blanca',
    description: 'Billetera Passion en cuero blanco. Pureza y elegancia en un accesorio esencial.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-passion-blanca'],
    category: 'Billeteras',
  },
  {
    id: '37',
    name: 'Billetera Passion Café',
    description: 'Billetera Passion en cuero café. Variante con detalles únicos y acabado especial.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-passion-cafe-2'],
    category: 'Billeteras',
  },
  {
    id: '38',
    name: 'Bolso Fidelity Rojo',
    description: 'Bolso Fidelity en cuero color rojo. Fiel compañero para tu día a día con estilo.',
    price: 95000,
    image: PRODUCT_IMAGES['bolso-fidelity-rojo'],
    category: 'Bolsos',
  },
  {
    id: '39',
    name: 'Bolso True Azul',
    description: 'Bolso True en cuero color azul. Auténtico y genuino, refleja tu verdadera personalidad.',
    price: 150000,
    image: PRODUCT_IMAGES['bolso-true-azul'],
    category: 'Bolsos',
  },
  {
    id: '40',
    name: 'Bolso True Blanco',
    description: 'Bolso True en cuero color blanco. Pureza y autenticidad en un diseño impecable.',
    price: 150000,
    image: PRODUCT_IMAGES['bolso-true-blanco'],
    category: 'Bolsos',
  },
  {
    id: '41',
    name: 'Bolso Elegance Tricolor',
    description: 'Bolso Elegance en cuero con combinación negro, café y dorado. Armonía perfecta de tonos.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-tricolor-2'],
    category: 'Bolsos',
  },
  {
    id: '42',
    name: 'Bolso Elegance Plateado',
    description: 'Bolso Elegance en cuero color plateado. Brillo metálico que aporta modernidad.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-plateado'],
    category: 'Bolsos',
  },
  {
    id: '43',
    name: 'Bolso Elegance Nude',
    description: 'Bolso Elegance en cuero color nude. Neutro y versátil, combina con todo tu guardarropa.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-nude'],
    category: 'Bolsos',
  },
  {
    id: '44',
    name: 'Bolso Elegance Miel',
    description: 'Bolso Elegance en cuero color miel. Dulce y cálido, perfecto para cualquier temporada.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-miel'],
    category: 'Bolsos',
  },
  {
    id: '45',
    name: 'Bolso Elegance + Strap Tricolor',
    description: 'Bolso Elegance en cuero con correa strap en beige, café y café oscuro. Versatilidad máxima.',
    price: 180000,
    image: PRODUCT_IMAGES['bolso-elegance-strap-tricolor'],
    category: 'Bolsos',
  },
  {
    id: '46',
    name: 'Bolso Elegance + Strap Azul',
    description: 'Bolso Elegance en cuero con correa strap color azul. Elegancia con opciones de uso.',
    price: 180000,
    image: PRODUCT_IMAGES['bolso-elegance-strap-azul'],
    category: 'Bolsos',
  },
  {
    id: '47',
    name: 'Bolso Elegance + Strap Rojo',
    description: 'Bolso Elegance en cuero con correa strap color rojo. Pasión y versatilidad combinadas.',
    price: 180000,
    image: PRODUCT_IMAGES['bolso-elegance-strap-rojo'],
    category: 'Bolsos',
  },
];

// ========================================
// FUNCIONES AUXILIARES
// ========================================

// Función para obtener productos por categoría
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Función para obtener todas las categorías
export const getCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};

// Función para obtener producto por ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Función para buscar productos
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Función para obtener productos relacionados
export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};

// Función para obtener imágenes del carrusel
export const getCarouselImages = (): string[] => {
  return Object.values(CAROUSEL_IMAGES);
};

// Función para obtener imagen aleatoria del carrusel
export const getRandomCarouselImage = (): string => {
  const images = getCarouselImages();
  return images[Math.floor(Math.random() * images.length)];
};