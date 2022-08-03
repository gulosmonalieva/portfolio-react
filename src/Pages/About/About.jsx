import React from "react";
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";
import Portfolio from "../../images/home.png";
import Portfolio2 from "../../images/Portfolio.png";
import "./about.scss";

function About() {
  const h3Variants = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const workVariants = {
    visible: (idx) => ({
      opacity: 1,
      transition: {
        delay: idx * 0.6,
      },
    }),
    hidden: { opacity: 0 },
  };

  const works = [
    {
      title: "Wesite-Easy Tutorials",
      imgUrl: Portfolio,
      href: "https://codepen.io/gulshann/pen/LYOqBLv ",
    },
    {
      title: "Flip 3D-card",
      imgUrl: Portfolio2,
      href: "https://gulosmonalieva.github.io/card/",
    },
  ];
  return (
    <section className="about">
      <div className="container">
        <div className="about__intro">
          <motion.h1
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: 3,
              repeatDelay: 1,
              repeatType: "reverse",
              type: "twin", //just,spring,inertia,twin
            }}
          >
            Hello I am Gulshan Osmonalieva
          </motion.h1>
          <p>Frontend React Developer</p>
        </div>
        <div className="about__skills">
          <motion.h3
            variants={h3Variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1 }}
          >
            My Skills
          </motion.h3>
          <ul>
            <motion.li
              whileHover={{
                scale: 1.5,
                backgroundColor: "blue",
              }}
            >
              <FaHtml5 />
              HTML
            </motion.li>
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
            {works.map((work, idx) => (
              <motion.li
                variants={workVariants}
                initial={"hidden"}
                animate={"visible"}
                key={idx}
                custom={idx}
              >
                <h4>{work.title}</h4>
                <a href={work.href} target="_blank">
                  <img src={work.imgUrl} alt="fff" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
