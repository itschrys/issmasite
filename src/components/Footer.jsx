import React from 'react';
import { NAV_LINKS } from '../data/site';

const Footer = () => (
  <footer className="border-t border-white/10 bg-ink py-10 text-white">
    <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <div className="flex items-center justify-center gap-2.5 md:justify-start">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 font-black">+</span>
          <span className="font-display text-lg font-extrabold">ISSMA</span>
        </div>
        <p className="mt-2 text-sm text-white/50">Instruções em Segurança, Saúde e Meio Ambiente</p>
      </div>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-white">{l.label}</a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-white/40">© {new Date().getFullYear()} ISSMA. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
