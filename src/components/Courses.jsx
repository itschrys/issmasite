import React from 'react';
import {
  HardHat, Container, Zap, Leaf, HeartPulse, Flame,
  CheckCircle2, ShoppingCart, ShieldCheck, MonitorPlay, Award, Infinity as InfinityIcon,
} from 'lucide-react';
import Reveal from './Reveal';
import PriceTag from './PriceTag';
import { HOTMART_CURSO_URL, PRECO_CURSO } from '../data/site';
import { openExternal } from '../lib/links';

const Courses = () => {
  const topics = [
    { icon: HardHat, title: 'NR-35 · Trabalho em Altura', description: 'Planejamento, sistemas de proteção contra quedas e resgate.' },
    { icon: Container, title: 'NR-33 · Espaços Confinados', description: 'Reconhecimento de riscos, permissão de entrada e monitoramento.' },
    { icon: Zap, title: 'NR-10 · Segurança em Eletricidade', description: 'Medidas de controle, bloqueio e trabalho seguro em instalações.' },
    { icon: Leaf, title: 'Gestão Ambiental', description: 'Práticas sustentáveis e gestão de resíduos industriais.' },
    { icon: HeartPulse, title: 'Primeiros Socorros', description: 'Atendimento emergencial e suporte básico de vida.' },
    { icon: Flame, title: 'Prevenção e Combate a Incêndio', description: 'Classes de fogo, extintores e plano de emergência.' },
  ];

  const audience = [
    'Técnicos e estudantes de Segurança do Trabalho',
    'Profissionais que precisam se atualizar nas NRs',
    'Empresas que querem capacitar suas equipes',
    'Quem quer ministrar treinamentos com mais confiança',
  ];

  const perks = [
    { icon: MonitorPlay, label: 'Aulas online, no seu ritmo' },
    { icon: Award, label: 'Certificado de conclusão' },
    { icon: InfinityIcon, label: 'Acesso pela plataforma Hotmart' },
    { icon: ShieldCheck, label: 'Compra segura com garantia' },
  ];

  return (
    <section id="cursos" className="section bg-white">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Cursos ISSMA</span>
          <h2 className="section-title mt-3">
            Conteúdo direto ao ponto, do jeito que se aplica <span className="text-brand-500">em campo</span>.
          </h2>
          <p className="mt-5 text-lg text-ink/65">
            Aprenda as principais Normas Regulamentadoras com exemplos reais, materiais de apoio e uma didática pensada
            para quem precisa colocar o conhecimento em prática.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.04} className="group card p-6 transition hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500 text-white transition group-hover:bg-brand-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 overflow-hidden rounded-3xl bg-ink text-white">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
            <div>
              <span className="eyebrow-dark">Para quem é</span>
              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Feito para você que quer crescer na área de SST
              </h3>
              <ul className="mt-6 space-y-3">
                {audience.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {perks.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-white/85">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <PriceTag price={PRECO_CURSO} />
              </div>
              <div className="mt-6">
                <button onClick={() => openExternal(HOTMART_CURSO_URL)} className="btn-primary w-full py-4 text-lg">
                  <ShoppingCart className="h-5 w-5" />
                  Quero me inscrever agora
                </button>
                <p className="mt-3 text-center text-xs text-white/50">
                  Pagamento processado com segurança pela Hotmart · Cartão, Pix ou boleto
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Courses;
