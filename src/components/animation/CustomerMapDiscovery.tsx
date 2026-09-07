'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Store, Navigation, ShieldCheck, Compass } from 'lucide-react';
import { ShoeNitroRunner } from './PhotorealisticShoes';

interface CustomerMapDiscoveryProps {
  isNavigating?: boolean;
}

export const CustomerMapDiscovery: React.FC<CustomerMapDiscoveryProps> = ({
  isNavigating = false,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '330px',
        background: '#0a0f1d',
        borderRadius: '22px',
        padding: '18px 16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        border: '1px solid rgba(56, 189, 248, 0.3)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Top Customer Telemetry Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Compass size={15} color="#38bdf8" />
          </div>
          <span style={{ fontSize: '0.775rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em' }}>
            VIPTO HYPERLOCAL DISCOVERY • 5 KM VICINITY
          </span>
        </div>
        <div
          style={{
            fontSize: '0.675rem',
            fontWeight: 700,
            color: '#10b981',
            background: 'rgba(16, 185, 129, 0.16)',
            padding: '4px 10px',
            borderRadius: '14px',
            border: '1px solid rgba(16, 185, 129, 0.35)',
          }}
        >
          GPS ACTIVE • 1.8 KM TO STORE
        </div>
      </div>

      {/* ----------------------------------------------------------------------- */}
      {/* High-Fidelity Vector Street Map Canvas Layer                            */}
      {/* ----------------------------------------------------------------------- */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '165px',
          borderRadius: '16px',
          background: '#0f172a',
          border: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
        }}
      >
        {/* Vector Street Geometry & Building Blocks */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* City Grid Secondary Streets */}
          <path d="M 0 45 L 700 45 M 0 115 L 700 115" stroke="#334155" strokeWidth="6" fill="none" />
          <path d="M 130 0 L 130 200 M 340 0 L 340 200 M 540 0 L 540 200" stroke="#334155" strokeWidth="6" fill="none" />

          {/* Primary Arterial Road */}
          <path d="M 0 85 Q 240 105 440 65 T 700 125" stroke="#1e293b" strokeWidth="18" fill="none" />
          <path d="M 0 85 Q 240 105 440 65 T 700 125" stroke="#475569" strokeWidth="14" fill="none" />

          {/* 5 km Radius Perimeter Ring */}
          <circle cx="440" cy="68" r="75" fill="rgba(56, 189, 248, 0.04)" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Live Navigation Route Path from Customer to Store */}
          <motion.path
            d="M 180 120 L 260 120 L 330 85 L 440 68"
            stroke="url(#routeGradient)"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </svg>

        {/* Pulsing 5 km Radar Wave Ping */}
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: '440px',
            top: '68px',
            width: '120px',
            height: '120px',
            marginLeft: '-60px',
            marginTop: '-60px',
            borderRadius: '50%',
            border: '2px solid #38bdf8',
            pointerEvents: 'none',
          }}
        />

        {/* Customer Location Dot */}
        <div
          style={{
            position: 'absolute',
            left: '180px',
            top: '120px',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            zIndex: 30,
          }}
        >
          <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 12px #38bdf8', border: '2px solid #ffffff' }} />
          <span style={{ fontSize: '0.65rem', color: '#ffffff', fontWeight: 800, background: 'rgba(15, 23, 42, 0.92)', padding: '3px 8px', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.25)', boxShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            Customer (You)
          </span>
        </div>

        {/* Local Store Destination Pin */}
        <div
          style={{
            position: 'absolute',
            left: '440px',
            top: '68px',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            borderRadius: '20px',
            background: '#2563eb',
            color: '#ffffff',
            fontSize: '0.725rem',
            fontWeight: 800,
            boxShadow: '0 4px 16px rgba(37, 99, 235, 0.5)',
            border: '1.5px solid #60a5fa',
            zIndex: 30,
          }}
        >
          <Store size={13} />
          <span>Apex Footwear Store</span>
        </div>
      </div>

      {/* ----------------------------------------------------------------------- */}
      {/* Customer In-App Discovery & Navigation Card (Zero Prices)               */}
      {/* ----------------------------------------------------------------------- */}
      <div
        style={{
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
          borderRadius: '16px',
          padding: '14px 16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '58px', height: '44px', flexShrink: 0 }}>
            <ShoeNitroRunner isRaw={false} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
              AeroPulse Nitro Runner
            </div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '3px' }}>
              Confirmed In Stock at Apex Footwear • 1.8 km (14 min walk)
            </div>
          </div>
        </div>

        {/* Walk In & Pick Up Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            borderRadius: '12px',
            background: isNavigating ? '#10b981' : '#2563eb',
            color: '#ffffff',
            fontSize: '0.775rem',
            fontWeight: 800,
            flexShrink: 0,
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
          }}
        >
          <Navigation size={14} />
          <span>{isNavigating ? 'Navigating to Store' : 'Walk In & Pick Up'}</span>
        </div>
      </div>

      {/* Verification Trust Pill */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          fontSize: '0.7rem',
          color: '#10b981',
          fontWeight: 700,
        }}
      >
        <ShieldCheck size={15} />
        <span>Physical Stock Confirmed at Store Counter • Walk In &amp; Try Before Buying</span>
      </div>
    </div>
  );
};
