'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SneakerData } from './animationConfig';

interface SneakerProps {
  data: SneakerData;
  size?: number; // scale or base width
  className?: string;
  isFloating?: boolean;
  hasShadow?: boolean;
  reflectionOpacity?: number;
}

export const SneakerIllustration: React.FC<SneakerProps> = ({
  data,
  size = 110,
  className = '',
  isFloating = false,
  hasShadow = true,
  reflectionOpacity = 0,
}) => {
  const { id, primaryColor, secondaryColor, accentColor, glowColor, modelType } = data;

  const renderShoeModel = () => {
    switch (modelType) {
      case 'runner': // AeroGlide Pro
        return (
          <>
            {/* Outsole and sculpted aerodynamic midsole */}
            <path
              d="M 12 52 C 24 54, 85 54, 108 47 C 114 45, 116 43, 112 40 C 104 40, 92 41, 75 42 C 55 43, 30 46, 12 52 Z"
              fill={`url(#midsole-grad-${id})`}
            />
            <path
              d="M 14 55 C 32 56, 80 56, 106 49 C 109 48, 106 51, 100 53 C 78 58, 30 58, 14 55 Z"
              fill={secondaryColor}
              opacity="0.9"
            />
            {/* Air cushion accent pod */}
            <rect
              x="28"
              y="47"
              width="24"
              height="4.5"
              rx="2.2"
              fill={accentColor}
              opacity="0.8"
            />
            {/* Upper body mesh */}
            <path
              d="M 16 48 C 22 40, 36 34, 48 30 C 58 26, 68 18, 76 16 C 82 14, 88 17, 85 24 C 82 28, 92 34, 104 38 C 109 40, 112 43, 108 45 C 92 47, 45 49, 16 48 Z"
              fill={`url(#upper-grad-${id})`}
            />
            {/* Dynamic aerodynamic overlay panel */}
            <path
              d="M 38 46 C 48 38, 62 30, 74 25 C 80 22, 84 26, 78 32 C 68 39, 52 44, 38 46 Z"
              fill={accentColor}
              opacity="0.7"
            />
            {/* Lacing system & eyelets */}
            <path
              d="M 64 22 L 68 28 M 60 25 L 64 31 M 55 28 L 59 34"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.9"
            />
            {/* Collar & inner lining */}
            <path
              d="M 74 17 C 78 15, 84 17, 83 23 C 80 26, 74 22, 74 17 Z"
              fill="#0f172a"
              opacity="0.85"
            />
            {/* Speed streak highlight */}
            <path
              d="M 28 44 C 45 38, 75 30, 98 37"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.35"
            />
          </>
        );

      case 'hightop': // HyperRetro Hi
        return (
          <>
            {/* Thick vintage rubber cupsole */}
            <path
              d="M 10 54 L 110 52 C 114 52, 115 48, 110 46 L 12 47 C 8 47, 7 53, 10 54 Z"
              fill="#f1f5f9"
            />
            <path
              d="M 10 54 L 110 52 L 109 55 L 11 57 Z"
              fill="#94a3b8"
              opacity="0.6"
            />
            {/* High-top upper collar and ankle support */}
            <path
              d="M 20 48 L 22 20 C 22 14, 32 12, 42 14 L 46 22 L 60 25 L 85 36 L 108 42 C 112 44, 110 47, 106 47 L 18 48 Z"
              fill={`url(#upper-grad-${id})`}
            />
            {/* Ankle collar badge & padding */}
            <path
              d="M 22 17 C 28 14, 38 14, 40 19 L 38 27 C 32 24, 25 24, 22 17 Z"
              fill={secondaryColor}
            />
            <circle cx="31" cy="20" r="3.5" fill="#ffffff" opacity="0.9" />
            {/* Bold retro swoosh/chevron stripe */}
            <path
              d="M 30 42 C 45 42, 70 36, 95 38 L 98 42 C 70 42, 48 46, 30 42 Z"
              fill={accentColor}
            />
            {/* Toe cap overlay */}
            <path
              d="M 94 40 C 100 40, 108 42, 109 46 L 90 47 C 90 44, 92 41, 94 40 Z"
              fill="#ffffff"
              opacity="0.8"
            />
            {/* Traditional cross laces */}
            <path
              d="M 44 23 L 52 25 M 48 27 L 58 29 M 54 31 L 65 33 M 60 35 L 72 37"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.95"
            />
          </>
        );

      case 'minimal': // Veloce Minimal
        return (
          <>
            {/* Clean low profile cupsole */}
            <path
              d="M 12 53 C 30 54, 85 54, 108 50 C 112 49, 112 45, 106 44 L 14 46 C 9 46, 8 52, 12 53 Z"
              fill="#f8fafc"
            />
            {/* Sleek monolithic leather upper */}
            <path
              d="M 18 46 C 24 38, 38 32, 50 30 C 60 28, 70 23, 76 21 C 82 19, 86 23, 83 28 L 92 34 L 106 40 C 110 42, 109 45, 104 45 L 18 46 Z"
              fill={`url(#upper-grad-${id})`}
            />
            {/* Minimal stitch lines */}
            <path
              d="M 28 44 C 35 37, 48 34, 58 33"
              stroke={accentColor}
              strokeWidth="1.2"
              strokeDasharray="2 2"
              opacity="0.8"
            />
            {/* Heel tab accent */}
            <path
              d="M 19 42 C 22 36, 28 34, 30 33 L 28 45 Z"
              fill={secondaryColor}
            />
            {/* Clean tone-on-tone laces */}
            <path
              d="M 64 26 L 68 30 M 59 29 L 63 33 M 54 32 L 58 36"
              stroke="#e2e8f0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </>
        );

      case 'tech': // NeonPulse 90
        return (
          <>
            {/* Multi-density sculpted foam & aggressive tread */}
            <path
              d="M 10 53 C 25 56, 80 56, 110 48 C 114 46, 114 42, 108 40 C 95 40, 80 43, 60 43 C 40 43, 25 47, 10 53 Z"
              fill="#0f172a"
            />
            <path
              d="M 22 51 C 36 51, 52 48, 62 48 C 72 48, 88 51, 100 48"
              stroke={accentColor}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Tech layered cage & knit upper */}
            <path
              d="M 15 47 C 22 36, 38 30, 52 27 C 62 25, 72 16, 80 15 C 86 14, 88 20, 84 26 L 96 33 L 108 40 C 112 42, 110 44, 106 44 L 15 47 Z"
              fill={`url(#upper-grad-${id})`}
            />
            {/* Cyber TPU support cage */}
            <path
              d="M 45 44 L 56 32 M 58 43 L 68 30 M 70 42 L 78 32"
              stroke={secondaryColor}
              strokeWidth="3.2"
              strokeLinecap="round"
              opacity="0.85"
            />
            {/* Neon accent badge */}
            <polygon points="82,24 88,27 82,30" fill={accentColor} />
            {/* Speed laces */}
            <path
              d="M 68 22 L 72 26 M 62 25 L 66 29"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </>
        );

      case 'trail': // Apex Trail-X
      default:
        return (
          <>
            {/* Rugged lugged outsole & rock plate */}
            <path
              d="M 8 54 C 25 56, 80 56, 110 49 C 115 47, 114 43, 108 41 C 92 41, 78 44, 55 44 C 32 44, 20 48, 8 54 Z"
              fill="#1e1b4b"
            />
            {/* High-visibility lug treads */}
            <path
              d="M 16 55 L 20 52 M 35 55 L 39 52 M 55 55 L 59 52 M 75 54 L 79 51 M 95 52 L 99 49"
              stroke={accentColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Ripstop weatherized upper with mudguard */}
            <path
              d="M 14 48 C 20 37, 36 30, 50 27 C 60 25, 70 17, 78 16 C 84 15, 87 21, 84 27 L 95 34 L 108 41 C 112 43, 111 45, 106 45 L 14 48 Z"
              fill={`url(#upper-grad-${id})`}
            />
            {/* Heavy-duty mudguard wrap */}
            <path
              d="M 14 48 C 30 45, 80 43, 107 43 C 109 44, 106 46, 100 47 C 78 48, 30 50, 14 48 Z"
              fill={secondaryColor}
              opacity="0.9"
            />
            {/* Utility webbing & reflective bungee lace */}
            <path
              d="M 62 23 L 68 28 M 56 26 L 62 31 M 50 29 L 56 34"
              stroke={accentColor}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Heel pull tab */}
            <path d="M 22 25 L 16 23 L 18 28 Z" fill={accentColor} />
          </>
        );
    }
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}
      style={{ width: size, height: size * 0.62 }}
    >
      <svg
        viewBox="0 0 120 70"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        style={{
          filter: isFloating ? `drop-shadow(0 14px 18px ${glowColor})` : undefined,
          transform: isFloating ? 'translateY(-4px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <defs>
          <linearGradient id={`upper-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>

          <linearGradient id={`midsole-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          <filter id={`soft-shadow-${id}`} x="-20%" y="-20%" width="140%" height="160%">
            <feGaussianBlur stdDeviation="3.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.35 0" />
          </filter>
        </defs>

        {/* Dynamic ambient contact shadow */}
        {hasShadow && (
          <ellipse
            cx="60"
            cy="60"
            rx="46"
            ry="5.5"
            fill="black"
            opacity={isFloating ? 0.2 : 0.45}
            filter={`url(#soft-shadow-${id})`}
            style={{
              transform: isFloating ? 'scale(0.85)' : 'scale(1)',
              transformOrigin: 'center',
              transition: 'all 0.4s ease',
            }}
          />
        )}

        {/* The Crafted Sneaker Vector */}
        <g id={`shoe-body-${id}`}>
          {renderShoeModel()}
        </g>

        {/* Optional Glass / Studio Floor Reflection */}
        {reflectionOpacity > 0 && (
          <g
            opacity={reflectionOpacity}
            transform="scale(1, -0.45) translate(0, -118)"
            style={{ filter: 'blur(1.5px)' }}
          >
            {renderShoeModel()}
          </g>
        )}
      </svg>
    </div>
  );
};
