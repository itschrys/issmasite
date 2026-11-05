import React from 'react';
import { Flame } from 'lucide-react';

const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Bloco de preço com desconto em destaque. Configure os valores em src/data/site.js
const PriceTag = ({ de, por }) => {
  if (!por) return null;

  const off = de > por ? Math.round((1 - por / de) * 100) : 0;

  return (
    <div className="relative rounded-2xl border border-hazard/40 bg-gradient-to-br from-hazard/10 to-transparent px-4 pb-4 pt-6 text-center">
      {off > 0 && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="absolute inset-0 animate-ping rounded-full bg-hazard/50 [animation-duration:2s]" />
          <span className="relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-hazard px-4 py-1.5 font-display text-sm font-extrabold uppercase text-ink shadow-lg shadow-hazard/30">
            <Flame className="h-4 w-4" />
            {off}% OFF
          </span>
        </span>
      )}

      {off > 0 && (
        <p className="text-sm text-white/60">
          de <span className="line-through decoration-red-400 decoration-2">{brl(de)}</span> por apenas
        </p>
      )}
      <p className="mt-1 font-display text-4xl font-extrabold tracking-tight text-white">{brl(por)}</p>
    </div>
  );
};

export default PriceTag;
