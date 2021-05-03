{
    const ChangeTextOnCurrencyCheck = () => {
        const PLNradio = document.querySelector(".js-radio-pln");
        const EURradio = document.querySelector(".js-radio-eur");
        const GBPradio = document.querySelector(".js-radio-gbp");
        const USDradio = document.querySelector(".js-radio-usd");
        const changeText = document.querySelector(".js-currencyTypeText");

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
    };

    const initChangeText = () => {
        const formElement = document.querySelector(".js-form-calc");
        formElement.addEventListener("change", ChangeTextOnCurrencyCheck);
    };
    initChangeText();




    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const ownedElement = document.querySelector(".js-currencyOwned");
        const BTCcanBuy = document.querySelector(".js-howMany-btc");
        const ETHcanBuy = document.querySelector(".js-howMany-eth");
        const BNBcanBuy = document.querySelector(".js-howMany-bnb");
        const EURexchangeElement = document.querySelector(".js-eur-value");
        const GBPexchangeElement = document.querySelector(".js-gbp-value");
        const USDexchangeElement = document.querySelector(".js-usd-value");
        const BTCexchangeElement = document.querySelector(".js-btc-value");
        const ETHexchangeElement = document.querySelector(".js-eth-value");
        const BNBexchangeElement = document.querySelector(".js-bnb-value");
        const owned = +ownedElement.value;
        const BTCexchange = +BTCexchangeElement.value;
        const ETHexchange = +ETHexchangeElement.value;
        const BNBexchange = +BNBexchangeElement.value;
        const EURexchange = +EURexchangeElement.value;
        const GBPexchange = +GBPexchangeElement.value;
        const USDexchange = +USDexchangeElement.value;

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

}