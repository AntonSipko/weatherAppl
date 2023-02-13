import { weatherConfig } from "./config/weather-config.js";
import { DataProcessor } from "./service/DataProcessor.js";
const url = "https://api.open-meteo.com/v1/gfs?hourly=temperature_2m&timezone=IST";
const cities=weatherConfig.cities;
const dataProcessor = new DataProcessor(url,cities);


async function displayTemperatures(city) {
    const data = await dataProcessor.getTemperatureData(city,"2023-02-14","2023-02-14",0,4)
    if(typeof(data)=="object"){
    data.forEach(element => {
        console.log(`date :${element.date}
        hour:${element.hour}
        temperature:${element.temperature}`)
        
        
    });
}
    else{
        console.log(data);
}
}
displayTemperatures("Haifa");

