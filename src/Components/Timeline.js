import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Contact.css";
import {
  FaGraduationCap,
  FaBriefcase,
  FaSchool,
  FaStar,
  FaPencilRuler,
  FaBuilding,
  FaSearchengin,
} from "react-icons/fa"; // Import Font Awesome icons

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <h1 className="text-warning text-center mb-5">TIMELINE</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(35 74 105 ", color: "#fff" }}
            date="2023-dec"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              B.SC. (HONS) IN INFORMATION TECHNOLOGY
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              official Graduation
            </h4>
            {/* <p>Technologies- python</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(35 74 105 ", color: "#fff" }}
            date="2022 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSearchengin />}
          >
            <h3 className="vertical-timeline-element-title">
              SYSTEM FOR SOFTWARE DEVELOPMENT TEAM COMPOSITION PREDICTION
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              (LEVEL 04 RESEARCH PROJECT)
            </h4>
            <p>Technologies- python</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(37 112 117 ", color: "#fff" }}
            date="2022 Jan -july"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              TRAINEE SOFTWARE ENGINEER
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              CLOUD EIGHT TECHNOLOGIES
            </h4>
            <p>
              Technologies- Next.Js, Boostrap, Node.js
              <br />
              Experienced- Git
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(39 103 90)", color: "#fff" }}
            date="2020 - 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBuilding />}
          >
            <h3 className="vertical-timeline-element-title">E-SCHOOL SYSTEM</h3>
            <h4 className="vertical-timeline-element-subtitle">
              (LEVEL 02 SOFTWARE PROJECT)
            </h4>
            <p>Technologies- Angular, NodeJS, MongoDB, Ionic</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(59 95 37)", color: "#fff" }}
            date="2019 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              KWH ENERGY SERVER
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              project leader(LEVEL 01 HARDWARE PROJECT)
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(111 105 35)", color: "#fff" }}
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaPencilRuler />}
          >
            <h3 className="vertical-timeline-element-title">
              G.C.E. (A /L) PHYSICAL SCIENCE STREAM
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              H/ Rajapaksa Central College - Weeraketiya
            </h4>
            <p>Physics - A, Com. mathematics-A, Chemistry - C</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(129 72 24)", color: "#fff" }}
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaPencilRuler />}
          >
            <h3 className="vertical-timeline-element-title">
              G.C.E (O/L) EXAMINATION
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              H/ Rajapaksa Central College - Weeraketiya
            </h4>
            <p>6A's,B and 2C's</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    );
  }
}
