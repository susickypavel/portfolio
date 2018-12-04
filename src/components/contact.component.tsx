import * as React from "react";

export default class ContactPage extends React.Component {
    renderContactSites() {
        const sites = [
            { site: "dev.to", link: "https://dev.to/thesoreon", description: "Creating posts on this awesome site!" },
            { site: "linkedin", link: "https://www.linkedin.com/in/pavel-thesoreon-susicky/", description: "My profile on linkedin, find out more about me." },
            { site: "gitlab", link: "https://gitlab.com/Thesoreon", desc: "My main git repository" },
            { site: "github", link: "https://github.com/Thesoreon", desc: "My second git repository (public projects!)"}
        ];

    }

    render() {
        return (
            <div>
                ContactPage
            </div>
        );
    }
}
