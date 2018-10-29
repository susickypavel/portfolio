import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as promise from "redux-promise";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers";

export const initializeStore = () => {
    const enhancers = [
        applyMiddleware(thunk),
        applyMiddleware(promise)
    ];

    const store = createStore(rootReducer, composeWithDevTools(...enhancers));

    return store;
};
