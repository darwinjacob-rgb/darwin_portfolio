import { useState } from "react";
import BootScreen from "./components/BootScreen";
import Background from "./components/Background";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Milestones from "./components/Milestones";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}
      <Background />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Milestones />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
