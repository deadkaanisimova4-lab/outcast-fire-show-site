import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: string;
  label: string;
  icon: React.ReactNode;
  duration?: number;
}

const AnimatedCounter = ({ target, label, icon, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValue = () => {
    const numericPart = parseInt(target.replace(/\D/g, ''));
    const suffix = target.replace(/[0-9]/g, '');
    
    if (isNaN(numericPart)) {
      setCount(target);
      return;
    }

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numericPart * eased);
      
      setCount(`${current}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <div ref={ref} className="group p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/40 transition-all duration-500 hover:bg-card/50">
      <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
        {count}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-primary opacity-70 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
        <span className="text-sm sm:text-base text-muted-foreground">{label}</span>
      </div>
    </div>
  );
};

export default AnimatedCounter;
