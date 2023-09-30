"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

const Cover = () => {
  return (
    <div className="bg-div">
      <div className="head mx-5">
        <div className="head-div mx-auto main-div">
          <section className="div-1">
            <h1 className="my-1 head-div-first-text">Hi, my name is</h1>
            <h1 className="head-div-second-text">Franco Martin Paturlanne.</h1>
            <h1 className="head-div-third-text">I build things for the web.</h1>
            <p className="head-div-fourth-text">
              I&apos;m a front-end developer and competitive coder based in
              Argentina, with keen interest and skills in building beautiful and
              eye catching websites.
            </p>
          </section>
        </div>
      </div>
      <span className="scroll-btn">
        <a href="#">
          <span className="mouse">
            <span></span>
          </span>
        </a>
      </span>
      <div className="social-media">
        <ul className="social-media-list">
          <li>
            <a
              className="social-media-list-link"
              href="https://github.com/paturlannefm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="media-icons" />
            </a>
          </li>
          <li>
            <a
              className="social-media-list-link"
              href="https://www.linkedin.com/in/franco-martin-paturlanne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="media-icons" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cover;
