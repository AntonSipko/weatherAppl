import { Shape } from "./shape";

export class Rectangle implements Shape{
    constructor(private width:number, private height:number){}
    square(): number {
       return this.width*this.height;
    }
    perimeter(): number {
        return 2*this.height + 2*this.width;
    }

}