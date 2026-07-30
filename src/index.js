import "./styles.css";

async function getWeather(location) {
    try {
        const weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=Y86AUV62SAQMW9QQ7DCTWZWMG`);
        const json = weather.json();
        console.log(json);
    } catch (e) {
        console.log(e);
    }    
}

getWeather('Toronto');
