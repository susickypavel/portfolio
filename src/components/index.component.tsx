import * as React from "react";
import { Switch, Route } from "react-router";
import { LoadingScreen } from "./loading.component";
import { CanvasBackground } from "./canvas.component";
import {Spinner} from "./spinner";

const HomePage = React.lazy(() => import("./homepage.component"));
const AboutPage = React.lazy(() => import("./about.component"));
const ProjectPage = React.lazy(() => import("../containers/projectpage.container"));
const ProjectShowPage = React.lazy(() => import("../containers/projectshow.container"));
const ContactPage = React.lazy(() => import("./contact.component"));

class Index extends React.Component {
    render() {
        return (
            <React.Suspense fallback={<Spinner />}>
                <CanvasBackground />
                {/* <Navigation /> */}
                <Switch>
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/project/:name" component={ProjectShowPage}/>
                    <Route path="/projects" component={ProjectPage} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/" component={LoadingScreen} />
                </Switch>
            </React.Suspense>
        );
    }
}

export default Index;
