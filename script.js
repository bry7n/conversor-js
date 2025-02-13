const convertButton = document.querySelector(".convert-button"); //criamos a primeira const para testar conexão com o js "pelo navegador"
const selectCurrency = document.querySelector("#currency-convert");  
const selectOptions01 = document.querySelector("#currency-change");

async function atualizarValores(){
  const resposta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL");
  const dados = await resposta.json();
  return {
    dollarToday: parseFloat(dados.USDBRL.high),
    euroToday: parseFloat(dados.EURBRL.high),
    libraToday: parseFloat(dados.GBPBRL.high),
    btcToday: parseFloat(dados.BTCBRL.high),
    realValue: 1
  }
  
}
  async function convertValues() {         
    const valores = await atualizarValores();         //criamos essa função para começar a nossa conversão de valores, uma variavel para receber o input de valor e uma variavel para receber o valor do dolar hoje.
    console.log(valores);
    const inputCurrencyValues = parseFloat(document.querySelector(".input-currency").value.replace(",", ".")); //aqui é onde fizemos a nossa conversão de valor, recebendo o input de valor e dividindo pelo valor do dolar hoje.
    const currencyValueToConvert = document.querySelector( ".currency-value-to-convert"); //Valor em real
    const currencyValueConverted = document.querySelector(".currency-value"); //Outras Moedas

    if(selectOptions01.value === selectCurrency.value){
      alert("A moeda selecionada não pode ser a mesma, por favor, selecione outra moeda.");
      return;
    }

    const taxas = {
      real: valores.realValue,
      dollar: valores.dollarToday,
      euro: valores.euroToday,
      libra: valores.libraToday,
      bitcoin: valores.btcToday,
    }

    const moedaOrigem = selectOptions01.value;
    const moedaDestino = selectCurrency.value;
    const valorConvertido = (inputCurrencyValues / taxas[moedaDestino]) * taxas[moedaOrigem];

    currencyValueConverted.innerHTML = new Intl.NumberFormat(getLocale(moedaDestino),{
      style: "currency",
      currency: getCurrencyCode(moedaDestino)
    }).format(valorConvertido);

    currencyValueToConvert.innerHTML = new Intl.NumberFormat(getLocale(moedaOrigem),{
      style: "currency",
      currency: getCurrencyCode(moedaOrigem)
    }).format(inputCurrencyValues);
  }

    function getLocale(currency){
      const locales = {
        real: "pt-BR",
        dollar: "en-US",
        euro: "de-DE",
        libra: "en-GB",
        bitcoin: "en-US",
      }
      return locales[currency] || "pt-br";
    }

    function getCurrencyCode(currency){
      const currencyCodes = {
        real: "BRL",
        dollar: "USD",
        euro: "EUR",
        libra: "GBP",
        bitcoin: "BTC", 
      }
      return currencyCodes[currency] || "BRL";
    }

  function changeCurrency() {
    const currencyName = document.getElementById("usa-currency");
    const currencyImage = document.querySelector(".currency-img"); 


    const moedas = {
      dollar: { nome: "Dollar", img: "./assets/usa.png" },
      euro: { nome: "Euro", img: "./assets/euro.png" },
      libra: { nome: "Libra", img: "./assets/libra.png" },
      bitcoin: { nome: "Bitcoin", img: "./assets/bitcoin.png" },
      real: { nome: "Real", img: "./assets/brasil.png" },
    }

    const moedaSelecionada = selectCurrency.value;
    currencyName.innerHTML = moedas[moedaSelecionada].nome;
    currencyImage.src = moedas[moedaSelecionada].img;

    convertValues();
  }

  function changeCurrency01 (){
    const currencySelect01 = document.getElementById("brasil-currency");
    const currencyImg01 = document.querySelector("#brasil");

    const moedas = {
      dollar: { nome: "Dollar", img: "./assets/usa.png" },
      euro: { nome: "Euro", img: "./assets/euro.png" },
      libra: { nome: "Libra", img: "./assets/libra.png" },
      bitcoin: { nome: "Bitcoin", img: "./assets/bitcoin.png" },
      real: { nome: "Real", img: "./assets/brasil.png" }
  }

  const moedaSelecionada = selectOptions01.value;
  currencySelect01.innerHTML = moedas[moedaSelecionada].nome;
  currencyImg01.src = moedas[moedaSelecionada].img;

    convertValues();
  }
  
  convertButton.addEventListener("click", convertValues);
  selectCurrency.addEventListener("change", changeCurrency);
  selectOptions01.addEventListener("change", changeCurrency01);