// next.config.ts
// -----------------------------------------------------------------------------
// Configuración de Next.js (TS):
// - Se ignoran errores de ESLint en producción para que el build de Vercel NO se detenga.
// - Puedes reactivar la verificación quitando `ignoreDuringBuilds` cuando limpies los imports.
// -----------------------------------------------------------------------------

import type { NextConfig } from "next";
import "dotenv/config";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 💡 Permite desplegar aunque haya errores ESLint
  },
};

export default nextConfig;
