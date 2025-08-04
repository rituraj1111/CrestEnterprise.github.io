import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { preloadCriticalResources, measurePerformance } from './utils/performance'

// Preload critical resources
preloadCriticalResources();

// Measure performance
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const metrics = measurePerformance();
      if (metrics && process.env.NODE_ENV === 'development') {
        console.log('Performance metrics:', metrics);
      }
    }, 0);
  });
}

createRoot(document.getElementById("root")!).render(<App />);
