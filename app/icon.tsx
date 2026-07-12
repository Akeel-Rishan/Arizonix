import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: 'linear-gradient(135deg,#2563ff,#a855f7,#22d3ee)',
        borderRadius: 8,
        color: 'white',
        display: 'flex',
        fontSize: 22,
        fontWeight: 800,
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      A
    </div>,
    size,
  );
}
