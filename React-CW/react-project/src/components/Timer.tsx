import React, { useEffect, useState } from "react"
export const Timer: React.FC = () => {
    const styles: React.CSSProperties = { backgroundColor: "lightblue", fontSize: "2em" }
    const titleStyles: React.CSSProperties = { color: "blue" }
    const titleStyles2: React.CSSProperties = { color: "red" }
    setTimeout(tic, 1000);
    const [time, setTime] = React.useState(new Date())
    const [color, setColor] = React.useState("blue")

    function tic() {
        setTime(new Date())
    }

    useEffect(()=> {
        const timeoutId = setTimeout(() => {
            setColor(currentColor => currentColor === "blue" ? "red" : "blue");
        }, 1000);
        return () => clearTimeout(timeoutId);


    },[color]);



    return <div>
        <h2 style={{ color: color }}>Current Time</h2>
        <p style={styles}>{time.toLocaleTimeString()}</p>
    </div>
}