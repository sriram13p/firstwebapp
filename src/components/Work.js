import React from "react";
import { workData } from "../data/workData";
import { FaBriefcase } from "react-icons/fa"; 


 const cards = workData.map(item => {
        return (
            <div className="w3-padding">
            <div className="w3-leftbar w3-theme-border w3-border-red w3-card-4 w3-round work-item w3-white">
                    <div className="work-icon w3-margin-left ">
                        <FaBriefcase /> {/* React Icons graduation cap icon */}
                    </div>
                    <div className="w3-padding">
                    <h4 className="w3-small">{item.startYear} - { item.endYear}</h4>
                    <h2 className="w3-large">{ item.company}</h2>
                    <h3 className="w3-medium">{ item.position}</h3>
                    </div>
                </div>
                </div>
        )
    })

function Work() {
    return (
        <div className="work-background" id="work">
            <div className="w3-margin-left work-container">
                <h2 className="w3-xlarge">Work</h2>
                {cards}
            </div>
        </div>
    );
    
}

export default Work;