import { useEffect, useRef, useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function App() {
  const [activeLink, setActiveLink] = useState("projects");
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRefs = {
    projects: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = Object.keys(sectionRefs) as Array<keyof typeof sectionRefs>;

    for (let i = 0; i < sectionIds.length; i++) {
      const sectionId = sectionIds[i];
      const sectionRef = sectionRefs[sectionId];
      if (sectionRef.current) {
        const top = sectionRef.current.offsetTop;
        const bottom = top + sectionRef.current.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveLink(sectionId);
        }
      }
    }
  }, [scrollPosition, sectionRefs]);

  return (
    <SimpleBar className="App">
      <div className="layout">
        <div className="fixed">
          <Hero onSetActiveLink={handleSetActiveLink} activeLink={activeLink} />
        </div>
        <div className="scroll">
          <Projects sectionRef={sectionRefs.projects} />
          <About sectionRef={sectionRefs.about} />
          <Contact sectionRef={sectionRefs.contact} />
        </div>
      </div>
      {/* <Modal /> */}
    </SimpleBar>
  );
}

export default App;