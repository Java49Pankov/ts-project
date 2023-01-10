import { Shape } from "./ShapeInterface";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
import { ShapesContainer } from "./ShapesContainer";

const shapes: Array<Shape> = [
    new Rectangle(6, 4),
    new Square(4),
    new Square(5)
];

const shapesCont = new ShapesContainer(shapes);
const sumOfPerimeter = shapesCont.getPerimeter();
console.log("Perimeter sum = ", sumOfPerimeter);
const sumOfSquare = shapesCont.getSquare();
console.log("Square sum = ", sumOfSquare);

const sumOfShapes: number = shapes.reduce((res, cur) => res + cur.getSquare(), 0)
console.log("Sum Of Shapes = ", sumOfShapes);