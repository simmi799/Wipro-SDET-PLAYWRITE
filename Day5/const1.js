// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }
 
// const dog = new Animal("Jhonny");
// const cat = new Animal("Whiskers");
// dog.speak();
// cat.speak();

class car{
    constructor(model){
        this.model = model;
    }
    drive(){
        console.log(`${this.model} is driving.`);
    }
}
const car1 = new car("Toyota");
const car2 = new car("Honda");
car1.drive();
car2.drive();