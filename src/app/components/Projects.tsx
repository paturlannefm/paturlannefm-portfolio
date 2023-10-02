import React from "react";
const Fade = require("react-reveal/Fade");
import CardComponent from "./Card";
import Pro1 from "../../../public/img/project-1.jpg";
import Pro2 from "../../../public/img/project-2.jpg";
import Pro3 from "../../../public/img/project-3.jpg";
import Pro4 from "../../../public/img/project-4.jpg";
import Pro5 from "../../../public/img/project-5.jpg";

const Projects = () => {
  return (
    <div
      style={{ background: "#0b0b0d", color: "white" }}
      className="main-div"
      id="project"
    >
      <Fade left cascade>
        <section className="div-1">
          <h1 className="heading">Some of my recent works..</h1>
          <div>
            {ProjectData.map((data, ind) => {
              const { github, external, img, title, text, skills } = data;
              return (
                <CardComponent
                  key={ind}
                  github={github}
                  external={external}
                  img={img}
                  title={title}
                  text={text}
                  skills={skills}
                />
              );
            })}
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Projects;

const ProjectData = [
  {
    title: "La Bancaria Seccional La Plata",
    img: Pro1,
    skills: "Next.js, React.js, Typescript, Tailwind CSS",
    github: "https://github.com/paturlannefm/LaBancaria",
    text: "Developed a web application for La Bancaria, allowing its members to access news, benefits, activities, and more. Users can easily stay updated on the latest information and offerings from La Bancaria through this platform.",
    external: "https://www.bancarialaplata.com.ar/",
  },
  {
    title: "Charlie",
    img: Pro2,
    skills: "Electron.js",
    github: "https://github.com/paturlannefm/charlie-app",
    text: "Design and development of a prototype of a computer platform as a pedagogical resource for deaf and hard of hearing students.",
    external: "#",
  },
  {
    title: "T-prax",
    img: Pro3,
    skills: "React.js",
    github:
      "https://drive.google.com/file/d/1KjCxuwj_j3MAaxQCivI_yOpghfQnjNRB/view",
    text: "Developed web application designed to help individuals improve their communication skills, regain confidence, and enhance their daily interactions.",
    external:
      "https://drive.google.com/file/d/1KjCxuwj_j3MAaxQCivI_yOpghfQnjNRB/view",
  },
  {
    title: "Revista Saber Tecnológico",
    img: Pro5,
    skills: "Wordpress",
    github: "https://adut.utn.edu.ar/saber/",
    text: "Developed digital magazine aimed at disseminating original articles, literature reviews, and postgraduate thesis summaries within the fields of Engineering, Technology, and Education. This online publication, in collaboration with the Teacher Training and Professional Development Program, resides on the website of ADUT Seccional La Plata.",
    external: "https://adut.utn.edu.ar/saber/",
  },
  {
    title: "Dollar Calculator",
    img: Pro4,
    skills: "React, Next.js, Tailwind, Typescript",
    github: "https://github.com/paturlannefm/dollar-calculator",
    text: "Developed a currency conversion tool that enables users to calculate the USD value based on the entered ARS amount. What sets this application apart is its capability to analyze market trends through charts displaying weekly, monthly, and annual historical data for each type of dollar (blue, stock exchange, and official). This provides users with a comprehensive view of market evolution over time.",
    external: "https://roshan0708.github.io/restaurant_management_system/",
  },
];
