'use client';

import React, { useEffect, useState } from 'react';
import { Share2, Check, ArrowUp } from 'lucide-react';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <>
      {/* Top Fixed Progress Line */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '3px',
          background: 'transparent',
          zIndex: 9999,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-emerald))',
            boxShadow: '0 0 8px rgba(37, 99, 235, 0.6)',
            transition: 'width 0.1s linear',
          }}
        />
      </div>

      {/* Share / Copy Article Floating Action Button */}
      <button
        onClick={handleCopyLink}
        id="share-article-btn"
        aria-label="Share article link"
        title={copied ? 'Link copied!' : 'Copy article link'}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          borderRadius: 'var(--radius-full)',
          background: copied ? 'var(--accent-emerald-bg)' : 'var(--bg-secondary)',
          border: `1px solid ${copied ? 'var(--accent-emerald)' : 'var(--border-subtle)'}`,
          color: copied ? 'var(--accent-emerald)' : 'var(--text-secondary)',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all var(--transition-fast)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        {copied ? (
          <>
            <Check size={14} />
            <span>Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 size={14} />
            <span>Share Article</span>
          </>
        )}
      </button>
    </>
  );
}
