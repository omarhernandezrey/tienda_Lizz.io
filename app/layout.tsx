// app/layout.tsx
import '../styles/globals.css';
import Providers from '../components/Providers';
import Navbar from '../components/Navbar';

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
        </Providers>
      </body>
    </html>
  );
}