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
        <div style={{ color: '#22d3ee', fontSize: 24, letterSpacing: 8 }}>
          ARIZONIX BLOG
        </div>
        <div style={{ fontSize: 64, fontWeight: 800 }}>
          Engineering insights
          <br />
          for ambitious teams.
        </div>
        <div style={{ color: '#94a3b8', fontSize: 24 }}>
          AI · Software Engineering · Product Strategy
        </div>
      </div>
    </div>,
    size,
  );
}
