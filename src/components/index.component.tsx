import * as React from "react";
import { Switch, Route } from "react-router";

import { HomePage } from "./homepage.component";
import Navigation from "./navigation.component";
import { LoadingScreen } from "./loading.component";
import { CanvasBackground } from "./canvas.component";
import { AboutPage } from "./about.component";
import { ProjectPage } from "../containers/projectpage.container";
import { ProjectShowPage } from "../containers/projectshow.container";

class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CanvasBackground />
                {/* <Navigation /> */}
                <Switch>
                    {/*<Route path="/contact" component={() => <div>contact</div>} />*/}
                    <Route path="/about" component={AboutPage} />
                    <Route path="/project/:name" component={ProjectShowPage}/>
                    <Route path="/projects" component={ProjectPage} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/" component={LoadingScreen} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Index;
