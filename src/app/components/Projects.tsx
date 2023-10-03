import { Fade } from "react-awesome-reveal";
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
    </div>
  );
};

export default Projects;

const ProjectData = [
  {
    title: "La Bancaria",
    img: Pro1,
    skills: "Next.js, React.js, Typescript, Tailwind CSS",
    github: "https://github.com/paturlannefm/LaBancaria",
    text: "Developed a web app for La Bancaria, enabling members to access news, benefits, activities, and updates easily.",
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
    text: "Developed an online magazine in collaboration with ADUT Seccional La Plata, featuring articles, literature reviews, and postgraduate thesis summaries in Engineering, Technology, and Education.",
    external: "https://adut.utn.edu.ar/saber/",
  },
  {
    title: "Dollar Calculator",
    img: Pro4,
    skills: "React, Next.js, Tailwind, Typescript",
    github: "https://github.com/paturlannefm/dollar-calculator",
    text: "Developed a currency converter with advanced market trend analysis features, including weekly, monthly, and annual historical charts for various types of dollars (blue, stock exchange, official) to help users calculate USD values from ARS amounts.",
    external: "https://roshan0708.github.io/restaurant_management_system/",
  },
];
