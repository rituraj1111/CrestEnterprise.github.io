import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  srcSet?: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  decoding?: 'async' | 'auto' | 'sync';
  fetchPriority?: 'high' | 'low' | 'auto';
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', placeholder, srcSet, sizes, width, height, decoding = 'async', fetchPriority }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          {placeholder && (
            <span className="text-muted-foreground text-sm">{placeholder}</span>
          )}
        </div>
      )}
      <img
        ref={imgRef}
        src={isInView ? src : ''}
        srcSet={isInView ? srcSet : undefined}
        sizes={sizes}
        alt={alt}
        width={width as any}
        height={height as any}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        decoding={decoding}
        fetchPriority={fetchPriority as any}
      />
    </div>
  );
};

export default LazyImage;