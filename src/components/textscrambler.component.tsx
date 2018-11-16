import * as React from "react";

interface IState {
    scrambledText: string;
}

class TextScrambler extends React.Component<{}, IState> {

    constructor(props: any) {
        super(props);

        this.state = {
            scrambledText: ""
        };
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {this.state.scrambledText}
            </div>
        );
    }
}

export default TextScrambler;
