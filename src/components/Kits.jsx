import React from 'react';
import {
  CheckCircle2, ShoppingCart, MessageCircle, ShieldCheck, Flame, FileText, Presentation, Table2, ExternalLink,
} from 'lucide-react';
import Reveal from './Reveal';
import PriceTag from './PriceTag';
import { PRODUCTS, ISSMA_INDICA_URL, whatsappLink } from '../data/site';

const ProductCard = ({ product }) => {
  const { id, nome, resumo, itens, aviso, capa, url, de, por, garantiaDias } = product;
  const href = url || whatsappLink(`Olá! Gostaria de consultar a disponibilidade do ${nome}.`);

  return (
    <article id={id} className="flex h-full flex-col overflow-hidden rounded-3xl bg-ink text-white shadow-lg">
      {capa ? (
        <img
          src={capa}
          alt={`Capa do produto ${nome}`}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover object-top xl:aspect-[4/5]"
        />
      ) : (
        <div className="grid aspect-[4/3] w-full place-items-center bg-gradient-to-br from-brand-700 to-brand-950 xl:aspect-[4/5]">
          <Flame className="h-16 w-16 text-gold-500" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-extrabold leading-snug">{nome}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{resumo}</p>

        {itens.length > 0 && (
          <ul className="mt-4 space-y-2.5">
            {itens.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-safety" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {aviso && <p className="mt-4 text-[11px] leading-relaxed text-white/50">{aviso}</p>}

        <div className="mt-auto pt-8">
          <PriceTag de={de} por={por} />
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-checkout-name={url ? nome : undefined}
            data-checkout-value={url && por ? por : undefined}
            className="btn-primary mt-4 w-full text-center"
          >
            {url ? <ShoppingCart className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
            {url ? 'Quero este kit' : 'Consultar disponibilidade'}
          </a>
          {garantiaDias && (
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-white/60">
              <ShieldCheck className="h-3.5 w-3.5 text-safety" />
              Garantia de {garantiaDias} dias pela Hotmart
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

const Kits = () => {
  const uses = [
    { icon: Presentation, label: 'Apresentações para treinamentos' },
    { icon: Table2, label: 'Planilhas e checklists' },
    { icon: FileText, label: 'Modelos e materiais técnicos' },
  ];

  return (
    <section id="materiais" className="section bg-white">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Kits e materiais da ISSMA</span>
          <h2 className="section-title mt-3">
            O material que você precisa para <span className="text-brand-500">aplicar e organizar</span> a prevenção.
          </h2>
          <p className="mt-5 text-lg text-ink/65">
            Não é um curso para assistir: são materiais digitais para usar nos seus treinamentos, na sua rotina de SST
            e nos seus estudos.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {uses.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
                <Icon className="h-4 w-4" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.05} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink/50">
          Pagamento processado pela Hotmart. Confira os materiais incluídos e as condições finais no checkout.
        </p>

        <Reveal className="mt-10">
          <a
            href={ISSMA_INDICA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex flex-col items-center justify-between gap-4 p-6 text-center transition hover:border-brand-500/40 hover:shadow-md sm:flex-row sm:text-left"
          >
            <span>
              <span className="block font-display text-lg font-extrabold">ISSMA Indica</span>
              <span className="mt-1 block text-sm text-ink/65">
                Lista de indicações do Ismael no Mercado Livre. Este é um link de indicação.
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 font-semibold text-brand-600">
              Ver as indicações
              <ExternalLink className="h-4 w-4" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Kits;
