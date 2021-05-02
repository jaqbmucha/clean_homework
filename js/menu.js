{
    const showHideSeetingOnClick = () => {
        const settingsElement = document.querySelector(".currencySetting");
        settingsElement.classList.toggle("currencySetting--hide");
    };

    const initSettings = () => {
        const settingsMenu = document.querySelector(".js-settings-panel");
        settingsMenu.addEventListener("click", showHideSeetingOnClick);
    };

    const showHideCalculatorOnClick = () => {
        const cryptoElement = document.querySelector(".calculator");
        const answerElement = document.querySelector(".answer");

        cryptoElement.classList.toggle("calculator--hide");
        answerElement.classList.toggle("answer--hide");
    };
    const initMenu = () => {
        const cryptoMenu = document.querySelector(".js-crypto-panel");
        cryptoMenu.addEventListener("click", showHideCalculatorOnClick);
    };
    initMenu();
    initSettings();
}