import React from 'react';
import logo from '../images/logo_issma.webp';
import { NAV_LINKS } from '../data/site';

const Footer = () => (
  <footer className="border-t border-white/10 bg-ink py-10 text-white">
    <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
      <div className="flex flex-col items-center gap-3 md:flex-row">
        <img src={logo} alt="Logotipo da ISSMA" loading="lazy" className="h-16 w-16 rounded-full ring-1 ring-white/25" />
        <div>
          <p className="text-sm text-white/70">Instruções em Segurança, Saúde e Meio Ambiente</p>
          <p className="mt-1 text-sm text-white/50">ISSMA é de Salvador — Bahia.</p>
        </div>
      </div>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-white">{l.label}</a>
          </li>
        ))}
      </ul>
      <div className="text-sm text-white/40">
        <p>© {new Date().getFullYear()} ISSMA. Todos os direitos reservados.</p>
        <a href="/privacidade.html" className="mt-1 inline-block underline-offset-2 hover:text-white hover:underline">
          Política de Privacidade
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
