import React from "react";

function About() {
    return (
        <div className="about-background" id="about">
            <div className="w3-margin-left about-container">
                <h2 className="w3-xlarge">About me</h2>
                <hr className="custom-hr-transparent" />
                <h3 className="w3-large">
                    I enjoy working closely with design teams to faithfully translate their designs right down to the last pixel. Daily, you'll find me using modern frontend technologies that bring the creative process to life just as designers intended them to be.
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
