"use client";

import { useEffect } from "react";

import "../styles/styles.scss";

import Cover from "../components/Cover";
import NavbarComponent from "../components/Navbar";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Quote from "../components/Quote";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const href = anchor.getAttribute("href");
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    });
  }, []);

  return (
    <main>
      <div className="app">
        <NavbarComponent />
        <Cover />
        <About />
        <WorkExperience />
        <Quote />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
