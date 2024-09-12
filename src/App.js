import React from "react";
import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Work from "./components/Work";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import AnimatedCursor from "react-animated-cursor";
import IpOnLoad from "./utils/OnLoad";



function App() {
  const [viewMenu, setViewMenu] = React.useState(false);
  const [ipDetails, setIpDetails] = React.useState([]);
  const [lat, setLat] = React.useState(0);
  const [lon, setLon] = React.useState(0);

  function controlSideBar() {
    setViewMenu(viewMenu => !viewMenu)
  }

  return (
    <div>
      <IpOnLoad />
      <Navbar />
      <Hamburger view={viewMenu} handleClick={controlSideBar} />
      <div className="w3-main w3-padding page-content w3-animate-top">
        <AnimatedCursor
          innerSize={20}
          outerSize={20}
          color='199, 0, 57 '
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            {
              target: '.custom',
              options: {
                innerSize: 12,
                outerSize: 12,
                color: '255, 255, 255',
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5
              }
            }
          ]}
        />
        <span className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black menu" onClick={controlSideBar}>
          <i className="fa fa-bars"></i>
        </span>
        <Header />
        <About />
        <Education />
        <Work />
        <Project />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
