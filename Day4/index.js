function getData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Data received");
        },5000);
    });
}
getData().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.error("Error :", error);
})
setTimeout(()=>{
    console.log ("new data");
},5000)

function getData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            reject("Data received");
        },5000);
    });
}
getData().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.error("Error :", error);
})