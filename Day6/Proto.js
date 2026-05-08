// function person(name){
//     this.name = name;
// }
// person.prototype.greet = function(){
//     console.log("hello "+ this.name);
// };
// let person1 = new person("Simmi");
// let person2 = new person("Sharma");
// person1.greet();
// person2.greet();


function person(name) {
    this.name = name;
}
 
person.prototype.sayHi = function() {
    console.log('hello ' + this.name);
}
const me = new person("aryan");
const you = new person("you");
me.sayHi();
you.sayHi();
console.log(Object.getPrototypeOf(me) === person.prototype)
console.log(me.sayHi === you.sayHi)

function animal(name){
    this.name = name;
}
animal.prototype.speak = function(){
    console.log(this.name + 'make a sound');
}
let dog = new animal("Dog");
let cat = new animal("Cat");
dog.speak();
cat.speak();

console.log(Object.getPrototypeOf(dog) === animal.prototype)
console.log(dog.speak ===cat.speak);
