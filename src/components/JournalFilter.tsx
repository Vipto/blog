'use client';

import React, { useState, useMemo } from 'react';
import { Article, ArticleCategory } from '@/types';
import ArticleCard from './ArticleCard';
import { Search, SlidersHorizontal, BookOpen, Sparkles } from 'lucide-react';

interface JournalFilterProps {
  articles: Article[];
  categories: { name: ArticleCategory; description: string }[];
}

export default function JournalFilter({ articles, categories }: JournalFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.name.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Search and Category Control Bar */}
      <div
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px',
          marginBottom: '40px',
        }}
      >
        {/* Search Input */}
        <div
          style={{
            position: 'relative',
            marginBottom: '20px',
          }}
        >
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
            }}
          />
          <input
            type="text"
            id="journal-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, keyword, or concept..."
            style={{
              width: '100%',
              padding: '12px 16px 12px 46px',
              fontSize: '0.95rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-primary)',
              outline: 'none',
              fontFamily: 'var(--font-sans)',
              transition: 'border-color var(--transition-fast)',
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.85rem',
              }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <button
            onClick={() => setSelectedCategory('All')}
            className={`btn btn-sm ${
              selectedCategory === 'All' ? 'btn-primary' : 'btn-secondary'
            }`}
            style={{
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              padding: '6px 14px',
            }}
          >
            All Articles ({articles.length})
          </button>

          {categories.map((cat) => {
            const count = articles.filter((a) => a.category === cat.name).length;
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`btn btn-sm ${
                  isSelected ? 'btn-primary' : 'btn-secondary'
                }`}
                style={{
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  padding: '6px 14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>{cat.name}</span>
                <span
                  style={{
                    opacity: 0.7,
                    fontSize: '0.75rem',
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
        }}
      >
        <div>
          Showing <strong>{filteredArticles.length}</strong>{' '}
          {filteredArticles.length === 1 ? 'publication' : 'publications'}
          {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
        </div>
        {searchQuery && (
          <div>
            Filtered by: &ldquo;{searchQuery}&rdquo;
          </div>
        )}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredArticles.map((article, idx) => (
            <div key={article.slug} className="animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '64px 24px',
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <BookOpen size={40} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
          <h3 style={{ marginBottom: '8px' }}>No publications found</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 20px' }}>
            No articles match your current search query or category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="btn btn-secondary btn-sm"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
