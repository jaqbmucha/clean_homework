// changing the inner text of an spam depending on currency
let formElement = document.querySelector(".js-form-calc");
let currencyElement = document.querySelector(".js-currency");
let PLNradio = document.querySelector(".js-radio-pln");
let EURradio = document.querySelector(".js-radio-eur");
let GBPradio = document.querySelector(".js-radio-gbp");
let USDradio = document.querySelector(".js-radio-usd");

let changeText = document.querySelector(".js-currencyTypeText");

formElement.addEventListener("change", () => {
    switch (true) {
        case PLNradio.checked:
            changeText.innerText = "Ile posiadasz złotych:";
            break;
        case EURradio.checked:
            changeText.innerText = "Ile posiadasz euro:";
            break;
        case GBPradio.checked:
            changeText.innerText = "Ile posiadasz funtów:";
            break;
        case USDradio.checked:
            changeText.innerText = "Ile posiadasz dolarów:";
            break;

    };
});

let ownedElement = document.querySelector(".js-currencyOwned");

let BTCcanBuy = document.querySelector(".js-howMany-btc");
let ETHcanBuy = document.querySelector(".js-howMany-eth");
let BNBcanBuy = document.querySelector(".js-howMany-bnb");

let EURexchangeElement = document.querySelector(".js-eur-value");
let GBPexchangeElement = document.querySelector(".js-gbp-value");
let USDexchangeElement = document.querySelector(".js-usd-value");
let BTCexchangeElement = document.querySelector(".js-btc-value");
let ETHexchangeElement = document.querySelector(".js-eth-value");
let BNBexchangeElement = document.querySelector(".js-bnb-value");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let owned = +ownedElement.value;
    let BTCexchange = +BTCexchangeElement.value;
    let ETHexchange = +ETHexchangeElement.value;
    let BNBexchange = +BNBexchangeElement.value;
    let EURexchange = +EURexchangeElement.value;
    let GBPexchange = +GBPexchangeElement.value;
    let USDexchange = +USDexchangeElement.value;

    switch (true) {
        case PLNradio.checked:
            BTCcanBuy.innerText = owned / BTCexchange;
            ETHcanBuy.innerText = owned / ETHexchange;
            BNBcanBuy.innerText = owned / BNBexchange;
            break;
        case EURradio.checked:
            BTCcanBuy.innerText = owned * EURexchange / BTCexchange;
            ETHcanBuy.innerText = owned * EURexchange / ETHexchange;
            BNBcanBuy.innerText = owned * EURexchange / BNBexchange;
            break;
        case GBPradio.checked:
            BTCcanBuy.innerText = owned * GBPexchange / BTCexchange;
            ETHcanBuy.innerText = owned * GBPexchange / ETHexchange;
            BNBcanBuy.innerText = owned * GBPexchange / BNBexchange;
            break;
        case USDradio.checked:
            BTCcanBuy.innerText = owned * USDexchange / BTCexchange;
            ETHcanBuy.innerText = owned * USDexchange / ETHexchange;
            BNBcanBuy.innerText = owned * USDexchange / BNBexchange;
            break;
    }
});