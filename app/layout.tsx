// app/layout.tsx
// RootLayout COMPLETO - Optimizado Mobile First con diseño moderno y responsivo
// Mejoras aplicadas: gradientes suaves, animaciones optimizadas, mejor accesibilidad

import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import {
  COMPANY_INFO,
  CURRENT_YEAR,
  YEARS_IN_BUSINESS,
  SEO_CONFIG,
  formatPrice
} from '../data/productsData';

/* -------------------- Fuente Google Optimizada -------------------- */
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
});

/* -------------------- Viewport Mobile First -------------------- */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f59e0b' },
    { media: '(prefers-color-scheme: dark)', color: '#92400e' }
  ],
  colorScheme: 'dark light',
  viewportFit: 'cover' // Para pantallas con notch
};

/* -------------------- Metadata Mejorada -------------------- */
export const metadata: Metadata = {
  metadataBase: new URL('https://eleganciaencuero.com'),
  title: {
    default: `${COMPANY_INFO.fullName} ${CURRENT_YEAR} - Bolsos de Cuero Premium`,
    template: `%s | ${COMPANY_INFO.name} ${CURRENT_YEAR}`
  },
  description: `${SEO_CONFIG.description} Garantía de ${COMPANY_INFO.warranty.period}. Envío gratis desde ${formatPrice(
    COMPANY_INFO.shipping.freeShippingFrom
  )}.`,
  keywords: [
    ...SEO_CONFIG.keywords,
    `bolsos ${CURRENT_YEAR}`,
    `cuero genuino ${CURRENT_YEAR}`,
    `LEDER LIZ ${CURRENT_YEAR}`,
    `artesanía colombiana ${CURRENT_YEAR}`,
    `garantía ${COMPANY_INFO.warranty.period}`,
    'envío gratis Colombia',
    `${YEARS_IN_BUSINESS} años experiencia`
  ],
  authors: [{ name: `${COMPANY_INFO.name} - Liz Rincón`, url: `mailto:${COMPANY_INFO.email}` }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.fullName,
  other: {
    'contact:email': COMPANY_INFO.email,
    'contact:phone': COMPANY_INFO.phone,
    'contact:address': COMPANY_INFO.location,
    'business:hours': COMPANY_INFO.schedule.monday_friday,
    'business:established': COMPANY_INFO.founded.toString(),
    'business:years_active': YEARS_IN_BUSINESS.toString(),
    'product:warranty': COMPANY_INFO.warranty.period,
    'shipping:free_threshold': COMPANY_INFO.shipping.freeShippingFrom.toString(),
    'geo:region': 'CO',
    'geo:placename': 'Bogotá'
  },
  openGraph: {
    type: 'website',
    locale: SEO_CONFIG.locale,
    siteName: COMPANY_INFO.fullName,
    title: `${COMPANY_INFO.fullName} ${CURRENT_YEAR} - Bolsos de Cuero Premium`,
    description: `Descubre nuestra colección exclusiva de bolsos de cuero auténtico. ${YEARS_IN_BUSINESS} años de experiencia. Garantía ${COMPANY_INFO.warranty.period}.`,
    url: '/',
    images: [
      {
        url: '/images/og-image-2025.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} ${CURRENT_YEAR} - Bolsos de Cuero Premium`,
        type: 'image/jpeg'
      },
      {
        url: '/images/logo.png',
        width: 400,
        height: 400,
        alt: `${COMPANY_INFO.name} Logo`,
        type: 'image/png'
      }
    ],
    emails: [COMPANY_INFO.email],
    phoneNumbers: [COMPANY_INFO.phone]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.name} ${CURRENT_YEAR} - Bolsos de Cuero Premium`,
    description: `${YEARS_IN_BUSINESS} años creando bolsos de cuero genuino. Garantía ${COMPANY_INFO.warranty.period}. Envío gratis > ${formatPrice(
      COMPANY_INFO.shipping.freeShippingFrom
    )}.`,
    creator: '@leder_liz',
    images: ['/images/og-image-2025.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: { canonical: '/', languages: { 'es-CO': '/', es: '/' } },
  applicationName: COMPANY_INFO.name,
  appleWebApp: { 
    capable: true, 
    title: COMPANY_INFO.name, 
    statusBarStyle: 'black-translucent' 
  },
  formatDetection: { 
    telephone: true, 
    email: true, 
    address: true 
  },
  category: 'shopping',
  classification: 'Artesanía en cuero, Bolsos premium, Accesorios de lujo'
};

/* -------------------- Root Layout Optimizado -------------------- */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="es" 
      className={`${montserrat.variable} scroll-smooth`} 
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect & DNS-Prefetch Optimizados */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        
        {/* Prefetch de rutas principales */}
        {['/productos', '/about', '/contacto', '/politicas'].map((path) => (
          <link key={path} rel="prefetch" href={path} />
        ))}

        {/* Favicons Completos */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD LocalBusiness Mejorado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://eleganciaencuero.com/#business',
              name: COMPANY_INFO.fullName,
              alternateName: COMPANY_INFO.name,
              description: SEO_CONFIG.description,
              url: 'https://eleganciaencuero.com',
              telephone: COMPANY_INFO.phone,
              email: COMPANY_INFO.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: COMPANY_INFO.location,
                addressLocality: 'Bogotá',
                addressRegion: 'Cundinamarca',
                postalCode: '110111',
                addressCountry: 'CO'
              },
              geo: { 
                '@type': 'GeoCoordinates', 
                latitude: '4.7110', 
                longitude: '-74.0721' 
              },
              openingHours: [
                'Mo-Fr 08:00-18:00', 
                'Sa 09:00-16:00'
              ],
              image: [
                'https://eleganciaencuero.com/images/logo.png',
                'https://eleganciaencuero.com/images/og-image-2025.jpg'
              ],
              logo: 'https://eleganciaencuero.com/images/logo.png',
              sameAs: [COMPANY_INFO.whatsapp],
              priceRange: '$$',
              paymentAccepted: ['Cash', 'Bank Transfer', 'Nequi', 'Daviplata'],
              currenciesAccepted: 'COP',
              foundingDate: COMPANY_INFO.founded.toString(),
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '127'
              }
            })
          }}
        />

        {/* JSON-LD Organization Mejorado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: COMPANY_INFO.fullName,
              alternateName: COMPANY_INFO.name,
              url: 'https://eleganciaencuero.com',
              logo: 'https://eleganciaencuero.com/images/logo.png',
              description: SEO_CONFIG.description,
              email: COMPANY_INFO.email,
              telephone: COMPANY_INFO.phone,
              address: { 
                '@type': 'PostalAddress', 
                addressLocality: 'Bogotá', 
                addressCountry: 'CO' 
              },
              foundingDate: COMPANY_INFO.founded.toString(),
              founder: { 
                '@type': 'Person', 
                name: 'Liz Rincón',
                jobTitle: 'Artesana en Cuero'
              },
              numberOfEmployees: '1-10',
              slogan: `${YEARS_IN_BUSINESS} años de experiencia en cuero genuino`,
              areaServed: 'Colombia',
              knowsAbout: ['Artesanía en cuero', 'Bolsos premium', 'Accesorios de lujo']
            })
          }}
        />
      </head>

      <body
        className={`
          ${montserrat.className} 
          antialiased 
          min-h-screen 
          bg-gradient-to-br 
          from-slate-950 
          via-slate-900 
          to-amber-950
          text-white 
          overflow-x-hidden
          selection:bg-amber-500/20
          selection:text-amber-200
        `}
        suppressHydrationWarning
      >
        {/* Skip Link para Accesibilidad */}
        <a
          href="#main-content"
          className="
            sr-only 
            focus:not-sr-only 
            focus:absolute 
            focus:top-2 
            focus:left-2
            sm:focus:top-4 
            sm:focus:left-4
            bg-amber-600 
            hover:bg-amber-700
            text-white 
            px-3 py-2
            sm:px-4 sm:py-2
            rounded-lg 
            z-50 
            transition-all 
            duration-200
            text-sm
            sm:text-base
            font-medium
            shadow-lg
            border
            border-amber-500/20
          "
          tabIndex={1}
        >
          Saltar al contenido principal
        </a>

        <CartProvider>
          <Navbar />

          <main 
            id="main-content" 
            className="relative z-10 min-h-screen" 
            role="main" 
            aria-label="Contenido principal"
          >
            {children}
          </main>

          <Footer />
          <FloatingWhatsAppButton />

          {/* Efectos de Fondo Animados - Optimizados Mobile First */}
          <div 
            className="
              fixed 
              inset-0 
              pointer-events-none 
              opacity-[0.02]
              sm:opacity-[0.03]
              md:opacity-[0.04]
              lg:opacity-[0.05]
              z-0
            " 
            aria-hidden="true"
          >
            {/* Blob 1 - Esquina superior izquierda */}
            <div 
              className="
                absolute 
                top-10 left-5
                sm:top-16 sm:left-10
                md:top-20 md:left-20
                w-32 h-32
                sm:w-48 sm:h-48
                md:w-64 md:h-64
                lg:w-80 lg:h-80
                bg-gradient-to-br 
                from-amber-400/60 
                via-orange-500/40
                to-red-600/60
                rounded-full 
                blur-2xl
                sm:blur-3xl
                animate-pulse
                transform-gpu
              " 
            />
            
            {/* Blob 2 - Esquina inferior derecha */}
            <div
              className="
                absolute 
                bottom-20 right-5
                sm:bottom-32 sm:right-10
                md:bottom-40 md:right-20
                w-40 h-40
                sm:w-64 sm:h-64
                md:w-96 md:h-96
                lg:w-[28rem] lg:h-[28rem]
                bg-gradient-to-tl 
                from-blue-500/50 
                via-indigo-600/40
                to-purple-600/60
                rounded-full 
                blur-2xl
                sm:blur-3xl
                animate-pulse
                transform-gpu
              "
              style={{ animationDelay: '2s', animationDuration: '4s' }}
            />
            
            {/* Blob 3 - Centro */}
            <div
              className="
                absolute 
                top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2
                w-36 h-36
                sm:w-56 sm:h-56
                md:w-80 md:h-80
                lg:w-96 lg:h-96
                bg-gradient-to-r 
                from-amber-500/50 
                via-yellow-500/40
                to-orange-600/50
                rounded-full 
                blur-2xl
                sm:blur-3xl
                animate-pulse
                transform-gpu
              "
              style={{ animationDelay: '1s', animationDuration: '6s' }}
            />

            {/* Blob 4 - Esquina superior derecha (solo visible en pantallas grandes) */}
            <div
              className="
                absolute 
                top-1/4 right-1/4
                w-0 h-0
                lg:w-72 lg:h-72
                xl:w-80 xl:h-80
                bg-gradient-to-bl 
                from-emerald-400/40 
                via-teal-500/30
                to-cyan-600/50
                rounded-full 
                blur-3xl
                animate-pulse
                transform-gpu
              "
              style={{ animationDelay: '3s', animationDuration: '5s' }}
            />
          </div>

          {/* Loading Progress Bar - Mejorado */}
          <div 
            id="loading-indicator" 
            className="
              fixed 
              top-0 left-0 
              w-full 
              h-0.5
              sm:h-1
              bg-gradient-to-r 
              from-amber-400 
              via-amber-500
              to-amber-600
              scale-x-0 
              transition-transform 
              duration-300 
              ease-out
              z-50
              shadow-lg
              shadow-amber-500/50
            " 
          />

          {/* Mesh Gradient Overlay para mayor profundidad visual */}
          <div 
            className="
              fixed 
              inset-0 
              pointer-events-none 
              opacity-10
              bg-gradient-to-br 
              from-transparent 
              via-amber-950/5
              to-transparent
              z-0
            "
            aria-hidden="true"
          />
        </CartProvider>

        {/* Scripts de Analytics (comentados para desarrollo) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script> */}
            {/* <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_ID');
            `}} /> */}
            
            {/* Microsoft Clarity */}
            {/* <script dangerouslySetInnerHTML={{ __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "CLARITY_ID");
            `}} /> */}
          </>
        )}
      </body>
    </html>
  );
}