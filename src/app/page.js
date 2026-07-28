"use client";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useRef } from "react";
import Contact from "@/components/Contact";

export default function Home() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

const scrollToSection = (section) => {
    if (section === "projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section>
        <Navbar onNavigate={scrollToSection} />
      </section>

      <MainSection onRedirect={() => scrollToSection("projects")} />
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      
    </>
  );
}
