import { Rectangle, Square } from './SquaresModule.js';
import { Circle } from './CircleModule.js';

let r1 = new Rectangle("pink", 40, 15);
console.log(r1.getArea());

let s1 = new Square("blue", 10, 10);
console.log(s1.getArea());

let c1 = new Circle("green", 17, 13, 4);
console.log(c1.circleArea());
