import * as React from "react";
import styled from "styled-components";
import { Stage, Layer, Image as KonvaImage } from "react-konva";

interface CustomStyleProps {
    cursor: string;
}

const CanvasHolder = styled.div<CustomStyleProps>`
    position: fixed;
    z-index: -10;
`;

interface IState {
    cursor: string;
    sizes: {
        height: number;
        width: number;
    };
    images: Array<{
        src: string;
        x: number;
        y: number;
        sizes: { width: number, height: number };
    }>;
}

export class CanvasBackground extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            cursor: "auto",
            sizes: {
                height: window.innerHeight,
                width: window.innerWidth
            },
            images: [
                {
                    sizes: { height: 50, width: 50 },
                    x: Math.random() * (window.innerWidth - 100),
                    y: Math.random() * (window.innerHeight - 100),
                    src: require("../assets/images/logo_v2.svg")
                },
                {
                    sizes: { height: 50, width: 50 },
                    x: Math.random() * (window.innerWidth - 100),
                    y: Math.random() * (window.innerHeight - 100),
                    src: require("../assets/images/czechflag.svg")
                }
            ],
        };
        this.animate = this.animate.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentWillMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        this.setState((state) => {
            for (const iterator of state.images) {
                if (iterator.y - iterator.sizes.height <= window.innerHeight) {
                    iterator.y += 1;
                } else {
                    iterator.y = -iterator.sizes.height;
                }
            }
            return {
                images: state.images
            };
        }, () => requestAnimationFrame(this.animate));
    }

    renderImages() {
        return this.state.images.map((image) => {
            const { y, x, src, sizes } = image;
            const tempImage = new Image(sizes.width, sizes.height);
            tempImage.src = src;

            return (
                <KonvaImage
                    x={x}
                    y={y}
                    key={src}
                    image={tempImage}
                />
            );
        });
    }

    handleResize() {
        this.setState({
            sizes: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        });
    }

    render() {
        return (
            <CanvasHolder cursor={this.state.cursor}>
                <Stage width={this.state.sizes.width} height={this.state.sizes.height}>
                    <Layer>{this.renderImages()}</Layer>
                </Stage>
            </CanvasHolder>
        );
    }
}
