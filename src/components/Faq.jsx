import React from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    q: 'Isso é um curso em vídeo?',
    a: 'Não. Os kits são materiais digitais para você usar nos seus treinamentos, na rotina de SST e nos estudos. Veja no card de cada produto o que está incluído.',
  },
  {
    q: 'Como recebo o material depois da compra?',
    a: 'A compra é feita pela Hotmart e, com o pagamento aprovado, o acesso ao material é liberado pela própria plataforma.',
  },
  {
    q: 'Os kits têm garantia?',
    a: 'Sim. A garantia de cada produto aparece no card e na página da Hotmart. Nos kits com preço informado acima, ela é de 7 dias, conforme as regras da Hotmart.',
  },
  {
    q: 'Quais formas de pagamento são aceitas?',
    a: 'As opções disponíveis e as condições de parcelamento aparecem no checkout da Hotmart antes de você concluir a compra.',
  },
  {
    q: 'Como consigo o Gerador de Certificados?',
    a: 'Fale com a ISSMA pelo WhatsApp para consultar a disponibilidade.',
  },
  {
    q: 'E se eu tiver dúvidas antes de comprar?',
    a: 'É só chamar no WhatsApp para saber qual material faz mais sentido para você.',
  },
];

const Faq = () => (
  <section id="faq" className="section bg-sand">
    <div className="container max-w-3xl">
      <Reveal className="text-center">
        <span className="eyebrow">Dúvidas frequentes</span>
        <h2 className="section-title mt-3">Perguntas e respostas</h2>
      </Reveal>
      <div className="mt-10 divide-y divide-black/5 rounded-2xl border border-black/5 bg-white">
        {faqs.map(({ q, a }) => (
          <details key={q} className="group px-5 py-4 sm:px-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 font-semibold [&::-webkit-details-marker]:hidden">
              {q}
              <ChevronDown className="h-5 w-5 shrink-0 text-brand-500 transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-ink/65">{a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
