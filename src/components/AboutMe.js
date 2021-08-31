import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  useEffect(() => {
    document.title = "Lorne Cyr";
  }, []);

  return (
    <section className="about-me contain">
      <article className="about-me__description">
        <p>Hello world!</p>
        <p>I am a Developer in Fredericton NB, Canada.</p>
        <p>
          My development journey started in 2017, freelancing as a gameplay
          programmer while working full time as an IT remote support specialist.
          Upon completion of a contract with First Mobile Education, I made the
          decision to pivot to web development, leave the tech support field,
          and began work as a developer at the University of Fredericton.
          Initially hired as a course developer, I quickly moved to leading
          development on internal tools and applications.
        </p>
        <p>
          Outside of work I am a husband and father, who likes to play D&D, draw
          and work on my own personal projects. I'm currently building a MERN
          stack app that lets you play D&D with your friends online.
        </p>
      </article>
      <article className="about-me__links">
        <div className="about-me__link">
          <a
            href="https://www.linkedin.com/in/lornecyr/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>Linkedin</span>
          </a>
        </div>
        <div className="about-me__link">
          <a href="https://twitter.com/Llourn" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitterSquare} />
            <span>Twitter</span>
          </a>
        </div>
        <div className="about-me__link">
          <a href="https://github.com/llourn" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} />
            <span>Github</span>
          </a>
        </div>
        <div className="about-me__link">
          <a href="mailto:Lorne.s.Cyr@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
            <span>Email</span>
          </a>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
