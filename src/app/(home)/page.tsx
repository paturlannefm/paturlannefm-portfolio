import "../styles/styles.scss";

import Cover from "../components/Cover";
import NavbarComponent from "../components/Navbar";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Quote from "../components/Quote";

export default function Home() {
  return (
    <main>
      <div className="app">
        <NavbarComponent />
        <Cover />
        <About />
        <WorkExperience />
        <Quote />

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
