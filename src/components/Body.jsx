import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, ShoppingCart, MapPin, ArrowRight } from 'lucide-react';
import fotoSemFundo from '../images/foto_semfundo.png';
import logo from '../images/logo_issma.webp';

const Hero = () => {
  const badges = [
    { icon: FolderOpen, label: 'Materiais digitais' },
    { icon: ShoppingCart, label: 'Compra pela Hotmart' },
    { icon: MapPin, label: 'Salvador — Bahia' },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)]" />
      <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-gold-400/25 blur-[120px]" />

      <div className="container relative grid items-center gap-10 pt-28 lg:min-h-[100svh] lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <img
            src={logo}
            alt="Logotipo da ISSMA"
            className="mx-auto mb-6 h-24 w-24 rounded-full shadow-xl ring-2 ring-white/15 lg:mx-0"
          />

          <span className="eyebrow-dark rounded-full border border-gold-400/30 bg-gold-500/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Segurança · Saúde · Meio Ambiente
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Conhecimento de campo para <span className="text-gold-400">fortalecer a prevenção</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 sm:text-lg lg:mx-0">
            Kits, materiais técnicos e ferramentas práticas em Segurança, Saúde e Meio Ambiente para profissionais e
            empresas, com consultoria da <strong className="text-white">ISSMA</strong>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#materiais" className="btn-primary">
              <FolderOpen className="h-5 w-5" />
              Ver kits e materiais
            </a>
            <a href="#gerador" className="btn-outline-light">
              Gerador de Certificados
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-10 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
            {badges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center justify-center gap-2 lg:justify-start">
                <Icon className="h-4 w-4 shrink-0 text-gold-400" />
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
          <div className="absolute inset-x-6 bottom-0 top-16 rounded-t-[2.5rem] bg-gradient-to-b from-brand-400/50 to-brand-800/10 ring-1 ring-white/10" />
          <img
            src={fotoSemFundo}
            alt="Ismael Lins, fundador da ISSMA, com capacete de segurança"
            className="relative mx-auto w-full max-w-[26rem] object-contain drop-shadow-2xl"
            fetchpriority="high"
          />
          <div className="absolute bottom-8 left-0 hidden max-w-[15rem] rounded-xl border border-white/10 bg-ink/80 px-4 py-3 backdrop-blur sm:block">
            <p className="font-display font-bold">Ismael Lins</p>
            <p className="text-xs text-white/60">Técnico em Segurança do Trabalho e fundador da ISSMA</p>
          </div>
        </motion.div>
      </div>
      <div className="hazard-stripe relative h-2 opacity-90" />
    </section>
  );
};

export default Hero;
