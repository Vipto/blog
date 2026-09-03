import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-secondary)',
        paddingTop: '64px',
        paddingBottom: '48px',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand & Positioning Column */}
          <div style={{ maxWidth: '360px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #2563eb, #10b981)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '15px',
                }}
              >
                V
              </div>
              <span
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                }}
              >
                Vipto
              </span>
            </div>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '16px',
              }}
            >
              Building technology that makes everyday product discovery simpler.
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
              }}
            >
              Search Online. Confirm Availability. Buy Offline.
            </p>
          </div>

          {/* Site Navigation Links */}
          <div>
            <h4
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '16px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '0.9375rem',
              }}
            >
              <li>
                <Link href="/product" style={{ color: 'var(--text-secondary)' }}>
                  Product Vision
                </Link>
              </li>
              <li>
                <Link href="/journal" style={{ color: 'var(--text-secondary)' }}>
                  Vipto Journal
                </Link>
              </li>
              <li>
                <Link href="/updates" style={{ color: 'var(--text-secondary)' }}>
                  Product Updates
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: 'var(--text-secondary)' }}>
                  About Vipto
                </Link>
              </li>
              <li>
                <Link href="/join" style={{ color: 'var(--text-secondary)' }}>
                  Join Us / Contribute
                </Link>
              </li>
              <li>
                <Link href="/transparency" style={{ color: 'var(--text-secondary)' }}>
                  Transparency & Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Community */}
          <div>
            <h4
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '16px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Connect
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontSize: '0.9375rem',
              }}
            >
              <li>
                <a
                  href="https://github.com/Vipto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                  <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/vipto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:vipto.app@gmail.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Mail size={16} />
                  <span>vipto.app@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Transparency Box */}
          <div>
            <div
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                <ShieldCheck size={16} style={{ color: 'var(--accent-emerald)' }} />
                <span>Operating Disclosure</span>
              </div>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  marginBottom: '10px',
                }}
              >
                Vipto currently operates as an <strong>unincorporated technology product initiative</strong>.
              </p>
              <a
                href="https://github.com/Vipto/.github/blob/main/legal.md"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.785rem',
                  color: 'var(--accent-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  textDecoration: 'underline',
                }}
              >
                View Legal Document
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © 2026 Vipto. All rights reserved. Unincorporated technology product initiative.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/transparency" style={{ color: 'var(--text-muted)' }}>
              Transparency
            </Link>
            <a
              href="https://github.com/Vipto/.github/blob/main/legal.md"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)' }}
            >
              Legal Disclosure
            </a>
            <a href="mailto:vipto.app@gmail.com" style={{ color: 'var(--text-muted)' }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
