import * as React from "react";

import {AnyAction} from "redux";
import { IProject } from "../types";
import {GET_PROJECT_WITH_NAME} from "../actions/types";

interface IState {
    projects: IProject[];
    activeProject: IProject | null | undefined;
}

export const ProjectReducer = (state: IState | null = null, action: AnyAction) => {
    switch (action.type) {
        case GET_PROJECT_WITH_NAME:
            const searchedProject = state!.projects.find((project) => project.name == action.payload);
            return { projects: state!.projects, activeProject: typeof(searchedProject) == "undefined" ? null : searchedProject };
        default:
            const projects: IProject[] = [
                {
                    name: "LD40",
                    link: "https://thesoreon.itch.io/ludum-dare-40stickyplague",
                    description: (
                        <span>
                            My second game jam i have worked on. It was so much fun, made in <b>Unity Engine</b>.
                            Like in previous game jam i have used <b>C#</b> as a programming language. The theme was <b>more you have
                            worse it is</b>, so i made simple game, where you have to kill slimes with a sword as a medieval soldier, however
                            more slimes you kill they're becoming more immune to your damage and bigger waves of slimes are coming!
                        </span>),
                    badge: "game",
                    date: new Date("2017-12"),
                    thumbnail: require("../assets/images/thumbnails/ld40_thumbnail.svg")
                },
                {
                    name: "LD39",
                    link: "https://thesoreon.itch.io/ludum-dare-39roop",
                    description: (
                        <span>
                            My very first game jam i have participated. I have enjoyed it so much, it was made in <b>Unity Engine</b> and
                            i chose <b>C#</b> as a programming language. The theme for games was <b>running out of power</b>.
                            So i decided to make a game about robot, who has been sent with his comrades to enemy camp, however enemy turret shot their
                            transporter. Only the robot called ROOP (like <b>R</b>unning <b>o</b>ut <b>o</b>f <b>p</b>ower, oh wow very cool name 🤣) survived.
                            However his battery slot is somehow broken and his power is running out. Try out the game yourself to see, how it continues.
                        </span>
                    ),
                    badge: "game",
                    date: new Date("2017-8"),
                    thumbnail: require("../assets/images/thumbnails/ld39_thumbnail.svg")
                },
                {
                    name: "WEBSITE BLOCKER",
                    description: (
                        <span>
                            Extension, where you can add urls, which should be on "blacklist". Then with one click you can disable access to these pages.
                            It's pretty typical extension i have made on my own, it was made in one day as a challenge, but it works pretty nice and i use it
                            sometimes to disable social media so i can work with calm. Made in <b>React, Redux</b> and other libraries.
                        </span>
                    ),
                    badge: "extension",
                    date: new Date("2018-11"),
                    // TODO: Create thumbnail for website-blocker extension
                    thumbnail: require("../assets/images/thumbnails/blocker_thumbnail.svg")
                },
                {
                    name: "SMARTAB",
                    description: (
                        <span>
                            Extension which replace default <b>new tab</b> in browser with your bookmarks (not special i know), however
                            under the bookmarks you can have your "to do" list. Which is basically grabbed from trello via trello api, but
                            you have your todos synced in your mobile, desktop trello app, so it is cool! Made in <b>React</b> and other libraries.
                            (It's not really "smart" tab, but the name is cool 😁)
                        </span>
                    ),
                    badge: "extension",
                    date: new Date("2018-8"),
                    thumbnail: require("../assets/images/thumbnails/smartab_thumbnail.svg")
                },
                {
                    name: "PORTFOLIO",
                    description: (
                        <span>
                             My CV or Portfolio was project on long run, because i was never satisfied with result so i reworked and reworked.
                             So if you see this, probably i'm already satisfied with my portfolio site.
                        </span>
                    ),
                    badge: "web",
                    date: new Date("2018-11"),
                    thumbnail: require("../assets/images/thumbnails/cv_thumbnail.svg")
                },
            ];
            return { projects, activeProject: null };
    }
};
