import { Route, BrowserRouter as Router } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SplashHeader from "./components/SplashHeader";
import "./styles/styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <Route exact path="/">
            <SplashHeader />
            <AboutMe />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
