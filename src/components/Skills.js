import React from "react";
import { skillsData } from "../data/skillData";
import { skillsImage } from "../utils/skillsImage";
import Marquee from "react-fast-marquee";
import ResumeDownload from "./ResumeDownload";


function Skills() {



    return (
        <div className="skill-background" id="skills">
            <div className="skill-container">
                <h2 className="w3-xlarge">Skills</h2>
                <div className="marquee-wrapper">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} >
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>

            </div>
            <div className="w3-container w3-center">
                <ResumeDownload />
            </div>
        </div>



    )

}

export default Skills;