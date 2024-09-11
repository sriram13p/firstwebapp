import React from "react";

// Open and close sidebar

function Hamburger(props) {


  return (
    <nav className={` w3-sidebar w3-black w3-animate-right w3-xxlarge hamburger--navbar ${props.view ? "hamburger--view--open" : "hamburger--view--close"} `} id="mySidebar">
      <a href="#home" onClick={props.handleClick} className="w3-button w3-black w3-xxxlarge w3-display-topright hamburger--a">
        <i className="fa fa-remove"></i>
      </a>
      <div className="w3-bar-block w3-center">
        <a href="#home" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={props.handleClick}>Home</a>
        <a
          href="#portfolio"
          className="w3-bar-item w3-button w3-text-grey w3-hover-black"
          onClick={props.handleClick}
        >
          Portfolio
        </a>
        <a
          href="#about"
          className="w3-bar-item w3-button w3-text-grey w3-hover-black"
          onClick={props.handleClick}
        >
          About
        </a>
        <a
          href="#education"
          className="w3-bar-item w3-button w3-text-grey w3-hover-black"
          onClick={props.handleClick}
        >
          Education
        </a>
        <a
          href="#work"
          className="w3-bar-item w3-button w3-text-grey w3-hover-black"
          onClick={props.handleClick}
        >
          Work
        </a>
        <a
          href="#project"
          className="w3-bar-item w3-button w3-text-grey w3-hover-black"
          onClick={props.handleClick}
        >
          Projects
        </a>
        <a
          href="#skills"
          className="w3-bar-item w3-button w3-text-grey w3-hover-black"
          onClick={props.handleClick}
        >
          Skills
        </a>
        <a
          href="#contact"
          className="w3-bar-item w3-button w3-text-grey w3-hover-black"
          onClick={props.handleClick}
        >
          Contact
        </a>

      </div>
    </nav>
  );
}

export default Hamburger;
