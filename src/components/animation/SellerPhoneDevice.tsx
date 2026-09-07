'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Zap, Sliders, Sun } from 'lucide-react';

interface SellerPhoneDeviceProps {
  children?: React.ReactNode;
  isCapturing?: boolean;
  hasCaptured?: boolean;
  onShutterPress?: () => void;
  showHandGrip?: boolean;
  cameraMode?: 'photo' | 'vipto-ai' | 'catalog';
}

export const SellerPhoneDevice: React.FC<SellerPhoneDeviceProps> = ({
  children,
  isCapturing = false,
  hasCaptured = false,
  onShutterPress,
  showHandGrip = true,
  cameraMode = 'photo',
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ----------------------------------------------------------------------- */}
      {/* Realistic Human Hand & Thumb Grip Layer                                 */}
      {/* ----------------------------------------------------------------------- */}
      {showHandGrip && (
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hand-grip-layer"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 40,
          }}
        >
          {/* Left Supporting Hand Fingers Grasping Bezel */}
          <div
            style={{
              position: 'absolute',
              left: '-8px',
              top: '32%',
              width: '24px',
              height: '90px',
              borderRadius: '14px 0 0 14px',
              background: 'linear-gradient(90deg, #92400e 0%, #b45309 30%, #d97706 70%, #f59e0b 100%)',
              boxShadow: '-6px 6px 16px rgba(0,0,0,0.35)',
            }}
          />

          {/* Right Hand Thumb Poised Above / Pressing Shutter Button */}
          <motion.div
            animate={{
              scale: isCapturing ? 0.93 : 1,
              x: isCapturing ? -5 : 0,
              y: isCapturing ? 4 : 0,
            }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              right: '8px',
              bottom: '16px',
              width: '42px',
              height: '52px',
              borderRadius: '26px 22px 22px 26px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 85%, #78350f 100%)',
              boxShadow: '6px 8px 20px rgba(0,0,0,0.4)',
              zIndex: 50,
            }}
          >
            {/* Thumb Nail Specular Highlight */}
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                width: '18px',
                height: '14px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.4)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.7)',
              }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* ----------------------------------------------------------------------- */}
      {/* Smartphone Titanium Frame with Realistic Bezel & Speculars              */}
      {/* ----------------------------------------------------------------------- */}
      <motion.div
        animate={{
          x: isCapturing ? [0, -2.5, 2.5, -1, 1, 0] : 0,
          y: isCapturing ? [0, 2, -2, 0] : 0,
        }}
        transition={{ duration: 0.22 }}
        className="phone-frame"
        style={{
          position: 'relative',
          width: '100%',
          borderRadius: '36px',
          background: 'linear-gradient(145deg, #334155 0%, #1e293b 40%, #0f172a 100%)',
          padding: '10px',
          border: '2px solid #64748b',
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.6), inset 0 1px 3px rgba(255,255,255,0.3)',
          overflow: 'hidden',
          zIndex: 20,
        }}
      >
        {/* Dynamic Island / Speaker Pill */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '88px',
            height: '22px',
            borderRadius: '16px',
            background: '#000000',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.6)',
          }}
        >
          {/* Front Camera Lens Reflection */}
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1e293b', border: '1.5px solid #475569' }} />
          {/* Status Sensor Indicator */}
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981' }} />
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* Smartphone Screen Viewport                                           */}
        {/* --------------------------------------------------------------------- */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '320px',
            borderRadius: '24px',
            background: '#020617',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Optical Shutter Flash Overlay */}
          <AnimatePresence>
            {isCapturing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.96, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#ffffff',
                  zIndex: 90,
                  pointerEvents: 'none',
                }}
              />
            )}
          </AnimatePresence>

          {/* Screen Content Viewport */}
          <div style={{ position: 'relative', width: '100%', flex: 1, overflow: 'hidden' }}>
            {children}

            {/* Autofocus Exposure Reticle in Camera Mode */}
            {cameraMode === 'photo' && !isCapturing && (
              <motion.div
                initial={{ opacity: 0, scale: 1.3 }}
                animate={{ opacity: [0.4, 0.9, 0.7], scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '48%',
                  transform: 'translate(-50%, -50%)',
                  width: '50px',
                  height: '50px',
                  border: '1.5px solid #facc15',
                  borderRadius: '6px',
                  pointerEvents: 'none',
                  zIndex: 30,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Exposure Sun Icon Indicator */}
                <div style={{ position: 'absolute', right: '-16px', top: '50%', transform: 'translateY(-50%)' }}>
                  <Sun size={12} color="#facc15" />
                </div>
              </motion.div>
            )}

            {/* Rule-of-Thirds Grid Overlay */}
            {cameraMode === 'photo' && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  zIndex: 25,
                  opacity: 0.2,
                }}
              >
                <div style={{ position: 'absolute', top: '33.33%', left: 0, right: 0, height: '1px', background: '#ffffff' }} />
                <div style={{ position: 'absolute', top: '66.66%', left: 0, right: 0, height: '1px', background: '#ffffff' }} />
                <div style={{ position: 'absolute', left: '33.33%', top: 0, bottom: 0, width: '1px', background: '#ffffff' }} />
                <div style={{ position: 'absolute', left: '66.66%', top: 0, bottom: 0, width: '1px', background: '#ffffff' }} />
              </div>
            )}
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* Native Camera Viewfinder Controls Overlay                           */}
          {/* ------------------------------------------------------------------- */}
          {cameraMode === 'photo' && (
            <div
              style={{
                position: 'relative',
                zIndex: 30,
                padding: '10px 14px 14px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.88) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {/* Zoom Selector (0.5x, 1x, 2x) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(255,255,255,0.12)',
                  padding: '3px 10px',
                  borderRadius: '20px',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span style={{ opacity: 0.5 }}>.5</span>
                <span style={{ color: '#facc15', fontWeight: 800 }}>1x</span>
                <span style={{ opacity: 0.5 }}>2</span>
              </div>

              {/* Physical Shutter Button */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                animate={isCapturing ? { scale: 0.91 } : { scale: 1 }}
                onClick={onShutterPress}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '4px solid rgba(255,255,255,0.45)',
                  padding: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(255,255,255,0.45)',
                  outline: 'none',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: '2px solid #0f172a',
                  }}
                />
              </motion.button>

              {/* 1 Photo Batch Tag */}
              <div
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  color: '#38bdf8',
                  background: 'rgba(56, 189, 248, 0.16)',
                  padding: '3px 10px',
                  borderRadius: '14px',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  whiteSpace: 'nowrap',
                }}
              >
                1 PHOTO • 5 SHOES
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <style jsx>{`
        .hand-grip-layer {
          inset: -20px -32px -45px -32px;
        }
        @media (max-width: 640px) {
          .hand-grip-layer {
            inset: -10px -12px -30px -12px;
          }
        }
        @media (max-width: 440px) {
          .hand-grip-layer {
            inset: -6px -4px -20px -4px;
          }
        }
      `}</style>
    </div>
  );
};
