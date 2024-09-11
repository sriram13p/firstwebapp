import React from "react";
import { FaGraduationCap } from "react-icons/fa"; 
import { educationData } from "../data/educationData";


function Education() {


    const cards = educationData.map(item => {
        return (
            <div className="w3-padding">
            <div className="w3-leftbar w3-theme-border w3-card-4 w3-border-light-blue w3-round education-item w3-white">
                    <div className="education-icon w3-margin-left ">
                        <FaGraduationCap /> {/* React Icons graduation cap icon */}
                    </div>
                    <div className="w3-padding">
                    <h4 className="w3-small">{item.startYear} - { item.endYear}</h4>
                    <h2 className="w3-large">{ item.course}</h2>
                    <h3 className="w3-medium">{ item.institution}</h3>
                    </div>
                </div>
                </div>
        )
    })

    return (
        <div className="education-background" id="education">
            <div className="w3-margin-left education-container">
                <h2 className="w3-xlarge">Education</h2>
                {cards}
            </div>
        </div>
    );
}
export default Education;
