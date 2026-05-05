// function getData(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         },5000);
//     });
// }
// getData().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.error("Error :", error);
// })
// setTimeout(()=>{
//     console.log ("new data");
// },5000)

// function getData(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             reject("Data received");
//         },5000);
//     });
// }
// getData().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.error("Error :", error);
// })

function getData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Data received");
        },5000);
    });
}

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json()) // res -> string -> json)
    .then(data => data.filter(d => d.id % 2 === 0))
    .then(data => data.map(d => (d.title = "Aaryan " + d.title)))
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));

    fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(data => Object.keys(data.message))
  .then(breeds => breeds.slice(0, 5)) 
  .then(breeds => console.log("Dog Breeds:", breeds))
  .catch(err => console.log("Error:", err));