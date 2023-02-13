export class DataProcessor {
    #url
    #cities
    constructor(url,cities) {
        this.#url = url;
        this.#cities=cities;
    }
    async getData(latitude, longitude) {
           const responseFromServer =
            await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
            return responseFromServer.json();

            
    }
    async getTemperatureData(city, startDate, endDate, hourFrom, hourTo) {
        let ress;
        let message=this.checkInputs(city, startDate, endDate, hourFrom, hourTo);
        if(message==""){
            const alldata= await this.getData(this.#cities[city].latitude,this.#cities[city].longitude)
        const alldatesNtime=[];
        const timeArray=alldata.hourly.time;
        const dateNTimeArray=timeArray.map((datetime,index)=>{
            alldatesNtime[index]={date:datetime.slice(0,datetime.indexOf("T")),hour:+datetime.slice(datetime.indexOf("T")+1,datetime.indexOf(":")),temperature:alldata.hourly.temperature_2m[index]}
            return alldatesNtime[index];
         },alldatesNtime);
          ress=dateNTimeArray.filter( data =>{
            if(data.date==startDate||data.date==endDate){
                if(data.hour>=hourFrom && data.hour<=hourTo){
                    return data;
                }
            }


         })
         
        

    }else{
        ress=message;
    }
    return ress;

        }
        todayDate(){
           let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
return date;
        }

        
    checkInputs(city, startDate, endDate, hourFrom, hourTo){
        let message="";
        const todayDate=new Date(this.todayDate())
        const todayDatevalue=todayDate.valueOf();
        const startDated=new Date(startDate);
        const startDatevalue=startDate.valueOf();
        const endDateValue= new Date(endDate).valueOf();
        const maxDate= startDated.setDate(startDated.getDate()+16);
        const maxDateValue=new Date(maxDate).valueOf();
         if(!this.#cities[city]){
            message+=`the city ${city} doesn't exist in cities :${this.#cities} `

        }
        if(startDatevalue<todayDatevalue ||endDateValue>maxDateValue){
            message+=`the start day must be greater than ${todayDate},endDate must be less than 16 days after startDate`
        }
        if((hourFrom<0 ||hourFrom>23) && (hourTo<0 ||hourTo>23)){
            message+=`hours must be in range[0-23]`
        }
        return message;


    }
}