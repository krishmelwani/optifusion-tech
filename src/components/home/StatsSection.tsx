import React, { useState, useEffect, useRef } from 'react';
import { Globe, Heart, Award, Zap } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }: { end: string | number, duration?: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(null);

  // Extract numeric value from end prop (handles strings like "50+" or "100%")
  const numericEnd = parseInt(end.toString().replace(/[^\d]/g, '')) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setCount(numericEnd);
      setHasAnimated(true);
      return;
    }

    setHasAnimated(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (numericEnd - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericEnd, duration, hasAnimated]);

  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Globe },
    { number: '25+', label: 'Happy Clients', icon: Heart },
    { number: '3+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Success Rate', icon: Zap }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Decorative blur elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            // Parse the number and suffix/prefix
            const hasPlus = stat.number.includes('+');
            const hasPercent = stat.number.includes('%');
            const suffix = hasPlus ? '+' : hasPercent ? '%' : '';
            
            return (
              <div 
                key={index} 
                className="text-center text-white transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-sm mb-4 transition-all duration-300 hover:bg-white/30 hover:scale-110">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold mb-2 tabular-nums">
                  <AnimatedCounter 
                    end={stat.number}
                    duration={2500 + (index * 200)} // Stagger animation timing
                    suffix={suffix}
                  />
                </div>
                
                <div className="text-white/90 font-medium transition-colors duration-300 hover:text-white">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;