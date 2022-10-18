export class Shape {
    #color = "black";
    constructor(_color){
        this.#color = _color;
    }
    set Color(_color){
        this.#color = _color;
    }
    get Color(){
        return this.#color;
    }
    DrawShape(){
        return `the shape color is: ${this.#color}`;
    }
}