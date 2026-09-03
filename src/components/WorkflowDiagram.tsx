'use client';

import React, { useState } from 'react';
import { Search, Send, BellRing, CheckCircle2, XCircle, Store, Smartphone, ArrowRight, Check } from 'lucide-react';

export default function WorkflowDiagram() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: 1,
      title: 'Search & Discover',
      actor: 'Customer',
      actorIcon: Smartphone,
      action: 'Searches for a specific product and views nearby local store listings within walking radius.',
      details: 'Customer opens Vipto, browses by category or types "USB-C Laptop Charger". Stores within 1-2 km are displayed with distance.',
      status: 'Ready'
    },
    {
      step: 2,
      title: 'Check Availability',
      actor: 'Customer → Vipto',
      actorIcon: Send,
      action: 'Customer taps the "Check Availability" button on the desired item listing.',
      details: 'A lightweight cryptographic request is dispatched through low-latency push notification to the store owner.',
      status: 'Dispatched'
    },
    {
      step: 3,
      title: 'Merchant Prompt',
      actor: 'Shop Owner',
      actorIcon: BellRing,
      action: 'Shopkeeper receives an instant high-priority audio/visual alert on their mobile screen.',
      details: 'The prompt shows the item name, image, and two oversized buttons: "Available" and "Not Available". No typing needed.',
      status: 'Received'
    },
    {
      step: 4,
      title: 'One-Tap Reply',
      actor: 'Shop Owner → Vipto',
      actorIcon: CheckCircle2,
      action: 'Seller taps either "Available" or "Not Available" in under 2 seconds.',
      details: 'Binary response is immediately sent back to the coordination gateway, avoiding stale or unconfirmed states.',
      status: 'Confirmed'
    },
    {
      step: 5,
      title: 'Confident Store Visit',
      actor: 'Customer',
      actorIcon: Store,
      action: 'Customer gets notified and navigates directly to the store with full stock certainty.',
      details: 'Customer walks in, inspects the item physically, and completes the purchase offline. Zero wasted trips.',
      status: 'Resolved'
    }
  ];

  return (
    <div
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: '32px',
      }}
    >
      <div style={{ marginBottom: '28px', textAlign: 'center' }}>
        <span className="section-label">Workflow Architecture</span>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
          The Vipto Request-Response Loop
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto' }}>
          &ldquo;Search Online. Confirm Availability. Buy Offline.&rdquo; A minimal five-stage workflow designed for speed and reliability.
        </p>
      </div>

      {/* Step Selection Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '8px',
          marginBottom: '28px',
        }}
      >
        {steps.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              style={{
                background: isActive ? 'var(--bg-elevated)' : 'var(--bg-tertiary)',
                border: `1px solid ${isActive ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '12px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                color: 'var(--text-primary)',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                  fontWeight: 600,
                  marginBottom: '4px',
                }}
              >
                STEP 0{s.step}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {s.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Visual Card */}
      <div
        className="card animate-fade-in"
        key={activeStep}
        style={{
          background: 'var(--bg-primary)',
          borderColor: 'var(--border-medium)',
          padding: '28px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--accent-primary-glow)',
              color: 'var(--accent-primary)',
              fontSize: '0.8rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              marginBottom: '16px',
            }}
          >
            <span>Stage {activeStep + 1} of 5</span>
            <span>•</span>
            <span>Actor: {steps[activeStep].actor}</span>
          </div>

          <h4 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
            {steps[activeStep].title}
          </h4>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-primary)',
              lineHeight: 1.6,
              marginBottom: '14px',
              fontWeight: 500,
            }}
          >
            {steps[activeStep].action}
          </p>

          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            {steps[activeStep].details}
          </p>
        </div>

        {/* Interactive simulated micro-preview */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '16px',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
            }}
          >
            <span>Vipto System Simulator</span>
            <span style={{ color: 'var(--accent-emerald)' }}>● Live State</span>
          </div>

          {activeStep === 0 && (
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <div style={{ flex: 1, padding: '8px 12px', background: 'var(--bg-tertiary)', borderRadius: '6px', fontSize: '0.85rem' }}>
                  🔍 Search: &ldquo;USB-C Fast Charger&rdquo;
                </div>
              </div>
              <div style={{ padding: '10px', background: 'var(--bg-tertiary)', borderRadius: '6px', fontSize: '0.8rem' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)' }}>ElectroHub Stores (450m away)</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Listed 65W GaN Charger in Electronics</span>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div>
              <div style={{ padding: '12px', background: 'var(--bg-tertiary)', borderRadius: '6px', marginBottom: '12px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  Item: 65W GaN Charger
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Store: ElectroHub Stores (450m)
                </div>
              </div>
              <button className="btn btn-primary btn-sm" style={{ width: '100%', pointerEvents: 'none' }}>
                ⚡ Check Availability (Dispatched)
              </button>
            </div>
          )}

          {activeStep === 2 && (
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
              <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'var(--accent-amber-bg)', color: 'var(--accent-amber)', marginBottom: '8px' }}>
                <BellRing size={24} />
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                Incoming Availability Query
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Nearby customer asking about &ldquo;65W GaN Charger&rdquo;
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', textAlign: 'center' }}>
                Shopkeeper Two-Tap Interface
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div style={{ padding: '12px', background: 'var(--accent-emerald-bg)', border: '1px solid var(--accent-emerald)', borderRadius: '6px', textAlign: 'center', color: '#34d399', fontWeight: 700, fontSize: '0.9rem' }}>
                  ✓ Available
                </div>
                <div style={{ padding: '12px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', borderRadius: '6px', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>
                  ✕ Not Available
                </div>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div style={{ padding: '12px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px' }}>
                <Check size={16} />
                <span>Confirmed Available at ElectroHub</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Walking distance: 450 meters (approx 5 mins). Store closes at 9:30 PM.
              </div>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '16px',
              paddingTop: '12px',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="btn btn-subtle btn-sm"
              style={{ fontSize: '0.75rem' }}
            >
              ← Previous Stage
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.75rem' }}
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
