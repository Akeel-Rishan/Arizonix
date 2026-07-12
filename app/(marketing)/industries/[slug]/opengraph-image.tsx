import { ImageResponse } from 'next/og';

import { industries } from '@/lib/industries-data';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image({ params }: { params: { slug: string } }) {
  const industry = industries.find((item) => item.slug === params.slug);
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#020617',
        color: 'white',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        padding: 80,
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
          textAlign: 'center',
        }}
      >
        <div style={{ color: '#a855f7', fontSize: 24, letterSpacing: 6 }}>
          INDUSTRY SOLUTIONS
        </div>
        <div style={{ fontSize: 64, fontWeight: 800 }}>
          {industry?.name ?? 'Industry'} Software & AI
        </div>
        <div style={{ color: '#94a3b8', fontSize: 24 }}>
          Specialized technology. Measurable outcomes.
        </div>
      </div>
    </div>,
    size,
  );
}
