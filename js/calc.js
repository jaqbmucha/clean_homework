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

//catching ellements for simple calculator

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

//catching elements for dream table

let BTC20exchangeElement = document.querySelector(".js-btc20-value");
let BTC19exchangeElement = document.querySelector(".js-btc19-value");
let BTC18exchangeElement = document.querySelector(".js-btc18-value");
let ETH20exchangeElement = document.querySelector(".js-eth20-value");
let ETH19exchangeElement = document.querySelector(".js-eth19-value");
let ETH18exchangeElement = document.querySelector(".js-eth18-value");
let BNB20exchangeElement = document.querySelector(".js-bnb20-value");
let BNB19exchangeElement = document.querySelector(".js-bnb19-value");
let BNB18exchangeElement = document.querySelector(".js-bnb18-value");

let dreamBTC20 = document.querySelector(".js-dream_btc20");
let dreamBTC19 = document.querySelector(".js-dream_btc19");
let dreamBTC18 = document.querySelector(".js-dream_btc18");
let dreamETH20 = document.querySelector(".js-dream_eth20");
let dreamETH19 = document.querySelector(".js-dream_eth19");
let dreamETH18 = document.querySelector(".js-dream_eth18");
let dreamBNB20 = document.querySelector(".js-dream_bnb20");
let dreamBNB19 = document.querySelector(".js-dream_bnb19");
let dreamBNB18 = document.querySelector(".js-dream_bnb18");

