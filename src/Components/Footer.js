import { useEffect } from "react"
import { useState } from "react"

export function Footer() {
    const [curTime, setCurTime] = useState("")

    const isOpen = () => {
        const curTime = new Date();
        const opensAt = new Date();
        const closesAt = new Date();
        opensAt.setHours(10,30,0); // 10.30 am
        closesAt.setHours(22,30,0); //10.30 pm

        return ( opensAt<= curTime && curTime < closesAt )
    }

    //set the current time every second
    useEffect( 
        ()=> {
            const timer = setTimeout(() => setCurTime(new Date().toLocaleTimeString()), 1e3)
            return () => clearTimeout(timer)
        }
    , [curTime])


    return (
        <>
        <footer>
            {curTime + "  "}
            {isOpen()?  "We are open!" :
                        "We are currently closed. We're happy to welcome you between 10:30 and 22:30."}
            
        </footer>
        </>
    )
}