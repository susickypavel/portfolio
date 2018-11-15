import * as React from "react";
import { Switch, Route } from "react-router";

import HomePage from "./homepage.component";
import Navigation from "./navigation.component";

export default class extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Switch>
                    <Route path="/about" component={() => <div>about</div>} />
                    <Route path="/contact" component={() => <div>contact</div>} />
                    <Route path="/projects" component={() => <div>work</div>} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </React.Fragment>
        );
    }
}
