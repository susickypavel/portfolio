import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { initializeStore } from "./store";
import "./style/main.scss";
import Index from "./components/index.component";

ReactDOM.render(
<Provider store={initializeStore()}>
   <BrowserRouter>
        <Index />
   </BrowserRouter>
</Provider>, document.getElementById("REACT_MOUNT"));
