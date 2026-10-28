import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Piano } from './components/Piano';
import { Contact } from './components/Contact';
import { Vinyl } from './components/Vinyl';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 font-sans antialiased">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <Hero />
        <ExperienceSection />
        <FeaturedProjects />
        <Piano />
        <Contact />
      </main>

      <Footer />
      <Vinyl />
    </div>
  );
}

export default App;