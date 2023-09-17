import React, { Component } from "react";
import "./project.css";
import CarouselComponent from "./CarouselComponent";
import CarouselComponent3 from "./CarouselComponent3";
import CarouselComponent2 from "./CarouselComponent2";

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

export default class Project extends Component {
  render() {
    return (
      <div>
        <h1
          className="text-warning"
          style={{
            textAlign: "center",
            color: "Highlight",
            marginBottom: "35px",
          }}
        >
          PORTFOLIO
        </h1>
        <div>
          <section style={{ minHeight: "1px" }}>
            <div class="reveal fade-bottom" style={{ textAlign: "center" }}>
              <div class="row" style={{ width: "1800px" }}>
                <div className="col-sm-4 ">
                  <div className="card    rounded border-warning bg-transparent hovereffect ">
                    
                    <CarouselComponent2 />
                    <div class="card-body text-info ">
                      <h5 class="card-title text-info ">Sample content</h5>
                      <p class="card-text text-light">
                        Some quick example text to build on the card title and
                        .
                      </p>
                      <a href="#" class="btn btn-outline-info">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 ">
                  <div class="card ounded border-warning bg-transparent hovereffect">
                    <CarouselComponent2 />
                    <div class="card-body text-info ">
                      <h5 class="card-title text-info ">Crime Reporter</h5>
                      <p class="card-text text-light">
                        a system for report the crime details to the police.
                      </p>
                      <a href="#" class="btn btn-outline-info">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 ">
                  <div class="card border-warning bg-transparent hovereffect">
                    <CarouselComponent3 />
                    <div class="card-body text-info ">
                      <h5 class="card-title text-info ">Portfolio</h5>
                      <p class="card-text text-light">
                        Some quick example text to build on the card title and
                        
                      </p>
                      <a href="#" class="btn btn-outline-info">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
