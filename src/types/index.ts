export type ArticleCategory = 
  | 'Product'
  | 'Engineering'
  | 'Design'
  | 'Experiments'
  | 'Research'
  | 'Vipto Updates'
  | 'Learnings';

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  publishedAt: string; // ISO date or formatted string
  readingTime: string;
  author: Author;
  featured?: boolean;
  tableOfContents?: { id: string; title: string }[];
  content: {
    lead?: string;
    sections: {
      heading?: string;
      id?: string;
      paragraphs: string[];
      callout?: {
        type: 'note' | 'insight' | 'principle' | 'quote';
        title?: string;
        text: string;
      };
      codeSnippet?: {
        language: string;
        code: string;
      };
      keyPoints?: string[];
    }[];
  };
}

export type UpdateStatus = 
  | 'Under Active Iteration' 
  | 'Early Development' 
  | 'Currently Experimenting' 
  | 'Tested & Refined';

export interface ProductUpdate {
  id: string;
  period: string; // e.g. "September 2026"
  headline: string;
  status: UpdateStatus;
  summary: string;
  explored: string[];
  changed: string[];
  learned: string[];
  tag: string;
}

export interface FocusArea {
  title: string;
  description: string;
  iconName: string;
  bullets: string[];
  details: string;
}
