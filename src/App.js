import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import LogoMarquee from "./components/LogoMarquee";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HorizontalScroll from "./components/HorizontalScroll";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <LogoMarquee />
      <About />
      <HorizontalScroll />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
