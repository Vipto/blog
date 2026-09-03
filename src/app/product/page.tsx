import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AppComparison from '@/components/AppComparison';
import WorkflowDiagram from '@/components/WorkflowDiagram';
import Timeline from '@/components/Timeline';
import { 
  ArrowRight, 
  Search, 
  Store, 
  MapPin, 
  Zap, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle,
  Smartphone,
  Sparkles,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'What We’re Building — Product Vision & Architecture',
  description: 'Learn about the Vipto hyperlocal product discovery platform, our request-based workflow, dual-app architecture, and ongoing experiments.',
};

export default function ProductPage() {
  return (
    <div style={{ paddingTop: '56px', paddingBottom: '96px' }}>
      {/* Header */}
      <section style={{ marginBottom: '64px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="section-label">Product Vision &amp; Architecture</span>
            <h1 style={{ marginBottom: '20px', fontSize: 'clamp(2.2rem, 3.5vw + 1rem, 3.4rem)' }}>
              Making local product discovery as simple as a digital search.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              We&apos;re building a hyperlocal platform that bridges the gap between online search convenience and the immediacy of physical, in-person store purchases.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--accent-primary-glow)',
                color: 'var(--accent-primary)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
              }}
            >
              <span>Current Stage: Minimum Viable Product (MVP) &amp; Alpha Field Trials</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1. THE PROBLEM */}
      <section style={{ marginBottom: '80px' }}>
        <div className="container">
          <div className="card" style={{ padding: '40px' }}>
            <span className="section-label">The Problem</span>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
              The Local Information Blindspot
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              <div>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                  Even in an era dominated by e-commerce, people still prefer buying from nearby stores for urgent needs, hands-on physical inspection, and immediate possession.
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  However, customers have no reliable way to verify if a nearby shop actually stocks the item they need before traveling. For example, finding a laptop charger urgently often entails visiting four or five shops in person, wasting hours, fuel, and energy.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  How existing tools fall short:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#f87171' }}>✕</span>
                    <span><strong>Google Maps / Justdial:</strong> Show store locations and contact numbers, but not what is stocked inside.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#f87171' }}>✕</span>
                    <span><strong>E-Commerce Marketplaces:</strong> Focus on warehouse deliveries taking 1–3 days, leaving immediate offline needs unmet.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                    <span><strong>Vipto:</strong> Combines store location discovery with instant, item-level stock availability confirmation.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR APPROACH */}
      <section style={{ marginBottom: '80px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">A Request-Based Interaction Model</h2>
            <p className="section-subtitle">
              Rather than asking merchants to manage complex ERP databases, we designed a lightweight request-and-reply paradigm that takes less than 2 seconds.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <div className="card">
              <div className="badge badge-blue" style={{ marginBottom: '14px' }}>Discovery</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Search Nearby Listings</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We&apos;re exploring geolocation indexing that surfaces relevant products in stores within your immediate walking or driving radius.
              </p>
            </div>

            <div className="card">
              <div className="badge badge-amber" style={{ marginBottom: '14px' }}>Verification</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Check Availability</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We&apos;re building a one-tap trigger that pushes a priority notification to the shopkeeper, eliminating phone calls and store visits.
              </p>
            </div>

            <div className="card">
              <div className="badge badge-emerald" style={{ marginBottom: '14px' }}>Resolution</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Confirm &amp; Visit</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                The shopkeeper responds with &ldquo;Available&rdquo; or &ldquo;Not Available&rdquo;. When confirmed, the customer navigates to the store with full certainty.
              </p>
            </div>
          </div>

          <WorkflowDiagram />
        </div>
      </section>

      {/* 3. DUAL-APP ARCHITECTURE */}
      <section style={{ marginBottom: '80px' }}>
        <div className="container">
          <AppComparison />
        </div>
      </section>

      {/* 4. EXPERIMENTATION & LEARNINGS */}
      <section style={{ marginBottom: '80px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Field Testing</span>
            <h2 className="section-title">What we&apos;re testing &amp; learning</h2>
            <p className="section-subtitle">
              We test our assumptions directly in real retail environments with merchants and everyday consumers.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
                1. What we&apos;re exploring
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                We are exploring notification routing mechanisms that maximize shopkeeper responsiveness without being intrusive during peak hours.
              </p>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We are also experimenting with photo-based cataloging so store owners can add items in under 15 seconds.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
                2. What we&apos;re learning
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                We learned that complex catalog forms immediately kill merchant engagement. Two-tap interactions preserve high response rates.
              </p>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We learned that users would rather know definitively that an item is unavailable in 60 seconds than wonder for half an hour.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
                3. What we&apos;re building next
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                We are testing sub-second push notifications on variable 4G networks and refining search ranking based on verified walking distance.
              </p>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We are improving our offline synchronization layer so merchant responses queue gracefully if connectivity drops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TIMELINE */}
      <section style={{ marginBottom: '60px' }}>
        <div className="container">
          <Timeline />
        </div>
      </section>

      {/* CTA to Journal */}
      <section>
        <div className="container">
          <div
            style={{
              padding: '36px',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>
                Read our engineering &amp; product journal
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Deep dives into our system architecture, UX experiments, and field observations.
              </p>
            </div>
            <Link href="/journal" className="btn btn-primary">
              <span>Explore Journal</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
