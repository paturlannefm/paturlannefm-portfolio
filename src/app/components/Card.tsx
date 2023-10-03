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
    <div className="my-5">
      <div className="container card">
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
        <Image src={img} alt="image" className="img-card" priority />
        <div className="overlay"></div>
        <div className="con-text d-none d-sm-block">
          <h2>{title}</h2>
          <p>{text}</p>
          <p>{skills}</p>
        </div>
      </div>

      <div className="con-text d-block d-sm-none mt-3">
        <h2 className="card-title">{title}</h2>
        <p className="ms-2">{text}</p>
        <p className="ms-2">{skills}</p>
      </div>
    </div>
  );
};

export default CardComponent;
