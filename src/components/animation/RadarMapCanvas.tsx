'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Store, User } from 'lucide-react';

interface RadarMapCanvasProps {
  isLockedOnCustomer?: boolean;
}

export const RadarMapCanvas: React.FC<RadarMapCanvasProps> = ({
  isLockedOnCustomer = false,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '260px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: '#090d16',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
      }}
    >
      {/* Dynamic Grid Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.12,
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* SVG Radar Concentric Rings & Signal Wave */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        viewBox="0 0 400 260"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="radar-glow" cx="40%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#10b981" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 5km Radial Area Fill */}
        <circle cx="160" cy="130" r="100" fill="url(#radar-glow)" />

        {/* 1.5km Inner Ring */}
        <circle
          cx="160"
          cy="130"
          r="40"
          fill="none"
          stroke="rgba(255, 255, 255, 0.14)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* 3.0km Middle Ring */}
        <circle
          cx="160"
          cy="130"
          r="70"
          fill="none"
          stroke="rgba(59, 130, 246, 0.28)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* 5.0km Discovery Perimeter Ring */}
        <circle
          cx="160"
          cy="130"
          r="100"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          opacity="0.85"
        />

        {/* Dynamic Expanding Radar Wave */}
        <motion.circle
          cx="160"
          cy="130"
          r="100"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          initial={{ r: 15, opacity: 0.9 }}
          animate={{ r: 120, opacity: 0 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
        />

        {/* Distance Labels */}
        <text x="165" y="65" fill="#64748b" fontSize="8" fontFamily="monospace">
          3.0 KM
        </text>
        <text x="165" y="38" fill="#10b981" fontSize="9" fontWeight="600" fontFamily="monospace">
          5.0 KM HYPERLOCAL RADIUS
        </text>

        {/* Connecting Vector Signal Path to Customer */}
        <motion.line
          x1="160"
          y1="130"
          x2="270"
          y2="90"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </svg>

      {/* Center Store Anchor Point */}
      <div
        style={{
          position: 'absolute',
          left: '40%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        <motion.div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.2)',
            border: '2px solid var(--accent-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 0 16px rgba(16, 185, 129, 0.45)',
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Store size={20} color="#34d399" />
        </motion.div>
        <div
          style={{
            marginTop: '4px',
            padding: '2px 8px',
            borderRadius: '4px',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.5625rem',
            fontFamily: 'var(--font-mono)',
            color: '#34d399',
            whiteSpace: 'nowrap',
          }}
        >
          YOUR STORE (INVENTORY LIVE)
        </div>
      </div>

      {/* Customer Location Pin (1.8 km away) */}
      <div
        style={{
          position: 'absolute',
          left: '67.5%',
          top: '34.6%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        <motion.div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35, type: 'spring' }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(59, 130, 246, 0.25)',
              border: '1.5px solid #60a5fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 14px rgba(59, 130, 246, 0.6)',
            }}
          >
            <User size={16} color="#bfdbfe" />
          </div>

          {/* Rotating Target Reticle */}
          <motion.div
            style={{
              position: 'absolute',
              inset: '-6px',
              border: '1px dashed rgba(96, 165, 250, 0.8)',
              borderRadius: '50%',
            }}
            animate={{ rotate: 360, scale: [1, 1.15, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          style={{
            marginTop: '6px',
            padding: '2px 8px',
            borderRadius: '4px',
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(59, 130, 246, 0.4)',
            fontSize: '0.5625rem',
            fontFamily: 'var(--font-mono)',
            color: '#bfdbfe',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <span
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: '#60a5fa',
            }}
          />
          <span>CUSTOMER • 1.8 KM</span>
        </motion.div>
      </div>

      {/* Top Floating Radar Telemetry HUD */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.625rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
          pointerEvents: 'none',
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(0, 0, 0, 0.55)',
            backdropFilter: 'blur(6px)',
            padding: '4px 10px',
            borderRadius: '6px',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent-emerald)',
            }}
          />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>HYPERLOCAL GEO-GRID</span>
        </div>
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.55)',
            backdropFilter: 'blur(6px)',
            padding: '4px 10px',
            borderRadius: '6px',
            border: '1px solid var(--border-subtle)',
            color: 'var(--accent-emerald)',
          }}
        >
          RADAR ACTIVE: 5.0 KM
        </div>
      </div>
    </div>
  );
};
