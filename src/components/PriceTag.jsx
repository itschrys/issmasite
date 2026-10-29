import React from 'react';
import { Flame } from 'lucide-react';

const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Bloco de preço com desconto em destaque. Configure os valores em src/data/site.js
const PriceTag = ({ price }) => {
  if (!price?.ativo || !price.por) return null;

  const off = price.de > price.por ? Math.round((1 - price.por / price.de) * 100) : 0;
  const installment = price.parcelas > 1 ? price.por / price.parcelas : null;

  return (
    <div className="relative rounded-2xl border border-hazard/40 bg-gradient-to-br from-hazard/10 to-transparent p-5 text-center sm:p-6">
      {off > 0 && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="absolute inset-0 animate-ping rounded-full bg-hazard/50 [animation-duration:2s]" />
          <span className="relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-hazard px-4 py-1.5 font-display text-sm font-extrabold uppercase text-ink shadow-lg shadow-hazard/30">
            <Flame className="h-4 w-4" />
            {off}% OFF
          </span>
        </span>
      )}

      {price.selo && (
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-hazard">{price.selo}</p>
      )}

      {off > 0 && (
        <p className="mt-2 text-sm text-white/55">
          de <span className="line-through decoration-red-400 decoration-2">{brl(price.de)}</span> por apenas
        </p>
      )}

      {installment ? (
        <>
          <p className="mt-1 font-display text-white">
            <span className="align-top text-lg font-bold">{price.parcelas}x </span>
            <span className="text-5xl font-extrabold tracking-tight sm:text-6xl">{brl(installment)}</span>
          </p>
          <p className="mt-1 text-sm text-white/70">
            ou <strong className="text-white">{brl(price.por)}</strong> à vista
          </p>
        </>
      ) : (
        <p className="mt-1 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">{brl(price.por)}</p>
      )}

      {off > 0 && (
        <p className="mt-3 inline-block rounded-md bg-brand-500/20 px-3 py-1 text-sm font-semibold text-brand-300">
          Você economiza {brl(price.de - price.por)}
        </p>
      )}
    </div>
  );
};

export default PriceTag;
