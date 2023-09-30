import variables from "../variables.module.scss";
import "../styles/styles.scss";

import Cover from "../components/Cover";
import NavbarComponent from "../components/Navbar";
import About from "../components/About";

export default function Home() {
  return (
    <main>
      <div>
        <NavbarComponent />
        <Cover />
        <About />
        {/*
      <Navbar/>
      <Cover/>
      <About/>
      <WorkExperience/>
      <Projects/>
      <Contact/>
      */}
      </div>
    </main>
  );
}
