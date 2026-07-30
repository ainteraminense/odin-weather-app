import "./styles.css";

async function getWeather(location) {
    try {
        const weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=Y86AUV62SAQMW9QQ7DCTWZWMG`);
        const json = weather.json();
        return json;
    } catch (e) {
        console.log(e);
    }    
}

const temp = getWeather('Toronto').then(function (response) {
    return response.currentConditions.temp;
});
// const temp = weather.currentConditions.temp;
temp.then((v) => console.log(v));
