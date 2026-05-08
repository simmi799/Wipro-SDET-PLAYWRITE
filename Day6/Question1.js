// ### Question 1: The Flight Booking Data Cleaner
// **Problem Statement:**
// You are given a list of raw flight strings from a travel agency's database. The data is unformatted and needs to be standardized into objects for a front-end display.
// **Requirements:**
// 1. **Parsing:** Iterate through an array of strings formatted as: "CITY_A-CITY_B:PRICE".
// 2. **Object Creation:** Convert each string into an object with three properties: from, to, and price.
// 3. **Validation & Coercion:**
//   * The price must be explicitly converted to a **Number**.
//   * If the price is not a valid number or is missing, set the price to 0.
// 4. **Filtering:** Create a new array containing only flights where the price is between **$100 and $500** (inclusive).
// 5. **Sorting:** Sort the final array of objects by price in **ascending order** (cheapest first).
// 6. **Return:** Return the final array as a **JSON string**.
// **Input Data Example:**
// ```javascript
// const rawFlights = [
//  "London-Paris:150",
//  "New York-Tokyo:invalid",
//  "Dubai-Mumbai:450",
//  "Berlin-Rome:95"
// ];

// const rawFlights = [
// "London-Paris:150",
//  "New York-Tokyo:invalid",
//  "Dubai-Mumbai:450",
//  "Berlin-Rome:95",
//  "Dubai-Mumbai:550"
// ];
// function cleanFlightData(flights){
//     const cleanedFlights = flights.map(flight => { 
//         const [route , rawPrice] = flight.split(":");
//         const [from , to] = route.split("-");
//         let price = Number(rawPrice);
//         if(isNaN(price)){
//             price = 0;
//         }
//         return {
//             from : from ,
//             to : to,
//             price : price
//         };
//     })
//     .filter(flight => flight.price >= 100 && flight.price <= 500)
//     .sort((a,b) => a.price - b.price);
//     return JSON.stringify(cleanedFlights , null , 2)
// }
// console.log(cleanFlightData(rawFlights));





const rawFlights = [
"London-Paris:150",
"Paris-Berlin:abc",
"New York-Tokyo:invalid",
"Dubai-Mumbai:450",
"Berlin-Rome:95",
"India-Dubai:501"
];
 
function cleanFlightData(flights) {
    return flights.map(str => {
        const parts = str.split(":");
        const route = parts[0];
        const price = parts[1];
 
        const cities = route.split("-");
        const from = cities[0];
        const to = cities[1];
 
        // console.log(from, to, price);
        // if(typeof price === "undefined" || isNaN(Number(price))) {
        //     return {
        //         err: "Invalid price for route " + route
        //     };
        // }
        return {
            from: from,
            to: to,
            price: Number(price)
        }
    })
}
 
const cleanFlights = cleanFlightData(rawFlights);
cleanFlights
    .filter(f => {
        if(typeof f.price === "undefined" || isNaN(Number(f.price))) {
            f.price = 0
        }
    });
const finalFlights = cleanFlights.filter(f => f.price >= 100 && f.price <= 500);
finalFlights.sort((f1, f2) => f1.price - f2.price);
finalFlights.forEach(e => console.log(e));
 