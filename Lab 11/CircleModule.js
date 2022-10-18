import { Shape } from "./shapeModule.js";
export class Circle extends Shape{
    #x = 3;
    #y = 3;
    #radius = 4;
    constructor(_color, _x, _y, _radius){
        super(_color);
        this.#x = _x;
        this.#y = _y;
        this.#radius = _radius;
    }
    set X (_x){
        this.#x = _x;
    }
    get X (){
        return this.#x;
    }
    set Y (_y){
        this.#y = _y;
    }
    get Y (){
        return this.#y;
    }
    set Radius (_radius){
        this.#radius = _radius;
    }
    get Radius (){
        return this.#radius;
    }
    circleArea(){
        return `${this.DrawShape()} & its area is: ${Math.PI * this.#radius * this.#radius}`;
    }
}