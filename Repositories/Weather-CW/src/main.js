import { weatherConfig } from "./config/weather-config.js";
import { checkHours, DataProcessor } from "./service/DataProcessor.js";
import { DataForm } from "./ui/data-form.js";
import { Table } from "./ui/table.js";
const schema=[
    {columnName:'Date',fieldName:'date'},
    {columnName:'Hour',fieldName:'hour'},
    {columnName:'Temperature',fieldName:'temperature'}

]
    
const dataProcessor = new DataProcessor(weatherConfig.url, weatherConfig.cities);
// async function displayTemperatures() {
//     const data = await dataProcessor.getTemperatureData("Eilat",
//      "2023-02-15", "2023-02-16", 14, 16);
//     console.log(data)
// }
// displayTemperatures();
const dataprocessor= new DataProcessor(weatherConfig.url,weatherConfig.cities);
const dataForm = new DataForm("form-section", weatherConfig.maxDays);
const weatherTable=new Table("table-form",`Weather Table for ${dataForm.city}`,schema);
dataForm.addHandler(async (data)=>{
    let res=checkHours(+data.timeFrom,+data.timeTo);
    if(!res){
        const tableDataArray=await dataProcessor.getTemperatureData(data.city,data.dateFrom,data.dateTo,data.timeFrom,data.timeTo);
        tableDataArray.forEach(obj => {
            return weatherTable.addRow(obj);
            
        });
        weatherTable.showTable();
        


    }
    return res;
})

