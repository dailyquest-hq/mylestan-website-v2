import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Myles Yeo Tan - Crypto Trader, Christian Entrepreneur & Public Speaker',
    short_name: 'Myles Yeo Tan',
    description: 'Blending faith and finance to empower people worldwide. Expert in crypto trading, Christian entrepreneurship, and financial planning.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f100a',
    theme_color: '#ed5128',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    categories: ['finance', 'business', 'education'],
    orientation: 'portrait-primary'
  }
}
