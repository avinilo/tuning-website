import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Colores del navbar: fondo azul (#2563eb a #1e40af) y rayo blanco
const createFavicon = async (size, filename) => {
  const svgContent = `
    <svg width="${size}" height="${size}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="url(#bg-gradient)"/>
      <path d="M18 8L10 16H14L14 24L22 16H18L18 8Z" fill="white" stroke="none"/>
    </svg>
  `;

  try {
    await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, 'public', filename));
    console.log(`✅ Generated ${filename} (${size}x${size})`);
  } catch (error) {
    console.error(`❌ Error generating ${filename}:`, error.message);
  }
};

const generateAllFavicons = async () => {
  console.log('🎨 Generando favicons con colores del navbar...');
  
  // Crear directorio public si no existe
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Generar diferentes tamaños
  await createFavicon(16, 'favicon-16x16.png');
  await createFavicon(32, 'favicon-32x32.png');
  await createFavicon(180, 'apple-touch-icon.png');
  
  // Generar favicon.ico (usando 32x32)
  const svgContent = `
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="url(#bg-gradient)"/>
      <path d="M18 8L10 16H14L14 24L22 16H18L18 8Z" fill="white" stroke="none"/>
    </svg>
  `;
  
  try {
    await sharp(Buffer.from(svgContent))
      .resize(32, 32)
      .toFormat('png')
      .toFile(path.join(__dirname, 'public', 'favicon.ico'));
    console.log('✅ Generated favicon.ico (32x32)');
  } catch (error) {
    console.error('❌ Error generating favicon.ico:', error.message);
  }

  console.log('🎉 ¡Todos los favicons generados con éxito!');
  console.log('Colores utilizados:');
  console.log('- Fondo: Gradiente azul (#2563eb → #1e40af)');
  console.log('- Rayo: Blanco (#ffffff)');
};

generateAllFavicons().catch(console.error);