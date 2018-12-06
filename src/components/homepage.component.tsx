import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {SocialMedia} from "./socialmedia.component";

const HomePageHolder = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Boundary = styled.div`
    border: 12px solid transparent;
    width: 100%;
`;

const Header = styled.div`
    color: white;
`;

const HeadLine = styled.h1`
    text-align: center;
    font: calc(7vw + 30px) roboto-black;
    margin: 0;
    padding: 16px;
    background-color: #c70039;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    text-shadow: 1px 1px 8px black;
`;

const HighLightedLetter = styled(Link)`
    font-size: calc(8vw + 30px);
    color: #ffc305;
    text-decoration: none;
    &:hover {
        color: #ff5733;
    }
    transition: color .15s linear;
`;

export default class HomePage extends React.PureComponent {
    render() {
        return(
            <HomePageHolder>
                <Boundary>
                    <Header>
                        <HeadLine>
                            <HighLightedLetter to="/projects">P</HighLightedLetter>
                            <HighLightedLetter to="/about">A</HighLightedLetter>
                            vel Suši<HighLightedLetter to="/contact">C</HighLightedLetter>ký
                        </HeadLine>
                    </Header>
                </Boundary>

                <Boundary>
                    <SocialMedia />
                </Boundary>
            </HomePageHolder>
        );
    }
}
