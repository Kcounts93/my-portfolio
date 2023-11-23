import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import LogoMarquee from "./components/LogoMarquee";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <LogoMarquee />
      <About />
      <Skills />
      <Qualifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
