import "./styles.css";
import {extractTemp, extractConditions, changeToCelsius, changeToFahrenheit} from "./weather.js"

const locationInput = document.querySelector("#location");
const button = document.querySelector("button");
const tempDisplay = document.querySelector("#temp-display");
const imgDisplay = document.querySelector("#img-display");
const condDisplay = document.querySelector("#condition-display");
const tempContainer = document.querySelector("#temp-container");
let tempScale = 'Fahrenheit';

button.addEventListener("click", () => {
    tempDisplay.textContent = "";
    tempContainer.textContent = "";
    const celsius = document.createElement("button");
    const celsiusTxt = document.createTextNode("Celsius");
    celsius.appendChild(celsiusTxt);

    const fahrenheit = document.createElement("button");
    const fahrenheitTxt = document.createTextNode("Fahrenheit");
    fahrenheit.appendChild(fahrenheitTxt);
    tempContainer.appendChild(celsius);
    tempContainer.appendChild(fahrenheit);
    extractTemp(locationInput.value).then((t) => {
        let displayText = document.createTextNode(`The temperature in ${locationInput.value} is ${t} ${tempScale}`);
        tempDisplay.appendChild(displayText);
        fahrenheit.addEventListener("click", () => {
            t = changeToFahrenheit(t);
            tempScale = 'Fahrenheit';
            tempDisplay.textContent = "";
            displayText = document.createTextNode(`The temperature in ${locationInput.value} is ${Math.round(t)} ${tempScale}`);
            tempDisplay.appendChild(displayText);
        });
        celsius.addEventListener("click", () => {
            t = changeToCelsius(t);
            tempScale = 'Celsius';
            tempDisplay.textContent = "";
            displayText = document.createTextNode(`The temperature in ${locationInput.value} is ${Math.round(t)} ${tempScale}`);
            tempDisplay.appendChild(displayText);
        });
    });
    extractConditions(locationInput.value).then((c) => {
        condDisplay.textContent = "";
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=FrCSA5ws7EoFGx0EyQ1xkrCH40tNnB6E&s=${c}`).then(function (response) {
            return response.json();
        }).then(function(response) {
            console.log(c);
            const condDisplayText = document.createTextNode(`The conditions in ${locationInput.value} is ${c}`);
            condDisplay.appendChild(condDisplayText);
            imgDisplay.src = response.data.images.original.url;
            imgDisplay.width = 250;
        }).catch(function(e) {
            console.log(e);
        });
    });
    event.preventDefault();
})
