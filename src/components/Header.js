import React from "react";
import editImage from "../images/edit.jpg";
import ResumeDownload from "./ResumeDownload";

function Header() {
    return (
        <header className="w3-container w3-center header" id="home">
            <h1 className="w3-xxlarge">Hari Ramachandra Rao Pattapu</h1>
            <p className="w3-xlarge">Full Stack Developer.</p>
            <img src={editImage} className="w3-image w3-hide-large w3-hide-small w3-round photo-image-medium w3-animate-zoom" alt="edit.jpg"></img>
            <img src={editImage} className="w3-image w3-hide-large w3-hide-medium w3-round photo-image-small w3-animate-zoom" alt="edit.jpg"></img>
            <ResumeDownload />
        </header>
    );
}

export default Header;
