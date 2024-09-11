import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons

function Contact() {

    return (
        <div className="contact-background" id="contact">
            <div className="contact-container">
                <h2 className="w3-xlarge">Contact me</h2>
                <hr className="custom-hr-transparent" />
                <h4 className="w3-large">Don't be shy!</h4>
                <div className="w3-margin-right">
                    <p className="w3-opacity-min contact-container w3-medium">
                        If you have a project in mind, would like to make an inquiry, or are interested in hiring me, feel free to reach out.
                    </p>
                </div>
                <hr className="custom-hr-transparent" />

                <div className="contact-details w3-margin-right">
                    {/* Email */}
                    <div className="contact-item">
                        <a href="mailto:hariramachandrarao.p@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope className="contact-icon" />
                        </a>
                        <span>hariramachandrarao.p@gmail.com</span>
                    </div>
                    {/* Phone */}
                    <div className="contact-item">
                        <a href="tel:+18064512662">
                            <FaPhoneAlt className="contact-icon" />
                        </a>
                        <span>+1 (806) 451-2662</span>
                    </div>
                    {/* Location */}
                    <div className="contact-item">
                        <a href="https://www.google.com/maps/place/11601+Leighwood+Ct,+Glen+Allen,+VA+23060" target="_blank" rel="noopener noreferrer">
                            <FaMapMarkerAlt className="contact-icon" />
                        </a>
                        <span>11601 Leighwood Ct, Glen Allen, VA, USA - 23060</span>
                    </div>
                </div>
                
                {/* Social Icons */}
                <div className="contact-icons w3-display-container w3-right social-icon">
                    <a href="https://github.com/sriram13p" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="contact-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/haripattapu 
" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="contact-icon" />
                    </a>
                    <a href="https://www.instagram.com/sriram_13p/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="contact-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
