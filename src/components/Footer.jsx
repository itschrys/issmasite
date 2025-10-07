import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-white/10 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" />
            <span className="font-bold text-lg">ISSMA⛑️</span>
          </div>
          
          <p className="text-gray-400 text-center">
            © 2025 ISSMA. Todos os direitos reservados.
          </p>
          
          <p className="text-gray-500 text-sm">
            Segurança, Saúde e Meio Ambiente
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;