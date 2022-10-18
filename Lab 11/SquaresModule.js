import { Shape } from './shapeModule.js';
export class Rectangle extends Shape {
    #width = 5;
    #height = 5;
    constructor(_color, _width, _height){
        super(_color);
        this.#width = _width;
        this.#height = _height;
    }
    set Width(_width){
        this.#width = _width;
    }
    get Width(){
        return this.#width;
    }
    set Height(_height){
        this.#height = _height;
    }
    get Height(){
        return this.#height;
    }
    getArea(){
        return `${this.DrawShape()} and area is: ${this.#width * this.#height}`;
    }
}

export class Square extends Rectangle {
    constructor(_color, _width, _height){
        super(_color, _width, _height);
    }
}