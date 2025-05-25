// data/productsData.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  warranty?: string;
  materials?: string[];
  availableColors?: string[];
}

// ========================================
// SISTEMA DE MEDIOS CENTRALIZADO 2025
// ========================================

// Configuración base de rutas actualizada
export const MEDIA_CONFIG = {
  basePath: '/images',
  quality: 85,
  formats: ['webp', 'jpg', 'png', 'avif'],
  sizes: {
    thumbnail: { width: 150, height: 150 },
    card: { width: 400, height: 400 },
    modal: { width: 800, height: 800 },
    carousel: { width: 1200, height: 600 },
    hero: { width: 1920, height: 1080 },
    banner: { width: 1600, height: 900 }
  }
};

// ========================================
// DOCUMENTOS LEGALES Y POLÍTICAS 2025
// ========================================
export const LEGAL_DOCUMENTS = {
  // Políticas y garantías
  warranty_policy_2025: '/documents/leder-liz-politicas-garantia-2025.pdf',
  terms_conditions_2025: '/documents/terminos-condiciones-2025.pdf',
  privacy_policy_2025: '/documents/politica-privacidad-2025.pdf',
  
  // Certificados y calidad
  quality_certificate: '/documents/certificado-calidad-cuero.pdf',
  artisan_certificate: '/documents/certificado-artesania.pdf',
  
  // Guías de cuidado
  leather_care_guide: '/documents/guia-cuidado-cuero.pdf',
  maintenance_guide: '/documents/guia-mantenimiento.pdf'
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
// IMÁGENES DE CARRUSEL 2025
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
  
  // Nuevas imágenes 2025
  slide20: '/images/carrusel20.jpg',
  slide21: '/images/carrusel21.jpg',
  
  // Hero banners especiales
  hero_2025: '/images/hero-2025.jpg',
  new_collection_2025: '/images/nueva-coleccion-2025.jpg',
  warranty_banner: '/images/garantia-banner.jpg'
};

// ========================================
// IMÁGENES GENERALES 2025
// ========================================
export const GENERAL_IMAGES = {
  logo: '/images/logo.png',
  logo_white: '/images/logo-white.png',
  logo_2025: '/images/logo-2025.png',
  
  // Backgrounds
  heroBackground: CAROUSEL_IMAGES.hero_2025 || CAROUSEL_IMAGES.slide1,
  aboutHero: CAROUSEL_IMAGES.slide5,
  contactHero: CAROUSEL_IMAGES.slide10,
  productsHero: CAROUSEL_IMAGES.new_collection_2025 || CAROUSEL_IMAGES.slide15,
  
  // Utility images
  notFound: CAROUSEL_IMAGES.slide15,
  loading: '/images/logo.png',
  placeholder: '/images/placeholder.jpg',
  
  // Documentos como imágenes
  warranty_document: '/images/leder-liz-politicas-2025.jpg',
  quality_seal: '/images/sello-calidad.png',
  artisan_badge: '/images/insignia-artesania.png',
  
  // Iconos especiales
  whatsapp_icon: '/images/whatsapp-icon.png',
  email_icon: '/images/email-icon.png',
  phone_icon: '/images/phone-icon.png'
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
  star: '/icons/star.svg',
  heart: '/icons/heart.svg',
  cart: '/icons/cart.svg',
  user: '/icons/user.svg',
  search: '/icons/search.svg',
  menu: '/icons/menu.svg',
  close: '/icons/close.svg'
};

// ========================================
// VIDEOS 2025
// ========================================
export const VIDEOS = {
  hero: '/videos/hero-background-2025.mp4',
  productShowcase: '/videos/product-showcase-2025.mp4',
  craftProcess: '/videos/craft-process-2025.mp4',
  testimonials: '/videos/testimonials-2025.mp4',
  artisan_work: '/videos/trabajo-artesanal.mp4'
};

