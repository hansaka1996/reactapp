import React, { Component } from "react";
import "./Skills.css";
import SkillBar from "react-skillbars";
import { Fade ,Slide } from "react-awesome-reveal";

const skills = [
  { type: "Html5", level: 100, color: { bar: "#2980b9" } },
  { type: "CSS3", level: 85 },
  { type: "Javascript", level: 75 },
  { type: "MSSQL", level: 85 },
  { type: "Java", level: 65 },
  { type: "React", level: 80 },
  { type: "NoSQL", level: 0 },
];

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

export default class Skills extends Component {
  render() {
    return (
      <div
      // class="container"
      >
        <div class="row" style={{ maxWidth: "1915px" }}>
          <div class="col headcol container reveal fade-left">
            <h1 className="heading text-warning">EDUCATION</h1>
            <p className="paratxt card border-warning bg-transparent text-light mx-120 mt-20 pb-20">
              <br />
              {/* <Fade cascade damping={0.5}> </Fade> */}
              <Slide>
                <p>
                  B.SC. (HONS) IN INFORMATION TECHNOLOGY
                  <br />
                  Faculty of Information Technology, University of Moratuwa
                  <br />
                  2018 - 2023 | GPA 3.01
                </p>
               
                <p>
                  G.C.E. (A /L) PHYSICAL SCIENCE STREAM (2017)
                  <br />
                  H/ Rajapaksa Central College Weeraketiya
                  <br />
                  Physics - A, Com. mathematics-A, Chemistry - C
                </p>
                
                
                <p>
                  G.C.E (O/L) EXAMINATION (2012)
                  <br />
                  H/ Rajapaksa Central College -Weeraketiya <br />
                  6A's,B and 2C's
                </p>
                </Slide>
            </p>
          </div>
          <div class="col headcol container reveal fade-right">
            <h1 className="heading text-warning">SKILLS</h1>
            <div className="skillcontiner">
              <SkillBar
                skills={skills}
                height={30}
                animationDelay={500}
                animationDuration={1000}
                offset={`25px`}
                animationThreshold={0.1}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
