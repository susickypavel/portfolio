import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePageHolder = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Boundary = styled.div`
    border: 12px solid white;
    width: 100%;
`;

const Header = styled.div`
    color: white;
`;

const HeadLine = styled.h1`
    text-align: center;
    font: calc(7vw + 30px) roboto-black;
    margin: 0px;
    padding: 16px;
    background-color: #c70039;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    text-shadow: 1px 1px 8px black;
`;

const HighLightedLetter = styled(Link)`
    font-size: calc(8vw + 30px);
    color: #ffc305;
    position: relative;
    z-index: 5;
    text-decoration: none;
    &:hover {
        color: #ff5733;
    }
    transition: color .15s linear;
`;

const SocialMediaHolder = styled.div`
    text-align: center;
    & a {
        position: relative;
        z-index: 5;
        opacity: 0.8;
        & img {
            margin: 4px;
            border: 2.5px solid black;
            border-radius: 16px;
            padding: 4px;
            box-shadow: 2px 2px 0px black;
            position: relative;
            &:hover {
                top: 2px;
                left: 2px;
                box-shadow: 1px 1px 0px black;
            }
        }
    }
`;

export class HomePage extends React.PureComponent {

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
                    <img src={require(`../assets/images/socialmedia/${imgPath}`)} alt={name} width="120" height="120" />
                </a>
            );
        });
    }

    render() {
        return(
            <HomePageHolder>
                <Boundary>
                    <Header>
                        <HeadLine>
                            <HighLightedLetter to="/projects">P</HighLightedLetter>
                            <HighLightedLetter to="/about">A</HighLightedLetter>
                            vel <HighLightedLetter to="/contact">S</HighLightedLetter>ušický
                        </HeadLine>
                    </Header>
                </Boundary>

                <Boundary>
                    <SocialMediaHolder>
                        {this.renderLinks()}
                    </SocialMediaHolder>
                </Boundary>
            </HomePageHolder>
        );
    }
}
