import { useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects] = useState([
    {
      image: "http://placekitten.com/g/200/300",
      title: "Dungons and Drageons",
      links: ["https://github.com/Llourn/dungons-and-drageons"],
      description: `I started building this MERN stack app when my friends and I began playing D&D online. I thought I could come up with something more suited to our needs to I got to work on this. This is still a work in progress.`,
    },
    {
      image: "http://placekitten.com/g/400/300",
      title: "Recipe App",
      links: [
        "https://github.com/Llourn/recipe-app-client",
        "https://github.com/Llourn/recipe-app-server",
      ],
      description:
        "This recipe app was done for practice and because I want a recipe app that stores recipes and generates grocery lists based on a weekly meal plan. This project is still a work in progress.",
    },
    {
      image: "http://placekitten.com/g/400/600",
      title: "LorneCyr.com",
      links: ["http://placekitten.com/g/400/600"],
      description: "This is all about kittens! Yay! 🐱",
    },
    {
      image: "http://placekitten.com/g/200/300",
      title: "Kittens!",
      links: ["http://placekitten.com/g/200/300"],
      description: "This is all about kittens! Yay! 🐱",
    },
  ]);

  return (
    <section className="projects">
      <div className="splash-header splash-header--projects">
        <div className="contain">
          <h1 className="title">Projects</h1>
          <h3>I MADE THESE!</h3>
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
