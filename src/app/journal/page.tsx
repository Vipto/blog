import React from 'react';
import type { Metadata } from 'next';
import { articles } from '@/data/articles';
import { categories } from '@/data/categories';
import JournalFilter from '@/components/JournalFilter';

export const metadata: Metadata = {
  title: 'Vipto Journal — Ideas, Experiments & Engineering Notes',
  description: 'Ideas, experiments, engineering notes, and lessons from building Vipto — an initiative making everyday product discovery simpler.',
};

export default function JournalPage() {
  return (
    <div style={{ paddingTop: '56px', paddingBottom: '96px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
          <span className="section-label">Official Publication &amp; Notes</span>
          <h1 style={{ marginBottom: '16px', fontSize: 'clamp(2.2rem, 3.5vw + 1rem, 3.4rem)' }}>
            Vipto Journal
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Ideas, experiments, engineering notes, and lessons from building Vipto.
          </p>
        </div>

        {/* Filter & Grid */}
        <JournalFilter articles={articles} categories={categories} />
      </div>
    </div>
  );
}
