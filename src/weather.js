async function getWeather(location) {
    try {
        const weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=Y86AUV62SAQMW9QQ7DCTWZWMG`);
        const json = weather.json();
        console.log(json);
        return json;
    } catch (e) {
        console.log(e);
    }    
}

export async function extractTemp(location) {
    return getWeather(location).then(function (response) {
        return response.currentConditions.temp;
    });
}

export async function extractConditions(location) {
    return getWeather(location).then(function (response) {
        return response.currentConditions.conditions; 
    })
}
