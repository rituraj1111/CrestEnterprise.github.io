// Performance monitoring utilities
import heroBg from '@/assets/hero-bg.webp';
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const metrics = {
      // Core Web Vitals
      fcp: 0, // First Contentful Paint
      lcp: 0, // Largest Contentful Paint
      cls: 0, // Cumulative Layout Shift
      fid: 0, // First Input Delay
      
      // Other metrics
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      ttfb: navigation.responseStart - navigation.requestStart, // Time to First Byte
    };

    // Measure FCP
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      metrics.fcp = fcpEntry.startTime;
    }

    // Observe LCP
    if ('LargestContentfulPaint' in window) {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.lcp = lastEntry.startTime;
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // Observe CLS
    if ('LayoutShift' in window) {
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        metrics.cls = clsValue;
      }).observe({ entryTypes: ['layout-shift'] });
    }

    return metrics;
  }
  return null;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof document !== 'undefined') {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = '/fonts/inter-var.woff2';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Preload hero image (LCP)
    const heroImageLink = document.createElement('link');
    heroImageLink.rel = 'preload';
    heroImageLink.as = 'image';
    heroImageLink.href = heroBg;
    heroImageLink.setAttribute('fetchpriority', 'high');
    document.head.appendChild(heroImageLink);
  }
};

// Clean up unused resources
export const optimizeMemory = () => {
  if (typeof window !== 'undefined') {
    // Clear unused images from memory
    const images = document.querySelectorAll('img[data-loaded="false"]');
    images.forEach((img) => {
      if (!isElementInViewport(img as HTMLElement)) {
        (img as HTMLImageElement).src = '';
      }
    });
  }
};

// Check if element is in viewport
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
