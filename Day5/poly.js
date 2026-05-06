class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}
class Square extends Shape {
    draw() {
        console.log('Drawing a square');
    }
}
const shapes = [new Circle(), new Square()];
shapes.forEach(shape => shape.draw());
 

class Vehcile {
    break(){
        console.log("Break");
    }
}
class Car extends Vehcile{
    horn(){
        console.log("Car horn");
    }
}
class bike extends Vehcile{
    horn(){
        console.log("bike horn");
    }
}
// class truck extends Vehcile{
//     seat(){
//         console.log("truck seat");
//     }
// }
const vehciles =[new Car(), new bike()];
vehciles.forEach(vehciles =>vehciles.horn());
// vehciles.forEach(vehciles =>vehciles.seat());