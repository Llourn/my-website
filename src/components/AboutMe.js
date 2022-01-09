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
        <p>Hello!</p>
        <p>
          My name is Lorne, and I've been working as a developer since 2017.
        </p>
        <p className="about-me__description__title">Skills:</p>
        <p>
          React, Next.js, Javascript, Typescript, jQuery, CSS, SASS, HTML, C#
        </p>
        <br />
        <p className="about-me__description__title">
          Here's a quick run down of my professional history:
        </p>
        <ul>
          <li>
            Originally started out in Enterprise IT, always had an interest in
            programming.
          </li>
          <li>
            Picked up C# and the Unity Game Engine, and learned programming
            fundamentals.
          </li>
          <li>
            Worked as a Gameplay Programmer throughout the maritimes, but
            looking for something more consistent.
          </li>
          <li>
            Pivotted to Web Development, and found a job with the University of
            Fredericton as a Web Developer.
          </li>
          <li>
            Since then, built several courses for the University of Fredericton.
            Proposed, planned, and developed internal tools and applications
            that improve development workflow.
          </li>
        </ul>
        <br />
        <p className="about-me__description__title">
          And here's a little more about me:{" "}
        </p>
        <ul>
          <li>I'm an autodidact, self-driven and love to learn. 💡</li>
          <li>
            I think the best way to learn new tech is to use it! So I build
            personal projects using tech I'm interested in. 🔨
          </li>
          <li>I like to draw for fun. 🎨</li>
          <li>
            I'm studying Japanese to prepare for the time I'm able to travel
            there. 🗾
          </li>
        </ul>

        {/* 
        <p>
          2017-2019 I worked as a gameplay programmer working on various
          projects for companies througout the maritimes.
        </p>
        <p>
          2022-Current I worked as a web developer for the University of
          Fredericton. Building course SCORM packages and developing internal
          tools and applications to improve the development process.
        </p>

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
        </p> */}
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
