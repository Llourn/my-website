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

  const professional = [
    "Typescript",
    "Javascript",
    "SASS",
    "CSS",
    "BEM",
    "HTML",
    "jQuery",
    "SQL",
    "C#",
    "Git",
    "Azure Devops",
  ];
  const recreational = [
    "React.js",
    "Next.js",
    "Firebase Auth",
    "Firebase Firestore",
    "Firebase Hosting",
    "Google Maps",
  ];

  return (
    <section className="about-me contain">
      <article className="about-me__description">
        <p>Hello!</p>
        <p>
          My name is Lorne, and I'm a self taught developer. I appreciate
          motivation, but prefer discipline when it comes to learning and
          building projects. My career in development started in gameplay
          programming, building games/applications for several studios
          throughout the maritimes. I've since pivoted to web development
          building online courses and internal applications/tools for the
          University of Fredericton. In my spare time I like to build personal
          projects, usually related to other interests of mine. I also value
          work/life balance and know when to step away from the computer and
          recharge.
        </p>
        <p className="about-me__description__title">
          Technologies I've used{" "}
          <span className="about-me__description__skills--professional">
            professionally
          </span>{" "}
          and{" "}
          <span className="about-me__description__skills--recreational">
            recreationally
          </span>
          :
        </p>
        <div className="about-me__description__skills">
          {professional.map((skill) => (
            <p className="about-me__description__skills--professional">
              {skill}
            </p>
          ))}
          {recreational.map((skill) => (
            <p className="about-me__description__skills--recreational">
              {skill}
            </p>
          ))}
        </div>
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
