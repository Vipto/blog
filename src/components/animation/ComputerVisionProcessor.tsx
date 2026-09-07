'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, CheckCircle2 } from 'lucide-react';
import { CINEMATIC_PRODUCTS } from './PhotorealisticShoes';

interface ComputerVisionProcessorProps {
  detectionStep: number; // 0 to 5
  isEnhancing?: boolean;
}

export const ComputerVisionProcessor: React.FC<ComputerVisionProcessorProps> = ({
  detectionStep = 0,
  isEnhancing = false,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '290px',
        background: '#070b14',
        borderRadius: '22px',
        padding: '16px 14px',
        overflow: 'hidden',
        border: '1.5px solid rgba(56, 189, 248, 0.45)',
        boxShadow: '0 0 40px rgba(56, 189, 248, 0.18)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Computer Vision Matrix Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
        }}
      />

      {/* Slim LiDAR Laser Scanning Line Sweeping Vertically */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 240, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '2.5px',
          background: 'linear-gradient(90deg, transparent 0%, #38bdf8 30%, #10b981 70%, transparent 100%)',
          boxShadow: '0 0 18px #38bdf8, 0 0 8px #10b981',
          zIndex: 30,
          pointerEvents: 'none',
        }}
      />

      {/* CV Telemetry Header HUD */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '10px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={14} color="#38bdf8" />
          </div>
          <span style={{ fontSize: '0.725rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.05em' }}>
            VIPTO CV ENGINE • MULTI-OBJECT SEGMENTATION
          </span>
        </div>
        <div style={{ fontSize: '0.675rem', fontWeight: 700, color: '#10b981', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
          <span>{Math.min(detectionStep, 5)}/5 DETECTED</span>
        </div>
      </div>

      {/* ----------------------------------------------------------------------- */}
      {/* 5 Distinct Shoes with Stroke-Drawn Bounding Boxes & Confidence Chips     */}
      {/* ----------------------------------------------------------------------- */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '8px',
          alignItems: 'center',
          margin: '12px 0',
        }}
      >
        {CINEMATIC_PRODUCTS.map((prod, idx) => {
          const isDetected = detectionStep > idx;
          return (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0.5, scale: 0.94 }}
              animate={{
                opacity: isDetected ? 1 : 0.4,
                scale: isDetected ? 1 : 0.94,
                y: isDetected ? -4 : 0,
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                padding: '10px 4px 6px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: isDetected ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
                border: isDetected ? '1.5px solid rgba(16, 185, 129, 0.45)' : '1px dashed rgba(255,255,255,0.1)',
                boxShadow: isDetected ? '0 6px 20px rgba(16, 185, 129, 0.18)' : 'none',
              }}
            >
              {/* Precision Sub-Pixel Corner Crosshairs */}
              {isDetected && (
                <>
                  <div style={{ position: 'absolute', top: '-3px', left: '-3px', width: '8px', height: '8px', borderTop: '2px solid #10b981', borderLeft: '2px solid #10b981' }} />
                  <div style={{ position: 'absolute', top: '-3px', right: '-3px', width: '8px', height: '8px', borderTop: '2px solid #10b981', borderRight: '2px solid #10b981' }} />
                  <div style={{ position: 'absolute', bottom: '-3px', left: '-3px', width: '8px', height: '8px', borderBottom: '2px solid #10b981', borderLeft: '2px solid #10b981' }} />
                  <div style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '8px', height: '8px', borderBottom: '2px solid #10b981', borderRight: '2px solid #10b981' }} />

                  {/* Classification Confidence Tag */}
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '6px',
                      background: '#10b981',
                      color: '#022c22',
                      fontSize: '0.525rem',
                      fontWeight: 900,
                      padding: '1px 6px',
                      borderRadius: '3px',
                      letterSpacing: '0.04em',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                    }}
                  >
                    {prod.confidence}
                  </motion.div>
                </>
              )}

              {/* Shoe Graphic with Studio Lighting Wipe */}
              <div
                style={{
                  width: '100%',
                  height: '66px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Specular Studio Light Wipe Line */}
                {isEnhancing && (
                  <motion.div
                    initial={{ x: '-120%' }}
                    animate={{ x: '220%' }}
                    transition={{ duration: 1.2, delay: 0.08 * idx, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 50%, transparent 100%)',
                      zIndex: 30,
                      pointerEvents: 'none',
                    }}
                  />
                )}

                <prod.Component isRaw={!isDetected} />
              </div>

              {/* Product Extracted Title Tag */}
              <div
                style={{
                  marginTop: '4px',
                  fontSize: '0.6rem',
                  fontWeight: 800,
                  color: isDetected ? '#38bdf8' : '#64748b',
                  textAlign: 'center',
                  lineHeight: 1.1,
                  maxWidth: '92%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {prod.name.split(' ')[0]} {prod.name.split(' ')[1]}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Processing Status Sub-Text */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          background: 'rgba(15, 23, 42, 0.9)',
          padding: '8px 14px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.725rem', color: '#cbd5e1' }}>
          <Sparkles size={14} color="#10b981" />
          <span>
            {isEnhancing
              ? 'Studio Lighting Pass: Glare removed, studio shadows rendered.'
              : 'Individual product boundaries extracted from 1 photograph.'}
          </span>
        </div>
        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.04em' }}>
          0.8s INFERENCE
        </div>
      </div>
    </div>
  );
};
