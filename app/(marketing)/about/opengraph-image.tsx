import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#020617',
        color: 'white',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          textAlign: 'center',
        }}
      >
        <div style={{ color: '#a855f7', fontSize: 24, letterSpacing: 8 }}>
          ABOUT ARIZONIX
        </div>
        <div style={{ fontSize: 64, fontWeight: 800 }}>
          Senior engineers.
          <br />
          Measurable outcomes.
        </div>
        <div style={{ color: '#94a3b8', fontSize: 24 }}>
          Remote-first · AI-native · Built for scale
        </div>
      </div>
    </div>,
    size,
  );
}
