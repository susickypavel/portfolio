import * as React from "react";
import styled from "styled-components";
import {SocialMedia} from "./socialmedia.component";

const AboutPageHolder = styled.div`
    text-align: center;
    background-color: #F1F4F2;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 8px 0;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const Article = styled.div`
    background-color: ${(props) => props.color};
    width: 100%;
    max-width: 800px;
    padding: 8px;
    margin: 0 auto;
    & h2 {
        margin: 0;
        font: 48px roboto-black;
        padding: 8px;
        background-color: #c70039;
        color: white;
        text-shadow: 1px 1px 8px black;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    & p {
        margin: 0;
        padding: 32px 8px;
        text-align: justify;
        font: 36px roboto-regular;
        line-height: 46px;
        @media all and (max-width: 800px) {
            text-align: center;
        }
    }
`;

const ProfilePhoto = styled.div`
    margin: 0 auto 8px auto;
    width: 64vw;
    max-width: 500px;
    height: 64vw;
    max-height: 500px;
    border: 4px solid #c70039;
    background-image: url(${require("../assets/images/profile.png")});
    background-position: center center;
    background-size: cover;
    border-radius: 100%;
`;

const SocialMediaHeader = styled.h3`
    font: 36px roboto-thin;
    text-shadow: 2px 2px 1px gray;
`;

export default class AboutPage extends React.Component {
    render() {
        return (
            <AboutPageHolder>
                <ProfilePhoto />
                <Article color="#5AD9F180">
                    <h2>About me 👦</h2>
                    <p>
                        Hi, as you already found out i'm <strong>Pavel Sušický</strong>. Young student from <strong>Czech republic</strong> interested in
                        modern technologies, mainly in development and more specific in <strong>WEB development</strong>. I'm walking around
                        programming since fourteen, but i did similar things when i was much younger. I'm very purposeful and
                        wants to make everything perfect.
                    </p>
                </Article>
                <Article color="#9569BC80">
                    <h2>Stuff i use right now 💻</h2>
                    <p><strong>React.js</strong></p>
                    <p>Redux.js</p>
                    <p>Typescript</p>
                    <p>Webpack</p>
                    <p>SASS & Styled components</p>
                </Article>
                <SocialMediaHeader>Check out my socials!</SocialMediaHeader>
                <SocialMedia/>
            </AboutPageHolder>
        );
    }
}
