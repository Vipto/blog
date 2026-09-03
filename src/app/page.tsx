import React from 'react';
import Link from 'next/link';
import { articles } from '@/data/articles';
import { productUpdates } from '@/data/updates';
import { focusAreas } from '@/data/focusAreas';
import ArticleCard from '@/components/ArticleCard';
import WorkflowDiagram from '@/components/WorkflowDiagram';
import Timeline from '@/components/Timeline';
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
  Layers
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
      {/* 1. HERO SECTION */}
      <section
        style={{
          paddingTop: '64px',
          paddingBottom: '80px',
          borderBottom: '1px solid var(--border-subtle)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
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
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                marginBottom: '28px',
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
              <span>Unincorporated Technology Product Initiative</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                marginBottom: '24px',
                fontWeight: 800,
              }}
            >
              Building technology that makes{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #34d399)',
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
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                maxWidth: '680px',
                margin: '0 auto 36px',
              }}
            >
              Vipto is exploring how technology can solve the practical gap between searching online and finding verified products in nearby local physical stores.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '14px',
                marginBottom: '44px',
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

            {/* Key Value Proposition Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 20px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span>Search Online</span>
              <span>→</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Confirm Availability</span>
              <span>→</span>
              <span>Buy Offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY WE'RE BUILDING VIPTO (THE PROBLEM) */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
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
            <div className="card">
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#f87171',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Search size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>The Search Friction</h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                When someone urgently needs an item—like a laptop charger or specialized medicine—they often visit four or five stores blindly before finding one that has it in stock.
              </p>
            </div>

            <div className="card">
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(245, 158, 11, 0.1)',
                  color: '#fbbf24',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <MapPin size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>The Storefront Blindspot</h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                Digital maps show where shops are located, but say nothing about what is currently in stock on their shelves. Nearby customers remain unaware of local inventory.
              </p>
            </div>

            <div className="card">
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#60a5fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <CheckCircle2 size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>The Missing Confirmation</h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                Small retailers have great inventory but cannot afford complex ERPs. Vipto provides a zero-friction request-and-reply mechanism to verify stock instantly.
              </p>
            </div>
          </div>

          <div
            style={{
              padding: '24px 32px',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                Explore the complete product vision &amp; dual-app architecture
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Understand how Customer and Seller applications work together.
              </div>
            </div>
            <Link href="/product" className="btn btn-secondary btn-sm">
              <span>Read Product Vision</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE WORKFLOW PREVIEW */}
      <section style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="container">
          <WorkflowDiagram />
        </div>
      </section>

      {/* 4. OUR FOCUS AREAS */}
      <section style={{ paddingTop: '40px', paddingBottom: '80px', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Domains</span>
            <h2 className="section-title">Our Focus</h2>
            <p className="section-subtitle">
              The fundamental engineering, product, and design principles guiding how we build Vipto.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {focusAreas.map((focus) => {
              const Icon = getFocusIcon(focus.iconName);
              return (
                <div key={focus.title} className="card card-hover">
                  <div
                    style={{
                      display: 'inline-flex',
                      padding: '10px',
                      borderRadius: '10px',
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-subtle)',
                      marginBottom: '18px',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{focus.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
                    {focus.description}
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '0.825rem',
                      color: 'var(--text-muted)',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '14px',
                    }}
                  >
                    {focus.bullets.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT DEVELOPMENT TIMELINE */}
      <section style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="container">
          <Timeline />
        </div>
      </section>

      {/* 6. LATEST FROM THE VIPTO JOURNAL */}
      <section style={{ paddingTop: '40px', paddingBottom: '80px', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '48px',
              gap: '16px',
            }}
          >
            <div>
              <span className="section-label">Editorial &amp; Engineering</span>
              <h2 className="section-title" style={{ marginBottom: '8px' }}>
                Latest from Vipto Journal
              </h2>
              <p className="section-subtitle">
                Ideas, experiments, engineering notes, and lessons from building Vipto.
              </p>
            </div>
            <Link href="/journal" className="btn btn-secondary btn-sm">
              <span>View all publications</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. RECENT UPDATE SNIPPET */}
      <section style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="container">
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="badge badge-emerald">{latestUpdate.status}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {latestUpdate.period}
                </span>
              </div>
              <Link href="/updates" className="btn btn-subtle btn-sm">
                <span>View Full Changelog</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>
              {latestUpdate.headline}
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              {latestUpdate.summary}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
                background: 'var(--bg-primary)',
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  What was explored
                </strong>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  {latestUpdate.explored[0]}
                </p>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Key lesson
                </strong>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  {latestUpdate.learned[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. JOIN US & CONTRIBUTE CTA */}
      <section style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(16, 185, 129, 0.05))',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xl)',
              padding: '48px 36px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                padding: '10px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                color: 'var(--accent-primary)',
                marginBottom: '16px',
              }}
            >
              <Users size={24} />
            </div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>
              Interested in building with Vipto?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 28px' }}>
              We are interested in people who enjoy building, experimenting, learning, and solving real-world product discovery problems. Structured student internships and contributor roles are available.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/join" className="btn btn-primary" id="home-join-cta-btn">
                <span>View Opportunities &amp; Apply</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn btn-secondary">
                <span>Learn about the initiative</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
