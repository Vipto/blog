import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Store, 
  HeartHandshake, 
  Zap, 
  Layers,
  ArrowRight,
  ExternalLink 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Vipto — Mission, Core Values & Principles',
  description: 'Learn about Vipto, an unincorporated technology product initiative dedicated to making everyday product discovery simpler through engineering and experimentation.',
};

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Simplicity',
      desc: 'Technology should be simple. Vipto applications are engineered to be easy enough for anyone to use, regardless of technical background.',
      icon: Zap,
    },
    {
      title: 'Trust',
      desc: 'Customers should trust the availability info they receive, and shop owners should trust that the platform brings genuine local buyers.',
      icon: ShieldCheck,
    },
    {
      title: 'Customer First',
      desc: 'Every engineering and UX decision must improve the customer experience. If a feature adds friction without clear benefit, it is discarded.',
      icon: Users,
    },
    {
      title: 'Support for Local Businesses',
      desc: 'Local storefronts are essential to every community. Vipto aims to help them thrive in the digital era without expensive software.',
      icon: Store,
    },
    {
      title: 'Continuous Innovation',
      desc: 'Constantly testing better ways to connect physical inventory with digital search through smart indexing and low-latency messaging.',
      icon: Sparkles,
    },
    {
      title: 'Reliability',
      desc: 'Providing accurate, timely stock confirmations so shoppers can step out with complete peace of mind.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div style={{ paddingTop: '56px', paddingBottom: '96px' }}>
      <div className="container-narrow">
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <span className="section-label">About the Initiative</span>
          <h1 style={{ marginBottom: '20px', fontSize: 'clamp(2.2rem, 3.5vw + 1rem, 3.4rem)' }}>
            Building. Learning. Improving.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Vipto is an <strong>unincorporated technology product initiative</strong> focused on building technology that makes everyday product discovery simpler.
          </p>
        </div>

        {/* Core Narrative */}
        <section style={{ marginBottom: '64px' }}>
          <div className="card" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '18px' }}>
              Why We Exist
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
              Every day, millions of people want to purchase items immediately from stores in their neighborhood. However, there is no reliable, frictionless way to know whether a nearby shop actually carries that item right now.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
              At the same time, thousands of local retailers stock high-quality merchandise but remain invisible during the customer&apos;s digital search phase because they lack complex e-commerce software.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Vipto exists to bridge this specific gap through a lightweight, request-and-reply platform: <strong>&ldquo;Search Online. Confirm Availability. Buy Offline.&rdquo;</strong>
            </p>
          </div>
        </section>

        {/* Core Values Grid */}
        <section style={{ marginBottom: '64px' }}>
          <div className="section-header">
            <span className="section-label">Foundational Principles</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The fundamental standards that govern every architectural and design decision at Vipto.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="card card-hover">
                  <div
                    style={{
                      display: 'inline-flex',
                      padding: '10px',
                      borderRadius: '8px',
                      background: 'var(--bg-tertiary)',
                      color: 'var(--accent-primary)',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{val.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Who Can Use Vipto */}
        <section style={{ marginBottom: '64px' }}>
          <div className="card" style={{ padding: '36px' }}>
            <span className="section-label">Community &amp; Users</span>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
              Who Vipto is Built For
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {/* For Customers */}
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  For Customers
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Students &amp; Hostel Residents:</strong> Quickly finding chargers, stationary, textbooks, and essentials.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Office Workers &amp; Commuters:</strong> Locating replacement hardware or specialty items on short notice.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Families &amp; Residents:</strong> Checking medicine or home necessity availability before leaving home.</span>
                  </li>
                </ul>
              </div>

              {/* For Local Retailers */}
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  For Local Retailers
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Electronics &amp; Mobile Accessories:</strong> Capturing walk-in demand for fast-moving adapters and cables.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Stationary, Medical &amp; Sports Shops:</strong> Directing urgent local queries straight to their counter.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Neighborhood Retailers:</strong> Gaining a modern digital footprint with zero upfront software complexity.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Statement */}
        <section style={{ marginBottom: '40px' }}>
          <div
            style={{
              padding: '28px',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <ShieldCheck size={18} style={{ color: 'var(--accent-emerald)' }} />
              <strong style={{ fontSize: '0.95rem' }}>Transparency Notice</strong>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
              Vipto currently operates strictly as an <strong>unincorporated technology product initiative</strong>. It is not represented as a Private Limited Company, LLP, funded corporation, or registered company unless explicitly updated in future public disclosures.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.85rem' }}>
              <Link href="/transparency" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>
                Read full transparency disclosure →
              </Link>
              <a
                href="https://github.com/Vipto/.github/blob/main/legal.md"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Legal Document on GitHub
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
