import { ShapesContainer } from "./ShapesContainer";
export class Square extends ShapesContainer {
    constructor(size: number) {
        super(size, size);
    }
}