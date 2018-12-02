import * as React from "react";
import { match } from "react-router";
import {connect} from "react-redux";
import {getProjectWithName} from "../actions";
import {AnyAction} from "redux";
import {ReduxState} from "../reducers";
import {IProject} from "../types";
import styled from "styled-components";

const PostHolder = styled.div`
    background-color: #F1F4F2;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 16px;
    @media all and (max-width: 600px) {
        text-align: center;
    }
`;

const ThumbnailImage = styled.img`
    border: 1px solid black;
    width: 100%;
    height: auto;
`;

const HeadLine = styled.h2`
    font: 48px roboto-black;
`;

const ProjectLink = styled.p`
    font: 30px roboto-thin;
    & a {
        font-weight: bold;
    }
`;

const Description = styled.p`
    font: 36px roboto-regular;
    text-align: justify;
`;

interface IProps {
    activeProject: IProject;
    match: match<{ name: string; }>;
    getProjectWithName(name: string): AnyAction;
}

class ProjectShowPageContainer extends React.Component<IProps> {
    componentWillMount(): void {
        this.props.getProjectWithName(this.props.match.params.name);
    }

    renderProject() {
        if (!this.props.activeProject) {
            return <div>Project not found :(</div>;
        }

        const { badge, name, description, date, thumbnail, link } = this.props.activeProject;
        return (
            <PostHolder>
                <ThumbnailImage src={thumbnail} alt={name}/>
                <HeadLine>{name} - {date.getMonth() + 1}/{date.getFullYear()} - {badge}</HeadLine>
                {link ? <ProjectLink>Link to this project: <a href={link}>link</a>.</ProjectLink> : null}
                <Description>{description}</Description>
            </PostHolder>
        );
    }

    render() {
        return (
            <div>
                {this.renderProject()}
            </div>
        );
    }
}

const mapStateToProps = (state: ReduxState) => {
    return {
        activeProject: state.project.activeProject
    };
}

export const ProjectShowPage = connect(mapStateToProps, { getProjectWithName })(ProjectShowPageContainer);
