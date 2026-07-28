"use client";
import MainSection from '@/components/MainSection';
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects';
import { useRef } from 'react';
import Contact from '@/components/Contact';


export default function Home() {

  const projectsRef = useRef(null);

  const scrolltoProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };


  return (
    <>
      <Navbar />
      <MainSection onRedirect={scrolltoProjects} />
      <section ref={projectsRef}>
        <Projects />
      </section>
      <Contact/>
    </>

  );
}
