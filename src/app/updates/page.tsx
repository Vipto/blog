import React from 'react';
import type { Metadata } from 'next';
import { productUpdates } from '@/data/updates';
import { Clock, CheckCircle, Lightbulb, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product Updates & Progress Changelog',
  description: 'Chronological changelog documenting transparent progress, architecture shifts, field learnings, and active experiments at Vipto.',
};

export default function UpdatesPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Under Active Iteration':
        return 'badge-blue';
      case 'Currently Experimenting':
        return 'badge-amber';
      case 'Early Development':
        return 'badge-purple';
      case 'Tested & Refined':
        return 'badge-emerald';
      default:
        return '';
    }
  };

  return (
    <div style={{ paddingTop: '56px', paddingBottom: '96px' }}>
      <div className="container-narrow">
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <span className="section-label">Transparent Changelog</span>
          <h1 style={{ marginBottom: '16px', fontSize: 'clamp(2.2rem, 3.5vw + 1rem, 3.4rem)' }}>
            Product Updates
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            A public record of our technical progress, experiments, architectural shifts, and direct learnings from building Vipto.
          </p>
        </div>

        {/* Chronological Feed */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          {productUpdates.map((update, idx) => (
            <article
              key={update.id}
              className="card"
              style={{
                padding: '36px 32px',
                borderLeft: '3px solid var(--accent-primary)',
              }}
            >
              {/* Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {update.period}
                  </span>
                  <span className={`badge ${getStatusBadge(update.status)}`}>
                    {update.status}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {update.tag}
                </span>
              </div>

              {/* Headline */}
              <h2
                style={{
                  fontSize: '1.4rem',
                  lineHeight: 1.35,
                  marginBottom: '14px',
                  fontWeight: 700,
                }}
              >
                {update.headline}
              </h2>

              {/* Summary */}
              <p
                style={{
                  fontSize: '0.975rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                {update.summary}
              </p>

              {/* Detail Breakdown: Explored, Changed, Learned */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '20px',
                  background: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {/* Explored */}
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Lightbulb size={14} />
                    <span>What was explored</span>
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {update.explored.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Changed */}
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: '#fbbf24',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <RefreshCw size={14} />
                    <span>What changed</span>
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {update.changed.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                        <span style={{ color: '#fbbf24' }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learned */}
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: '#34d399',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <CheckCircle size={14} />
                    <span>What we learned</span>
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {update.learned.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                        <span style={{ color: '#34d399' }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div
          style={{
            marginTop: '56px',
            padding: '24px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            We update this page at the conclusion of each iteration sprint. To follow technical essays, visit the{' '}
            <Link href="/journal" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>
              Vipto Journal
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
