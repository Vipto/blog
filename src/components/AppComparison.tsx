'use client';

import React, { useState } from 'react';
import { User, Store, Smartphone, MapPin, Search, Check, Shield, Clock, Camera, Zap, CheckCircle2 } from 'lucide-react';

export default function AppComparison() {
  const [activeTab, setActiveTab] = useState<'customer' | 'seller'>('customer');

  const customerFeatures = [
    {
      title: 'Simple Phone Registration',
      desc: 'Get started in seconds with phone authentication. No lengthy questionnaires.',
      icon: Smartphone,
    },
    {
      title: 'Hyperlocal Proximity Search',
      desc: 'Browse verified items in nearby stores sorted by real-world walking/driving distance.',
      icon: MapPin,
    },
    {
      title: 'One-Tap Availability Check',
      desc: 'Check live stock with a single button press instead of calling or traveling blindly.',
      icon: Zap,
    },
    {
      title: 'Real-Time Seller Status',
      desc: 'Receive immediate notifications as soon as the merchant responds.',
      icon: Clock,
    },
    {
      title: 'Direct Store Navigation',
      desc: 'Open directions directly in map tools to navigate straight to the verified shop.',
      icon: Search,
    },
  ];

  const sellerFeatures = [
    {
      title: 'Frictionless Store Onboarding',
      desc: 'Register a store profile and location in minutes without enterprise software.',
      icon: Store,
    },
    {
      title: 'Quick Photo Cataloging',
      desc: 'Snap and upload product photos directly from a smartphone camera without barcode headaches.',
      icon: Camera,
    },
    {
      title: 'Two-Tap Request Inbox',
      desc: 'Incoming queries appear with high contrast. Tap "Available" or "Not Available" in under 2 seconds.',
      icon: CheckCircle2,
    },
    {
      title: 'Zero Complex Inventory Upkeep',
      desc: 'No requirement to scan barcodes or maintain complex SKU counts. Perfect for busy shopkeepers.',
      icon: Shield,
    },
    {
      title: 'Local Footfall Multiplier',
      desc: 'Connect with high-intent buyers who are already within walking distance of your storefront.',
      icon: Zap,
    },
  ];

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: '36px 28px',
      }}
    >
      {/* Switcher Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '36px',
        }}
      >
        <span className="section-label">Dual-App Architecture</span>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
          Tailored Experiences for Buyers &amp; Retailers
        </h3>
        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            marginBottom: '24px',
          }}
        >
          Two specialized applications built to solve distinct operational challenges seamlessly.
        </p>

        {/* Tab Buttons */}
        <div
          style={{
            display: 'inline-flex',
            padding: '4px',
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <button
            onClick={() => setActiveTab('customer')}
            className={`btn btn-sm ${activeTab === 'customer' ? 'btn-primary' : 'btn-subtle'}`}
            style={{
              borderRadius: 'var(--radius-full)',
              padding: '8px 20px',
              fontSize: '0.9rem',
              gap: '8px',
            }}
          >
            <User size={16} />
            <span>Customer App</span>
          </button>
          <button
            onClick={() => setActiveTab('seller')}
            className={`btn btn-sm ${activeTab === 'seller' ? 'btn-primary' : 'btn-subtle'}`}
            style={{
              borderRadius: 'var(--radius-full)',
              padding: '8px 20px',
              fontSize: '0.9rem',
              gap: '8px',
            }}
          >
            <Store size={16} />
            <span>Seller App</span>
          </button>
        </div>
      </div>

      {/* Tab Content Display */}
      <div
        className="animate-fade-in"
        key={activeTab}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'center',
        }}
      >
        {/* Features List */}
        <div>
          <div style={{ marginBottom: '20px' }}>
            <span
              className={`badge ${activeTab === 'customer' ? 'badge-blue' : 'badge-emerald'}`}
              style={{ marginBottom: '8px' }}
            >
              {activeTab === 'customer' ? 'For Shoppers & Residents' : 'For Local Merchants'}
            </span>
            <h4 style={{ fontSize: '1.25rem', marginTop: '6px', color: 'var(--text-primary)' }}>
              {activeTab === 'customer'
                ? 'Search Online. Confirm Availability. Buy Offline.'
                : 'Turn Nearby Digital Searches into In-Store Sales.'}
            </h4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {(activeTab === 'customer' ? customerFeatures : sellerFeatures).map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    style={{
                      padding: '8px',
                      borderRadius: '8px',
                      background:
                        activeTab === 'customer'
                          ? 'var(--accent-primary-glow)'
                          : 'var(--accent-emerald-bg)',
                      color:
                        activeTab === 'customer' ? 'var(--accent-primary)' : 'var(--accent-emerald)',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h5
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                      }}
                    >
                      {feat.title}
                    </h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mockup / Simulated Device Card */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-xl)',
            padding: '24px',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div
            style={{
              padding: '8px 12px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
            }}
          >
            <span>{activeTab === 'customer' ? 'Vipto User Client' : 'Vipto Merchant Client'}</span>
            <span style={{ color: activeTab === 'customer' ? '#60a5fa' : '#34d399' }}>
              ● Connected
            </span>
          </div>

          {activeTab === 'customer' ? (
            <div>
              <div
                style={{
                  padding: '12px',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '16px',
                }}
              >
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  Nearby in 1.5 km
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Apex Electronics &amp; Accessories
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  Station Road, 600m away • Open until 9:00 PM
                </div>
              </div>

              <div
                style={{
                  padding: '16px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Multi-Plug Surge Protector</span>
                  <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>In Stock</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                  6 Universal Sockets, 2-meter heavy-duty cable. Verified by store owner 4 mins ago.
                </p>
                <button
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%', pointerEvents: 'none' }}
                >
                  📍 Navigate to Store (Directions)
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div
                style={{
                  padding: '12px',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '16px',
                }}
              >
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '4px' }}>
                  ● Live Inquiries (1 Active)
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Customer asking: &ldquo;Do you have 65W Laptop Type-C Chargers?&rdquo;
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Customer distance: ~450m • Query expires in 26 mins
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  className="btn btn-sm"
                  style={{
                    background: 'var(--accent-emerald)',
                    color: '#ffffff',
                    fontWeight: 700,
                    pointerEvents: 'none',
                  }}
                >
                  ✓ Available
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  style={{
                    color: 'var(--text-muted)',
                    pointerEvents: 'none',
                  }}
                >
                  ✕ Not Available
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
