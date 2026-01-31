import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Myles Tan - Crypto Trader, Christian Entrepreneur & Public Speaker'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
          background: '#0f100a',
        }}
      >
        {/* Background with gradient */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #0f100a 0%, #1a1b15 50%, #0f100a 100%)',
            display: 'flex',
          }}
        />

        {/* Accent shapes for visual interest */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(237, 81, 40, 0.15) 0%, transparent 70%)',
            top: '-200px',
            right: '-100px',
            display: 'flex',
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 80,
          }}
        >
          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            {/* Name */}
            <div
              style={{
                fontSize: 84,
                fontWeight: 700,
                color: 'white',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
              }}
            >
              Myles Tan
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: 38,
                fontWeight: 600,
                color: '#ed5128',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
                maxWidth: '900px',
              }}
            >
              Crypto Trader • Christian Entrepreneur • Public Speaker
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: 28,
                fontWeight: 400,
                color: '#9f9f9f',
                maxWidth: '850px',
                marginTop: 8,
                lineHeight: 1.3,
              }}
            >
              Blending faith and finance to empower people worldwide
            </div>
          </div>

          {/* Website URL */}
          <div
            style={{
              position: 'absolute',
              bottom: 60,
              right: 80,
              fontSize: 26,
              fontWeight: 500,
              color: '#9f9f9f',
            }}
          >
            mylesyeotan.com
          </div>

          {/* Accent Bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 12,
              height: '100%',
              background: 'linear-gradient(to bottom, #ed5128 0%, #ff6b47 100%)',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
