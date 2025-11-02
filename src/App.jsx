import HeroSection from './components/HeroSection';
import CharacterShowcase from './components/CharacterShowcase';
import ArcTimeline from './components/ArcTimeline';
import TechniqueQuiz from './components/TechniqueQuiz';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] [background-image:radial-gradient(1200px_600px_at_50%_-20%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_400px_at_10%_80%,rgba(236,72,153,0.15),transparent),radial-gradient(900px_500px_at_90%_80%,rgba(34,197,94,0.15),transparent)] text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="font-extrabold tracking-tight text-white">
            JJK Hub
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#characters" className="hover:text-white">Characters</a>
            <a href="#arcs" className="hover:text-white">Arcs</a>
            <a href="#quiz" className="hover:text-white">Quiz</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <CharacterShowcase />
        <ArcTimeline />
        <TechniqueQuiz />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        Built with love for the Jujutsu Kaisen community. Not affiliated with official licensors.
      </footer>
    </div>
  );
}

export default App;
