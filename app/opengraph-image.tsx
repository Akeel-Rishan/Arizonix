import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'Arizonix — AI & Software Engineering';
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
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          background:
            'radial-gradient(circle,rgba(37,99,255,.45),transparent 65%)',
          height: 700,
          left: -180,
          position: 'absolute',
          top: -250,
          width: 700,
        }}
      />
      <div
        style={{
          background:
            'radial-gradient(circle,rgba(168,85,247,.4),transparent 65%)',
          bottom: -300,
          height: 700,
          position: 'absolute',
          right: -160,
          width: 700,
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 800 }}>Arizonix</div>
        <div
          style={{
            background: 'linear-gradient(90deg,#2563ff,#a855f7,#22d3ee)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: 42,
            fontWeight: 700,
          }}
        >
          AI & Software Engineering
        </div>
        <div style={{ color: '#94a3b8', fontSize: 24 }}>
          Intelligent software for ambitious businesses.
        </div>
      </div>
    </div>,
    size,
  );
}
