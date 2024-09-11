import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Project() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        swipeToSlide: true,


        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    className: "center",
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 2,
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    className: "center",
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 2,
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    className: "center",
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 1,
                    swipeToSlide: true,
                },
            },
        ],
    };

    return (
        <div className="project-background" id="project">
            <div className="project-container">
                <h2 className="w3-xlarge">Projects</h2>
                <p className="w3-opacity-min w3-medium">
                    Swipe or drag below to see a small selection of projects I've worked on.
                </p>
                <hr className="custom-hr-transparent" />
                <Slider {...settings}>
                    <div className="w3-card-4 w3-round-xlarge w3-white slider-item">
                        <h3>De Beers</h3>
                        <p>
                            E-commerce site for the World's largest diamond company built on Magento.
                        </p>
                    </div>
                    <div className="w3-card-4 w3-round-xlarge w3-white slider-item">
                        <h3>Ledmore Capital</h3>
                        <p>
                            Administering a diversified range of interests for an entrepreneurial family.
                        </p>
                    </div>
                    <div className="w3-card-4 w3-round-xlarge w3-white slider-item">
                        <h3>Another Project</h3>
                        <p>Description of another project.</p>
                    </div>
                    <div className="w3-card-4 w3-round-xlarge w3-white slider-item">
                        <h3>Yet Another Project</h3>
                        <p>Description of yet another project.</p>
                    </div>



                </Slider>

            </div>
        </div>
    );
}

export default Project;
