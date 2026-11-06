import React, { useState } from 'react';
import { trackingEnabled, getConsent, setConsent } from '../lib/tracking';

// Aviso de cookies (LGPD). Só aparece quando há um Pixel ou Google tag configurado.
const CookieBanner = () => {
  const [visible, setVisible] = useState(() => trackingEnabled && !getConsent());
  if (!visible) return null;

  const choose = (value) => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl bg-ink p-4 text-white shadow-2xl ring-1 ring-white/15 sm:inset-x-6 sm:bottom-6 sm:flex sm:items-center sm:gap-4 sm:p-5"
    >
      <p className="text-sm leading-relaxed text-white/80">
        Usamos cookies para medir as visitas e melhorar nossos anúncios. Saiba mais na nossa{' '}
        <a href="/privacidade.html" className="font-semibold text-gold-400 underline underline-offset-2">
          Política de Privacidade
        </a>
        .
      </p>
      <div className="mt-3 flex shrink-0 gap-2 sm:mt-0">
        <button
          type="button"
          onClick={() => choose('denied')}
          className="flex-1 rounded-full px-4 py-2 text-sm font-semibold text-white/70 ring-1 ring-white/25 hover:text-white sm:flex-none"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => choose('granted')}
          className="btn-primary flex-1 px-5 py-2 text-sm sm:flex-none"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
