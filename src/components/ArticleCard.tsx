import React from 'react';
import Link from 'next/link';
import { Article } from '@/types';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Product':
        return 'badge-blue';
      case 'Engineering':
        return 'badge-emerald';
      case 'Experiments':
        return 'badge-amber';
      case 'Design':
        return 'badge-purple';
      default:
        return '';
    }
  };

  return (
    <article
      className="card card-hover"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: featured ? '36px' : '28px',
        backgroundColor: featured ? 'var(--bg-elevated)' : 'var(--bg-card)',
        borderColor: featured ? 'var(--border-medium)' : 'var(--border-subtle)',
      }}
    >
      <div>
        {/* Category & Meta Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <span className={`badge ${getCategoryBadgeClass(article.category)}`}>
            {article.category}
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Clock size={13} />
            <span>{article.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: featured ? '1.5rem' : '1.25rem',
            lineHeight: 1.3,
            marginBottom: '12px',
          }}
        >
          <Link
            href={`/journal/${article.slug}`}
            style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
            }}
          >
            {article.title}
          </Link>
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '24px',
          }}
        >
          {article.description}
        </p>
      </div>

      {/* Footer info: Author, Date, Link */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
            }}
          >
            {article.author.name}
          </div>
          <div
            style={{
              fontSize: '0.775rem',
              color: 'var(--text-muted)',
            }}
          >
            {article.publishedAt}
          </div>
        </div>

        <Link
          href={`/journal/${article.slug}`}
          className="btn btn-subtle btn-sm"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--accent-primary)',
            padding: '6px 10px',
          }}
        >
          <span>Read</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
