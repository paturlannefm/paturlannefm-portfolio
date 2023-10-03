"use client";

import { Fade } from "react-awesome-reveal";

const Quote = () => {
  return (
    <div className="quote-div">
      <div className="head mx-5">
        <div className="main-div">
          <Fade direction="up" cascade>
            <section className="div-1 quote">
              <p className="">
                “ The best way to predict the future is to create it. ”
              </p>
              <span>
                - <em>Peter Drucker</em>
              </span>
            </section>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Quote;
