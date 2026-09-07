'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ViewfinderHUDProps {
  isCapturing?: boolean;
  hasFlashed?: boolean;
}

export const ViewfinderHUD: React.FC<ViewfinderHUDProps> = ({
  isCapturing = false,
  hasFlashed = false,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px',
        zIndex: 20,
        userSelect: 'none',
      }}
    >
      {/* Top HUD Telemetry Pill */}
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '4px 14px',
          borderRadius: '9999px',
          background: 'rgba(0, 0, 0, 0.55)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          fontSize: '0.6875rem',
          fontFamily: 'var(--font-mono)',
          color: 'rgba(255, 255, 255, 0.85)',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#ef4444',
              boxShadow: '0 0 6px #ef4444',
            }}
          />
          <span>RAW • 4K 60FPS</span>
        </span>
        <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
        <span>24mm ƒ/1.8</span>
        <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
        <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>AI_DETECT_ARMED</span>
      </div>

      {/* Center Focus Reticle & Rule of Thirds */}
      <div
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          right: '24px',
          bottom: '24px',
          pointerEvents: 'none',
        }}
      >
        {/* 4 Corner Framing Brackets */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '16px',
            height: '16px',
            borderTop: '2px solid rgba(255, 255, 255, 0.8)',
            borderLeft: '2px solid rgba(255, 255, 255, 0.8)',
            borderTopLeftRadius: '2px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '16px',
            height: '16px',
            borderTop: '2px solid rgba(255, 255, 255, 0.8)',
            borderRight: '2px solid rgba(255, 255, 255, 0.8)',
            borderTopRightRadius: '2px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '16px',
            height: '16px',
            borderBottom: '2px solid rgba(255, 255, 255, 0.8)',
            borderLeft: '2px solid rgba(255, 255, 255, 0.8)',
            borderBottomLeftRadius: '2px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '16px',
            height: '16px',
            borderBottom: '2px solid rgba(255, 255, 255, 0.8)',
            borderRight: '2px solid rgba(255, 255, 255, 0.8)',
            borderBottomRightRadius: '2px',
          }}
        />

        {/* Center Dynamic Target Box */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70px',
            height: '70px',
            border: '1px solid rgba(251, 191, 36, 0.85)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          animate={isCapturing ? { scale: [1, 0.9, 1], borderColor: '#10b981' } : { scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: isCapturing ? '#10b981' : '#fbbf24',
              boxShadow: isCapturing ? '0 0 8px #10b981' : '0 0 8px #fbbf24',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '-16px',
              fontSize: '0.5625rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              color: isCapturing ? '#10b981' : '#fbbf24',
              letterSpacing: '0.08em',
            }}
          >
            {isCapturing ? 'CAPTURED ✓' : 'AI_LOCKED'}
          </div>
        </motion.div>
      </div>

      {/* Bottom Shutter & Capture Status Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingBottom: '4px',
          zIndex: 25,
        }}
      >
        <div
          style={{
            fontSize: '0.6875rem',
            fontFamily: 'var(--font-mono)',
            color: 'rgba(255, 255, 255, 0.7)',
            background: 'rgba(0, 0, 0, 0.45)',
            padding: '4px 10px',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          1 SHOT → 5 PRODUCTS
        </div>

        {/* Shutter Button with Haptic Press Micro-interaction */}
        <motion.div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.9)',
            padding: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
          }}
          animate={isCapturing ? { scale: 0.86 } : { scale: 1 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: '#ffffff',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}
            animate={isCapturing ? { scale: 0.75, backgroundColor: '#3b82f6' } : { scale: 1 }}
            transition={{ duration: 0.15 }}
          />
        </motion.div>

        <div
          style={{
            fontSize: '0.6875rem',
            fontFamily: 'var(--font-mono)',
            color: '#34d399',
            background: 'rgba(6, 78, 59, 0.6)',
            border: '1px solid rgba(52, 211, 153, 0.3)',
            padding: '4px 10px',
            borderRadius: '6px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#34d399',
            }}
          />
          AUTO-SYNC
        </div>
      </div>

      {/* Studio Shutter Flash Burst Overlay */}
      {hasFlashed && (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#ffffff',
            zIndex: 50,
            pointerEvents: 'none',
            borderRadius: '16px',
          }}
          initial={{ opacity: 0.95 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      )}
    </div>
  );
};
