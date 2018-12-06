import * as React from "react";
import styled from "styled-components";

const EmailContent = styled.p`
    background-color: #FFD700;
    padding: 16px;
    font: 24px roboto-regular;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const ContactNodeHolder = styled.div<{ color: string; }>`
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    margin: 16px 0;
    padding: 16px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const Logo = styled.img`
    width: calc(3vw + 75px);
    height: calc(3vw + 75px);
    margin-right: 16px;
    padding: 8px;
    background-color: white;
    border: 3px solid black;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const ContactDescriptionHolder = styled.div`
    & h2 {
        font: 32px roboto-black;
        margin: 0;
        text-transform: uppercase;
    }
    & p {
        font: 24px roboto-medium;
        margin: 12px 0;
    }
`;

const Headline = styled.h1`
    font: 48px roboto-black;
    color: white;
    text-align: center;
    width: 100%;
    margin: 16px auto;
    padding: 16px;
    text-shadow: 1px 1px 8px black;
    background-color: #c70039;
`;

const ContactPageHolder = styled.div`
    padding: 16px;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    animation: showPage 1s ease-in-out 0s 1;
`;

export default class ContactPage extends React.PureComponent {
    renderContactSites() {
        const colorsPallete = ["#E18172", "#9569BC", "#5AD9F1"];
        const sites = [
            { backColor: colorsPallete[0], site: "dev.to", link: "https://dev.to/thesoreon", description: "Creating posts on this awesome site!", imgPath: "dev.svg" },
            { backColor: colorsPallete[1], site: "linkedin", link: "https://www.linkedin.com/in/pavel-thesoreon-susicky/", description: "My profile on linkedin, find out more about me.", imgPath: "linkedin.svg" },
            { backColor: colorsPallete[2], site: "gitlab", link: "https://gitlab.com/Thesoreon", description: "My main git repository", imgPath: "gitlab.svg" },
            { backColor: colorsPallete[2], site: "github", link: "https://github.com/Thesoreon", description: "My second git repository (public projects!)", imgPath: "github.svg" }
        ];
        return sites.map((siteNode) => {
            const { link, site, description, imgPath, backColor} = siteNode;
            return (
                <ContactNodeHolder key={site} color={backColor}>
                    <a href={link}>
                        <Logo src={require(`../assets/images/socialmedia/${imgPath}`)} alt={`${link}_logo`}/>
                    </a>
                    <ContactDescriptionHolder>
                        <h2>{site}</h2>
                        <p>{description}</p>
                    </ContactDescriptionHolder>
                </ContactNodeHolder>
            );
        });
    }

    render() {
        return (
            <ContactPageHolder>
                <Headline>CONTACT 📱</Headline>
                <div>
                    <EmailContent>You can send me an email <a href="mailto:pavels.sus@gmail.com">there</a>: <b>pavels.sus@gmail.com</b></EmailContent>
                </div>
                <div>
                    {this.renderContactSites()}
                </div>
            </ContactPageHolder>
        );
    }
}
