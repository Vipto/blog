'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SneakerIllustration } from './SneakerIllustrations';
import { SneakerData } from './animationConfig';
import { Check } from 'lucide-react';

interface ProductCatalogCardProps {
  data: SneakerData;
  index?: number;
  layoutMode?: 'compact' | 'expanded' | 'phoneView';
}

export const ProductCatalogCard: React.FC<ProductCatalogCardProps> = ({
  data,
  index = 0,
  layoutMode = 'compact',
}) => {
  const { name, category, brand, primaryColor, accentColor } = data;

  if (layoutMode === 'phoneView') {
    return (
      <div
        style={{
          width: '100%',
          background: 'rgba(18, 24, 38, 0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-medium)',
          padding: '16px',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '110px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '12px',
            overflow: 'hidden',
          }}
        >
          <SneakerIllustration data={data} size={125} isFloating={true} hasShadow={true} reflectionOpacity={0.22} />
          <div
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              padding: '2px 8px',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              fontSize: '0.5625rem',
              fontFamily: 'var(--font-mono)',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: '#34d399',
              }}
            />
            IN STOCK
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '4px' }}>
          <div>
            <div
              style={{
                fontSize: '0.625rem',
                fontFamily: 'var(--font-mono)',
                color: '#60a5fa',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {category}
            </div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {name}
            </h4>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.5625rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              STORE DISTANCE
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
              1.8 km
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.6875rem',
            color: 'var(--text-secondary)',
            marginTop: '8px',
            paddingTop: '8px',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent-primary)',
            }}
          />
          <span>Physical Store: Central Avenue • Verified Stock</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(19, 25, 39, 0.85)',
        backdropFilter: 'blur(10px)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-subtle)',
        padding: '10px 8px',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden',
        minWidth: '110px',
      }}
    >
      {/* Top Tag */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.5625rem',
          fontFamily: 'var(--font-mono)',
          marginBottom: '4px',
          color: 'var(--text-muted)',
        }}
      >
        <span
          style={{
            padding: '2px 5px',
            borderRadius: '4px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            textTransform: 'uppercase',
          }}
        >
          {category.split(' ')[0]}
        </span>
        <span
          style={{
            color: '#34d399',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <Check size={10} strokeWidth={3} /> READY
        </span>
      </div>

      {/* Sneaker Visual Showcase */}
      <div
        style={{
          width: '100%',
          padding: '6px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SneakerIllustration
          data={data}
          size={85}
          isFloating={true}
          hasShadow={true}
          reflectionOpacity={0.15}
        />
      </div>

      {/* Card Info */}
      <div style={{ width: '100%', textAlign: 'center', marginTop: '2px' }}>
        <div
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: '0.625rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            marginTop: '2px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {category}
        </div>
      </div>
    </motion.div>
  );
};