let dreamBTC20ern = document.querySelector(".js-dream_btc20Now");
let dreamBTC19ern = document.querySelector(".js-dream_btc19Now");
let dreamBTC18ern = document.querySelector(".js-dream_btc18Now");
let dreamETH20ern = document.querySelector(".js-dream_eth20Now");
let dreamETH19ern = document.querySelector(".js-dream_eth19Now");
let dreamETH18ern = document.querySelector(".js-dream_eth18Now");
let dreamBNB20ern = document.querySelector(".js-dream_bnb20Now");
let dreamBNB19ern = document.querySelector(".js-dream_bnb19Now");
let dreamBNB18ern = document.querySelector(".js-dream_bnb18Now");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let owned = +ownedElement.value;
    let BTCexchange = +BTCexchangeElement.value;
    let ETHexchange = +ETHexchangeElement.value;
    let BNBexchange = +BNBexchangeElement.value;
    let EURexchange = +EURexchangeElement.value;
    let GBPexchange = +GBPexchangeElement.value;
    let USDexchange = +USDexchangeElement.value;

    let BTC20exchange = +BTC20exchangeElement.innerText;
    let BTC19exchange = +BTC19exchangeElement.innerText;
    let BTC18exchange = +BTC18exchangeElement.innerText;
    let ETH20exchange = +ETH20exchangeElement.innerText;
    let ETH19exchange = +ETH19exchangeElement.innerText;
    let ETH18exchange = +ETH18exchangeElement.innerText;
    let BNB20exchange = +BNB20exchangeElement.innerText;
    let BNB19exchange = +BNB19exchangeElement.innerText;
    let BNB18exchange = +BNB18exchangeElement.innerText;




    switch (true) {
        case PLNradio.checked:
            BTCcanBuy.innerText = owned / BTCexchange;
            ETHcanBuy.innerText = owned / ETHexchange;
            BNBcanBuy.innerText = owned / BNBexchange;

            dreamBTC20.innerText = (owned / BTC20exchange) - (owned / BTCexchange);
            dreamBTC19.innerText = (owned / BTC19exchange) - (owned / BTCexchange);
            dreamBTC18.innerText = (owned / BTC18exchange) - (owned / BTCexchange);
            dreamETH20.innerText = (owned / ETH20exchange) - (owned / ETHexchange);
            dreamETH19.innerText = (owned / ETH19exchange) - (owned / ETHexchange);
            dreamETH18.innerText = (owned / ETH18exchange) - (owned / ETHexchange);
            dreamBNB20.innerText = (owned / BNB20exchange) - (owned / BNBexchange);
            dreamBNB19.innerText = (owned / BNB19exchange) - (owned / BNBexchange);
            dreamBNB18.innerText = (owned / BNB18exchange) - (owned / BNBexchange);

            dreamBTC20ern.innerText = Number((+dreamBTC20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBTC19ern.innerText = Number((+dreamBTC19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBTC18ern.innerText = Number((+dreamBTC18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH20ern.innerText = Number((+dreamETH20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH19ern.innerText = Number((+dreamETH19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH18ern.innerText = Number((+dreamETH18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB20ern.innerText = Number((+dreamBNB20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB19ern.innerText = Number((+dreamBNB19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB18ern.innerText = Number((+dreamBNB18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            break;
        case EURradio.checked:
            BTCcanBuy.innerText = owned * EURexchange / BTCexchange;
            ETHcanBuy.innerText = owned * EURexchange / ETHexchange;
            BNBcanBuy.innerText = owned * EURexchange / BNBexchange;

            dreamBTC20.innerText = EURexchange * ((owned / BTC20exchange) - (owned / BTCexchange));
            dreamBTC19.innerText = EURexchange * ((owned / BTC19exchange) - (owned / BTCexchange));
            dreamBTC18.innerText = EURexchange * ((owned / BTC18exchange) - (owned / BTCexchange));
            dreamETH20.innerText = EURexchange * ((owned / ETH20exchange) - (owned / BTCexchange));
            dreamETH19.innerText = EURexchange * ((owned / ETH19exchange) - (owned / BTCexchange));
            dreamETH18.innerText = EURexchange * ((owned / ETH18exchange) - (owned / BTCexchange));
            dreamBNB20.innerText = EURexchange * ((owned / BNB20exchange) - (owned / BTCexchange));
            dreamBNB19.innerText = EURexchange * ((owned / BNB19exchange) - (owned / BTCexchange));
            dreamBNB18.innerText = EURexchange * ((owned / BNB18exchange) - (owned / BTCexchange));

            dreamBTC20ern.innerText = Number((+dreamBTC20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBTC19ern.innerText = Number((+dreamBTC19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBTC18ern.innerText = Number((+dreamBTC18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH20ern.innerText = Number((+dreamETH20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH19ern.innerText = Number((+dreamETH19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH18ern.innerText = Number((+dreamETH18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB20ern.innerText = Number((+dreamBNB20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB19ern.innerText = Number((+dreamBNB19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB18ern.innerText = Number((+dreamBNB18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            break;
        case GBPradio.checked:
            BTCcanBuy.innerText = owned * GBPexchange / BTCexchange;
            ETHcanBuy.innerText = owned * GBPexchange / ETHexchange;
            BNBcanBuy.innerText = owned * GBPexchange / BNBexchange;

            dreamBTC20.innerText = GBPexchange * ((owned / BTC20exchange) - (owned / BTCexchange));
            dreamBTC19.innerText = GBPexchange * ((owned / BTC19exchange) - (owned / BTCexchange));
            dreamBTC18.innerText = GBPexchange * ((owned / BTC18exchange) - (owned / BTCexchange));
            dreamETH20.innerText = GBPexchange * ((owned / ETH20exchange) - (owned / BTCexchange));
            dreamETH19.innerText = GBPexchange * ((owned / ETH19exchange) - (owned / BTCexchange));
            dreamETH18.innerText = GBPexchange * ((owned / ETH18exchange) - (owned / BTCexchange));
            dreamBNB20.innerText = GBPexchange * ((owned / BNB20exchange) - (owned / BTCexchange));
            dreamBNB19.innerText = GBPexchange * ((owned / BNB19exchange) - (owned / BTCexchange));
            dreamBNB18.innerText = GBPexchange * ((owned / BNB18exchange) - (owned / BTCexchange));

            dreamBTC20ern.innerText = Number((+dreamBTC20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBTC19ern.innerText = Number((+dreamBTC19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBTC18ern.innerText = Number((+dreamBTC18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH20ern.innerText = Number((+dreamETH20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH19ern.innerText = Number((+dreamETH19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH18ern.innerText = Number((+dreamETH18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB20ern.innerText = Number((+dreamBNB20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB19ern.innerText = Number((+dreamBNB19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB18ern.innerText = Number((+dreamBNB18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);

            break;
        case USDradio.checked:
            BTCcanBuy.innerText = owned * USDexchange / BTCexchange;
            ETHcanBuy.innerText = owned * USDexchange / ETHexchange;
            BNBcanBuy.innerText = owned * USDexchange / BNBexchange;

            dreamBTC20.innerText = USDexchange * ((owned / BTC20exchange) - (owned / BTCexchange));
            dreamBTC19.innerText = USDexchange * ((owned / BTC19exchange) - (owned / BTCexchange));
            dreamBTC18.innerText = USDexchange * ((owned / BTC18exchange) - (owned / BTCexchange));
            dreamETH20.innerText = USDexchange * ((owned / ETH20exchange) - (owned / BTCexchange));
            dreamETH19.innerText = USDexchange * ((owned / ETH19exchange) - (owned / BTCexchange));
            dreamETH18.innerText = USDexchange * ((owned / ETH18exchange) - (owned / BTCexchange));
            dreamBNB20.innerText = USDexchange * ((owned / BNB20exchange) - (owned / BTCexchange));
            dreamBNB19.innerText = USDexchange * ((owned / BNB19exchange) - (owned / BTCexchange));
            dreamBNB18.innerText = USDexchange * ((owned / BNB18exchange) - (owned / BTCexchange));

            dreamBTC20ern.innerText = Number((+dreamBTC20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBTC19ern.innerText = Number((+dreamBTC19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBTC18ern.innerText = Number((+dreamBTC18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH20ern.innerText = Number((+dreamETH20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH19ern.innerText = Number((+dreamETH19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamETH18ern.innerText = Number((+dreamETH18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB20ern.innerText = Number((+dreamBNB20.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB19ern.innerText = Number((+dreamBNB19.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            dreamBNB18ern.innerText = Number((+dreamBNB18.innerText - +BTCcanBuy.innerText) * BTCexchange).toFixed(2);
            break;
    }
});