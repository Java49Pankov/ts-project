
import { Shape } from "./ShapeInterface";

export class ShapesContainer implements Shape {

    constructor(
        private arrShapes: Array<Shape>
    ) {

    }
    getSquare(): number {
        return this.arrShapes.reduce((res, cur) => res + cur.getSquare(), 0)
    }
    getPerimeter(): number {
        return this.arrShapes.reduce((res, cur) => res + cur.getPerimeter(), 0)
    }
}