const Project = ({ image, title, links, description }) => {
  return (
    <section className="project contain">
      <div className="project__image">
        <img src={image} alt="" />
      </div>
      <div className="project__details">
        <h1>{title}</h1>
        {links &&
          (links.length > 0 ? (
            links.map((link, index) => (
              <div>
                <a
                  key={`id${index}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="project__details__link"
                >
                  {link}
                </a>
                <br />
              </div>
            ))
          ) : (
            <p>No links here.</p>
          ))}

        <p>{description}</p>
      </div>
    </section>
  );
};

export default Project;
