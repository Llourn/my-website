import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me from "../assets/me.jpeg";

const SplashHeader = () => {
  return (
    <section className="splash-header">
      <div className="contain">
        <img src={me} alt="" className="splash-header__image" />
        <h1 className="title">Lorne Cyr</h1>
        <h3>
          I love building things with code. Chronically curious. Future visitor
          of Japan. 🎌
        </h3>
      </div>
    </section>
  );
};

export default SplashHeader;
