import "./styles.css";
import {extractTemp} from "./weather.js"

const locationInput = document.querySelector("#location");
const display = document.querySelector("#display");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    display.textContent = "";
    extractTemp(locationInput.value).then((t) => {
        const displayText = document.createTextNode(`The temperature in ${locationInput.value} is ${t}`);
        display.appendChild(displayText);
    });
    event.preventDefault();
})
