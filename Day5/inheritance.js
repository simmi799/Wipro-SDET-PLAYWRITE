// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     logIn() {
//         console.log(`${this.name} has logged in.`);
//     }
// }
 
// class Admin extends User {
//     constructor(name, role) {
//         super(name); // call the parent class constructor
//         this.role = role;
//     }
//     logIn() {
//         super.logIn(); // call the parent class method
//         console.log(`${this.name} has admin privileges as a ${this.role}.`);
//     }
// }
 
// const user1 = new User("Alice");
// const admin1 = new Admin("Bob", "Super Admin");
 
// user1.logIn(); // Alice has logged in.
// admin1.logIn(); // Bob has logged in. Bob has admin privileges as a Super Admin.


class Students {
    constructor(name){
        this.name = name; 
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

class ScienceStudent extends Students{
    constructor(name,field){
        super(name);
        this.field = field;
    }
    study(){
        super.study();
        console.log(`${this.name} is studying ${this.field}`);
    }
}
const student1 = new Students("Aaryan");
const student2 = new ScienceStudent("Priya","Physics");
student1.study();
student2.study();
