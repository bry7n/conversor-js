const convertButton = document.querySelector(".convert-button"); //criamos a primeira const para testar conexão com o js "pelo navegador"
const selectCurrency = document.querySelector("#currency-convert");

function convertValues() {
  //criamos essa função para começar a nossa conversão de valores, uma variavel para receber o input de valor e uma variavel para receber o valor do dolar hoje.
  const inputCurrencyValues = document.querySelector(".input-currency").value; //aqui é onde fizemos a nossa conversão de valor, recebendo o input de valor e dividindo pelo valor do dolar hoje.
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //Valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); //Outras Moedas

  const dollarToday = 6.2;
  const euroToday = 7.2;

  const convertedValue = inputCurrencyValues / dollarToday;

  if (selectCurrency.value == "dollar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValues / dollarToday);
  }

  if (selectCurrency.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValues / euroToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValues);

  console.log(convertedValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("usa-currency");
  const currencyImage = document.getElementsByClassName("currency-image");

  if (selectCurrency.value == "dollar") {
    currencyName.innerHTML = "Dollar";
    currencyImage.src = "./assets/usa.png";
  }

  if (selectCurrency.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
    console.log("Changed to euro image");
  }
}

convertButton.addEventListener("click", convertValues);
selectCurrency.addEventListener("change", changeCurrency);
