import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const BG = '#ed5128';
const FG = '#ffffff';
const LABEL = 'MT';

function buildSvg(size) {
  const fontSize = Math.round(size * 0.5);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <rect width="${size}" height="${size}" fill="${BG}"/>
    <text x="50%" y="50%" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="${FG}" text-anchor="middle" dominant-baseline="central" letter-spacing="-4">${LABEL}</text>
  </svg>`;
}

async function makeIcon(size, filename) {
  const outPath = path.join(publicDir, filename);
  await sharp(Buffer.from(buildSvg(size))).png().toFile(outPath);
  console.log(`✓ ${filename}`);
}

await Promise.all([
  makeIcon(192, 'icon-192x192.png'),
  makeIcon(512, 'icon-512x512.png'),
  makeIcon(180, 'apple-touch-icon.png'),
]);
