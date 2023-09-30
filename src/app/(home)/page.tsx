import variables from "../variables.module.scss";
import "../styles/styles.scss";

import Cover from "../components/Cover";
import NavbarComponent from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <div>
        <NavbarComponent />
        <Cover />
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
