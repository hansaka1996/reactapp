import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import yourImage from "./images/me.png";
import { FaDownload, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import ExamplePdf from "./images/Hansaka Sachee Bandara.pdf";

const handleDownload = () => {
  const link = document.createElement("a");
  link.download = "Example-PDF-File";
  link.href = ExamplePdf;
  link.click();
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4 gradient-animation">
              <div className="App">
                <Typewriter
                  options={{
                    strings: [
                      "hello there",
                      "I'm Hansaka",
                      "Full Stack developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div className="col-4 gradient-animation">
              <img src={yourImage} alt="Your Image" className="image-class" />
            </div>
            <div className="col-4 ">
             <div style={{width:"410px",margin:"2px"}} >
                <p className="parastyle hovereffect">
                <FaQuoteLeft  style={{marginRight:"15px"}}/>
                  A highly enthusiastic IT student with a deep
                  interest in software engineering and a proven ability to lead,
                  seeking a software engineering position to make a meaningful
                  impact on the organization. Eager to learn, grow, and make a
                  difference in the industry.
                  <br />
                  <FaQuoteRight />
                  <br />
                  <button
                    class="btn btn-outline-info m-2"
                    onClick={handleDownload}
                  >
                    Download CV
                    <FaDownload />
                  </button>
                </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
