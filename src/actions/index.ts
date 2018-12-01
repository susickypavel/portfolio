import {GET_PROJECT_WITH_NAME} from "./types";

export const getProjectWithName = (name: string) => {
    return {
        type: GET_PROJECT_WITH_NAME,
        payload: name
    };
};
