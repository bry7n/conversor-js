const convertButton = document.querySelector(".convert-button"); //criamos a primeira const para testar conexão com o js "pelo navegador"
const selectCurrency = document.querySelector("#currency-convert");   

function convertValues() {                  //criamos essa função para começar a nossa conversão de valores, uma variavel para receber o input de valor e uma variavel para receber o valor do dolar hoje.
  const inputCurrencyValues = document.querySelector(".input-currency").value; //aqui é onde fizemos a nossa conversão de valor, recebendo o input de valor e dividindo pelo valor do dolar hoje.
  const currencyValueToConvert = document.querySelector( ".currency-value-to-convert"); //Valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); //Outras Moedas

  const dollarToday = 6.2;
  const euroToday = 7.2;
  const libraToday = 8;
  const btcToday = 595918.2;
  const realToday = 6;

  const convertedValue = inputCurrencyValues / dollarToday;

  if(selectCurrency.value == "dollar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-us",{
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValues / dollarToday);
  }

  if(selectCurrency.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValues / euroToday);
  }

  if(selectCurrency.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValues / libraToday);

  }

  if(selectCurrency.value == "bitcoin"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValues / btcToday);
  }


  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValues);

  
  console.log(convertedValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("usa-currency")
  const currencyImage = document.querySelector(".currency-img"); 


  if(selectCurrency.value == "dollar"){
    currencyName.innerHTML = "Dollar"
    currencyImage.src = "./assets/usa.png"
  } 

  
  if(selectCurrency.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
    }

  if(selectCurrency.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
  }

  if(selectCurrency.value == "bitcoin"){  
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
  }

  if(selectCurrency.value == "real"){
    currencyName.innerHTML = "Real"
    currencyImage.src = "./assets/brasil.png"
  } 
  
    convertValues()
}


convertButton.addEventListener("click", convertValues);
selectCurrency.addEventListener("change", changeCurrency);
