
import { useState } from "react"
import "./theme.css"

let Themeswitch=()=>{
    const [lighttheme,setlight]=useState(true)
    let handleswitch=()=>{
        setlight(!lighttheme)
    }
    return(
        <div>
        <h1>Theme Switch</h1>
        <div className={`container ${lighttheme ? "red" : "blue"}`}>
        Hello     
        </div>
        <button onClick={handleswitch}>Switch To {lighttheme? "Blue":"Red"}</button>
        </div>
    )
    
}

export default Themeswitch