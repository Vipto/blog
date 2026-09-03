import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, ExternalLink, Mail, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transparency & Legal Governance Notice',
  description: 'Operating status, legal transparency, and official representations for the Vipto technology product initiative.',
};

export default function TransparencyPage() {
  return (
    <div style={{ paddingTop: '56px', paddingBottom: '96px' }}>
      <div className="container-narrow">
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <span className="section-label">Public Disclosure</span>
          <h1 style={{ marginBottom: '16px', fontSize: 'clamp(2.2rem, 3.5vw + 1rem, 3.4rem)' }}>
            Transparency &amp; Legal Notice
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Accurate, unambiguous public representation of Vipto&apos;s legal and organizational status.
          </p>
        </div>

        {/* Primary Operating Declaration */}
        <div
          className="card"
          style={{
            padding: '36px',
            borderLeft: '4px solid var(--accent-emerald)',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <ShieldCheck size={24} style={{ color: 'var(--accent-emerald)' }} />
            <h2 style={{ fontSize: '1.4rem' }}>Official Operating Status</h2>
          </div>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              lineHeight: 1.7,
              marginBottom: '20px',
              fontWeight: 500,
            }}
          >
            &ldquo;Vipto currently operates as an <strong>unincorporated technology product initiative</strong> and is not represented as a Private Limited Company, LLP, or other incorporated legal entity unless explicitly stated.&rdquo;
          </p>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            This website, all associated repositories, and documentation serve as the open technical journal and research publication for the initiative.
          </p>
        </div>

        {/* Explicit Boundary Guidelines */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', color: 'var(--accent-emerald)' }}>
              <CheckCircle2 size={18} />
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>What Vipto Is</h3>
            </div>
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
              <li>• An early-stage technology product initiative.</li>
              <li>• A research and engineering exploration of hyperlocal product discovery.</li>
              <li>• A learning platform providing structured project opportunities for students and builders.</li>
              <li>• A public documentation of experiments, trials, and code.</li>
            </ul>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', color: '#f87171' }}>
              <AlertCircle size={18} />
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>What Vipto Is NOT</h3>
            </div>
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
              <li>• Not &ldquo;Vipto Private Limited&rdquo; or &ldquo;Vipto Pvt. Ltd.&rdquo;</li>
              <li>• Not &ldquo;Vipto LLP&rdquo; or registered commercial corporation.</li>
              <li>• Not an investor-funded, venture-backed company.</li>
              <li>• Not an e-commerce delivery fleet or courier marketplace.</li>
            </ul>
          </div>
        </div>

        {/* Verification & Legal Documents Links */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px',
            marginBottom: '40px',
          }}
        >
          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>
            Official Legal Document
          </h3>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Our complete formal legal disclosure is maintained on GitHub under our organization repository.
          </p>
          <a
            href="https://github.com/Vipto/.github/blob/main/legal.md"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <FileText size={16} />
            <span>https://github.com/Vipto/.github/blob/main/legal.md</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Contact for Verification Queries */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px',
          }}
        >
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
            Legal &amp; Verification Inquiries
          </h3>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            For legal, verification, or governance-related queries, contact our official inbox directly:
          </p>
          <a
            href="mailto:vipto.app@gmail.com?subject=Vipto%20Legal%20/%20Verification%20Inquiry"
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Mail size={16} />
            <span>vipto.app@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
