import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '48px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '500px' }}>
        <div
          style={{
            display: 'inline-flex',
            padding: '16px',
            borderRadius: '50%',
            background: 'var(--bg-secondary)',
            color: 'var(--accent-primary)',
            marginBottom: '24px',
          }}
        >
          <Compass size={36} />
        </div>
        <div
          style={{
            fontSize: '0.875rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-primary)',
            fontWeight: 700,
            marginBottom: '8px',
          }}
        >
          404 — PAGE NOT FOUND
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>
          This page does not exist.
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
          The publication or resource you are looking for may have been moved, renamed, or is currently under revision.
        </p>
        <Link href="/" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Return to Vipto Home</span>
        </Link>
      </div>
    </div>
  );
}
