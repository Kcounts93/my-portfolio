import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
