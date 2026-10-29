import React from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    q: 'Como acesso o curso depois da compra?',
    a: 'A compra é feita pela Hotmart. Assim que o pagamento é aprovado, você recebe no e-mail o acesso à área de membros, que funciona no celular e no computador.',
  },
  {
    q: 'Quais formas de pagamento são aceitas?',
    a: 'Cartão de crédito (inclusive parcelado), Pix e boleto, todos processados com segurança pela Hotmart.',
  },
  {
    q: 'O Gerador de Certificados serve para qualquer NR?',
    a: 'Ele foi pensado para treinamentos de Segurança do Trabalho em geral: você informa a norma, a carga horária e o conteúdo do treinamento que ministrou.',
  },
  {
    q: 'E se eu tiver dúvidas antes de comprar?',
    a: 'É só chamar no WhatsApp. Respondemos pessoalmente e ajudamos você a escolher o que faz mais sentido.',
  },
];

const Faq = () => (
  <section id="faq" className="section bg-white">
    <div className="container max-w-3xl">
      <Reveal className="text-center">
        <span className="eyebrow">Dúvidas frequentes</span>
        <h2 className="section-title mt-3">Perguntas e respostas</h2>
      </Reveal>
      <div className="mt-10 divide-y divide-black/5 rounded-2xl border border-black/5 bg-sand/60">
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
