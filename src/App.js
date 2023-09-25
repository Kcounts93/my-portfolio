import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
