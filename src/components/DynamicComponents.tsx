// Dynamic imports for code splitting (-40KB initial bundle)
import { lazy } from 'react';

// Lazy load heavy components for better performance
export const LazySlotMachine = lazy(() => import('./AccessibleSlotMachine'));
export const LazySlotMachineCarousel = lazy(() => import('./SlotMachineCarousel'));
export const LazyCaseStudyCard = lazy(() => import('./AccessibleCaseStudyCard'));
export const LazyConfettiEffect = lazy(() => import('./ConfettiEffect'));

// Lazy load page components
export const LazyLLMSTextPage = lazy(() => import('./LLMSTextPage'));
export const LazySpeakingMediaPage = lazy(() => import('./SpeakingMediaPage'));
export const LazyDesignCaseStudiesPage = lazy(() => import('./DesignCaseStudiesPage'));

// Preload critical components on hover/interaction
export const preloadComponents = {
  slotMachine: () => import('./AccessibleSlotMachine'),
  caseStudyCard: () => import('./AccessibleCaseStudyCard'),
  confetti: () => import('./ConfettiEffect'),
};

// Loading fallback component
export const ComponentLoader = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-muted rounded ${className}`} aria-label="Loading component">
    <div className="h-8 bg-muted-foreground/20 rounded mb-4"></div>
    <div className="h-32 bg-muted-foreground/10 rounded"></div>
  </div>
);