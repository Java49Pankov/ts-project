"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const Square_1 = require("./Square");
const ShapesContainer_1 = require("./ShapesContainer");
const shapes = [
    new Rectangle_1.Rectangle(6, 4),
    new Square_1.Square(4),
    new Square_1.Square(5)
];
const shapesCont = new ShapesContainer_1.ShapesContainer(shapes);
const sumOfPerimeter = shapesCont.getPerimeter();
console.log("Perimeter sum = ", sumOfPerimeter);
const sumOfSquare = shapesCont.getSquare();
console.log("Square sum = ", sumOfSquare);
const sumOfShapes = shapes.reduce((res, cur) => res + cur.getSquare(), 0);
console.log("Sum Of Shapes = ", sumOfShapes);
//# sourceMappingURL=appTest.js.map