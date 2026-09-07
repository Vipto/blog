'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Store, Globe, Check } from 'lucide-react';
import { CINEMATIC_PRODUCTS } from './PhotorealisticShoes';

export const SellerCatalogDashboard: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '330px',
        background: '#0a0f1d',
        borderRadius: '22px',
        padding: '18px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Seller Portal Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '12px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', boxShadow: '0 4px 10px rgba(37, 99, 235, 0.4)' }}>
            <Store size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
              Apex Footwear Store
            </div>
            <div style={{ fontSize: '0.675rem', color: '#94a3b8' }}>
              Merchant Portal • 5 Live Listings Auto-Generated
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            padding: '4px 10px',
            borderRadius: '14px',
            background: 'rgba(16, 185, 129, 0.15)',
            color: '#10b981',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            fontSize: '0.675rem',
            fontWeight: 700,
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
          <span>BROADCASTING LIVE</span>
        </div>
      </div>

      {/* ----------------------------------------------------------------------- */}
      {/* 5 Product Catalog Cards (Strictly Zero Prices)                          */}
      {/* ----------------------------------------------------------------------- */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '8px',
          alignItems: 'stretch',
        }}
      >
        {CINEMATIC_PRODUCTS.map((prod, idx) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 340,
              damping: 24,
              delay: idx * 0.08 + (idx % 2) * 0.02,
            }}
            style={{
              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '14px',
              padding: '12px 8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 6px 16px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Enhanced Studio Product Graphic */}
            <div
              style={{
                width: '100%',
                height: '66px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '6px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '8px',
              }}
            >
              <prod.Component isRaw={false} />
            </div>

            {/* Product Metadata */}
            <div>
              <div
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  marginBottom: '2px',
                }}
              >
                {prod.name}
              </div>
              <div style={{ fontSize: '0.6rem', color: '#38bdf8', fontWeight: 600, marginBottom: '4px' }}>
                {prod.brand}
              </div>

              {/* Sizes Tag */}
              <div
                style={{
                  fontSize: '0.55rem',
                  color: '#94a3b8',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '2px 4px',
                  borderRadius: '4px',
                  marginBottom: '6px',
                }}
              >
                Sizes: {prod.sizes.split(',').slice(0, 3).join(',')}
              </div>
            </div>

            {/* In-Stock Status Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                fontSize: '0.575rem',
                color: '#10b981',
                fontWeight: 700,
                borderTop: '1px solid rgba(255,255,255,0.06)',
                paddingTop: '6px',
              }}
            >
              <Check size={11} strokeWidth={3} />
              <span>{prod.stock}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Value Punchline Banner */}
      <div
        style={{
          background: 'linear-gradient(90deg, rgba(37,99,235,0.18) 0%, rgba(16,185,129,0.18) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          padding: '10px 16px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Globe size={16} color="#38bdf8" />
          <span style={{ fontSize: '0.775rem', fontWeight: 700, color: '#f8fafc' }}>
            1 Photo Uploaded $\rightarrow$ 5 Live Verified Catalog Items Published
          </span>
        </div>
        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10b981' }}>
          5 KM RADIUS ACTIVE
        </div>
      </div>
    </div>
  );
};
