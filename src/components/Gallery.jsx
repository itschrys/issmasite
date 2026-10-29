import React, { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ImagePlus } from 'lucide-react';
import Reveal from './Reveal';
import fotoIsmael from '../images/foto_ismael.jpg';

// Coloque as fotos em src/images/galeria/ — elas aparecem aqui automaticamente.
const galleryModules = import.meta.glob('../images/galeria/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
});

const photos = Object.values(galleryModules);
const items = photos.length ? photos : [fotoIsmael];
const PLACEHOLDERS = Math.max(0, 6 - items.length);

const Gallery = () => {
  const [active, setActive] = useState(null);

  const close = () => setActive(null);
  const step = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    []
  );

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, step]);

  return (
    <section id="galeria" className="section bg-sand">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Galeria</span>
          <h2 className="section-title mt-3">Treinamentos e bastidores</h2>
          <p className="mt-4 text-lg text-ink/65">
            Registros de turmas, treinamentos em campo e do dia a dia do ISSMA.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {items.map((src, i) => (
            <Reveal key={src} delay={i * 0.03}>
              <button
                onClick={() => setActive(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-white"
                aria-label={`Abrir foto ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Foto ISSMA ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" />
              </button>
            </Reveal>
          ))}
          {Array.from({ length: PLACEHOLDERS }).map((_, i) => (
            <div
              key={`ph-${i}`}
              className="grid aspect-square place-items-center rounded-2xl border-2 border-dashed border-brand-900/15 text-ink/35"
            >
              <div className="flex flex-col items-center gap-2 text-xs sm:text-sm">
                <ImagePlus className="h-6 w-6" />
                Em breve
              </div>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={close} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Fechar">
            <X className="h-6 w-6" />
          </button>
          {items.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6" aria-label="Anterior">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6" aria-label="Próxima">
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          <img
            src={items[active]}
            alt={`Foto ISSMA ${active + 1}`}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
