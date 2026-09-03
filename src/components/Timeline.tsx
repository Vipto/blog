'use client';

import React, { useState } from 'react';
import { Lightbulb, FlaskConical, Code2, CheckSquare, GraduationCap, RefreshCw, ArrowRight } from 'lucide-react';

const stages = [
  {
    name: 'Idea',
    icon: Lightbulb,
    desc: 'Identifying genuine friction in how people search for products locally.',
    details: 'Observing everyday shopping struggles—like visiting 4-5 stores looking for a specific cable or medicine.'
  },
  {
    name: 'Experiment',
    icon: FlaskConical,
    desc: 'Testing core assumptions with minimal lightweight prototypes in the field.',
    details: 'Validating whether local merchants will answer quick digital stock inquiries during busy store hours.'
  },
  {
    name: 'Build',
    icon: Code2,
    desc: 'Engineering practical, resilient, low-bandwidth mobile and web clients.',
    details: 'Crafting the specialized Customer App and Seller App with sub-second event dispatch.'
  },
  {
    name: 'Test',
    icon: CheckSquare,
    desc: 'Deploying alpha builds to real neighborhood communities and retailers.',
    details: 'Testing in dense retail markets with real hardware across variable mobile network conditions.'
  },
  {
    name: 'Learn',
    icon: GraduationCap,
    desc: 'Listening without bias to merchant drop-off rates and consumer usage.',
    details: 'Uncovering honest insights: why two taps beat complex forms, and why proximity distance matters most.'
  },
  {
    name: 'Improve',
    icon: RefreshCw,
    desc: 'Refining the architecture, stripping unnecessary friction, and repeating.',
    details: 'Publishing progress transparently in the Vipto Journal and iterating continuously.'
  }
];

export default function Timeline() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: '36px 28px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span className="section-label">Continuous Iteration</span>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
          Product Development Lifecycle
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Vipto is developed through continuous experimentation, honest feedback, and disciplined refinement.
        </p>
      </div>

      {/* Lifecycle Flow Ribbon */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '8px',
          marginBottom: '28px',
        }}
      >
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={stage.name}
              onClick={() => setSelectedIdx(idx)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '16px 10px',
                borderRadius: 'var(--radius-md)',
                background: isSelected ? 'var(--bg-elevated)' : 'var(--bg-secondary)',
                border: `1px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}
            >
              <div
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: isSelected ? 'var(--accent-primary-glow)' : 'var(--bg-tertiary)',
                  color: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)',
                  marginBottom: '8px',
                }}
              >
                <Icon size={18} />
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  fontWeight: isSelected ? 700 : 600,
                  color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                }}
              >
                {stage.name}
              </div>
              <div
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  marginTop: '2px',
                }}
              >
                0{idx + 1}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <div
        className="animate-fade-in"
        key={selectedIdx}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <div style={{ flex: '1 1 320px' }}>
          <div
            style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-primary)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '4px',
            }}
          >
            Stage 0{selectedIdx + 1}: {stages[selectedIdx].name}
          </div>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
            {stages[selectedIdx].desc}
          </h4>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {stages[selectedIdx].details}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setSelectedIdx((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
            className="btn btn-subtle btn-sm"
          >
            ← Previous
          </button>
          <button
            onClick={() => setSelectedIdx((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
            className="btn btn-secondary btn-sm"
          >
            Next Stage →
          </button>
        </div>
      </div>
    </div>
  );
}
