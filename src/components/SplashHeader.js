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
          Full blown headphone-wearing, heavy-metal-listening,
          mechanical-keyboard-using, coffee-drinking Developer.{" "}
          <FontAwesomeIcon icon={faMugHot} />
        </h3>
      </div>
    </section>
  );
};

export default SplashHeader;
