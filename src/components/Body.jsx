import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, FileBadge, ShieldCheck, ArrowRight } from 'lucide-react';
import fotoSemFundo from '../images/foto_semfundo.png';
import { HOTMART_CURSO_URL } from '../data/site';
import { openExternal } from '../lib/links';

const Hero = () => {
  const badges = [
    { icon: ShieldCheck, label: 'Conteúdo alinhado às NRs' },
    { icon: GraduationCap, label: 'Acesso online pela Hotmart' },
    { icon: FileBadge, label: 'Certificado de conclusão' },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)]" />
      <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-brand-500/20 blur-[120px]" />

      <div className="container relative grid items-center gap-10 pt-28 lg:min-h-[100svh] lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <span className="eyebrow-dark rounded-full border border-brand-300/30 bg-brand-500/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
            Segurança · Saúde · Meio Ambiente
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Formação prática em <span className="text-brand-300">Segurança do Trabalho</span> para quem leva a profissão a sério.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 sm:text-lg lg:mx-0">
            O <strong className="text-white">ISSMA</strong> — Instruções em Segurança, Saúde e Meio Ambiente — reúne cursos
            alinhados às Normas Regulamentadoras, ferramentas para o dia a dia do técnico e consultoria especializada.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button onClick={() => openExternal(HOTMART_CURSO_URL)} className="btn-primary">
              <GraduationCap className="h-5 w-5" />
              Acessar os cursos
            </button>
            <a href="#gerador" className="btn-outline-light">
              Conhecer o Gerador de Certificados
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-10 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
            {badges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center justify-center gap-2 lg:justify-start">
                <Icon className="h-4 w-4 shrink-0 text-brand-300" />
                {label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm self-end sm:max-w-md lg:max-w-none"
        >
          <div className="absolute inset-x-6 bottom-0 top-16 rounded-t-[2.5rem] bg-gradient-to-b from-brand-500/40 to-brand-900/10 ring-1 ring-white/10" />
          <img
            src={fotoSemFundo}
            alt="Ismael Lins, instrutor do ISSMA, com capacete de segurança"
            className="relative mx-auto w-full max-w-[26rem] object-contain drop-shadow-2xl"
            fetchpriority="high"
          />
          <div className="absolute bottom-8 left-0 hidden rounded-xl border border-white/10 bg-ink/80 px-4 py-3 backdrop-blur sm:block">
            <p className="text-xs text-white/60">Instrutor</p>
            <p className="font-display font-bold">Ismael Lins</p>
          </div>
        </motion.div>
      </div>
      <div className="hazard-stripe relative h-2 opacity-90" />
    </section>
  );
};

export default Hero;
