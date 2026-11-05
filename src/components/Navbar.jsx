import React, { useEffect, useState } from 'react';
import { Menu, X, FolderOpen } from 'lucide-react';
import logo from '../images/logo_issma.webp';
import { NAV_LINKS } from '../data/site';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="container flex h-16 items-center justify-between lg:h-20">
        <a href="#inicio" className="flex items-center gap-2.5 text-white" onClick={() => setOpen(false)}>
          <img src={logo} alt="" className="h-11 w-11 rounded-full ring-1 ring-white/25 lg:h-14 lg:w-14" />
          <span className="font-display text-xl font-extrabold tracking-tight">ISSMA</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-white/75 transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#materiais"
            className="hidden items-center gap-2 rounded-lg bg-gold-500 px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-gold-400 sm:inline-flex"
          >
            <FolderOpen className="h-4 w-4" />
            Ver os kits
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-white hover:bg-white/10 lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container h-[calc(100dvh-4rem)] pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col divide-y divide-white/10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg font-medium text-white/90"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#materiais" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">
            <FolderOpen className="h-5 w-5" />
            Ver os kits
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
