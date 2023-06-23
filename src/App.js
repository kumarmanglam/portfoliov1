import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <article className="content-wrapper"> */}
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      {/* </article> */}
    </div>
  );
}

export default App;
