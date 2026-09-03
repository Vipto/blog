import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Vipto — Everyday Product Discovery Made Simpler';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#08090d',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #2563eb, #10b981)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '32px',
              fontWeight: 800,
            }}
          >
            V
          </div>
          <div style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff' }}>
            Vipto
          </div>
          <div
            style={{
              fontSize: '18px',
              color: '#9ba3b5',
              background: '#161a24',
              padding: '6px 16px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            Initiative
          </div>
        </div>

        {/* Main Center Message */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1000px' }}>
          <div
            style={{
              fontSize: '60px',
              fontWeight: 800,
              color: '#f3f4f8',
              lineHeight: 1.15,
            }}
          >
            Building technology that makes everyday product discovery simpler.
          </div>
          <div style={{ fontSize: '26px', color: '#9ba3b5' }}>
            Search Online. Confirm Availability. Buy Offline.
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '30px',
            fontSize: '20px',
            color: '#656d81',
          }}
        >
          <div>Unincorporated Technology Product Initiative</div>
          <div>vipto.vercel.app</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
