import * as React from "react";
import { Link } from "react-router-dom";

import SlideShow from "./slideshow.component";

class HomePage extends React.PureComponent {

    renderLinks() {
        const links = [
            { name: "devto", hyperlink: "https://dev.to/thesoreon", imgPath: "dev.svg" },
            { name: "github", hyperlink: "https://github.com/Thesoreon", imgPath: "github.svg" },
            { name: "gitlab", hyperlink: "https://gitlab.com/Thesoreon", imgPath: "gitlab.svg" },
            { name: "linkedin", hyperlink: "https://www.linkedin.com/in/pavel-thesoreon-susicky/", imgPath: "linkedin.svg" }
        ];

        return links.map((link) => {
            const { name, hyperlink, imgPath } = link;
            return (
                <a key={`link-${name}`} href={hyperlink} className="socialMediaLink">
                    <img src={require(`../assets/images/socialmedia/${imgPath}`)} alt={name} width="50" height="50" />
                </a>
            );
        });
    }

    render() {
        return(
            <div className="homePage">
                <Link to="/" className="profilePhoto"/>
                <h1>Pavel Sušický <img src={require("../assets/images/czechflag.svg")} alt="czech_flag" width="45" height="30"/></h1>

                <p>- Young <strong>WEB</strong> developer </p>

                <SlideShow />

                <div className="socialLinks">
                    {this.renderLinks()}
                </div>
            </div>
        );
    }
}

export default HomePage;
