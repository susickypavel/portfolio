import * as React from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { MemoryHistory } from "history";

const ConsoleText = styled.div`
    font-size: 32px;
    font-family: monospace;
    color: white;
    opacity: 0.8;
    margin: 0;
    padding: 3.5px;
    white-space: pre-line;
    &:after {
        content: "_";
        opacity: 1;
        animation: cursor 1s infinite;
    }
`;

const ConsoleBackground = styled.div`
    background-color: black;
    height: 100%;
`;

const ColorizedUser = styled.span`
    color: lime;
`;

const ColorizedStatus: any = styled.span`
    color: ${(props: ThemedStyledProps<{ warning?: boolean }, {}>) => props.warning  ? "yellow" : "lime"};
`;

interface IProps {
    history: MemoryHistory;
}

interface IState {
    renderedCommand: string;
    renderedLines: JSX.Element[];
}

class LoadingScreen extends React.Component<IProps, IState> {
    private timeoutId: any = null;
    private lines: JSX.Element[] = [
        <div key="ab0">[ <ColorizedStatus>OK</ColorizedStatus> ] Command executed with keycode A8J45</div>,
        <div key="ab1">[ <ColorizedStatus>OK</ColorizedStatus> ] 01010000x01010011 instruction has been executed.</div>,
        <div key="ab1">[ <ColorizedStatus>OK</ColorizedStatus> ] UI9SA - generated text to make it look more professional</div>,
        <div key="ab2">[ <ColorizedStatus warning={true}>WARNING</ColorizedStatus> ] Have you expected some kind of system warning? </div>,
        <div key="ab3">[ <ColorizedStatus>OK</ColorizedStatus> ] Preparing cool stuff for our visitors</div>
    ];

    constructor(props: any) {
        super(props);
        this.state = {
            renderedCommand: "",
            renderedLines: []
        };
        this.executeCommand = this.executeCommand.bind(this);
        this.executeLines = this.executeLines.bind(this);
    }

    executeCommand() {
        const { renderedCommand } = this.state;
        const command = "npm run portfolio";
        if (command.length != renderedCommand.length) {
            this.setState({
                renderedCommand: renderedCommand + command[renderedCommand.length]
            }, () => {
                this.timeoutId = setTimeout(this.executeCommand, Math.floor(Math.random() * 135) + 100);
            });
        } else {
            this.setState({
                renderedCommand: renderedCommand + "\n\n",
            }, () => this.executeLines(0));
        }
    }

    executeLines(i: number) {
        const { renderedLines } = this.state;

        if (this.lines.length != renderedLines.length) {
            this.setState({
                renderedLines: [ ...renderedLines, this.lines[i]]
            }, () => {
                this.timeoutId = setTimeout(() => this.executeLines(++i), Math.floor(Math.random() * 1200) + 1000);
            });
        } else {
            this.setState({
                renderedLines: [...renderedLines,
                (<div key="ab4">[ <ColorizedStatus>OK</ColorizedStatus> ] Initialization completed <br /> Redirecting...</div>)]
            }, () => {
                this.timeoutId = setTimeout(() => this.props.history.push("/home"), 1000);
            });
        }
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => this.executeCommand(), 500);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }

    render() {
        return (
            <ConsoleBackground>
                <ConsoleText>
                    <ColorizedUser>thesoreon@dev:~$ </ColorizedUser>
                    {this.state.renderedCommand}
                    {this.state.renderedLines}
                </ConsoleText>
            </ConsoleBackground>
        );
    }
}

export default LoadingScreen;
