import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { ProjectReducer } from "./projects.reducer";
import { IProject } from "../types";

export interface ReduxState {
    projects: IProject[];
}

export const rootReducer = combineReducers({
    form: formReducer,
    projects: ProjectReducer
});
