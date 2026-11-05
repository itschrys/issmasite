import React from 'react';
import {
  FileBadge, Users, FileCheck2, FileDown, ListChecks, PenLine, MessageCircle, CheckCircle2,
} from 'lucide-react';
import Reveal from './Reveal';
import logo from '../images/logo_issma.webp';
import { whatsappLink } from '../data/site';

const CertificateGenerator = () => {
  const features = [
    { icon: Users, title: 'Vários participantes', description: 'Cadastre a turma e reduza a digitação repetida nome por nome.' },
    { icon: ListChecks, title: 'Dados do treinamento', description: 'Campos para norma, data, carga horária e conteúdo ministrado.' },
    { icon: PenLine, title: 'Instrutor e responsável', description: 'Espaço para os dados do instrutor e do responsável técnico.' },
    { icon: FileDown, title: 'Modelo padronizado', description: 'Certificados com o mesmo padrão para imprimir, enviar e arquivar.' },
  ];

  const steps = [
    { n: '01', title: 'Preencha o treinamento', text: 'Informe a norma, a data, a carga horária e o instrutor.' },
    { n: '02', title: 'Adicione os participantes', text: 'Inclua a lista com os nomes da turma.' },
    { n: '03', title: 'Confira e emita', text: 'O responsável pelo treinamento confere os dados e emite os certificados.' },
  ];

  const gains = [
    'Menos trabalho repetitivo a cada turma',
    'Dados do treinamento organizados em um só lugar',
    'Documentação com aparência padronizada',
    'Mais praticidade para técnicos, instrutores e empresas',
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
              Gerador de Certificados de <span className="text-gold-400">Treinamentos</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Facilita a emissão e a padronização de certificados, com conferência dos dados pelo responsável pelo
              treinamento. Feito para quem ministra treinamentos de Segurança do Trabalho e quer ganhar tempo no
              fechamento de cada turma.
            </p>

            <ul className="mt-8 space-y-3">
              {gains.map((g) => (
                <li key={g} className="flex items-start gap-3 text-white/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety" />
                  {g}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink('Olá! Gostaria de consultar a disponibilidade do Gerador de Certificados.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 w-full py-4 text-lg sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Consultar disponibilidade
            </a>
          </Reveal>

          {/* Mockup ilustrativo de certificado */}
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-gold-500/15 blur-2xl" />
            <div className="relative rotate-1 rounded-2xl bg-white p-2 text-ink shadow-2xl">
              <div className="rounded-xl border-2 border-gold-500/60 p-5 sm:p-8">
                <div className="flex items-center justify-between">
                  <img src={logo} alt="" loading="lazy" className="h-12 w-12 rounded-full" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/50">Modelo ilustrativo</span>
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
              <FileCheck2 className="h-4 w-4 text-gold-400" />
              Emissão padronizada
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.05} className="card-dark p-6">
              <Icon className="h-6 w-6 text-gold-400" />
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
                <span className="font-display text-3xl font-extrabold text-gold-400">{s.n}</span>
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
