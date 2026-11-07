import React from 'react';

interface HeaderProps {
  isAuthenticated?: boolean;
  username?: string;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isAuthenticated = false,
  username,
  onLogout,
}) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-slate-100 px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-3">
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          secpass
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
          v1.0
        </span>
      </div>

      <nav className="flex items-center space-x-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-300">
              Olá, <strong className="text-slate-100">{username || 'Usuário'}</strong>
            </span>
            <button
              onClick={onLogout}
              className="text-sm bg-rose-600/20 text-rose-400 border border-rose-500/30 hover:bg-rose-600/30 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Sair
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <a
              href="#login"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Entrar
            </a>
            <a
              href="#register"
              className="text-sm bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-medium px-4 py-1.5 rounded-lg transition-colors"
            >
              Criar Conta
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
