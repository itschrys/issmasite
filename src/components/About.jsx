import React from 'react';
import { Briefcase, ShieldCheck, FolderOpen, Target } from 'lucide-react';
import fotoIsmael from '../images/foto_ismael.jpg';
import Reveal from './Reveal';

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: 'Experiência de campo',
      description: 'Atuação em projetos de SSMA em diversos setores industriais.',
    },
    {
      icon: ShieldCheck,
      title: 'Prevenção aplicada à rotina',
      description: 'Documentação técnica, programas e ferramentas para o dia a dia de SST.',
    },
    {
      icon: FolderOpen,
      title: 'Materiais prontos para usar',
      description: 'Apresentações, planilhas e checklists para treinamentos e gestão.',
    },
    {
      icon: Target,
      title: 'Consultoria especializada',
      description: 'Orientação para profissionais e empresas, com linguagem direta.',
    },
  ];

  return (
    <section id="sobre" className="section bg-sand">
      <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl border-2 border-gold-500/50" />
          <img
            src={fotoIsmael}
            alt="Ismael Lins, Técnico em Segurança do Trabalho e fundador da ISSMA"
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-3xl bg-white object-cover object-top shadow-xl"
          />
          <div className="absolute -bottom-5 right-4 max-w-[17rem] rounded-2xl bg-ink px-5 py-4 text-white shadow-xl">
            <p className="font-display text-lg font-bold">Ismael Lins</p>
            <p className="text-sm text-gold-400">Técnico em Segurança do Trabalho e fundador da ISSMA</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Quem está por trás da ISSMA</span>
            <h2 className="section-title mt-3">
              Materiais criados por quem vive o <span className="text-brand-500">dia a dia de campo</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              A ISSMA — Instruções em Segurança, Saúde e Meio Ambiente — nasceu para apoiar profissionais e organizações
              com conhecimento técnico de qualidade. Com materiais práticos, ferramentas e consultoria personalizada, a
              missão é contribuir para ambientes de trabalho mais seguros, saudáveis e sustentáveis.
            </p>
            <p className="mt-3 font-semibold text-brand-700">ISSMA é de Salvador — Bahia.</p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.05} className="card p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
