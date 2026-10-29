import React from 'react';
import { MessageCircle, Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';
import Reveal from './Reveal';
import { WHATSAPP_URL, EMAIL, PHONE_LABEL, SOCIAL } from '../data/site';

const Contact = () => {
  const socials = [
    { icon: Instagram, name: 'Instagram', href: SOCIAL.instagram },
    { icon: Linkedin, name: 'LinkedIn', href: SOCIAL.linkedin },
    { icon: Youtube, name: 'YouTube', href: SOCIAL.youtube },
  ];

  return (
    <section id="contato" className="section bg-ink text-white">
      <div className="container grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="eyebrow-dark">Contato</span>
          <h2 className="section-title mt-3">Precisa de consultoria em SSMA?</h2>
          <p className="mt-5 max-w-lg text-lg text-white/70">
            Tire suas dúvidas sobre os cursos e o Gerador de Certificados, ou solicite uma consultoria personalizada
            para a sua empresa.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full sm:w-auto">
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.1} className="space-y-3">
          <a href={`mailto:${EMAIL}`} className="card-dark flex items-center gap-4 p-5 transition hover:bg-white/[0.07]">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
              <Mail className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-white/50">E-mail</span>
              <span className="block truncate font-semibold">{EMAIL}</span>
            </span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card-dark flex items-center gap-4 p-5 transition hover:bg-white/[0.07]">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
              <Phone className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm text-white/50">Telefone / WhatsApp</span>
              <span className="block font-semibold">{PHONE_LABEL}</span>
            </span>
          </a>
          <div className="card-dark p-5">
            <p className="text-sm text-white/50">Redes sociais</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium transition hover:border-brand-300/50 hover:text-brand-300"
                >
                  <Icon className="h-4 w-4" />
                  {name}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
