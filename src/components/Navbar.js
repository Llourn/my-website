import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <h1>LORNE CYR</h1>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
