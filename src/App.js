import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Timeline from "./Components/Timeline";
import Contact from "./Components/Contact"

class App extends Component {
  render() {
    return (
     <div
        className="app"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 50, 75, 0.96), rgba(64, 27, 31, .80))`
        }}
      >


        <Navbar />
        <div >
          <div id="section1" style={{ height:"860px"}}><Home/></div>
          <div id="section2" style={{ height:"765px"}}><Skills/></div>
          <div id="section3" style={{ height:"805px"}}><Project/></div>
          <div id="section4" style={{ height:"2000px"}}><Timeline/></div>
          <div id="section5" style={{ height:"960px"}}><Contact/></div>
         </div>
      </div>
    );
  }
}

export default App;