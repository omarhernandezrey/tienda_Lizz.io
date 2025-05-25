import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import TestEmail from "../components/TestEmail";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Elegancia en Cuero - Bolsos de Lujo Artesanales",
  description: "Bolsos de cuero auténtico de alta calidad. Diseño sofisticado, artesanía tradicional y precios accesibles. Envíos a todo Colombia.",
  keywords: ["bolsos de cuero", "carteras", "accesorios", "lujo", "artesanal", "Colombia"],
  authors: [{ name: "Liz Rincón - Elegancia en Cuero", url: "mailto:lizrincon1693@gmail.com" }],
  creator: "Liz Rincón",
  publisher: "Elegancia en Cuero",
  openGraph: {
    title: "Elegancia en Cuero - Bolsos de Lujo Artesanales",
    description: "Descubre nuestra colección exclusiva de bolsos de cuero auténtico",
    type: "website",
    locale: "es_CO",
    siteName: "Elegancia en Cuero",
    emails: ["lizrincon1693@gmail.com"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elegancia en Cuero - Bolsos de Lujo Artesanales",
    description: "Descubre nuestra colección exclusiva de bolsos de cuero auténtico",
    creator: "@eleganciaencuero",
  },
  other: {
    "contact:email": "lizrincon1693@gmail.com",
    "contact:phone": "+57 314 247 0366",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white`}>
        <CartProvider>
          {/* Navbar Premium */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">
            {children}
          </main>

          {/* Footer Premium */}
          <Footer />

          {/* WhatsApp Button */}
          <FloatingWhatsAppButton />

          {/* Componente de prueba - TEMPORAL */}
          <TestEmail />

          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-500 to-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
