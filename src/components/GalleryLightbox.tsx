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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
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
          className="fixed inset-0 z-[9999] bg-black/97 flex items-center justify-center"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={20} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 md:left-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <Icon name="ChevronLeft" size={24} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 md:right-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <Icon name="ChevronRight" size={24} className="text-white" />
          </button>

          <div
            className="w-full h-full flex flex-col items-center justify-center px-14 md:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl select-none"
              draggable={false}
            />
            <div className="text-center mt-3 md:mt-4 px-4">
              <h3 className="text-base md:text-xl font-bold text-white">{images[lightboxIndex].title}</h3>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                {lightboxIndex + 1} / {images.filter(i => !i.videoUrl).length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryLightbox;
