import * as React from "react";
import styled from "styled-components";
import * as Konva from "konva";

const CanvasHolder = styled.div`
    position: fixed;
    z-index: 1;
`;

class CanvasBackground extends React.Component {
    componentDidMount() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const stage = new Konva.Stage({
            container: "container",
            width,
            height
        });

        const layer = new Konva.Layer();
        const rectX = stage.getWidth() / 2 - 50;
        const rectY = stage.getHeight() / 2 - 25;

        const box = new Konva.Rect({
            x: rectX,
            y: rectY,
            width: 100,
            height: 50,
            fill: "#00D2FF",
            stroke: "black",
            strokeWidth: 4,
            draggable: true
        });

        box.on("mouseover", function() {
            document.body.style.cursor = "pointer";
        });
        box.on("mouseout", function() {
            document.body.style.cursor = "default";
        });

        layer.add(box);
        stage.add(layer);
    }

    render() {
        return (
            <CanvasHolder id="container" />
        );
    }
}

// const Canvas = styled.canvas`
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: -5;
//     background-color: rgba(0, 0, 0, 0);
// `;

// class CanvasBackground extends React.PureComponent {
//     private canvas!: HTMLCanvasElement;
//     private ctx!: CanvasRenderingContext2D;
//     private pos = { x: 0, y: 0 };

//     constructor(props: any) {
//         super(props);
//         this.draw = this.draw.bind(this);
//         this.handleResize = this.handleResize.bind(this);
//         this.setPosition = this.setPosition.bind(this);
//     }

//     componentWillMount() {
//         window.addEventListener("resize", this.handleResize);
//         window.addEventListener("mousemove", this.draw);
//         window.addEventListener("mousedown", this.setPosition);
//         window.addEventListener("mouseenter", this.setPosition);
//     }

//     componentWillUnmount() {
//         window.removeEventListener("resize", this.handleResize);
//         window.removeEventListener("mousemove", this.draw);
//         window.removeEventListener("mousedown", this.setPosition);
//         window.removeEventListener("mouseenter", this.setPosition);
//     }

//     componentDidMount() {
//         this.canvas = document.querySelector("canvas") as HTMLCanvasElement;
//         this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
//         this.canvas.height = window.innerHeight;
//         this.canvas.width = window.innerWidth;
//     }

//     handleResize() {
//         this.canvas.height = window.innerHeight;
//         this.canvas.width = window.innerWidth;
//     }

//     setPosition(e: any) {
//         this.pos.x = e.clientX;
//         this.pos.y = e.clientY;
//     }

//     draw(e: any) {
//         if (e.buttons != 1) {
//             return;
//         }

//         this.ctx.beginPath();
//         this.ctx.lineWidth = 5;
//         this.ctx.lineCap = "round";
//         this.ctx.strokeStyle = "black";

//         this.ctx.moveTo(this.pos.x, this.pos.y);
//         this.setPosition(e);
//         this.ctx.lineTo(this.pos.x, this.pos.y);
//         this.ctx.stroke();
//     }

//     render() {
//         return <Canvas />;
//     }
// }

export default CanvasBackground;
