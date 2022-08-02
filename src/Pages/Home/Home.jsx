import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";
import Photo from "../../images/img.jpg";
import { init } from "ityped";
import "./home.scss";

function Home() {
  const animatedTextReft = useRef();

  useEffect(() => {
    init(animatedTextReft.current, {
      showCursor: true,
      strings: ["Frontend React Developer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);
  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__left">
          <h1 className="home__title">Gulshan Osmonalieva </h1>

          <p className="home__subtitle">
            <span ref={animatedTextReft}></span>
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur assumenda, omnis corrupti non odit pariatur culpa ipsam
            eius harum quidem ex eveniet nostrum eaque debitis, fuga tempore
            magnam recusandae dolores. Minus quam dicta et voluptas quisquam
            fugit omnis magnam temporibus accusamus ullam laboriosam, sunt
            recusandae autem, tenetur assumenda reprehenderit ipsa.
          </p>
          <ul className="home__links">
            <li>
              <a href="https://fb.com" target="blank" rel="noopener noreferrer">
                <FaFacebook className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="home__icon" />
              </a>
            </li>
          </ul>
          <Link to="/contact" className="home__cta">
            Hire Me
          </Link>
        </div>
        <div className="home__right">
          <img src={Photo} alt="GO" />
        </div>
      </div>
    </section>
  );
}

export default Home;
