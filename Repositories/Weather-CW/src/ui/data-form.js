import { weatherConfig } from "../config/weather-config.js";

const TIME_TO_SELECT="select-timeto-id"
const TIME_FROM_SELECT="select-timefrom-id"
const CITY_SELECT="select-city-id"
const DATA_SELECTORS_ID="selectors-form-id"
const DATA_FORM_ID = "data-form-id";
const DATE_FROM_ID = "date-from-id";
const DATE_TO_ID = "date-to-id"
const TABLE_ID="table-form"
const DATE_INPUTS_ID="date-inputs"
export class DataForm {
    #datesElements;
    #tableElements;
    #allInputsElements;
    #timeFromElement;
    #timeToElement;
    #citiesElement
    #formElement;
    #dateFromElement;
    #dateToElement;
    constructor(parentId, maxDays) {
        const parentElement = document.getElementById(parentId);
        this.#fillForm(parentElement);
        this.#formElement = document.getElementById(DATA_FORM_ID);
        this.#dateToElement = document.getElementById(DATE_TO_ID);
        this.#dateFromElement = document.getElementById(DATE_FROM_ID);
        // this.#setMinMaxDates(weatherConfig.maxDays);//function written in class isnt working
        this.#citiesElement=document.getElementById(CITY_SELECT);
       this.#timeFromElement=document.getElementById(TIME_FROM_SELECT)
       this.#timeToElement=document.getElementById(TIME_TO_SELECT)
       this.#tableElements=document.getElementById(TABLE_ID)
       this.#allInputsElements=document.querySelectorAll("#data-form-id [name]")
       this.#datesElements=document.getElementById(DATE_INPUTS_ID);
       this.#setTime()
       this.#setCities()
       this.#formElement.addEventListener('reset',(event)=>{
        event.preventDefault();
        this.#formElement.reset();
        this.#tableElements.style.display="none";
        this.#setCities();
        this.#setTime();

       })
       

    }
    #fillForm(parentElement) {
        parentElement.innerHTML = `<form id="${DATA_FORM_ID}">
        <div id="date-inputs">
        <label>Select Hour from</label>
            <input type="date" name="dateFrom" id="${DATE_FROM_ID}" required>
            <label>Select Hour to</label>
            <input type="date" name="dateTo" id="${DATE_TO_ID}" required>
            </div>
           
        <div id="${DATA_SELECTORS_ID}">
        
            <label>Select City</label>
         <select name="city" id="${CITY_SELECT}" name="city-selector" >
         <option value ="kkk">kkk</option>
         </select>
         <label>Select Time from</label>
         <select id="${TIME_FROM_SELECT}" name="timeFrom">
         <option value ="kkk">kkk</option>
         </select>
         <label>Select Time To</label>
         <select id="${TIME_TO_SELECT}" name="timeTo">
        </select>
         </div>
         <div id="submit-reset-buttons">
         <button id="submit-button" type="submit">Submit</button>
         <button id="reset-button" type="reset">Reset</button>
         </div>
         
         
         </form>`

          
    }
    #setMinMaxDates(maxDays) {
        const current = new Date();
        const maxDayOfMonth = current.getDate() + maxDays;
        const maxDate = new Date();
        maxDate.setDate(maxDayOfMonth);
        const minDateStr = current.toISOString().split("T")[0];
        const maxDateStr = maxDate.toISOString().split("T")[0];
        this.#dateFromElement.min = minDateStr;
        this.#dateToElement.min = minDateStr;
        this.#dateFromElement.max = maxDateStr;
        this.#dateToElement.max = maxDateStr;
       

    }
    #setCities(){
        this.#citiesElement.innerHTML=Object.entries(weatherConfig.cities).map(city=>
            `<option value=${city[0]}>${city[0]}</option>`).join("");
    }
    #setTime(){
        this.#timeFromElement.innerHTML=this.#getHours().map(time=>
            `<option value=${time}>${time}</option>`).join("");
            this.#timeToElement.innerHTML=this.#getHours().map(time=>
                `<option value=${time}>${time}</option>`).join("");

      
    }
    #getHours(){
        const hoursArray=[]
        for(let index=0;index<=23;index++){
            hoursArray[index]=index;
        }
        return hoursArray;
    }
        
    addHandler(handlerFun){
        this.#formElement.addEventListener('submit',async(event)=>{
            event.preventDefault();
            const weatherData=Array.from(this.#allInputsElements).reduce((res,input)=>{
                res[input.name]=input.value;
                return res;
            },{})
            const message=await handlerFun(weatherData);
            if(message){
                alert(message)
            }else{
                this.#formElement.reset();
                this.#tableElements.style.display="block";

            }

        })
    }


}