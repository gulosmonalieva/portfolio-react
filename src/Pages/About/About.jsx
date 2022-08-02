import React from "react";
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import Portfolio from "../../images/home.png";
import Portfolio2 from "../../images/Portfolio.png";
import "./about.scss";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__intro">
          <h1>Hello I am Gulshan Osmonalieva</h1>
          <p>Frontend React Developer</p>
        </div>
        <div className="about__skills">
          <h3>My Skills</h3>
          <ul>
            <li>
              <FaHtml5 />
              HTML
            </li>
            <li>
              <FaCss3Alt />
              CSS
            </li>
            <li>
              <FaSass />
              SASS
            </li>
            <li>
              <SiJavascript />
              Javascript
            </li>
            <li>
              <FaReact />
              React
            </li>
          </ul>
        </div>
        <div className="about__portfolio">
          <h3>Lates Works</h3>
          <ul>
            <li>
              <h4>Wesite-Easy Tutorials</h4>
              <a
                href="https://codepen.io/gulshann/pen/LYOqBLv "
                target="_blank"
              >
                <img src={Portfolio} alt="fff" />
              </a>
            </li>
            <li>
              <h4>Flip 3D-card</h4>
              <a href="https://gulosmonalieva.github.io/card/" target="_blank">
                <img src={Portfolio2} alt="ggg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
