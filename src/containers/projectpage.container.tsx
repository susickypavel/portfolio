import * as React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {ReduxState} from "../reducers";
import {IProject} from "../types";
import {Link} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ProjectPageHolder = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    animation: showPage 1s ease-in-out 0s 1;
`;

const Headline = styled.h1`
    font: 48px roboto-black;
    color: white;
    text-align: center;
    width: 90%;
    margin: 16px auto;
    padding: 16px;
    text-shadow: 1px 1px 8px black;
    background-color: #c70039;
`;

const ProjectNode = styled(Link)<{ badge: string; }>`
    display: block;
    text-decoration: none;
    color: black;
    background-color: ${(props) => pickColor(props.badge) };
    margin: 16px auto;
    padding: 16px;
    width: 90%;
    opacity: 0.8;
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
    &:hover {
        transform: translateY(3px);
        opacity: 1;
    }
    transition: transform .1s ease-in-out;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const CheckBoxHolder = styled.div`
    display: inline-block;
    margin: 0 4px;
    & label {
        font: 24px roboto-medium;
        text-transform: uppercase;
    }
    & input {
        width: 18px;
        height: 18px;
    }
`;

const pickColor = (badge: string) => {
    switch (badge) {
        case "web":
            return "#E18172";
        case "extension":
            return "#9569BC";
        case "game":
            return "#5AD9F1";
        default:
            return "gray";
    }
};

interface IProps {
    projects: IProject[];
}

interface IState {
    visibleBadges: string[];
}

class ProjectPageComponent extends React.Component<IProps, IState> {
    private badgeList: string[] = ["extension", "web", "game"];
    constructor(props: IProps) {
        super(props);
        this.state = {
            visibleBadges: this.badgeList
        };
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }

    renderProjects() {
        if (!this.props.projects) {
            return <div>Getting project list...</div>;
        }

        const { projects } = this.props;
        const { visibleBadges } = this.state;
        return projects.filter((project) => visibleBadges.includes(project.badge)).map((project) => {
            const { name, badge } = project;
            return (
                <CSSTransition key={name} classNames="projectListAnimations" timeout={{ enter: 200, exit: 350 }}>
                    <ProjectNode to={`/project/${name}`} badge={badge}>
                        <h1>{name}</h1>
                        <p>{badge}</p>
                    </ProjectNode>
                </CSSTransition>
            );
        });
    }

    renderCheckBoxs() {
        return this.badgeList.map((badge) => {
            return (
                <CheckBoxHolder key={badge}>
                    <label>{badge}</label>
                    <input type="checkbox" value={badge} onChange={this.handleCheckBoxChange} defaultChecked={true}/>
                </CheckBoxHolder>
            );
        });
    }

    handleCheckBoxChange(e: any) {
        e.persist();
        this.setState((state) => {
            if (e.target.checked) {
                return { visibleBadges: [...state.visibleBadges, e.target.value] };
            } else {
                return { visibleBadges: state.visibleBadges.filter((badge) => badge != e.target.value) };
            }
        });
    }

    render() {
        return (
            <ProjectPageHolder>
                <Headline>MY WORK 💾</Headline>
                <div style={{ textAlign: "center" }}>
                    {this.renderCheckBoxs()}
                </div>
                <TransitionGroup>
                    {this.renderProjects()}
                </TransitionGroup>
            </ProjectPageHolder>
        );
    }
}

const mapStateToProps = (state: ReduxState) => {
    return {
        projects: state.project.projects
    };
};

export default connect(mapStateToProps)(ProjectPageComponent);
