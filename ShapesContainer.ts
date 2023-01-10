
import { Shape } from "./ShapeInterface";

export class ShapesContainer implements Shape {
    // private arrShapes: Array<Shape>;
    constructor(
        private width: number,
        private height: number
    ) {

    }
    getSquare(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return this.height * 2 + this.width * 2;
    }
}