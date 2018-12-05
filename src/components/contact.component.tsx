import * as React from "react";
import styled from "styled-components";

const Headline = styled.h1`
    font: 48px roboto-black;
    color: white;
    text-align: center;
    width: 90%;
    margin: 16px auto;
    padding: 16px;
    text-shadow: 1px 1px 8px black;
    background-color: #c70039;
`;

const ContactPageHolder = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    animation: showPage 1s ease-in-out 0s 1;
`;

export default class ContactPage extends React.Component {
    renderContactSites() {
        const sites = [
            { site: "dev.to", link: "https://dev.to/thesoreon", description: "Creating posts on this awesome site!" },
            { site: "linkedin", link: "https://www.linkedin.com/in/pavel-thesoreon-susicky/", description: "My profile on linkedin, find out more about me." },
            { site: "gitlab", link: "https://gitlab.com/Thesoreon", description: "My main git repository" },
            { site: "github", link: "https://github.com/Thesoreon", description: "My second git repository (public projects!)"}
        ];
        return sites.map((siteNode) => {
            const { link, site, description } = siteNode;
            return (
                <div key={site}>
                    <h2>{site}</h2>
                    <p>{description}</p>
                    <a href={link}>Link</a>
                </div>
            );
        });
    }

    render() {
        return (
            <ContactPageHolder>
                <Headline>CONTACT 📱</Headline>
                <div>
                    <p>You can send me an email <a href="mailto:pavels.sus@gmail.com">there</a>: pavels.sus@gmail.com</p>
                </div>
                <div>
                    {this.renderContactSites()}
                </div>
            </ContactPageHolder>
        );
    }
}
