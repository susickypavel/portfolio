import * as React from "react";
import styled, {StyledComponent} from "styled-components";
import {connect} from "react-redux";
import {ReduxState} from "../reducers";
import {IProject} from "../types";
import {Link} from "react-router-dom";

const Headline = styled.h1`
    font: 48px roboto-black;
    text-align: center;
`;

const ProjectNode = styled(Link)<{ badge: string; }>`
    display: block;
    text-decoration: none;
    color: black;
    background-color: ${(props) => props.badge == "extension" ? "lime" : "cyan" };
    margin: 16px auto;
    padding: 16px;
    width: 90%;
    max-width: 800px;
    & h1, p {
        margin: 0;
    }
    & h1 {
        font: 36px roboto-black;
    }
    & p {
        margin-top: 8px;
        font: 24px roboto-thin;
        font-weight: bold;
    }
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

interface IProps {
    projects: IProject[];
}

class ProjectPageComponent extends React.Component<IProps> {
    render() {
        return (
            <div>
                <Headline>MY WORK 💾</Headline>
                <div>
                    {this.renderProjects()}
                </div>
            </div>
        );
    }

    renderProjects() {
        if (!this.props.projects) {
            return <div>Getting project list...</div>;
        }

        const { projects } = this.props;
        return projects.map((project) => {
            const { name, description, badge } = project;
            return (
                <ProjectNode to={`/projects/${name}`} key={name} badge={badge}>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </ProjectNode>
            );
        });
    }
}

const mapStateToProps = (state: ReduxState) => {
    return {
        projects: state.projects
    };
}

export const ProjectPage = connect(mapStateToProps)(ProjectPageComponent);
