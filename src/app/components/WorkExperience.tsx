import React, { useState } from "react";
import Timeline from "./Timeline";
const Fade = require("react-reveal/Fade");

const WorkExperience = () => {
  return (
    <div
      id="work"
      style={{ background: "#0b0b0d", color: "white" }}
      className="main-div"
    >
      <section className="div-2 work">
        <Fade left>
          <h1 className="mb-4 heading">Work Experience</h1>
        </Fade>
        <Timeline />
      </section>
    </div>
  );
};

export default WorkExperience;
