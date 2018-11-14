import * as React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.PureComponent {
    render() {
        return(
            <div className="homePage">
                <Link to="/" className="profilePhoto"/>
                <h1>Pavel Sušický</h1>
                <p>Young Web developer</p>
            </div>
        );
    }
}

export default HomePage;
