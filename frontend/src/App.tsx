import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans">
      <Header isAuthenticated={false} />

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-2">Bem-vindo ao secpass</h1>
        <p className="text-slate-400">Gerador de senhas e cofre seguro.</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
