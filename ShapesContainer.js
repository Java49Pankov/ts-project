"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapesContainer = void 0;
class ShapesContainer {
    constructor(arrShapes) {
        this.arrShapes = arrShapes;
    }
    getSquare() {
        return this.arrShapes.reduce((res, cur) => res + cur.getSquare(), 0);
    }
    getPerimeter() {
        return this.arrShapes.reduce((res, cur) => res + cur.getPerimeter(), 0);
    }
}
exports.ShapesContainer = ShapesContainer;
//# sourceMappingURL=ShapesContainer.js.map