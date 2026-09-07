'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Sparkles, 
  Store, 
  MapPin, 
  Navigation, 
  Check, 
  Play, 
  Pause, 
  RotateCcw,
  Layers,
  Search,
  Scan,
  ShieldCheck,
  Globe,
  ArrowRight
} from 'lucide-react';
import { RealisticShopEnvironment } from './animation/RealisticShopEnvironment';
import { SellerPhoneDevice } from './animation/SellerPhoneDevice';
import { ComputerVisionProcessor } from './animation/ComputerVisionProcessor';
import { SellerCatalogDashboard } from './animation/SellerCatalogDashboard';
import { CustomerMapDiscovery } from './animation/CustomerMapDiscovery';
import { CINEMATIC_PRODUCTS, ShoeNitroRunner } from './animation/PhotorealisticShoes';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export default function ViptoProductCaptureAnimation() {
  const [activeScene, setActiveScene] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isShutterFlashing, setIsShutterFlashing] = useState<boolean>(false);
  const [detectionStep, setDetectionStep] = useState<number>(0);
  const [isEnhancing, setIsEnhancing] = useState<boolean>(false);
  const [hasReducedMotion, setHasReducedMotion] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    setHasReducedMotion(prefersReducedMotion());
  }, []);

  const clearTimers = () => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
  };

  const schedule = (callback: () => void, delay: number) => {
    const id = setTimeout(callback, delay);
    timerRef.current.push(id);
  };

  const runCinematicTimeline = useCallback(() => {
    if (hasReducedMotion || !isPlaying) return;
    clearTimers();

    // Scene 1: (0.0s – 3.0s) Real Shoe Shop Display Shelf
    setActiveScene(0);
    setIsShutterFlashing(false);
    setDetectionStep(0);
    setIsEnhancing(false);

    // Scene 2: (3.0s – 6.0s) Seller Holds Smartphone & Frames 5 Shoes
    schedule(() => {
      setActiveScene(1);
    }, 3000);

    // Scene 3: (6.0s – 8.0s) ONE Single Photo Shutter Capture
    schedule(() => {
      setActiveScene(2);
      setIsShutterFlashing(true);
    }, 6000);
    schedule(() => {
      setIsShutterFlashing(false);
    }, 6200);

    // Scene 4: (8.0s – 11.0s) Computer Vision AI Detection & Studio Enhancement
    schedule(() => {
      setActiveScene(3);
      setDetectionStep(1);
    }, 8000);
    schedule(() => setDetectionStep(2), 8400);
    schedule(() => setDetectionStep(3), 8800);
    schedule(() => setDetectionStep(4), 9200);
    schedule(() => setDetectionStep(5), 9600);
    schedule(() => setIsEnhancing(true), 10000);

    // Scene 5: (11.0s – 14.0s) Automatic Catalog Creation (5 Products, Zero Prices)
    schedule(() => {
      setActiveScene(4);
      setIsEnhancing(false);
    }, 11000);

    // Scene 6: (14.0s – 17.0s) Nearby Customer Discovery (5 km Radius)
    schedule(() => {
      setActiveScene(5);
    }, 14000);

    // Scene 7: (17.0s – 20.0s) GPS Turn-by-Turn Route to Store & Loop Back
    schedule(() => {
      setActiveScene(6);
    }, 17000);

    // Seamless 20.0s Cinematic Loop
    schedule(() => {
      runCinematicTimeline();
    }, 20000);

  }, [hasReducedMotion, isPlaying]);

  useEffect(() => {
    runCinematicTimeline();
    return () => clearTimers();
  }, [runCinematicTimeline]);

  const handleManualSceneSelect = (index: number) => {
    clearTimers();
    setActiveScene(index);
    if (index === 2) {
      setIsShutterFlashing(true);
      setTimeout(() => setIsShutterFlashing(false), 200);
    } else if (index === 3) {
      setDetectionStep(5);
      setIsEnhancing(true);
    }
  };

  // Accessibility Fallback for Reduced Motion
  if (hasReducedMotion) {
    return (
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          margin: '0 auto',
          borderRadius: '24px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          padding: '32px 24px',
          boxShadow: 'var(--shadow-lg)',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '9999px', background: 'var(--accent-emerald-bg)', color: 'var(--accent-emerald)', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '16px' }}>
          <Check size={16} />
          <span>1 PHOTO CAPTURE → 5 VERIFIED LOCAL LISTINGS</span>
        </div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
          Physical Products in Store $\rightarrow$ Live on Vipto in Seconds
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto 24px', lineHeight: 1.6 }}>
          Local shopkeepers take one single photo of their physical display. Vipto isolates each product, generates professional catalog entries with zero price barriers, and connects nearby customers within 5 km.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
          {CINEMATIC_PRODUCTS.map((prod) => (
            <div key={prod.id} style={{ background: 'var(--bg-secondary)', padding: '16px 12px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ height: '60px', marginBottom: '8px' }}>
                <prod.Component isRaw={false} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>{prod.name}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)', fontWeight: 600, marginTop: '2px' }}>In Stock Nearby (5 km)</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const SCENE_STORYBOARD = [
    { title: '01 • REAL SHOE SHOP', desc: '5 physical shoes on authentic retail display shelf' },
    { title: '02 • SMARTPHONE FRAMING', desc: 'Seller frames all 5 products at once with phone' },
    { title: '03 • ONE PHOTO CAPTURE', desc: 'Single shutter tap captures all 5 items together' },
    { title: '04 • COMPUTER VISION AI', desc: 'Sub-pixel segmentation & studio lighting cleanup' },
    { title: '05 • AUTO CATALOG CREATED', desc: '5 verified listings live in seller portal (No Prices)' },
    { title: '06 • 5KM LOCAL DISCOVERY', desc: 'Nearby customer finds item in 5 km radius' },
    { title: '07 • WALK-IN STORE VISIT', desc: 'Live GPS route to Apex Sports • Try & buy in-store' },
  ];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '920px',
        margin: '0 auto',
        position: 'relative',
        userSelect: 'none',
        contain: 'layout paint style',
      }}
    >
      {/* Outer Studio Showcase Stage Box */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          borderRadius: '28px',
          background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid var(--border-medium)',
          padding: '24px 20px 20px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.25), 0 0 0 1px var(--border-subtle)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '520px',
        }}
      >
        {/* Ambient Commercial Stage Lighting Cones */}
        <div
          style={{
            position: 'absolute',
            top: '-30%',
            left: '20%',
            width: '450px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-30%',
            right: '20%',
            width: '450px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* --------------------------------------------------------------------- */}
        {/* Top Story Telemetry & Production Status Bar                           */}
        {/* --------------------------------------------------------------------- */}
        <div
          style={{
            position: 'relative',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '16px',
            paddingBottom: '14px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Live Scene Badge & Description */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: activeScene >= 4 ? 'var(--accent-emerald)' : 'var(--accent-primary)',
                  boxShadow: `0 0 10px ${activeScene >= 4 ? 'var(--accent-emerald)' : 'var(--accent-primary)'}`,
                }}
              />
              <span style={{ fontSize: '0.8125rem', fontWeight: 800, letterSpacing: '0.04em', color: 'var(--text-primary)' }}>
                {SCENE_STORYBOARD[activeScene].title}
              </span>
            </div>
            <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              {SCENE_STORYBOARD[activeScene].desc}
            </div>
          </div>

          {/* Play/Pause & Reset Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '5px 10px',
                borderRadius: '8px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                fontSize: '0.7rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} />}
              <span>{isPlaying ? 'Pause' : 'Autoplay'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                clearTimers();
                runCinematicTimeline();
              }}
              style={{
                padding: '5px 8px',
                borderRadius: '8px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              title="Replay from start"
            >
              <RotateCcw size={12} />
            </button>
          </div>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* Main Cinematic Viewport Stage (Transform/Opacity Driven Only)         */}
        {/* --------------------------------------------------------------------- */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '360px',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">

            {/* SCENE 1: (0.0s – 3.0s) Real Shoe Shop Display Shelf */}
            {activeScene === 0 && (
              <motion.div
                key="scene-1"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%', maxWidth: '780px' }}
              >
                <RealisticShopEnvironment isZoomedIn={false} showRawLighting={true} />
              </motion.div>
            )}

            {/* SCENE 2: (3.0s – 6.0s) Seller Holds Phone & Frames 5 Shoes */}
            {activeScene === 1 && (
              <motion.div
                key="scene-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%', maxWidth: '720px' }}
              >
                <SellerPhoneDevice cameraMode="photo" showHandGrip={true} isCapturing={false}>
                  <RealisticShopEnvironment isZoomedIn={true} showRawLighting={true} />
                </SellerPhoneDevice>
              </motion.div>
            )}

            {/* SCENE 3: (6.0s – 8.0s) ONE Single Photo Shutter Capture */}
            {activeScene === 2 && (
              <motion.div
                key="scene-3"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                style={{ width: '100%', maxWidth: '720px' }}
              >
                <SellerPhoneDevice cameraMode="photo" showHandGrip={true} isCapturing={isShutterFlashing}>
                  <RealisticShopEnvironment isZoomedIn={true} showRawLighting={true} />
                </SellerPhoneDevice>
              </motion.div>
            )}

            {/* SCENE 4: (8.0s – 11.0s) Computer Vision AI Segmentation & Studio Cleanup */}
            {activeScene === 3 && (
              <motion.div
                key="scene-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                style={{ width: '100%', maxWidth: '740px' }}
              >
                <ComputerVisionProcessor detectionStep={detectionStep} isEnhancing={isEnhancing} />
              </motion.div>
            )}

            {/* SCENE 5: (11.0s – 14.0s) Automatic Catalog Creation (5 Items, Zero Prices) */}
            {activeScene === 4 && (
              <motion.div
                key="scene-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                style={{ width: '100%', maxWidth: '780px' }}
              >
                <SellerCatalogDashboard />
              </motion.div>
            )}

            {/* SCENE 6: (14.0s – 17.0s) Nearby Customer Discovery (5 km Vicinity) */}
            {activeScene === 5 && (
              <motion.div
                key="scene-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                style={{ width: '100%', maxWidth: '740px' }}
              >
                <CustomerMapDiscovery isNavigating={false} />
              </motion.div>
            )}

            {/* SCENE 7: (17.0s – 20.0s) GPS Navigation & Walk-in Store Arrival */}
            {activeScene === 6 && (
              <motion.div
                key="scene-7"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                style={{ width: '100%', maxWidth: '740px' }}
              >
                <CustomerMapDiscovery isNavigating={true} />
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* Interactive Storyboard Scrubber Timeline Bar                          */}
        {/* --------------------------------------------------------------------- */}
        <div
          style={{
            position: 'relative',
            zIndex: 20,
            marginTop: '16px',
            paddingTop: '12px',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '6px',
            }}
          >
            {SCENE_STORYBOARD.map((item, idx) => {
              const isActive = activeScene === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleManualSceneSelect(idx)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    background: isActive ? 'var(--bg-tertiary)' : 'transparent',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '4px 2px',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  <div
                    style={{
                      height: '4px',
                      width: '100%',
                      borderRadius: '9999px',
                      background: isActive
                        ? 'linear-gradient(90deg, var(--accent-primary), var(--accent-emerald))'
                        : 'var(--border-medium)',
                      boxShadow: isActive ? '0 0 8px rgba(16, 185, 129, 0.4)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: isActive ? 800 : 500,
                      color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                      textAlign: 'center',
                      lineHeight: 1.1,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      width: '100%',
                    }}
                  >
                    {item.title.split('•')[1]?.trim() || item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
