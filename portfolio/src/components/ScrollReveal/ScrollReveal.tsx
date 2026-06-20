'use client';
// src/components/ScrollReveal/ScrollReveal.tsx
import { type ElementType, type ReactNode } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  as?: ElementType;
}

const ScrollReveal = ({ children, delay = 0, className = '', as: Tag = 'div' }: ScrollRevealProps) => {
  const ref = useScrollReveal<HTMLDivElement>();
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    <Tag ref={ref as never} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
};

export default ScrollReveal;
