import { useState, useEffect, useCallback, useRef } from 'react';
import Icon from '@/components/ui/icon';

interface GalleryImage {
  url: string;
  title: string;
  videoUrl?: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
}

const GalleryLightbox = ({ images }: GalleryLightboxProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isDragging = useRef(false);

  const photoImages = images.filter(i => !i.videoUrl);

  const openLightbox = (index: number) => {
    if (!images[index].videoUrl) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    let next = (lightboxIndex + 1) % images.length;
    while (images[next].videoUrl && next !== lightboxIndex) {
      next = (next + 1) % images.length;
    }
    setLightboxIndex(next);
  }, [lightboxIndex, images]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    let prev = (lightboxIndex - 1 + images.length) % images.length;
    while (images[prev].videoUrl && prev !== lightboxIndex) {
      prev = (prev - 1 + images.length) % images.length;
    }
    setLightboxIndex(prev);
  }, [lightboxIndex, images]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = parseInt(document.body.style.top || '0') * -1;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }
    return () => {
      const scrollY = parseInt(document.body.style.top || '0') * -1;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [lightboxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (dx > 10 || dy > 10) isDragging.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleOverlayClick = () => {
    if (!isDragging.current) closeLightbox();
  };

  const photoIndex = lightboxIndex !== null
    ? photoImages.findIndex(img => img.url === images[lightboxIndex].url) + 1
    : 0;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-500 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            {image.videoUrl ? (
              <a
                href={image.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={image.url}
                  alt={`Огненное шоу Челябинск OUTCAST - ${image.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover gallery-image transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-sm md:text-xl font-bold leading-tight">{image.title}</h3>
                </div>
              </a>
            ) : (
              <>
                <img
                  src={image.url}
                  alt={`Файер-шоу Челябинск - ${image.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover gallery-image transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                    <h3 className="text-sm md:text-xl font-bold leading-tight">{image.title}</h3>
                  </div>
                  <div className="absolute top-2 right-2 md:top-4 md:right-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name="Maximize2" size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center cursor-zoom-out"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Кнопка закрытия */}
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors touch-manipulation"
          >
            <Icon name="X" size={24} className="text-white" />
          </button>

          {/* Стрелка влево */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 md:left-6 z-20 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors touch-manipulation"
          >
            <Icon name="ChevronLeft" size={28} className="text-white" />
          </button>

          {/* Стрелка вправо */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 md:right-6 z-20 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors touch-manipulation"
          >
            <Icon name="ChevronRight" size={28} className="text-white" />
          </button>

          {/* Картинка — клик по картинке НЕ закрывает */}
          <div
            className="flex flex-col items-center cursor-default"
            style={{ maxWidth: 'calc(100vw - 140px)', maxHeight: 'calc(100vh - 80px)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].title}
              style={{ maxHeight: 'calc(100vh - 140px)', maxWidth: '100%' }}
              className="w-auto h-auto object-contain rounded-lg shadow-2xl select-none"
              draggable={false}
            />
            <div className="text-center mt-3 px-4">
              <h3 className="text-base md:text-xl font-bold text-white">{images[lightboxIndex].title}</h3>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                {photoIndex} / {photoImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryLightbox;