import variables from "../variables.module.scss";
import "../styles/styles.scss";

import Cover from "../components/Cover";
import NavbarComponent from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <div>
        <p style={{ color: variables.primaryColor }}>My portfolio</p>
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
