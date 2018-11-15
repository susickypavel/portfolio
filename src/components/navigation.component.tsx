import * as React from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends React.Component {

    shouldComponentUpdate(prevProps: any) {
        if (this.props != prevProps) {
            return true;
        }

        return false;
    }

    renderLinks() {
        const linksList = [
            { path: "/", name: "HOME", exact: true },
            { path: "/about", name: "ABOUT" },
            { path: "/projects", name: "PROJECT" },
            { path: "/contact", name: "CONTACT" }
        ];

        return linksList.map((link) => {
            const { path, name } = link;

            return (
                <li key={path}>
                    <NavLink exact={link.exact} to={path} activeClassName="activeLink">
                        <span>{name}</span>
                    </NavLink>
                </li>
            );
        });
    }

    render() {
        return (
            <nav className="navigation">
                <ul>{this.renderLinks()}</ul>
            </nav>
        );
    }
}
