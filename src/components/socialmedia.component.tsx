import * as React from "react";
import styled from "styled-components";

const SocialMediaHolder = styled.div`
    text-align: center;
    & a {
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

const SocialMediaHeader = styled.h3`
    font: 36px roboto-thin;
    text-shadow: 2px 2px 1px gray;
`;

interface IProps {
    showHeader: boolean;
}

export class SocialMedia extends React.PureComponent<IProps> {
    static defaultProps: Partial<IProps> = {
        showHeader: false
    };

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
        return (
            <SocialMediaHolder>
                {this.props.showHeader ? <SocialMediaHeader>Check out my socials!</SocialMediaHeader> : null}
                {this.renderLinks()}
            </SocialMediaHolder>
        );
    }
}
