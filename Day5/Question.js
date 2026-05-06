async function getCurrencyRates() {
  const res = await fetch("https://open.er-api.com/v6/latest/USD");
  const data = await res.json();

  console.log("USD to INR:", data.rates.INR);
  console.log("USD to EUR:", data.rates.EUR);
  console.log("USD to GBP:", data.rates.GBP);
}
getCurrencyRates();


 async function getCats() {
  let res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  let data = await res.json();

  data = data.filter(d => d.width > 500);
  data = data.map(d => "Cute Cat: " + d.url);

  console.log(data);

}
getCats();

// async function getCats() {
//   let res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
//   let data = await res.json();

//   data = data.filter(d => d.height > 400);
//   data = data.map(d => "Cat Image: " + d.url);

//   console.log(data);
// }
// getCats();

const API_KEY = "YOUR_API_KEY";

async function getStockData() {
  let res = await fetch(`http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=AAPL,MSFT`);
  let data = await res.json();

  console.log(data);
}
getStockData();

async function getDogBreeds() {
  let res = await fetch("https://dog.ceo/api/breeds/list/all");
  let data = await res.json();

  let breeds = Object.keys(data.message);
  breeds = breeds.slice(0, 5);

  console.log("Dog Breeds:", breeds);
}
getDogBreeds();


 async function getPokemon() {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  let data = await res.json();

  console.log(data.name);
  console.log(data.height);
  console.log(data.weight);
}
getPokemon();

  