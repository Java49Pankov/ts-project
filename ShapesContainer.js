"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapesContainer = void 0;
class ShapesContainer {
    // private arrShapes: Array<Shape>;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getSquare() {
        return this.width * this.height;
    }
    getPerimeter() {
        return this.height * 2 + this.width * 2;
    }
}
exports.ShapesContainer = ShapesContainer;
//# sourceMappingURL=ShapesContainer.js.map