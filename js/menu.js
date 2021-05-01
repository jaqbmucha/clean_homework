let cryptoMenu = document.querySelector(".js-crypto-panel");
let cryptoElement = document.querySelector(".calculator");
let dreamElement = document.querySelector(".dream");
let answerElement = document.querySelector(".answer");

let worthMenu = document.querySelector(".js-worth-panel");
// let worthElement = document.querySelector(".calculator");

let settingsElement = document.querySelector(".currencySetting");
let settingsMenu = document.querySelector(".js-settings-panel");

settingsMenu.addEventListener("click", () => {
    settingsElement.classList.toggle("currencySetting--hide");
});

/* worthMenu.addEventListener("click", () => {
    worthElement.classList.toggle("currencySetting--hide");
}); */


cryptoMenu.addEventListener("click", () => {
    cryptoElement.classList.toggle("calculator--hide");
    answerElement.classList.toggle("answer--hide");
    dreamElement.classList.toggle("dream--hide");
});