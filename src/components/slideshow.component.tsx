import * as React from "react";
import Slider from "react-slick";

export default React.memo((props: any) => {
    const settings = {
        dots: true,
        infinite: true,
        lazyload: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 680, settings: { arrows: false } }
        ]
    };

    return (
        <div className="slideshow">
            <Slider {...settings} className="slider">
                <div className="sliderItem">
                    <h3>Adding posts on dev.to!</h3>
                    <p>You might heard about awesome blog site called dev.to? There is a lot of stuff you can learn from, talk about, find collaborators and more!</p>
                    <p>Link to my profile on dev.to <a href="#">Link</a></p>
                </div>
                <div className="sliderItem">
                    <h3>Creating projects!</h3>
                    <p>I'm learning and best thing to do for learning is making projects, so there are some :)</p>
                    <p>Links to my project site: <a href="#">Link</a></p>
                </div>
            </Slider>
        </div>
    );
});
