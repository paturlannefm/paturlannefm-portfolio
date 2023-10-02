"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Fade = require("react-reveal/Fade");

const Cover = () => {
  return (
    <div className="bg-div" id="home">
      <div className="head mx-5">
        <div className="head-div mx-auto main-div">
          <Fade top cascade>
            <section className="div-1">
              <h1 className="my-1 head-div-first-text">Hi, my name is</h1>
              <h1 className="head-div-second-text">
                Franco Martin Paturlanne.
              </h1>
              <h1 className="head-div-third-text">
                I build robust web platforms.
              </h1>
              <p className="head-div-fourth-text">
                I&apos;m a front-end developer, systems engineer and competitive
                coder based in Argentina, with keen interest and skills in
                building beautiful and eye catching websites.
              </p>
            </section>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <span className="scroll-btn">
          <a href="#home">
            <span className="mouse">
              <span></span>
            </span>
          </a>
        </span>
      </Fade>
      <div className="social-media">
        <Fade left cascade>
          <ul className="social-media-list">
            {SocialData.map((data, ind) => {
              return (
                <li key={ind}>
                  <a
                    className="social-media-list-link"
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={data.icon} className="media-icons" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default Cover;

const SocialData = [
  {
    link: "https://github.com/paturlannefm",
    icon: faGithub,
  },
  {
    link: "https://www.linkedin.com/in/franco-martin-paturlanne/",
    icon: faLinkedin,
  },
  {
    link: "https://www.instagram.com/paturlanne_f/",
    icon: faInstagram,
  },
];
