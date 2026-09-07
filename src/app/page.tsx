import React from 'react';
import Link from 'next/link';
import { articles } from '@/data/articles';
import { productUpdates } from '@/data/updates';
import { focusAreas } from '@/data/focusAreas';
import ArticleCard from '@/components/ArticleCard';
import WorkflowDiagram from '@/components/WorkflowDiagram';
import Timeline from '@/components/Timeline';
import ViptoProductCaptureAnimation from '@/components/ViptoProductCaptureAnimation';
import { 
  ArrowRight, 
  Search, 
  MapPin, 
  CheckCircle2, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink,
  Users,
  Smartphone,
  Cpu,
  Layers,
  ShoppingBag,
  Store,
  Clock,
  Zap,
  HelpCircle
} from 'lucide-react';

export default function HomePage() {
  const latestArticles = articles.slice(0, 3);
  const latestUpdate = productUpdates[0];

  const getFocusIcon = (name: string) => {
    switch (name) {
      case 'Search': return Search;
      case 'Smartphone': return Smartphone;
      case 'Compass': return Compass;
      case 'Cpu': return Cpu;
      case 'Sparkles': return Sparkles;
      default: return Layers;
    }
  };

  return (
    <div style={{ paddingBottom: '96px' }}>
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (ANIMATION ABOVE HEADLINE & SUPPORTING COPY)             */}
      {/* ========================================================================= */}
      <section
        style={{
          paddingTop: '40px',
          paddingBottom: '80px',
          borderBottom: '1px solid var(--border-subtle)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          {/* PRIMARY VISUAL EXPERIENCE: Hero Animation Placed FIRST Above Headline */}
          <div style={{ marginBottom: '48px' }}>
            <ViptoProductCaptureAnimation />
          </div>

          {/* SUPPORTING HEADLINE & CORE MESSAGING (Below Animation) */}
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                  boxShadow: '0 0 8px var(--accent-emerald)',
                }}
              />
              <span style={{ fontWeight: 600 }}>Unincorporated Technology Product Initiative</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                marginBottom: '20px',
                fontWeight: 800,
                fontSize: 'clamp(2.2rem, 3.8vw + 0.8rem, 3.6rem)',
                lineHeight: 1.18,
                letterSpacing: '-0.03em',
                textWrap: 'balance',
              }}
            >
              Building technology that makes{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-emerald) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                everyday product discovery
              </span>{' '}
              simpler.
            </h1>

            {/* Sub-description */}
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto 32px',
                textWrap: 'balance',
              }}
            >
              Need a laptop charger, specific textbook, or cable in 10 minutes? Vipto bridges the gap between searching online and finding verified products on physical shelves in neighborhood stores.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '14px',
                marginBottom: '36px',
              }}
            >
              <Link href="/product" className="btn btn-primary btn-lg" id="hero-explore-btn">
                <span>Explore Vipto</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/journal" className="btn btn-secondary btn-lg" id="hero-journal-btn">
                <span>Read our thinking</span>
              </Link>
            </div>

            {/* Key Value Proposition Flow Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '12px',
                padding: '10px 22px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-sm)',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
              }}
            >
              <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>1. Search Online</span>
              <span style={{ color: 'var(--text-muted)' }}>→</span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>2. Confirm Stock</span>
              <span style={{ color: 'var(--text-muted)' }}>→</span>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>3. Buy Offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHY WE'RE BUILDING VIPTO (THE REAL-WORLD PROBLEM)                     */}
      {/* ========================================================================= */}
      <section style={{ paddingTop: '88px', paddingBottom: '88px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Problem We Care About</span>
            <h2 className="section-title">Why we&apos;re building Vipto</h2>
            <p className="section-subtitle">
              Discovering physical products today still involves fragmented information, excessive search fatigue, and disconnected experiences.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            {/* Card 1: Search Friction */}
            <div className="card">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#f87171',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Search size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>The Blind Store Hunt</h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                When someone urgently needs an item—like a laptop charger or specialized medicine—they often visit four or five stores blindly before finding one that actually has it in stock.
              </p>
            </div>

            {/* Card 2: Delivery Delay */}
            <div className="card">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.1)',
                  color: '#fbbf24',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Clock size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>The Multi-Day Delivery Delay</h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Centralized e-commerce takes 1–3 days to deliver items that are already sitting on physical store shelves 500 meters down the street from where the buyer is sitting.
              </p>
            </div>

            {/* Card 3: Invisible Neighborhood Retail */}
            <div className="card">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#60a5fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Store size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Invisible Local Storefronts</h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Neighborhood retailers stock high-quality merchandise but remain invisible during digital search because they lack the time and budget for complex enterprise software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HOW VIPTO WORKS (THE REQUEST-AND-REPLY MODEL)                         */}
      {/* ========================================================================= */}
      <section
        style={{
          paddingTop: '88px',
          paddingBottom: '88px',
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">How Vipto works</h2>
            <p className="section-subtitle">
              A lightweight, 3-step workflow connecting customer intent directly to local store counters in seconds.
            </p>
          </div>

          <WorkflowDiagram />

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/product" className="btn btn-secondary">
              <span>Explore the full technical architecture</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DUAL APPLICATION ECOSYSTEM                                            */}
      {/* ========================================================================= */}
      <section style={{ paddingTop: '88px', paddingBottom: '88px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">System Architecture</span>
            <h2 className="section-title">Two applications, one unified mission</h2>
            <p className="section-subtitle">
              Engineered specifically to solve the distinct needs of everyday shoppers and busy retail storekeepers.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {/* Consumer App Card */}
            <div className="card" style={{ padding: '36px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--accent-primary-glow)',
                  color: 'var(--accent-primary)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '20px',
                }}
              >
                <Smartphone size={14} />
                <span>FOR SHOPPERS</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Vipto Consumer App</h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Instant search across stores within walking or short driving radius. Push a priority stock check request and receive definitive confirmation in seconds.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>Real-time store proximity and walking distance</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>1-tap availability verification</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>Direct turn-by-turn navigation to billing counter</span>
                </li>
              </ul>
            </div>

            {/* Merchant App Card */}
            <div className="card" style={{ padding: '36px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--accent-emerald-bg)',
                  color: 'var(--accent-emerald)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '20px',
                }}
              >
                <Store size={14} />
                <span>FOR LOCAL RETAILERS</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Vipto Partner App</h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                A frictionless merchant tool that requires zero complex catalog maintenance. Receive urgent product queries from nearby customers and respond in a single tap.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>Sub-second high-contrast notification trigger</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>1-tap response (&ldquo;Available&rdquo; or &ldquo;Not Available&rdquo;)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>Drives high-intent walk-in foot traffic directly to counter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FEATURED JOURNAL ARTICLES & RESEARCH                                  */}
      {/* ========================================================================= */}
      <section
        style={{
          paddingTop: '88px',
          paddingBottom: '88px',
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '48px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <span className="section-label">Engineering &amp; Product Journal</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Our latest thinking &amp; reflections
              </h2>
            </div>
            <Link href="/journal" className="btn btn-secondary">
              <span>View all articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TRANSPARENCY & COMMUNITY INITIATIVE                                    */}
      {/* ========================================================================= */}
      <section style={{ paddingTop: '88px', paddingBottom: '88px' }}>
        <div className="container-narrow">
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xl)',
              padding: '44px 36px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'var(--accent-emerald-bg)',
                color: 'var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <ShieldCheck size={28} />
            </div>

            <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
              Building in the Open with Complete Transparency
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '580px', margin: '0 auto 24px' }}>
              Vipto operates as an unincorporated technology product initiative. We openly document our engineering discoveries, retail experiments, and codebase for builders, researchers, and students.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/join" className="btn btn-primary">
                <span>Join Us &amp; Contribute</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/transparency" className="btn btn-secondary">
                <span>Read Transparency Notice</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
