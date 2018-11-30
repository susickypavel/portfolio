import { Action } from "redux";
import { IProject } from "../types";

export const ProjectReducer = (state: IProject[] | null = null, action: Action) => {
    switch (action.type) {
        default:
            const projects: IProject[] = [
                { name: "LD40", description: "My first game jam", badge: "game" },
                { name: "LD39", description: "Hello World", badge: "game" },
                { name: "Website-blocker", description: "Hello World", badge: "extension" },
                { name: "Smartab", description: "Hello World", badge: "extension" },
            ];
            return projects;
    }
};
