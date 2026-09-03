import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '@/data/articles';
import { Clock, ArrowLeft, ArrowRight, Share2, User, BookOpen, Check } from 'lucide-react';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found | Vipto Journal',
    };
  }

  return {
    title: `${article.title} — Vipto Journal`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const currentIndex = articles.findIndex((a) => a.slug === params.slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '96px' }}>
      <div className="container-narrow">
        {/* Back Link */}
        <div style={{ marginBottom: '32px' }}>
          <Link
            href="/journal"
            className="btn btn-subtle btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <ArrowLeft size={16} />
            <span>Back to Vipto Journal</span>
          </Link>
        </div>

        {/* Article Header */}
        <header style={{ marginBottom: '40px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
              flexWrap: 'wrap',
            }}
          >
            <span className="badge badge-blue">{article.category}</span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Clock size={14} />
              <span>{article.readingTime}</span>
            </div>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {article.publishedAt}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 3.5vw + 1rem, 3.2rem)',
              lineHeight: 1.2,
              marginBottom: '20px',
              fontWeight: 800,
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '32px',
            }}
          >
            {article.description}
          </p>

          {/* Author Block */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '20px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  fontWeight: 700,
                }}
              >
                <User size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {article.author.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {article.author.role}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Table of Contents if available */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 600,
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <BookOpen size={14} />
              <span>Table of Contents</span>
            </div>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {article.tableOfContents.map((item, idx) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)' }}>
                      0{idx + 1}.
                    </span>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <main style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
          {article.content.lead && (
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: 'var(--text-primary)',
                marginBottom: '28px',
                fontWeight: 500,
              }}
            >
              {article.content.lead}
            </p>
          )}

          {article.content.sections.map((section, sIdx) => (
            <section
              key={sIdx}
              id={section.id}
              style={{ marginBottom: '40px', scrollMarginTop: '100px' }}
            >
              {section.heading && (
                <h2
                  style={{
                    fontSize: '1.6rem',
                    color: 'var(--text-primary)',
                    marginBottom: '16px',
                    marginTop: '32px',
                    fontWeight: 700,
                  }}
                >
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} style={{ marginBottom: '18px' }}>
                  {p}
                </p>
              ))}

              {section.callout && (
                <div className={`callout-box callout-${section.callout.type}`}>
                  {section.callout.title && (
                    <strong
                      style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                        marginBottom: '6px',
                        fontFamily: 'var(--font-mono)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {section.callout.title}
                    </strong>
                  )}
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {section.callout.text}
                  </p>
                </div>
              )}

              {section.codeSnippet && (
                <div style={{ margin: '24px 0' }}>
                  <pre>
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </main>

        {/* Article Footer & Navigation */}
        <footer
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '36px',
            marginTop: '48px',
          }}
        >
          <div
            style={{
              padding: '24px',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '40px',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
              About Vipto Journal
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Vipto is an unincorporated technology product initiative. The Vipto Journal documents our technical hypotheses, real-world field experiments, UX iterations, and learnings as we build technology to make everyday product discovery simpler.
            </p>
          </div>

          {/* Next / Previous Article Navigation */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {prevArticle ? (
              <Link
                href={`/journal/${prevArticle.slug}`}
                className="card card-hover"
                style={{ textDecoration: 'none', padding: '20px' }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  ← PREVIOUS ARTICLE
                </span>
                <h4 style={{ fontSize: '1rem', marginTop: '6px', color: 'var(--text-primary)' }}>
                  {prevArticle.title}
                </h4>
              </Link>
            ) : <div />}

            {nextArticle && (
              <Link
                href={`/journal/${nextArticle.slug}`}
                className="card card-hover"
                style={{ textDecoration: 'none', padding: '20px', textAlign: 'right' }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  NEXT ARTICLE →
                </span>
                <h4 style={{ fontSize: '1rem', marginTop: '6px', color: 'var(--text-primary)' }}>
                  {nextArticle.title}
                </h4>
              </Link>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}
