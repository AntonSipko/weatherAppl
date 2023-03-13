import React, {useState, useEffect, useRef} from "react";
import timeZones from "../time-zones";
import { Input } from "./input";
type Props = {
    cityCountry:string;
}
export const Timer:React.FC<Props> = ({cityCountry}) => {
const styles: React.CSSProperties = {backgroundColor:"lightblue",
fontSize: "2em"};

const [time, setTime] = useState<Date>(new Date());
const [timeZone,setTimezone] = useState<string|undefined>(getTimeZone(cityCountry));
const [citycountry,setCityCountry]=useState<String>(cityCountry);


function tic() {
    setTime(new Date());
    
}
useEffect(
 () => {
    setTimezone(getTimeZone(cityCountry));
 }, [cityCountry]
)

useEffect(() => {
    const interval = setInterval(tic, 2000);
    console.log("useEffect");
    return () => clearInterval(interval);
}, [])
function getTimeZone(cityCountry:string): string | undefined{
    const index = timeZones.findIndex(tz => JSON.stringify(tz).includes(cityCountry));
    return index === -1 ? undefined : timeZones[index].name;
} 


function submit(value: string ):string {
    let res:string="";
    if(value==""||value==undefined){
        res="Enter the zone"
    }else{
        res="";
    if(getTimeZone(value)==undefined ){
        res = `This ${value} does not exists`
    }
    else{
        res="";
        setTimezone(getTimeZone(value));
        setCityCountry(value);
        
    }
}
    return res;




}
    return <div>
        <h2 >Current Time in {citycountry}</h2>
        <p style={styles}>{time.toLocaleTimeString(undefined,
             {timeZone: timeZone})}</p>
             <Input submitFn={submit} buttonName="Check" placeHolder="Enter the zone" />
                </div>
}