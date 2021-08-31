import { useState, useEffect } from "react";
import Project from "./Project";

import spaceLazorsImage from "../assets/space-lazors.png";
import slimeGameImage from "../assets/slime-game.png";
import myWebsiteImage from "../assets/my-website.png";
import recipeAppImage from "../assets/recipe-app.png";
import dndImage from "../assets/dungons-and-drageons.png";

const Projects = () => {
  useEffect(() => {
    document.title = "Lorne Cyr: Projects";
  }, []);

  const [projects] = useState([
    {
      image: dndImage,
      title: "Dungons and Drageons",
      links: ["https://github.com/Llourn/dungons-and-drageons"],
      description: (
        <p>
          During lockdown, a group of my friends and I took our Dungeon and
          Dragon adventures online. After sampling a few applications on the
          market I was inspired to build this MERN stack app to better suit our
          needs. This is still a work in progress.
        </p>
      ),
      // description: `I started building this MERN stack app when my friends and I began playing D&D online. I thought I could come up with something more suited to our needs to I got to work on this. This is still a work in progress.`,
    },
    {
      image: recipeAppImage,
      title: "Recipe App",
      links: [
        "https://github.com/Llourn/recipe-app-client",
        "https://github.com/Llourn/recipe-app-server",
      ],
      description: (
        <p>
          This recipe app was created to simplify meal planning for our family
          with an app that stores recipes and generates grocery lists based on
          our weekly meal plan.
        </p>
      ),
    },
    {
      image: myWebsiteImage,
      title: "LorneCyr.com",
      links: ["https://github.com/Llourn/my-website"],
      description: (
        <p>It's this website, built with React to showcase me. 😁</p>
      ),
    },
    {
      image: slimeGameImage,
      title: "Slime Game",
      links: [
        "https://github.com/Llourn/slime-game",
        "https://youtu.be/pJo47Cxs6d4",
      ],
      description: (
        <p>
          Slime game is just a fun little idea I wanted to bring to life,
          inspired by movies like The Blob. Built using C# and the Unity3D game
          engine. I also did some 3D modelling for this project.
        </p>
      ),
    },
    {
      image: spaceLazorsImage,
      title: "Space Lazors 🛸",
      links: [
        "https://github.com/Llourn/Endless-Space",
        "https://www.youtube.com/watch?v=lt8lp_f4Izk",
        "https://forlorne-games.itch.io/space-lazors",
      ],
      description: (
        <p>
          Space Lazors is a never ending shoot'em up game made for mobile. Built
          using C# and the Unity3D game engine.
        </p>
      ),
    },
  ]);

  return (
    <section className="projects">
      <div className="splash-header splash-header--projects">
        <div className="contain">
          <h1 className="title">Projects</h1>
          <h3>A curated list of my projects.</h3>
        </div>
      </div>
      {projects &&
        (projects.length > 0 ? (
          projects.map((project, index) => (
            <Project
              key={`id${index}`}
              image={project.image}
              title={project.title}
              links={project.links}
              description={project.description}
            />
          ))
        ) : (
          <p>No projects here.</p>
        ))}
    </section>
  );
};

export default Projects;
