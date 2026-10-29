import React from 'react';
import {
  FileBadge, Users, Clock3, FileDown, ListChecks, PenLine, ShoppingCart, CheckCircle2,
} from 'lucide-react';
import Reveal from './Reveal';
import PriceTag from './PriceTag';
import { HOTMART_GERADOR_URL, PRECO_GERADOR } from '../data/site';
import { openExternal } from '../lib/links';

const CertificateGenerator = () => {
  const features = [
    { icon: Users, title: 'Vários participantes de uma vez', description: 'Cadastre a turma e gere todos os certificados em poucos cliques, sem digitar nome por nome.' },
    { icon: ListChecks, title: 'Conteúdo programático da NR', description: 'Inclua carga horária, conteúdo ministrado e dados do treinamento, como pedem as normas.' },
    { icon: PenLine, title: 'Instrutor e responsável técnico', description: 'Dados e assinaturas do instrutor e do responsável sempre no lugar certo.' },
    { icon: FileDown, title: 'Pronto para imprimir ou enviar', description: 'Certificados padronizados e organizados, prontos para arquivar ou entregar.' },
  ];

  const steps = [
    { n: '01', title: 'Preencha o treinamento', text: 'Informe a NR, a data, a carga horária e o instrutor.' },
    { n: '02', title: 'Adicione os participantes', text: 'Inclua a lista com os nomes da turma.' },
    { n: '03', title: 'Gere os certificados', text: 'Todos prontos e padronizados, em minutos.' },
  ];

  const gains = [
    'Economize horas de trabalho repetitivo a cada turma',
    'Evite erros de digitação em nomes, datas e cargas horárias',
    'Padronize a documentação para fiscalizações e auditorias',
    'Passe uma imagem mais profissional para clientes e empresas',
  ];

  return (
    <section id="gerador" className="section relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow-dark">
              <FileBadge className="h-4 w-4" />
              Ferramenta ISSMA
            </span>
            <h2 className="section-title mt-3">
              Gerador de Certificados de <span className="text-brand-300">Treinamentos</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Chega de montar certificado por certificado no editor de texto. O Gerador de Certificados do ISSMA foi
              criado para técnicos, instrutores e empresas que ministram treinamentos de Segurança do Trabalho e
              precisam emitir certificados corretos, padronizados e com rapidez.
            </p>

            <ul className="mt-8 space-y-3">
              {gains.map((g) => (
                <li key={g} className="flex items-start gap-3 text-white/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                  {g}
                </li>
              ))}
            </ul>

            <div className="mt-12 max-w-md">
              <PriceTag price={PRECO_GERADOR} />
            </div>

            <div className="mt-6 flex max-w-md flex-col gap-3">
              <button onClick={() => openExternal(HOTMART_GERADOR_URL)} className="btn-primary py-4 text-lg">
                <ShoppingCart className="h-5 w-5" />
                Quero o Gerador de Certificados
              </button>
            </div>
          </Reveal>

          {/* Mockup ilustrativo de certificado */}
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-brand-500/20 blur-2xl" />
            <div className="relative rotate-1 rounded-2xl bg-white p-2 text-ink shadow-2xl">
              <div className="rounded-xl border-2 border-brand-500/40 p-5 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-brand-500 font-black text-white">+</span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/50">Certificado</span>
                </div>
                <p className="mt-6 text-center font-display text-xl font-extrabold sm:text-2xl">Certificado de Treinamento</p>
                <p className="mt-3 text-center text-xs text-ink/60 sm:text-sm">Certificamos que</p>
                <p className="mt-1 text-center font-display text-lg font-bold text-brand-600">Nome do Participante</p>
                <p className="mx-auto mt-2 max-w-xs text-center text-xs text-ink/60">
                  concluiu o treinamento de NR-35 · Trabalho em Altura, com carga horária de 8 horas.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {['Instrutor', 'Responsável Técnico'].map((r) => (
                    <div key={r} className="text-center">
                      <div className="h-px bg-ink/30" />
                      <p className="mt-1 text-[10px] text-ink/50">{r}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-2 flex items-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm shadow-xl sm:-left-6">
              <Clock3 className="h-4 w-4 text-brand-300" />
              Turma inteira em minutos
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.05} className="card-dark p-6">
              <Icon className="h-6 w-6 text-brand-300" />
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="text-center text-2xl font-extrabold">Como funciona</h3>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4 rounded-2xl border border-white/10 p-6">
                <span className="font-display text-3xl font-extrabold text-brand-400">{s.n}</span>
                <div>
                  <p className="font-bold">{s.title}</p>
                  <p className="mt-1 text-sm text-white/60">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

export default CertificateGenerator;
