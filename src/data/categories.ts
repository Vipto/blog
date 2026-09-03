import { ArticleCategory } from '@/types';

export const categories: { name: ArticleCategory; description: string; count?: number }[] = [
  { name: 'Product', description: 'Product philosophy, UX decisions, and discovery workflows.' },
  { name: 'Engineering', description: 'Technical architecture, mobile design, and backend scalability.' },
  { name: 'Design', description: 'Design systems, interaction paradigms, and interface simplicity.' },
  { name: 'Experiments', description: 'Real-world field trials, hypotheses, and testing methodologies.' },
  { name: 'Research', description: 'Hyperlocal market dynamics, user studies, and consumer behavior.' },
  { name: 'Vipto Updates', description: 'Initiative milestones, feature iterations, and project news.' },
  { name: 'Learnings', description: 'Candid reflections on what worked, what failed, and what evolved.' }
];
