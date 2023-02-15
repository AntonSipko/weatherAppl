import { weatherConfig } from "./config/weather-config.js";
import { checkHours, DataProcessor } from "./service/DataProcessor.js";
import { DataForm } from "./ui/data-form.js";
import { Table } from "./ui/table.js";
const schema=[
    {columnName:'Date',fieldName:'date'}
    {columnName:'Hour',fieldName:'hour'}
    {columnName:'City',fieldName:'city'}

]
    
const dataProcessor = new DataProcessor(weatherConfig.url, weatherConfig.cities);
// async function displayTemperatures() {
//     const data = await dataProcessor.getTemperatureData("Eilat",
//      "2023-02-15", "2023-02-16", 14, 16);
//     console.log(data)
// }
// displayTemperatures();
const dataForm = new DataForm("form-section", weatherConfig.maxDays);
const weatherTable=new Table("table-form","Weather Table",schema);
dataForm.addHandler(async (data)=>{
    let res=checkHours(data.hourFrom,data.hourTo);
    if(!res){
        const 

    }
})

