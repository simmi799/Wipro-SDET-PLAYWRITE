// let name  = "Shiva";
// console.log(name);

// let name: string = "Shiva";
// let result: number | string;
// result = 45;
// result = "success";
// console.log(name, result);
 
// function add(a: number, b: number): string {
//     return "Sum: " + (a + b);
// }
 
// console.log(add(5, 10));


// interface Person{
//    id : number ;
//    name: string;
//    age : number;
//    role: Role;  // enum For role
//    IsAdmin? :boolean;    //opotional Property 
// }
// interface Person {
// email: string;
// }
// enum Role{
//     User = "USER",
//     Admin = "ADMIN",
//     SuperAdmin = "SUPER_ADMIN"
// }

// const user : Person = {
//     id :1,
//     name : "Shiva",
//     age :25,
//     role :Role.User,
//     email : "shiva108@gmail.com"
// };
// const admin : Person={
//     id : 2,
//     name : "Shivika",
//     age : 24,
//     email :"shivika108@gmail.com",
//      role: Role.Admin,
//     IsAdmin:true
// };
// console.log(user, admin);
// let coordinates : [number , string] = [40.7128 , "-74.258"];

// function identity<T>(arg: T): T {
//     return arg;
// }

// let output = identity<number>(10);
// let outpu1 = identity<string>("Aaryan");
// let outpu2 = identity<boolean>(true);

// console.log(output, outpu1, outpu2);

// Generic interface for a bag that can hold any type of content
// interface Bag<T> {
//     content: T;
// }

// const stringBag: Bag<string> = {content: "Apple"};
// const numberBag: Bag<number> = {content: 5};

// console.log(stringBag, numberBag);

// class Storage<T> {
//     private items: T[] = [];

//     addItems(item: T): void { // no return type
//         this.items.push(item);
//     }

//     getItem(index: number): T {
//         return this.items[index]!; // non-null assertion operator to indicate that the item will exist at the given index
    // }
// }

// const names = new Storage<string>();
// names.addItems("Aaryan");
// names.addItems("Arush");
// names.addItems("Rohan");

// console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); //


interface HasLength {
    length:number;
}
function logLength<T extends HasLength> (arg :T): void {  // T -> property.lenth --> string , arrays
    console.log(arg.length);
}
logLength("Shiva ");  //string -->length
logLength([1,2,3,4,56]); //array --> length
// logLength(50);  // number --> x