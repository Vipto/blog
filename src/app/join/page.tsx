import React from 'react';
import type { Metadata } from 'next';
import { 
  Users, 
  Code2, 
  Sparkles, 
  GraduationCap, 
  Mail, 
  Github, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Join Us & Contribute — Student Internships & Opportunities',
  description: 'Contribute to Vipto. We offer structured internship opportunities for students and engineers to gain practical experience building real-world technology.',
};

export default function JoinPage() {
  const roles = [
    {
      title: 'Software Engineering (Mobile / Full-Stack)',
      type: 'Structured Contributor / Internship',
      description: 'Work on native/hybrid mobile application clients, event dispatch pipelines, and lightweight backend services.',
      focus: ['React Native / Flutter / Modern Web', 'TypeScript & REST/WebSocket APIs', 'Geospatial indexing & caching']
    },
    {
      title: 'Product Design & User Research',
      type: 'Structured Contributor / Internship',
      description: 'Conduct field research with neighborhood shopkeepers and shoppers to evaluate usability, contrast, and tap-latency.',
      focus: ['High-contrast mobile UI design', 'Rapid user testing & feedback synthesis', 'Workflow friction reduction']
    },
    {
      title: 'Field Operations & Community Testing',
      type: 'Structured Contributor / Internship',
      description: 'Help coordinate localized alpha trials with student campuses, residential areas, and neighborhood retail clusters.',
      focus: ['Merchant onboarding feedback', 'Alpha user cohort management', 'Real-world problem discovery']
    }
  ];

  return (
    <div style={{ paddingTop: '56px', paddingBottom: '96px' }}>
      <div className="container-narrow">
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <span className="section-label">Opportunities &amp; Collaboration</span>
          <h1 style={{ marginBottom: '20px', fontSize: 'clamp(2.2rem, 3.5vw + 1rem, 3.4rem)' }}>
            Join Us &amp; Build Vipto
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            We&apos;re interested in people who enjoy building, experimenting, learning, and solving real-world problems.
          </p>
        </div>

        {/* Philosophy Callout */}
        <section style={{ marginBottom: '56px' }}>
          <div
            className="card"
            style={{
              padding: '36px',
              borderLeft: '4px solid var(--accent-primary)',
            }}
          >
            <h2 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>
              Practical Experience in Real Product Development
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '14px' }}>
              Vipto provides <strong>structured internship and contributor opportunities</strong> where students, developers, and designers can gain hands-on experience building, testing, and iterating on a real product initiative.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              We believe in honest, practical learning. You will work on real architectural challenges, conduct authentic user experiments, and see your contributions deployed in active trials.
            </p>
          </div>
        </section>

        {/* What We Look For */}
        <section style={{ marginBottom: '64px' }}>
          <div className="section-header">
            <span className="section-label">Values We Cherish</span>
            <h2 className="section-title">Who Thrives at Vipto</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            <div className="card">
              <div className="badge badge-blue" style={{ marginBottom: '12px' }}>Curiosity</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Curious Builders</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                You want to understand why problems exist and are motivated to build clean, functional solutions rather than over-engineered demos.
              </p>
            </div>

            <div className="card">
              <div className="badge badge-emerald" style={{ marginBottom: '12px' }}>Honesty</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Direct Feedback</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                You appreciate candid reflections on what works and what fails, treating every failed assumption as a valuable lesson.
              </p>
            </div>

            <div className="card">
              <div className="badge badge-amber" style={{ marginBottom: '12px' }}>Execution</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Fast Iterators</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                You prefer shipping lightweight prototypes to get real-world answers over getting stuck in endless theoretical debates.
              </p>
            </div>
          </div>
        </section>

        {/* Opportunity Tracks */}
        <section style={{ marginBottom: '64px' }}>
          <div className="section-header">
            <span className="section-label">Active Tracks</span>
            <h2 className="section-title">Areas of Contribution</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {roles.map((role) => (
              <div key={role.title} className="card">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{role.title}</h3>
                  <span className="badge badge-purple">{role.type}</span>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
                  {role.description}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  {role.focus.map((f, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 10px',
                        background: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application CTA Box */}
        <section>
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xl)',
              padding: '40px 32px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
              Interested in building with Vipto?
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 24px' }}>
              Send an email introducing yourself, your interests, and what you would like to explore or build with Vipto.
            </p>

            <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <a
                href="mailto:vipto.app@gmail.com?subject=Vipto%20Contributor%20/%20Internship%20Inquiry"
                className="btn btn-primary btn-lg"
                id="join-email-cta-btn"
              >
                <Mail size={18} />
                <span>Apply via Email (vipto.app@gmail.com)</span>
              </a>

              <a
                href="https://github.com/Vipto"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Github size={15} />
                <span>Explore Vipto on GitHub</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <p style={{ fontSize: '0.785rem', color: 'var(--text-dim)', marginTop: '24px', lineHeight: 1.5 }}>
              Note: Vipto operates as an unincorporated technology initiative. Openings reflect collaborative contributor and learning opportunities.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
