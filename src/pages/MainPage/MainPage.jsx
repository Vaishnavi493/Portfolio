import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skill';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';

function MainPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white hide-scrollbar">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <Projects />

        <Contact />
      </main>
    </div>
  );
}

export default MainPage;