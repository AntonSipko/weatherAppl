"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    square() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * this.height + 2 * this.width;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map