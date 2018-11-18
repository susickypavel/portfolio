import * as React from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -5;
    background-color: rgba(0, 0, 0, 0);
`;

class CanvasBackground extends React.PureComponent {
    private canvas!: HTMLCanvasElement;
    private ctx!: CanvasRenderingContext2D;
    private pos = { x: 0, y: 0 };

    constructor(props: any) {
        super(props);
        this.draw = this.draw.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.setPosition = this.setPosition.bind(this);
    }

    componentWillMount() {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("mousemove", this.draw);
        window.addEventListener("mousedown", this.setPosition);
        window.addEventListener("mouseenter", this.setPosition);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("mousemove", this.draw);
        window.removeEventListener("mousedown", this.setPosition);
        window.removeEventListener("mouseenter", this.setPosition);
    }

    componentDidMount() {
        this.canvas = document.querySelector("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
    }

    handleResize() {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
    }

    setPosition(e: any) {
        this.pos.x = e.clientX;
        this.pos.y = e.clientY;
    }

    draw(e: any) {
        if (e.buttons != 1) {
            return;
        }

        this.ctx.beginPath();
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = "round";
        this.ctx.strokeStyle = "black";

        this.ctx.moveTo(this.pos.x, this.pos.y);
        this.setPosition(e);
        this.ctx.lineTo(this.pos.x, this.pos.y);
        this.ctx.stroke();
    }

    render() {
        return <Canvas />;
    }
}

export default CanvasBackground;
