import { useState, useEffect, useCallback } from 'react';
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

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
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
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={32} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold">{image.title}</h3>
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
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold">{image.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name="Maximize2" size={18} className="text-white" />
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
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={24} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <Icon name="ChevronLeft" size={28} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <Icon name="ChevronRight" size={28} className="text-white" />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold text-white">{images[lightboxIndex].title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
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
