import React, {useState, useEffect} from "react";
import timeZones from "../time-zones";
type Props = {
    cityCountry:string;
}
export const Timer:React.FC<Props> = ({cityCountry}) => {
const styles: React.CSSProperties = {backgroundColor:"lightblue",
fontSize: "2em"};

const [time, setTime] = useState<Date>(new Date());

function tic() {
    setTime(new Date());
    
}
function getTimezone(){
    const cityIndex=timeZones.findIndex(obj=>{
        const objString=JSON.stringify(obj);
        if(objString.includes(cityCountry)){
            return obj;
        }
    
    })
    return cityIndex==-1? 196:cityIndex;


}




useEffect(() => {
    const interval = setInterval(tic, 1000);
    console.log("useEffect");
    return () => clearInterval(interval);
}, [])

    return <div>
        <h2 >Current Time in {cityCountry}</h2>
        <p style={styles}>{time.toLocaleTimeString(undefined, {timeZone:timeZones[getTimezone()].name})}</p>
    </div>
}