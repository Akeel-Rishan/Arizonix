import { ImageResponse } from 'next/og';

import { services } from '@/lib/services-data';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
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
        <div style={{ color: '#2563ff', fontSize: 24, letterSpacing: 6 }}>
          ARIZONIX SERVICES
        </div>
        <div style={{ fontSize: 64, fontWeight: 800 }}>
          {service?.name ?? 'Software Engineering'}
        </div>
        <div style={{ color: '#94a3b8', fontSize: 24 }}>
          {service?.shortDescription ??
            'Intelligent solutions built for scale.'}
        </div>
      </div>
    </div>,
    size,
  );
}
