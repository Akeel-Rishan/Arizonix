import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: 'linear-gradient(135deg,#2563ff,#a855f7,#22d3ee)',
        borderRadius: 36,
        color: 'white',
        display: 'flex',
        fontSize: 120,
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
