import "./styles.css";
import {extractTemp, extractConditions} from "./weather.js"

const locationInput = document.querySelector("#location");
const button = document.querySelector("button");
const tempDisplay = document.querySelector("#temp-display");
const imgDisplay = document.querySelector("#img-display");
const condDisplay = document.querySelector("#condition-display");

button.addEventListener("click", () => {
    tempDisplay.textContent = "";
    extractTemp(locationInput.value).then((t) => {
        const displayText = document.createTextNode(`The temperature in ${locationInput.value} is ${t}`);
        tempDisplay.appendChild(displayText);
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
        }).catch(function(e) {
            console.log(e);
        });
    });
    event.preventDefault();
})
