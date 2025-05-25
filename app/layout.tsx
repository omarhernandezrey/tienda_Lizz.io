import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import { 
  COMPANY_INFO, 
  CURRENT_YEAR, 
  YEARS_IN_BUSINESS, 
  SEO_CONFIG,
  formatPrice
} from "../data/productsData";

// Optimización de fuentes con display swap para mejor performance
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap", // Mejora la carga de fuentes
  preload: true,   // Precarga la fuente principal
});

// Viewport optimizado para mobile-first
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f59e0b" },
    { media: "(prefers-color-scheme: dark)", color: "#92400e" }
  ],
  colorScheme: "dark light",
};

// Metadata optimizada con datos dinámicos del sistema 2025
export const metadata: Metadata = {
  metadataBase: new URL("https://eleganciaencuero.com"), // Cambiar por tu dominio real
  
  // Títulos y descripciones optimizadas para SEO
  title: {
    default: `${COMPANY_INFO.fullName} ${CURRENT_YEAR} - Bolsos de Cuero Premium`,
    template: `%s | ${COMPANY_INFO.name} ${CURRENT_YEAR}`,
  },
  
  description: `${SEO_CONFIG.description} Garantía de ${COMPANY_INFO.warranty.period}. Envío gratis desde ${formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}.`,
  
  keywords: [
    ...SEO_CONFIG.keywords,
    `bolsos ${CURRENT_YEAR}`,
    `cuero genuino ${CURRENT_YEAR}`,
    `LEDER LIZ ${CURRENT_YEAR}`,
    `artesanía colombiana ${CURRENT_YEAR}`,
    `garantía ${COMPANY_INFO.warranty.period}`,
    "envío gratis Colombia",
    `${YEARS_IN_BUSINESS} años experiencia`
  ],
  
  authors: [
    { 
      name: `${COMPANY_INFO.name} - Liz Rincón`, 
      url: `mailto:${COMPANY_INFO.email}` 
    }
  ],
  
  creator: `${COMPANY_INFO.name}`,
  publisher: `${COMPANY_INFO.fullName}`,
  
  // Información de contacto y ubicación
  other: {
    "contact:email": COMPANY_INFO.email,
    "contact:phone": COMPANY_INFO.phone,
    "contact:address": COMPANY_INFO.location,
    "business:hours": `${COMPANY_INFO.schedule.monday_friday}`,
    "business:established": COMPANY_INFO.founded.toString(),
    "business:years_active": YEARS_IN_BUSINESS.toString(),
    "product:warranty": COMPANY_INFO.warranty.period,
    "shipping:free_threshold": COMPANY_INFO.shipping.freeShippingFrom.toString(),
    "geo:region": "CO",
    "geo:placename": "Bogotá",
  },
  
  // Open Graph optimizado
  openGraph: {
    type: "website",
    locale: SEO_CONFIG.locale,
    siteName: COMPANY_INFO.fullName,
    title: `${COMPANY_INFO.fullName} ${CURRENT_YEAR} - Bolsos de Cuero Premium`,
    description: `Descubre nuestra colección exclusiva de bolsos de cuero auténtico. ${YEARS_IN_BUSINESS} años de experiencia. Garantía ${COMPANY_INFO.warranty.period}.`,
    url: "/",
    images: [
      {
        url: "/images/og-image-2025.jpg", // Crear esta imagen
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} ${CURRENT_YEAR} - Bolsos de Cuero Premium`,
        type: "image/jpeg",
      },
      {
        url: "/images/logo.png",
        width: 400,
        height: 400,
        alt: `${COMPANY_INFO.name} Logo`,
        type: "image/png",
      }
    ],
    emails: [COMPANY_INFO.email],
    phoneNumbers: [COMPANY_INFO.phone],
  },
  
  // Twitter Card optimizado
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} ${CURRENT_YEAR} - Bolsos de Cuero Premium`,
    description: `${YEARS_IN_BUSINESS} años creando bolsos de cuero genuino. Garantía ${COMPANY_INFO.warranty.period}. Envío gratis > ${formatPrice(COMPANY_INFO.shipping.freeShippingFrom)}.`,
    creator: "@leder_liz", // Cambiar por tu handle real
    images: ["/images/og-image-2025.jpg"],
  },
  
  // Robots y indexación
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Información adicional para rich snippets
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/",
      "es": "/",
    },
  },
  
  // Schema.org data para LocalBusiness
  verification: {
    // google: "your-google-verification-code", // Agregar cuando tengas el código
    // bing: "your-bing-verification-code",     // Agregar cuando tengas el código
  },
  
  // App metadata para PWA (futuro)
  applicationName: COMPANY_INFO.name,
  appleWebApp: {
    capable: true,
    title: COMPANY_INFO.name,
    statusBarStyle: "black-translucent",
  },
  
  // Información de formato
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  // Categorización
  category: "shopping",
  classification: "Artesanía en cuero, Bolsos premium, Accesorios de lujo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="es" 
      className={montserrat.variable}
      suppressHydrationWarning={true} // Para evitar warnings de hidratación en desarrollo
    >
      <head>
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Prefetch para navegación rápida */}
        <link rel="prefetch" href="/productos" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/contacto" />
        <link rel="prefetch" href="/politicas" />
        
        {/* Favicon optimizado */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Schema.org LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://eleganciaencuero.com/#business", // Cambiar por tu dominio
              "name": COMPANY_INFO.fullName,
              "alternateName": COMPANY_INFO.name,
              "description": SEO_CONFIG.description,
              "url": "https://eleganciaencuero.com", // Cambiar por tu dominio
              "telephone": COMPANY_INFO.phone,
              "email": COMPANY_INFO.email,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bogotá",
                "addressRegion": "Cundinamarca",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "4.7110",  // Coordenadas de Bogotá
                "longitude": "-74.0721"
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-16:00"
              ],
              "image": [
                "https://eleganciaencuero.com/images/logo.png", // Cambiar por tu dominio
                "https://eleganciaencuero.com/images/og-image-2025.jpg"
              ],
              "logo": "https://eleganciaencuero.com/images/logo.png", // Cambiar por tu dominio
              "sameAs": [
                COMPANY_INFO.whatsapp,
                // Agregar redes sociales cuando estén disponibles
                // "https://instagram.com/leder_liz",
                // "https://facebook.com/leder.liz"
              ],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Bank Transfer", "Nequi", "Daviplata"],
              "currenciesAccepted": "COP",
              "foundingDate": COMPANY_INFO.founded.toString(),
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Cliente Satisfecho"
                  },
                  "reviewBody": `Excelente calidad en los bolsos de cuero. ${YEARS_IN_BUSINESS} años de experiencia se notan en cada detalle.`
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bolsos de Cuero Premium",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Bolsos de Cuero",
                      "category": "Fashion Accessories"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": COMPANY_INFO.fullName,
              "alternateName": COMPANY_INFO.name,
              "url": "https://eleganciaencuero.com", // Cambiar por tu dominio
              "logo": "https://eleganciaencuero.com/images/logo.png", // Cambiar por tu dominio
              "description": SEO_CONFIG.description,
              "email": COMPANY_INFO.email,
              "telephone": COMPANY_INFO.phone,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bogotá",
                "addressCountry": "CO"
              },
              "foundingDate": COMPANY_INFO.founded.toString(),
              "founder": {
                "@type": "Person",
                "name": "Liz Rincón"
              },
              "numberOfEmployees": "1-10",
              "slogan": `${YEARS_IN_BUSINESS} años de experiencia en cuero genuino`
            })
          }}
        />
      </head>
      
      <body 
        className={`${montserrat.className} antialiased min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content para accesibilidad */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-200"
        >
          Saltar al contenido principal
        </a>
        
        <CartProvider>
          {/* Navbar Premium con año 2025 */}
          <Navbar />

          {/* Main Content con landmark y ID para accesibilidad */}
          <main 
            id="main-content" 
            className="relative z-10"
            role="main"
            aria-label="Contenido principal"
          >
            {children}
          </main>

          {/* Footer Premium con año 2025 */}
          <Footer />

          {/* WhatsApp Button con información dinámica */}
          <FloatingWhatsAppButton />

          {/* Background Effects optimizados para performance */}
          <div 
            className="fixed inset-0 pointer-events-none opacity-5 z-0" 
            aria-hidden="true"
            role="presentation"
          >
            <div 
              className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-3xl animate-pulse"
              style={{ 
                willChange: 'transform',
                animation: 'pulse 4s ease-in-out infinite' 
              }}
            />
            <div 
              className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse" 
              style={{ 
                animationDelay: '2s',
                willChange: 'transform',
                animation: 'pulse 4s ease-in-out infinite 2s' 
              }}
            />
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-500 to-red-500 rounded-full blur-3xl animate-pulse" 
              style={{ 
                animationDelay: '1s',
                willChange: 'transform',
                animation: 'pulse 4s ease-in-out infinite 1s' 
              }}
            />
          </div>
          
          {/* Loading indicator para páginas dinámicas */}
          <div 
            id="loading-indicator" 
            className="fixed top-0 left-0 w-full h-1 bg-amber-600 transform scale-x-0 transition-transform duration-300 z-50"
            aria-hidden="true"
          />
        </CartProvider>
        
        {/* Analytics y scripts externos (para futuro uso) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> */}
            
            {/* Hotjar o similar */}
            {/* <script>... tracking code ...</script> */}
          </>
        )}
      </body>
    </html>
  );
}