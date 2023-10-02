import React from "react";

const About = () => {
  return (
    <div
      style={{ background: "#0b0b0d", color: "white" }}
      className="main-div"
      id="about"
    >
      <section className="div-1 about">
        <h1 className="heading">About Me</h1>
        <div>
          <p className="text mt-4 mb-3">
            Hello! I&apos;m Franco, software development enthusiast, and
            competitive coder from Argentina.
          </p>
          <p className="text my-3">
            I&apos;m an Information Systems Engineer with a passion for
            designing and developing sleek and efficient web applications. My
            main goal is to build useful digital solutions that solve real-world
            problems and make an impact.
          </p>
        </div>
        <p className="text mt-3">
          Here are a few technologies that I currently work with:
        </p>
        <div className="skills-box">
          <ul className="lists">
            {["React", "Next", "Typescript", "JavaScript"].map((text) => {
              return (
                <li className="my-2 list-item" key={text}>
                  {text}
                </li>
              );
            })}
          </ul>
          <ul className="lists">
            {[
              "Styled Components",
              "SCSS",
              "Tailwind",
              "Material UI",
              "CSS",
            ].map((text) => {
              return (
                <li className="my-2 list-item" key={text}>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
