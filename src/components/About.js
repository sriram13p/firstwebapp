import React from "react";

function About() {
    return (
        <div className="about-background" id="about">
            <div className="w3-margin-left about-container">
                <h2 className="w3-xlarge">About me</h2>
                <hr className="custom-hr-transparent" />
                <h3 className="w3-large">
                    I am a Full Stack Developer skilled in Java, Spring Boot, and React. My work involves building and improving software applications by combining front-end and back-end technologies. I focus on creating reliable, scalable solutions that provide a great user experience.
                </h3>
                <hr className="custom-hr-transparent" />
                <h4 className="w3-margin-top w3-large">Technical</h4>
                <p className="w3-opacity-min w3-medium">
                    Right now you can find me hacking away primarily with Vue, Nuxt, Storyblok, Prismic, GraphQL, Netlify, React and in general anything JavaScript / TypeScript, HTML, and CSS-related.
                </p>
                <hr className="custom-hr-transparent" />
                <h4 className="w3-large">Personal</h4>
                <p className="w3-opacity-min w3-medium">
                    I grew up in Nottingham and moved to London many years ago. Being half Italian and half British, I try to visit family in Sicily whenever I can to practice (struggling) with the basics of the language.
                </p>
                <hr className="custom-hr-transparent" />
                <p className="w3-large">Let's work together!</p>
            </div>
        </div>
    );
}

export default About;