// ========================================
// INFORMACIÓN DE LA EMPRESA 2025
// ========================================
export const COMPANY_INFO = {
  name: "LEDER LIZ",
  fullName: "Elegancia en Cuero - LEDER LIZ",
  year: 2025,
  founded: 2020,
  
  // Contacto
  phone: "+57 314 247 0366",
  email: "lizrincon1693@gmail.com",
  whatsapp: "https://wa.me/573142470366",
  
  // Ubicación
  location: "Bogotá, Colombia",
  deliveryZones: ["Bogotá", "Cundinamarca", "Nacional"],
  
  // Horarios
  schedule: {
    monday_friday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Cerrado"
  },
  
  // Políticas 2025
  warranty: {
    period: "6 meses",
    coverage: "Defectos de fabricación",
    conditions: "Uso normal del producto"
  },
  
  shipping: {
    local: "1-2 días hábiles",
    national: "3-5 días hábiles",
    freeShippingFrom: 250000
  }
};

// ========================================
// FUNCIONES PARA OBTENER IMÁGENES
// ========================================
export const getImage = (category: 'product' | 'carousel' | 'general' | 'ui' | 'legal', key: string): string => {
  switch (category) {
    case 'product':
      return PRODUCT_IMAGES[key as keyof typeof PRODUCT_IMAGES] || GENERAL_IMAGES.notFound;
    case 'carousel':
      return CAROUSEL_IMAGES[key as keyof typeof CAROUSEL_IMAGES] || GENERAL_IMAGES.notFound;
    case 'general':
      return GENERAL_IMAGES[key as keyof typeof GENERAL_IMAGES] || '/images/logo.png';
    case 'ui':
      return UI_ICONS[key as keyof typeof UI_ICONS] || '/next.svg';
    case 'legal':
      return LEGAL_DOCUMENTS[key as keyof typeof LEGAL_DOCUMENTS] || '';
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
  const { width, height } = MEDIA_CONFIG.sizes[size];
  return `${imagePath}?w=${width}&h=${height}&q=${MEDIA_CONFIG.quality}&f=${format}`;
};

// ========================================
// FUNCIÓN PARA OBTENER DOCUMENTOS LEGALES
// ========================================
export const getLegalDocument = (documentType: keyof typeof LEGAL_DOCUMENTS): string => {
  return LEGAL_DOCUMENTS[documentType];
};

// ========================================
// DATOS DE PRODUCTOS ACTUALIZADOS 2025
// ========================================
export const products: Product[] = [
  {
    id: '1',
    name: 'Bolso Force Rojo',
    description: 'Elegante bolso Force en cuero genuino color rojo. Diseño moderno y funcional perfecto para cualquier ocasión.',
    price: 135000,
    image: PRODUCT_IMAGES['bolso-force-rojo'],
    category: 'Bolsos',
    featured: true,
    warranty: '6 meses',
    materials: ['Cuero genuino', 'Herrajes metálicos', 'Forro textil'],
    availableColors: ['Rojo', 'Café', 'Dorado']
  },
  {
    id: '2',
    name: 'Bolso Force Café',
    description: 'Bolso Force en cuero genuino color café. Ideal para el día a día con su diseño versátil y elegante.',
    price: 135000,
    image: PRODUCT_IMAGES['bolso-force-cafe'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero genuino', 'Herrajes metálicos', 'Forro textil'],
    availableColors: ['Café', 'Rojo', 'Dorado']
  },
  {
    id: '3',
    name: 'Bolso Force Dorado',
    description: 'Exclusivo bolso Force en cuero color dorado. Aporta sofisticación y brillo a tu look.',
    price: 135000,
    image: PRODUCT_IMAGES['bolso-force-dorado'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero genuino', 'Herrajes dorados', 'Forro textil'],
    availableColors: ['Dorado', 'Rojo', 'Café']
  },
  {
    id: '4',
    name: 'Bolso Force Combinado',
    description: 'Bolso Force en cuero con hermosa combinación de colores rojo y beige. Único y llamativo.',
    price: 135000,
    image: PRODUCT_IMAGES['bolso-force-combinado'],
    category: 'Bolsos',
    featured: true,
    warranty: '6 meses',
    materials: ['Cuero genuino bicolor', 'Herrajes metálicos', 'Forro textil'],
    availableColors: ['Rojo/Beige']
  },
  {
    id: '5',
    name: 'Bolso Commitment Azul',
    description: 'Bolso Commitment en cuero color azul. Diseño comprometido con la elegancia y funcionalidad.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-commitment-azul-1'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero premium', 'Herrajes plateados', 'Forro de alta calidad'],
    availableColors: ['Azul', 'Café', 'Rojo']
  },
  {
    id: '6',
    name: 'Bolso Commitment Azul Variante',
    description: 'Bolso Commitment en cuero color azul. Variante de diseño con detalles únicos y acabados premium.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-commitment-azul-2'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero premium', 'Herrajes plateados', 'Forro de alta calidad'],
    availableColors: ['Azul']
  },
  {
    id: '7',
    name: 'Bolso Commitment Café',
    description: 'Bolso Commitment en cuero color café. Clásico y atemporal, perfecto para cualquier estilo.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-commitment-cafe'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero premium', 'Herrajes dorados', 'Forro de alta calidad'],
    availableColors: ['Café', 'Azul', 'Rojo']
  },
  {
    id: '8',
    name: 'Bolso Commitment Rojo',
    description: 'Bolso Commitment en cuero color rojo. Vibrante y elegante, ideal para destacar con estilo.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-commitment-rojo'],
    category: 'Bolsos',
    featured: true,
    warranty: '6 meses',
    materials: ['Cuero premium', 'Herrajes dorados', 'Forro de alta calidad'],
    availableColors: ['Rojo', 'Azul', 'Café']
  },
  {
    id: '9',
    name: 'Pasaportera Mariposas Azul',
    description: 'Pasaportera en cuero con hermosos diseños de mariposas sobre fondo azul. Perfecta para viajes.',
    price: 68000,
    image: PRODUCT_IMAGES['pasaportera-mariposas-azul'],
    category: 'Accesorios',
    warranty: '6 meses',
    materials: ['Cuero grabado', 'Cremallera metálica', 'Forro protector'],
    availableColors: ['Azul', 'Café']
  },
  {
    id: '10',
    name: 'Pasaportera Mariposas Café',
    description: 'Pasaportera en cuero con delicados diseños de mariposas sobre fondo café. Funcional y elegante.',
    price: 68000,
    image: PRODUCT_IMAGES['pasaportera-mariposas-cafe'],
    category: 'Accesorios',
    warranty: '6 meses',
    materials: ['Cuero grabado', 'Cremallera metálica', 'Forro protector'],
    availableColors: ['Café', 'Azul']
  },
  {
    id: '11',
    name: 'Bolso Manos Libres Café',
    description: 'Bolso en cuero con diseño manos libres color café. Libertad de movimiento sin sacrificar el estilo.',
    price: 175000,
    image: PRODUCT_IMAGES['bolso-manos-libres-cafe-1'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero premium', 'Correa ajustable', 'Múltiples compartimentos'],
    availableColors: ['Café', 'Negro']
  },
  {
    id: '12',
    name: 'Bolso Manos Libres Negro',
    description: 'Bolso en cuero con diseño manos libres color negro. Elegancia y practicidad en un solo producto.',
    price: 175000,
    image: PRODUCT_IMAGES['bolso-manos-libres-negro-1'],
    category: 'Bolsos',
    featured: true,
    warranty: '6 meses',
    materials: ['Cuero premium', 'Correa ajustable', 'Múltiples compartimentos'],
    availableColors: ['Negro', 'Café']
  },
  {
    id: '13',
    name: 'Bolso Manos Libres Negro Variante',
    description: 'Bolso en cuero con diseño manos libres color negro. Variante con detalles diferenciados.',
    price: 175000,
    image: PRODUCT_IMAGES['bolso-manos-libres-negro-2'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero premium', 'Correa ajustable', 'Múltiples compartimentos'],
    availableColors: ['Negro']
  },
  {
    id: '14',
    name: 'Bolso Manos Libres Café Alternativo',
    description: 'Bolso en cuero con diseño manos libres color café. Modelo alternativo con acabados especiales.',
    price: 175000,
    image: PRODUCT_IMAGES['bolso-manos-libres-cafe-2'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero premium', 'Correa ajustable', 'Múltiples compartimentos'],
    availableColors: ['Café']
  },
  {
    id: '15',
    name: 'Bolso Manos Libres Negro Premium',
    description: 'Bolso en cuero con diseño manos libres color negro. Tercera variante con características únicas.',
    price: 175000,
    image: PRODUCT_IMAGES['bolso-manos-libres-negro-3'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero premium', 'Correa ajustable', 'Múltiples compartimentos'],
    availableColors: ['Negro']
  },
  {
    id: '16',
    name: 'Morral Piloto Negro/Rojo',
    description: 'Morral en cuero tipo piloto con combinación de negro y rojo. Resistente y con gran capacidad.',
    price: 250000,
    image: PRODUCT_IMAGES['morral-piloto-negro-rojo'],
    category: 'Morrales',
    featured: true,
    warranty: '6 meses',
    materials: ['Cuero resistente', 'Herrajes reforzados', 'Compartimentos múltiples'],
    availableColors: ['Negro/Rojo', 'Miel']
  },
  {
    id: '17',
    name: 'Morral Piloto Miel',
    description: 'Morral en cuero tipo piloto color miel. Diseño robusto ideal para aventuras urbanas.',
    price: 250000,
    image: PRODUCT_IMAGES['morral-piloto-miel'],
    category: 'Morrales',
    warranty: '6 meses',
    materials: ['Cuero resistente', 'Herrajes reforzados', 'Compartimentos múltiples'],
    availableColors: ['Miel', 'Negro/Rojo']
  },
  {
    id: '18',
    name: 'Billetera Roja',
    description: 'Billetera en cuero genuino color rojo. Compacta y funcional con múltiples compartimentos.',
    price: 43000,
    image: PRODUCT_IMAGES['billetera-roja'],
    category: 'Billeteras',
    warranty: '6 meses',
    materials: ['Cuero genuino', 'Forro interno', 'Costuras reforzadas'],
    availableColors: ['Rojo', 'Café', 'Negro', 'Azul']
  },
  {
    id: '19',
    name: 'Billetera Café/Naranja',
    description: 'Billetera en cuero color café con elegante franja naranja. Diseño distintivo y moderno.',
    price: 43000,
    image: PRODUCT_IMAGES['billetera-cafe-naranja'],
    category: 'Billeteras',
    warranty: '6 meses',
    materials: ['Cuero bicolor', 'Forro interno', 'Costuras reforzadas'],
    availableColors: ['Café/Naranja']
  },
  {
    id: '20',
    name: 'Billetera Negro/Rojo',
    description: 'Billetera en cuero con combinación de negro y rojo. Estilo clásico con toque vibrante.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-negro-rojo'],
    category: 'Billeteras',
    warranty: '6 meses',
    materials: ['Cuero bicolor', 'Forro interno', 'Costuras reforzadas'],
    availableColors: ['Negro/Rojo']
  },
  {
    id: '21',
    name: 'Billetera Café Clásica',
    description: 'Billetera en cuero color café. Diseño atemporal y versátil para uso diario.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-cafe-1'],
    category: 'Billeteras',
    warranty: '6 meses',
    materials: ['Cuero genuino', 'Forro interno', 'Costuras reforzadas'],
    availableColors: ['Café', 'Negro', 'Rojo']
  },
  {
    id: '22',
    name: 'Billetera Café Tradicional',
    description: 'Billetera en cuero color café con diseño clásico. Funcionalidad y elegancia tradicional.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-cafe-2'],
    category: 'Billeteras',
    warranty: '6 meses',
    materials: ['Cuero genuino', 'Forro interno', 'Costuras reforzadas'],
    availableColors: ['Café']
  },
  {
    id: '23',
    name: 'Billetera Roja Premium',
    description: 'Billetera en cuero color rojo con acabados premium. Calidad superior y diseño refinado.',
    price: 45000,
    image: PRODUCT_IMAGES['billetera-roja-premium'],
    category: 'Billeteras',
    featured: true,
    warranty: '6 meses',
    materials: ['Cuero premium', 'Forro de calidad', 'Costuras reforzadas'],
    availableColors: ['Rojo', 'Café', 'Azul']
  },
  {
    id: '24',
    name: 'Billetera Azul',
    description: 'Billetera en cuero color azul. Fresca y moderna, perfecta para un estilo contemporáneo.',
    price: 45000,
    image: PRODUCT_IMAGES['billetera-azul'],
    category: 'Billeteras',
    warranty: '6 meses',
    materials: ['Cuero premium', 'Forro de calidad', 'Costuras reforzadas'],
    availableColors: ['Azul', 'Rojo', 'Café']
  },
  {
    id: '25',
    name: 'Bolso Elegance Azul',
    description: 'Bolso Elegance en cuero color azul. Sofisticación y distinción en cada detalle.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-azul'],
    category: 'Bolsos',
    featured: true,
    warranty: '6 meses',
    materials: ['Cuero de alta gama', 'Herrajes elegantes', 'Forro premium'],
    availableColors: ['Azul', 'Negro', 'Miel', 'Nude']
  },
  {
    id: '26',
    name: 'Bolso Comfort Natural',
    description: 'Bolso Comfort en cuero natural. Comodidad y estilo en perfecta armonía.',
    price: 85000,
    image: PRODUCT_IMAGES['bolso-comfort-natural'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero natural', 'Diseño ergonómico', 'Asas cómodas'],
    availableColors: ['Natural', 'Azul', 'Rojo', 'Dorado']
  },
  {
    id: '27',
    name: 'Bolso Comfort Azul',
    description: 'Bolso Comfort en cuero color azul. Diseño ergonómico que prioriza la comodidad.',
    price: 85000,
    image: PRODUCT_IMAGES['bolso-comfort-azul'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero suave', 'Diseño ergonómico', 'Asas cómodas'],
    availableColors: ['Azul', 'Natural', 'Rojo', 'Dorado']
  },
  {
    id: '28',
    name: 'Bolso Comfort Rojo',
    description: 'Bolso Comfort en cuero color rojo. Vibrante y cómodo para el uso cotidiano.',
    price: 90000,
    image: PRODUCT_IMAGES['bolso-comfort-rojo'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero vibrante', 'Diseño ergonómico', 'Asas cómodas'],
    availableColors: ['Rojo', 'Azul', 'Natural', 'Dorado']
  },
  {
    id: '29',
    name: 'Bolso Comfort Dorado',
    description: 'Bolso Comfort en cuero color dorado. Luminoso y elegante con máximo confort.',
    price: 80000,
    image: PRODUCT_IMAGES['bolso-comfort-dorado'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero metalizado', 'Diseño ergonómico', 'Asas cómodas'],
    availableColors: ['Dorado', 'Natural', 'Azul', 'Rojo']
  },
  {
    id: '30',
    name: 'Bolso Elegance + Strap',
    description: 'Bolso Elegance en cuero con correa strap adicional. Versatilidad y elegancia combinadas.',
    price: 180000,
    image: PRODUCT_IMAGES['bolso-elegance-strap-1'],
    category: 'Bolsos',
    featured: true,
    warranty: '6 meses',
    materials: ['Cuero premium', 'Correa desmontable', 'Herrajes exclusivos'],
    availableColors: ['Negro', 'Tricolor', 'Azul', 'Rojo']
  },
  {
    id: '31',
    name: 'Bolso Elegance Negro',
    description: 'Bolso Elegance en cuero color negro. Clásico intemporal que nunca pasa de moda.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-negro'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero negro premium', 'Herrajes plateados', 'Forro de lujo'],
    availableColors: ['Negro', 'Azul', 'Miel', 'Nude']
  },
  {
    id: '32',
    name: 'Bolso Elegance Tricolor Clásico',
    description: 'Bolso Elegance en cuero con combinación negro, beige y rojo. Diseño único y llamativo.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-tricolor-1'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero tricolor', 'Herrajes dorados', 'Forro premium'],
    availableColors: ['Negro/Beige/Rojo']
  },
  {
    id: '33',
    name: 'Bolso Elegance Clásico',
    description: 'Bolso Elegance en cuero con diseño clásico. Refinamiento y distinción en cada detalle.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-clasico'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero clásico', 'Herrajes tradicionales', 'Forro elegante'],
    availableColors: ['Café', 'Negro', 'Azul']
  },
  {
    id: '34',
    name: 'Billetera Passion Roja',
    description: 'Billetera Passion en cuero rojo. Diseño apasionado con acabados de alta calidad.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-passion-roja'],
    category: 'Billeteras',
    warranty: '6 meses',
    materials: ['Cuero passion', 'Compartimentos organizados', 'Cierre seguro'],
    availableColors: ['Rojo', 'Café', 'Blanco']
  },
  {
    id: '35',
    name: 'Billetera Passion Café',
    description: 'Billetera Passion en cuero café. Pasión por los detalles en un diseño sofisticado.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-passion-cafe'],
    category: 'Billeteras',
    warranty: '6 meses',
    materials: ['Cuero passion', 'Compartimentos organizados', 'Cierre seguro'],
    availableColors: ['Café', 'Rojo', 'Blanco']
  },
  {
    id: '36',
    name: 'Billetera Passion Blanca',
    description: 'Billetera Passion en cuero blanco. Pureza y elegancia en un accesorio esencial.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-passion-blanca'],
    category: 'Billeteras',
    warranty: '6 meses',
    materials: ['Cuero blanco', 'Compartimentos organizados', 'Cierre seguro'],
    availableColors: ['Blanco', 'Rojo', 'Café']
  },
  {
    id: '37',
    name: 'Billetera Passion Café Variante',
    description: 'Billetera Passion en cuero café. Variante con detalles únicos y acabado especial.',
    price: 40000,
    image: PRODUCT_IMAGES['billetera-passion-cafe-2'],
    category: 'Billeteras',
    warranty: '6 meses',
    materials: ['Cuero passion especial', 'Compartimentos organizados', 'Cierre seguro'],
    availableColors: ['Café']
  },
  {
    id: '38',
    name: 'Bolso Fidelity Rojo',
    description: 'Bolso Fidelity en cuero color rojo. Fiel compañero para tu día a día con estilo.',
    price: 95000,
    image: PRODUCT_IMAGES['bolso-fidelity-rojo'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero fidelity', 'Diseño funcional', 'Asas resistentes'],
    availableColors: ['Rojo']
  },
  {
    id: '39',
    name: 'Bolso True Azul',
    description: 'Bolso True en cuero color azul. Auténtico y genuino, refleja tu verdadera personalidad.',
    price: 150000,
    image: PRODUCT_IMAGES['bolso-true-azul'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero auténtico', 'Diseño true', 'Herrajes genuinos'],
    availableColors: ['Azul', 'Blanco']
  },
  {
    id: '40',
    name: 'Bolso True Blanco',
    description: 'Bolso True en cuero color blanco. Pureza y autenticidad en un diseño impecable.',
    price: 150000,
    image: PRODUCT_IMAGES['bolso-true-blanco'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero blanco auténtico', 'Diseño true', 'Herrajes genuinos'],
    availableColors: ['Blanco', 'Azul']
  },
  {
    id: '41',
    name: 'Bolso Elegance Tricolor Moderno',
    description: 'Bolso Elegance en cuero con combinación negro, café y dorado. Armonía perfecta de tonos.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-tricolor-2'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero tricolor moderno', 'Herrajes dorados', 'Forro premium'],
    availableColors: ['Negro/Café/Dorado']
  },
  {
    id: '42',
    name: 'Bolso Elegance Plateado',
    description: 'Bolso Elegance en cuero color plateado. Brillo metálico que aporta modernidad.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-plateado'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero metalizado', 'Herrajes plateados', 'Forro premium'],
    availableColors: ['Plateado']
  },
  {
    id: '43',
    name: 'Bolso Elegance Nude',
    description: 'Bolso Elegance en cuero color nude. Neutro y versátil, combina con todo tu guardarropa.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-nude'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero nude', 'Herrajes dorados', 'Forro premium'],
    availableColors: ['Nude', 'Miel', 'Negro', 'Azul']
  },
  {
    id: '44',
    name: 'Bolso Elegance Miel',
    description: 'Bolso Elegance en cuero color miel. Dulce y cálido, perfecto para cualquier temporada.',
    price: 160000,
    image: PRODUCT_IMAGES['bolso-elegance-miel'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero miel', 'Herrajes dorados', 'Forro premium'],
    availableColors: ['Miel', 'Nude', 'Negro', 'Azul']
  },
  {
    id: '45',
    name: 'Bolso Elegance + Strap Tricolor',
    description: 'Bolso Elegance en cuero con correa strap en beige, café y café oscuro. Versatilidad máxima.',
    price: 180000,
    image: PRODUCT_IMAGES['bolso-elegance-strap-tricolor'],
    category: 'Bolsos',
    featured: true,
    warranty: '6 meses',
    materials: ['Cuero tricolor', 'Correa strap desmontable', 'Herrajes premium'],
    availableColors: ['Beige/Café/Café Oscuro']
  },
  {
    id: '46',
    name: 'Bolso Elegance + Strap Azul',
    description: 'Bolso Elegance en cuero con correa strap color azul. Elegancia con opciones de uso.',
    price: 180000,
    image: PRODUCT_IMAGES['bolso-elegance-strap-azul'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero azul', 'Correa strap desmontable', 'Herrajes plateados'],
    availableColors: ['Azul', 'Rojo', 'Tricolor']
  },
  {
    id: '47',
    name: 'Bolso Elegance + Strap Rojo',
    description: 'Bolso Elegance en cuero con correa strap color rojo. Pasión y versatilidad combinadas.',
    price: 180000,
    image: PRODUCT_IMAGES['bolso-elegance-strap-rojo'],
    category: 'Bolsos',
    warranty: '6 meses',
    materials: ['Cuero rojo', 'Correa strap desmontable', 'Herrajes dorados'],
    availableColors: ['Rojo', 'Azul', 'Tricolor']
  }
];

// ========================================
// FUNCIONES AUXILIARES MEJORADAS 2025
// ========================================

// Función para obtener productos por categoría
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Función para obtener productos destacados
export const getFeaturedProducts = (limit?: number): Product[] => {
  const featured = products.filter(product => product.featured);
  return limit ? featured.slice(0, limit) : featured;
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
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.materials?.some(material => material.toLowerCase().includes(lowercaseQuery)) ||
    product.availableColors?.some(color => color.toLowerCase().includes(lowercaseQuery))
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

// Función para obtener productos por rango de precio
export const getProductsByPriceRange = (minPrice: number, maxPrice: number): Product[] => {
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
};

// Función para obtener productos por color
export const getProductsByColor = (color: string): Product[] => {
  return products.filter(product => 
    product.availableColors?.some(availableColor => 
      availableColor.toLowerCase().includes(color.toLowerCase())
    )
  );
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

// Función para formatear precio
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price);
};

// Función para calcular descuento
export const calculateDiscount = (originalPrice: number, discountPercent: number): number => {
  return originalPrice * (1 - discountPercent / 100);
};

// Función para verificar si hay envío gratis
export const hasFreeShipping = (totalAmount: number): boolean => {
  return totalAmount >= COMPANY_INFO.shipping.freeShippingFrom;
};

// Función para obtener tiempo de entrega estimado
export const getDeliveryTime = (location: string): string => {
  const lowerLocation = location.toLowerCase();
  if (lowerLocation.includes('bogotá')) {
    return COMPANY_INFO.shipping.local;
  }
  return COMPANY_INFO.shipping.national;
};

// ========================================
// CONSTANTES PARA 2025
// ========================================
export const CURRENT_YEAR = 2025;
export const COMPANY_FOUNDED_YEAR = 2020;
export const YEARS_IN_BUSINESS = CURRENT_YEAR - COMPANY_FOUNDED_YEAR;

// Mensajes promocionales para 2025
export const PROMOTIONAL_MESSAGES = {
  new_year: `¡Bienvenido ${CURRENT_YEAR}! Descubre nuestras nuevas colecciones`,
  experience: `${YEARS_IN_BUSINESS} años creando elegancia en cuero`,
  warranty: 'Garantía de 6 meses en todos nuestros productos',
  free_shipping: `Envío gratis en compras superiores a ${formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}`,
  whatsapp: 'Atención personalizada vía WhatsApp',
  quality: 'Cuero 100% genuino y artesanía tradicional'
};

// Configuración de redes sociales (para futuro uso)
export const SOCIAL_MEDIA = {
  whatsapp: COMPANY_INFO.whatsapp,
  instagram: 'https://instagram.com/leder_liz',
  facebook: 'https://facebook.com/leder.liz',
  tiktok: 'https://tiktok.com/@leder_liz'
};

// Configuración SEO
export const SEO_CONFIG = {
  siteName: COMPANY_INFO.fullName,
  description: `${COMPANY_INFO.name} - Bolsos de cuero genuino hechos a mano en Colombia. ${YEARS_IN_BUSINESS} años de experiencia en artesanía de cuero. Envíos a toda Colombia.`,
  keywords: [
    'bolsos de cuero',
    'billeteras de cuero',
    'morrales de cuero',
    'artesanía colombiana',
    'cuero genuino',
    'LEDER LIZ',
    'bolsos Bogotá',
    'cuero premium',
    'hecho a mano',
    'garantía de calidad'
  ],
  author: COMPANY_INFO.name,
  locale: 'es_CO',
  region: 'CO'
};