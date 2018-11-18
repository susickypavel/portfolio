import * as React from "react";
import styled from "styled-components";

// #625D73
// #7695B2

const HomePageHolder = styled.div`
    height: 100%;
`;

const Boundary = styled.div`
    border: 12px solid transparent;
`;

const Header = styled.div`

`;

const HeadLine = styled.h1`
    font: 120px roboto-black;
    background-color: #7695B2;
    color: white;
    border: 1px solid gray;
    margin: 0px;
    padding: 16px;
    width: fit-content;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    text-shadow: 1px 1px 8px black;
`;

const Description = styled.p`
    font: 36px roboto-medium;
    width: fit-content;
    border: 1px solid gray;
    padding: 16px;
    margin: 0;
    color: white;
    background-color: #625D73;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    text-shadow: 1px 1px 8px black;
`;

const SocialLinks = styled.div`
    border: 1px solid gray;
    width: fit-content;
    padding: 16px;
    background-color: lightgray;
    text-shadow: 1px 1px 8px black;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

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
                <a key={`link-${name}`} href={hyperlink}>
                    <img src={require(`../assets/images/socialmedia/${imgPath}`)} alt={name} width="50" height="50" />
                </a>
            );
        });
    }

    render() {
        return(
            <HomePageHolder>
                <Boundary>
                    <Header>
                        <HeadLine>Pavel Sušický</HeadLine>
                    </Header>
                </Boundary>
                <Boundary>
                    <Description>
                        - Young <strong>WEB</strong> developer from <img src={require("../assets/images/czechflag.svg")} alt="czech_flag" width="45" height="30"/>
                    </Description>
                </Boundary>

                <Boundary>
                    <SocialLinks>
                        {this.renderLinks()}
                    </SocialLinks>
                </Boundary>
            </HomePageHolder>
        );
    }
}

export default HomePage;
