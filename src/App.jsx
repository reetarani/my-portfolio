
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import WhyChooseMe from "./sections/WhyChooseMe/WhyChooseMe";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <WhyChooseMe />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
