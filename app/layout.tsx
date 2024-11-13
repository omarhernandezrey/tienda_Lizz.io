// app/layout.tsx
import '../styles/globals.css';
import Providers from '../components/Providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export const metadata = {
  title: 'Tienda de Bolsos',
  description: 'Compra los mejores bolsos de cuero',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer /> {/* Añadir el Footer aquí para que aparezca en todas las páginas */}
        </Providers>
      </body>
    </html>
  );
}
