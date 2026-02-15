import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Testimonial {
  name: string;
  event: string;
  rating: number;
  text: string;
  photo?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const goNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setDirection('left');
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount);
  if (visibleTestimonials.length < visibleCount) {
    visibleTestimonials.push(...testimonials.slice(0, visibleCount - visibleTestimonials.length));
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="grid gap-6 md:gap-8 transition-all duration-700 ease-out"
          style={{
            gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
          }}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <Card
              key={`${currentIndex}-${index}`}
              className="bg-gradient-to-br from-card via-card to-card/50 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 overflow-hidden group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {testimonial.photo && (
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={testimonial.photo}
                    alt={`Отзыв о файер-шоу OUTCAST - ${testimonial.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-1 bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className="text-secondary fill-secondary"
                      />
                    ))}
                  </div>
                </div>
              )}

              <CardHeader className="relative pb-3">
                <div>
                  <CardTitle className="text-lg font-bold">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-xs text-primary/80 font-medium flex items-center gap-1 mt-1">
                    <Icon name="Flame" size={12} className="animate-flicker" />
                    {testimonial.event}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="relative pt-0">
                <div className="flex items-start gap-3">
                  <Icon name="Quote" size={28} className="text-primary/30 flex-shrink-0 -mt-1" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t border-primary/10 relative">
                <a
                  href="https://vk.com/topic-203229964_47521361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:text-accent transition-colors flex items-center gap-1 font-medium group/link"
                >
                  Еще отзывы в VK
                  <Icon name="ArrowRight" size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <button
        onClick={goPrev}
        className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm border border-primary/30 hover:border-primary rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
      >
        <Icon name="ChevronLeft" size={24} className="text-primary" />
      </button>

      <button
        onClick={goNext}
        className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm border border-primary/30 hover:border-primary rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
      >
        <Icon name="ChevronRight" size={24} className="text-primary" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? 'w-8 bg-primary'
                : 'w-2 bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
