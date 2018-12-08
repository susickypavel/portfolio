import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationHolder = styled.nav`
    width: 100%;
    top: 0;
    padding: 16px;
    text-align: right;
    & ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        & li {
            display: inline-block;
            & a {
                font: 18px roboto-black;
                padding: 16px;
                text-decoration: none;
                color: black;
                opacity: 0.6;
                &:hover {
                    opacity: 1;
                }
                transition: opacity .2s linear;
            }
        }
    }
`;

export default class Navigation extends React.PureComponent {
    renderLinks() {
        const linksList = [
            { path: "/home", name: "HOME" },
            { path: "/about", name: "ABOUT" },
            { path: "/projects", name: "PROJECT" },
            { path: "/contact", name: "CONTACT" }
        ];

        return linksList.map((link) => {
            const { path, name } = link;

            return (
                <li key={path}>
                    <NavLink to={path} activeClassName="activeLink">
                        <span>{name}</span>
                    </NavLink>
                </li>
            );
        });
    }

    render() {
        return (
            <NavigationHolder>
                <ul>{this.renderLinks()}</ul>
            </NavigationHolder>
        );
    }
}
