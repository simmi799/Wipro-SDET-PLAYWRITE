fetch("https://open.er-api.com/v6/latest/USD")
  .then(res => res.json())
  .then(data => {
    console.log("USD to INR:", data.rates.INR);
    console.log("USD to EUR:", data.rates.EUR);
    console.log("USD to GBP:", data.rates.GBP);
  })
  .catch(err => console.error(err));


  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then(res => res.json())
  .then(data => data.filter(d => d.width > 500)) 
  .then(data => data.map(d => (d.url = "Cute Cat: " + d.url))) 
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));

  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then(res => res.json())
  .then(data => data.filter(d => d.height > 400)) 
  .then(data => data.map(d => ({
    ...d,
    url: "Cat Image: " + d.url
  })))
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));

  const API_KEY = "YOUR_API_KEY";

fetch(`http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=AAPL,MSFT`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));


   fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(data => Object.keys(data.message))
  .then(breeds => breeds.slice(0, 5)) 
  .then(breeds => console.log("Dog Breeds:", breeds))
  .catch(err => console.log("Error:", err));


  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(res => res.json())
  .then(data => {
    console.log(data.name);     
    console.log(data.height);   
    console.log(data.weight);   
  })
  .catch(err => console.log(err));

  