import * as React from "react";
import { Switch, Route } from "react-router";

import HomePage from "./homepage.component";

export default class extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={HomePage} />
            </Switch>
        );
    }
}
