"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const shape = new Rectangle_1.Rectangle(3, 4);
displaySquarePerimeter(shape);

function displaySquarePerimeter(shape) {
    console.log(`square of shape is ${shape.square()},perimeter ${shape.perimeter}`);
}
//# sourceMappingURL=app.js.map