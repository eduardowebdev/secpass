import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 py-6 px-6 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="flex items-center gap-2">
          <span>secpass</span> &copy; {currentYear} — Todos os direitos reservados.
        </p>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#privacy"
            className="hover:text-slate-300 transition-colors"
          >
            Privacidade
          </a>
          <a
            href="#security"
            className="hover:text-slate-300 transition-colors"
          >
            Segurança
          </a>
        </div>
      </div>
    </footer>
  );
};

