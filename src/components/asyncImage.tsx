import * as React from "react";

interface IProps {
    compressImage: string;
    image: string;
    alt: string;
    className: string;
}

interface IState {
    activeImage: string;
}

export class AsyncImage extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeImage: this.props.compressImage
        };
    }

    componentDidMount(): void {
        const fullQualityImage = new Image();
        fullQualityImage.onload = () => {
            this.setState({ activeImage: this.props.image });
        };
        fullQualityImage.src = this.props.image;
    }

    render() {
        return <img src={this.state.activeImage} alt={this.props.alt} className={this.props.className}/>;
    }
}
