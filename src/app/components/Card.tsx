import React from "react";
import { Container } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Image from "next/image";

interface Props {
  github: string;
  external: string;
  img: any;
  title: string;
  text: string;
  skills: string;
}

const CardComponent = ({
  github,
  external,
  img,
  title,
  text,
  skills,
}: Props) => {
  return (
    <Container>
      <div className="container card my-5">
        <ul className="ul">
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={{ fill: "black" }} />
            </a>
          </li>
          <li>
            <a href={external} target="_blank" rel="noopener noreferrer">
              <LaunchIcon style={{ fill: "black" }} />
            </a>
          </li>
        </ul>
        <Image src={img} alt="image" priority />
        <div className="overlay"></div>
        <div className="con-text">
          <h2>{title}</h2>
          <p>{text}</p>
          <p>{skills}</p>
        </div>
      </div>
    </Container>
  );
};

export default CardComponent;
