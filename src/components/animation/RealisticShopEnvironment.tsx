'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoeNitroRunner, ShoeHighTop, ShoeKnitSlipOn, ShoeTrailHiker, ShoeRetroCourt } from './PhotorealisticShoes';

interface RealisticShopEnvironmentProps {
  isZoomedIn?: boolean;
  highlightIndex?: number | null;
  showRawLighting?: boolean;
}

export const RealisticShopEnvironment: React.FC<RealisticShopEnvironmentProps> = ({
  isZoomedIn = false,
  highlightIndex = null,
  showRawLighting = true,
}) => {
  const shoeItems = [
    { id: 'shoe-1', Component: ShoeNitroRunner, label: '#01 RUNNER', tag: 'AeroPulse Nitro', color: '#2563eb' },
    { id: 'shoe-2', Component: ShoeHighTop, label: '#02 HIGH-TOP', tag: 'Court Legacy', color: '#10b981' },
    { id: 'shoe-3', Component: ShoeKnitSlipOn, label: '#03 SLIP-ON', tag: 'Urban Knit', color: '#f59e0b' },
    { id: 'shoe-4', Component: ShoeTrailHiker, label: '#04 HIKER', tag: 'Summit Trail', color: '#64748b' },
    { id: 'shoe-5', Component: ShoeRetroCourt, label: '#05 CLASSIC', tag: 'Heritage Low', color: '#38bdf8' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '270px',
        borderRadius: '18px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 30%, #1e293b 0%, #0f172a 70%, #020617 100%)',
        boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* Background Depth of Field: Realistic Shoe Box Stacks in Physical Store */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: '80px',
          opacity: 0.15,
          filter: 'blur(4px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '5px',
          padding: '10px',
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            style={{
              height: '32px',
              borderRadius: '2px',
              background: i % 4 === 0 ? '#d97706' : i % 3 === 0 ? '#2563eb' : i % 2 === 0 ? '#10b981' : '#475569',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          />
        ))}
      </div>

      {/* Overhead Warm Retail Spotlights */}
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          left: '12%',
          width: '32%',
          height: '240px',
          background: 'radial-gradient(ellipse at top, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          right: '12%',
          width: '32%',
          height: '240px',
          background: 'radial-gradient(ellipse at top, rgba(56, 189, 248, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Store Back Wall Shelf Rail Line */}
      <div
        style={{
          position: 'absolute',
          top: '36px',
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent 100%)',
        }}
      />

      {/* 5 Physical Shoes Displayed in Natural Staggered Depth */}
      <motion.div
        animate={{
          scale: isZoomedIn ? 1.05 : 1,
          y: isZoomedIn ? -6 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="shelf-grid"
      >
        {shoeItems.map((item, idx) => {
          const isHighlighted = highlightIndex === null || highlightIndex === idx;
          // Stagger slightly for natural organic showroom layout
          const slightYOffset = idx === 0 || idx === 4 ? 2 : idx === 2 ? -2 : 0;
          return (
            <motion.div
              key={item.id}
              animate={{
                opacity: isHighlighted ? 1 : 0.35,
                scale: isHighlighted ? 1 : 0.94,
                y: slightYOffset,
              }}
              transition={{ duration: 0.35 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {/* Product Shelf Slot Stand / Acrylic Riser */}
              <div
                className="shelf-shoe-slot"
                style={{
                  width: '94%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <item.Component isRaw={showRawLighting} />
              </div>

              {/* Physical Shelf Price/Model Tag Clip */}
              <div
                style={{
                  marginTop: '4px',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  fontSize: 'clamp(0.475rem, 1.4vw, 0.625rem)',
                  fontWeight: 800,
                  letterSpacing: '0.03em',
                  color: '#cbd5e1',
                  textAlign: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Authentic Solid Teak Wood Shelf Plank Base */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          width: '100%',
          height: '26px',
          background: 'linear-gradient(180deg, #92400e 0%, #78350f 35%, #451a03 100%)',
          borderTop: '2px solid #d97706',
          boxShadow: '0 6px 16px rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 12px',
        }}
      >
        {/* Steel Shelf Mounting Screws */}
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#cbd5e1', boxShadow: 'inset 0 1px 2px #000000, 0 1px 2px rgba(0,0,0,0.5)', flexShrink: 0 }} />
        <div style={{ fontSize: 'clamp(0.48rem, 1.6vw, 0.575rem)', fontWeight: 800, color: '#fef3c7', letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.9, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0 4px' }}>
          APEX FOOTWEAR • PHYSICAL STORE DISPLAY SHELF
        </div>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#cbd5e1', boxShadow: 'inset 0 1px 2px #000000, 0 1px 2px rgba(0,0,0,0.5)', flexShrink: 0 }} />
      </div>

      <style jsx>{`
        .shelf-grid {
          position: relative;
          z-index: 10;
          width: 100%;
          padding: 0 14px 18px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
          align-items: flex-end;
        }
        .shelf-shoe-slot {
          height: 82px;
        }
        @media (max-width: 640px) {
          .shelf-grid {
            padding: 0 8px 12px;
            gap: 4px;
          }
          .shelf-shoe-slot {
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
};
