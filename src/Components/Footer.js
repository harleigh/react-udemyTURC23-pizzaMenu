import { useEffect } from "react"
import { useState } from "react"

export function Footer() {
    const [curTime, setCurTime] = useState("")

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
            We're happy to welcome you between 12:00 and 22:00.
        </footer>
        </>
    )
}