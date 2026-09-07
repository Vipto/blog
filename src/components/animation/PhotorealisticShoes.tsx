'use client';

import React from 'react';

export interface ShoeProps {
  isRaw?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// -----------------------------------------------------------------------------
// 1. AeroPulse Nitro Runner (Technical High-Performance Running Shoe)
// -----------------------------------------------------------------------------
export const ShoeNitroRunner: React.FC<ShoeProps> = ({ isRaw = false, className = '', style = {} }) => {
  const idPrefix = isRaw ? 'nitro-raw' : 'nitro-enh';
  return (
    <svg
      viewBox="0 0 200 110"
      width="100%"
      height="100%"
      className={className}
      style={{
        filter: isRaw
          ? 'brightness(0.94) contrast(0.92) saturate(0.9) drop-shadow(0 4px 6px rgba(0,0,0,0.18))'
          : 'drop-shadow(0 10px 18px rgba(37,99,235,0.22)) brightness(1.02) contrast(1.04)',
        ...style,
      }}
    >
      <defs>
        <linearGradient id={`${idPrefix}-upper`} x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor={isRaw ? '#3b5998' : '#2563eb'} />
          <stop offset="50%" stopColor={isRaw ? '#1e3a8a' : '#1d4ed8'} />
          <stop offset="100%" stopColor={isRaw ? '#0f172a' : '#1e1b4b'} />
        </linearGradient>
        <linearGradient id={`${idPrefix}-overlay`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-midsole`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={isRaw ? '#e2e8f0' : '#ffffff'} />
          <stop offset="60%" stopColor={isRaw ? '#cbd5e1' : '#f8fafc'} />
          <stop offset="100%" stopColor={isRaw ? '#94a3b8' : '#38bdf8'} />
        </linearGradient>
        <linearGradient id={`${idPrefix}-clip`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <pattern id={`${idPrefix}-mesh`} width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.6" fill={isRaw ? '#1e293b' : '#93c5fd'} opacity="0.4" />
        </pattern>
      </defs>

      {/* Ground Contact Shadow */}
      <ellipse cx="100" cy="98" rx="84" ry="7" fill="rgba(15, 23, 42, 0.28)" />

      {/* Main Knit Upper */}
      <path
        d="M 36 78 C 40 54 52 38 72 34 C 88 30 108 46 136 50 C 160 54 180 68 184 78 C 172 82 136 80 104 80 C 68 80 44 82 36 78 Z"
        fill={`url(#${idPrefix}-upper)`}
      />
      {/* Mesh Texture Overlay */}
      <path
        d="M 36 78 C 40 54 52 38 72 34 C 88 30 108 46 136 50 C 160 54 180 68 184 78 C 172 82 136 80 104 80 C 68 80 44 82 36 78 Z"
        fill={`url(#${idPrefix}-mesh)`}
      />

      {/* Dynamic TPU Support Wing */}
      <path
        d="M 76 36 C 90 42 110 52 122 58 C 110 62 92 58 82 50 Z"
        fill={`url(#${idPrefix}-overlay)`}
      />

      {/* Ghillie Lacing System */}
      <path
        d="M 92 46 L 104 50 M 100 41 L 112 45 M 108 36 L 120 40 M 116 31 L 128 35"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.95"
      />

      {/* Ankle Collar & Pull Tab */}
      <path
        d="M 52 40 C 60 34 70 34 76 38 L 68 46 C 62 44 56 42 52 40 Z"
        fill="#1e293b"
      />
      <path d="M 44 42 L 36 34 L 40 32 L 48 38 Z" fill="#38bdf8" />

      {/* Translucent TPU Heel Counter Clip */}
      <path
        d="M 32 76 C 30 62 38 52 48 54 C 44 64 42 74 44 78 Z"
        fill={`url(#${idPrefix}-clip)`}
        opacity="0.9"
      />

      {/* Sculpted Dual-Density Nitrogen Foam Midsole */}
      <path
        d="M 28 80 C 34 74 60 76 102 76 C 150 76 184 76 190 84 C 182 94 152 97 100 97 C 52 97 26 92 28 80 Z"
        fill={`url(#${idPrefix}-midsole)`}
      />
      {/* Midsole Cushion Flex Groove Line */}
      <path
        d="M 50 88 C 80 91 120 91 160 88"
        stroke={isRaw ? '#cbd5e1' : '#bae6fd'}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* High-Abrasion Rubber Outsole Base */}
      <path
        d="M 30 92 C 54 98 100 98 154 96 C 178 95 186 90 186 92 C 176 100 146 102 98 102 C 48 102 28 97 30 92 Z"
        fill="#0f172a"
      />
    </svg>
  );
};

// -----------------------------------------------------------------------------
// 2. Court Legacy High-Top (Basketball & Streetwear Sneaker)
// -----------------------------------------------------------------------------
export const ShoeHighTop: React.FC<ShoeProps> = ({ isRaw = false, className = '', style = {} }) => {
  const idPrefix = isRaw ? 'hightop-raw' : 'hightop-enh';
  return (
    <svg
      viewBox="0 0 200 110"
      width="100%"
      height="100%"
      className={className}
      style={{
        filter: isRaw
          ? 'brightness(0.94) contrast(0.92) saturate(0.9) drop-shadow(0 4px 6px rgba(0,0,0,0.18))'
          : 'drop-shadow(0 10px 18px rgba(16,185,129,0.22)) brightness(1.02) contrast(1.04)',
        ...style,
      }}
    >
      <defs>
        <linearGradient id={`${idPrefix}-leather`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isRaw ? '#334155' : '#0f172a'} />
          <stop offset="100%" stopColor={isRaw ? '#1e293b' : '#020617'} />
        </linearGradient>
        <linearGradient id={`${idPrefix}-emerald`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isRaw ? '#059669' : '#10b981'} />
          <stop offset="100%" stopColor={isRaw ? '#047857' : '#059669'} />
        </linearGradient>
      </defs>

      {/* Ground Contact Shadow */}
      <ellipse cx="102" cy="98" rx="86" ry="7" fill="rgba(15, 23, 42, 0.28)" />

      {/* High Ankle Boot Chassis */}
      <path
        d="M 40 80 L 40 28 C 56 22 74 25 84 38 L 102 52 C 132 56 172 68 184 78 C 168 84 120 82 88 82 C 58 82 42 82 40 80 Z"
        fill={`url(#${idPrefix}-leather)`}
      />

      {/* Padded Emerald Ankle Cushion */}
      <path
        d="M 42 30 C 54 26 68 28 76 38 L 62 44 C 52 38 46 34 42 30 Z"
        fill={`url(#${idPrefix}-emerald)`}
      />

      {/* Quarter Overlay & Reinforced Eyelet Stay */}
      <path
        d="M 74 42 L 94 56 L 86 72 L 62 66 Z"
        fill={`url(#${idPrefix}-emerald)`}
        opacity="0.95"
      />
      {/* Eyelet Metal Rings & Criss-Cross Laces */}
      <circle cx="72" cy="48" r="2" fill="#ffffff" />
      <circle cx="78" cy="54" r="2" fill="#ffffff" />
      <circle cx="84" cy="60" r="2" fill="#ffffff" />
      <line x1="72" y1="48" x2="88" y2="44" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <line x1="78" y1="54" x2="94" y2="50" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <line x1="84" y1="60" x2="100" y2="56" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />

      {/* Perforated Vamp Toe Cap */}
      <path
        d="M 140 68 C 156 70 174 74 180 78 L 138 80 Z"
        fill="#1e293b"
      />
      <circle cx="154" cy="74" r="1.2" fill="#94a3b8" />
      <circle cx="162" cy="75" r="1.2" fill="#94a3b8" />
      <circle cx="170" cy="76" r="1.2" fill="#94a3b8" />

      {/* Heavy-Duty White Rubber Cupsole */}
      <path
        d="M 36 80 C 46 78 100 78 150 78 C 180 78 186 80 188 86 C 186 94 150 97 100 97 C 46 97 32 92 36 80 Z"
        fill="#f8fafc"
        stroke={isRaw ? '#94a3b8' : '#e2e8f0'}
        strokeWidth="1.5"
      />
      {/* Cupsole Perimeter Stitching Line */}
      <line x1="42" y1="92" x2="180" y2="92" stroke={isRaw ? '#94a3b8' : '#cbd5e1'} strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  );
};

// -----------------------------------------------------------------------------
// 3. Urban Knit Slip-On (Comfort Walking Sneaker)
// -----------------------------------------------------------------------------
export const ShoeKnitSlipOn: React.FC<ShoeProps> = ({ isRaw = false, className = '', style = {} }) => {
  const idPrefix = isRaw ? 'knit-raw' : 'knit-enh';
  return (
    <svg
      viewBox="0 0 200 110"
      width="100%"
      height="100%"
      className={className}
      style={{
        filter: isRaw
          ? 'brightness(0.94) contrast(0.92) saturate(0.9) drop-shadow(0 4px 6px rgba(0,0,0,0.18))'
          : 'drop-shadow(0 10px 18px rgba(245,158,11,0.22)) brightness(1.02) contrast(1.04)',
        ...style,
      }}
    >
      <defs>
        <linearGradient id={`${idPrefix}-amber`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isRaw ? '#d97706' : '#f59e0b'} />
          <stop offset="100%" stopColor={isRaw ? '#b45309' : '#d97706'} />
        </linearGradient>
      </defs>

      {/* Ground Contact Shadow */}
      <ellipse cx="102" cy="98" rx="82" ry="7" fill="rgba(15, 23, 42, 0.28)" />

      {/* Seamless Sock-Knit Upper */}
      <path
        d="M 44 78 C 50 60 66 44 86 42 C 106 40 130 54 158 62 C 178 68 186 76 182 82 C 170 84 124 82 92 82 C 60 82 48 81 44 78 Z"
        fill={`url(#${idPrefix}-amber)`}
      />

      {/* Elastic Ribbed Collar */}
      <path
        d="M 72 44 C 80 42 90 42 98 48 C 92 50 82 50 74 48 Z"
        fill="#fbbf24"
      />
      <path d="M 64 48 L 56 38 L 62 36 L 70 44 Z" fill="#78350f" />

      {/* Ergonomic Textured Ribs */}
      <path
        d="M 98 50 C 108 55 118 60 128 65 M 110 52 C 120 57 130 62 140 67 M 122 54 C 132 59 142 64 152 69"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* Sculpted Cloud Foam Midsole */}
      <path
        d="M 38 80 C 46 74 88 74 138 74 C 174 74 186 76 190 84 C 182 94 152 98 100 98 C 56 98 32 92 38 80 Z"
        fill="#ffffff"
        stroke="#e2e8f0"
        strokeWidth="1"
      />
      {/* Cloud Pods Indentations */}
      <path
        d="M 62 90 C 74 93 86 93 98 90 M 110 90 C 122 93 134 93 146 90"
        stroke="#cbd5e1"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

// -----------------------------------------------------------------------------
// 4. Summit Trail Hiker (All-Terrain Outdoor Lugged Shoe)
// -----------------------------------------------------------------------------
export const ShoeTrailHiker: React.FC<ShoeProps> = ({ isRaw = false, className = '', style = {} }) => {
  const idPrefix = isRaw ? 'trail-raw' : 'trail-enh';
  return (
    <svg
      viewBox="0 0 200 110"
      width="100%"
      height="100%"
      className={className}
      style={{
        filter: isRaw
          ? 'brightness(0.94) contrast(0.92) saturate(0.9) drop-shadow(0 4px 6px rgba(0,0,0,0.18))'
          : 'drop-shadow(0 10px 18px rgba(71,85,105,0.25)) brightness(1.02) contrast(1.04)',
        ...style,
      }}
    >
      <defs>
        <linearGradient id={`${idPrefix}-ballistic`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isRaw ? '#475569' : '#334155'} />
          <stop offset="100%" stopColor={isRaw ? '#1e293b' : '#0f172a'} />
        </linearGradient>
      </defs>

      {/* Ground Contact Shadow */}
      <ellipse cx="102" cy="100" rx="88" ry="7" fill="rgba(15, 23, 42, 0.32)" />

      {/* High-Durability Ballistic Upper */}
      <path
        d="M 38 80 L 40 36 C 58 32 76 36 90 46 L 120 54 C 150 58 178 70 184 78 C 166 84 122 82 88 82 C 58 82 40 82 38 80 Z"
        fill={`url(#${idPrefix}-ballistic)`}
      />

      {/* Abrasion-Resistant Rubber Mudguard */}
      <path
        d="M 38 80 C 56 74 106 74 150 76 C 178 77 184 79 184 82 C 166 86 122 84 88 84 C 58 84 40 83 38 80 Z"
        fill="#64748b"
        opacity="0.85"
      />

      {/* Cord Webbing & Anodized Lace D-Rings */}
      <path
        d="M 80 44 L 96 52 M 90 38 L 106 46 M 100 32 L 116 40"
        stroke="#f59e0b"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Heavy Cleated Trail Rubber Outsole */}
      <path
        d="M 30 82 C 40 78 96 78 146 78 C 178 78 188 80 190 88 C 180 97 146 100 98 100 C 48 100 26 94 30 82 Z"
        fill="#1e293b"
      />
      {/* Deep Grip Traction Cleats */}
      <path
        d="M 46 98 L 50 103 M 70 99 L 74 104 M 94 99 L 98 104 M 118 99 L 122 104 M 142 98 L 146 103 M 166 96 L 170 101"
        stroke="#0f172a"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  );
};

// -----------------------------------------------------------------------------
// 5. Heritage Low Classic (Vintage Leather Tennis Court Sneaker)
// -----------------------------------------------------------------------------
export const ShoeRetroCourt: React.FC<ShoeProps> = ({ isRaw = false, className = '', style = {} }) => {
  const idPrefix = isRaw ? 'retro-raw' : 'retro-enh';
  return (
    <svg
      viewBox="0 0 200 110"
      width="100%"
      height="100%"
      className={className}
      style={{
        filter: isRaw
          ? 'brightness(0.94) contrast(0.92) saturate(0.9) drop-shadow(0 4px 6px rgba(0,0,0,0.18))'
          : 'drop-shadow(0 10px 18px rgba(37,99,235,0.18)) brightness(1.02) contrast(1.04)',
        ...style,
      }}
    >
      <defs>
        <linearGradient id={`${idPrefix}-cream`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isRaw ? '#e2e8f0' : '#ffffff'} />
          <stop offset="100%" stopColor={isRaw ? '#cbd5e1' : '#f1f5f9'} />
        </linearGradient>
      </defs>

      {/* Ground Contact Shadow */}
      <ellipse cx="102" cy="98" rx="84" ry="7" fill="rgba(15, 23, 42, 0.28)" />

      {/* Full-Grain Vintage Leather Upper */}
      <path
        d="M 40 80 C 42 58 60 42 82 40 C 102 38 128 52 158 60 C 178 64 186 74 186 80 C 170 84 126 82 90 82 C 58 82 42 82 40 80 Z"
        fill={`url(#${idPrefix}-cream)`}
        stroke={isRaw ? '#94a3b8' : '#e2e8f0'}
        strokeWidth="1.2"
      />

      {/* Vintage Navy Heel Tab & Lateral Chevron Stripe */}
      <path
        d="M 42 60 C 50 56 60 56 66 60 L 60 72 C 52 72 46 68 42 60 Z"
        fill="#1e3a8a"
      />
      <path
        d="M 90 56 L 108 66 L 136 64"
        stroke="#2563eb"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Perforated Toe Box Detailing */}
      <circle cx="162" cy="70" r="1.2" fill="#94a3b8" />
      <circle cx="168" cy="72" r="1.2" fill="#94a3b8" />
      <circle cx="174" cy="74" r="1.2" fill="#94a3b8" />

      {/* Authentic Honey Gum Rubber Cupsole */}
      <path
        d="M 36 80 C 46 78 100 78 150 78 C 182 78 188 80 190 86 C 182 94 150 97 100 97 C 48 97 30 92 36 80 Z"
        fill="#d97706"
        opacity="0.9"
      />
      <line x1="38" y1="90" x2="186" y2="90" stroke="#b45309" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
};

export const CINEMATIC_PRODUCTS = [
  {
    id: 'prod-1',
    sku: 'VP-8821',
    name: 'AeroPulse Nitro Runner',
    category: "Men's Performance Running",
    brand: 'AeroPulse Athletics',
    sizes: 'UK 7, 8, 9, 10, 11',
    stock: '14 pairs in stock',
    color: 'Electric Blue / Arctic White',
    confidence: '99.4%',
    Component: ShoeNitroRunner,
  },
  {
    id: 'prod-2',
    sku: 'VP-4019',
    name: 'Court Legacy High-Top',
    category: 'Streetwear & Basketball',
    brand: 'Apex Court Classics',
    sizes: 'UK 6, 7, 8, 9, 10',
    stock: '8 pairs in stock',
    color: 'Matte Stealth / Emerald',
    confidence: '98.8%',
    Component: ShoeHighTop,
  },
  {
    id: 'prod-3',
    sku: 'VP-5120',
    name: 'Urban Knit Cloud Slip-On',
    category: 'Everyday Walking Sneaker',
    brand: 'Veloce Casuals',
    sizes: 'UK 6, 7, 8, 9',
    stock: '22 pairs in stock',
    color: 'Warm Amber / Cloud Foam',
    confidence: '99.1%',
    Component: ShoeKnitSlipOn,
  },
  {
    id: 'prod-4',
    sku: 'VP-9934',
    name: 'Summit Trail Lugged Hiker',
    category: 'All-Terrain Outdoor Footwear',
    brand: 'TerraGrip Outdoor',
    sizes: 'UK 8, 9, 10, 11, 12',
    stock: '6 pairs in stock',
    color: 'Charcoal Ballistic / Ochre',
    confidence: '98.5%',
    Component: ShoeTrailHiker,
  },
  {
    id: 'prod-5',
    sku: 'VP-2207',
    name: 'Heritage Low Court Classic',
    category: 'Vintage Leather Tennis Sneaker',
    brand: 'Vintage Sport 1984',
    sizes: 'UK 7, 8, 9, 10',
    stock: '11 pairs in stock',
    color: 'Vintage Chalk / Navy / Honey Gum',
    confidence: '99.6%',
    Component: ShoeRetroCourt,
  },
];
