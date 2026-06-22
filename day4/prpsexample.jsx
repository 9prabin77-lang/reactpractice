

import { useState } from "react"

const Props=({nam,age})=>{
    let[count,setCount]= useState(0)
    const [fullName,setName]=useState("")

    console.log("name: ",nam," age: ",age)
    console.log(event)
    let handleOnClick=(event)=>{
        setCount(count + 1)
                console.log(count)
    }

    let handleNameChange=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleOnClick}>Increment</button><br/>
            <input type="text" placeholder="entah yo name" onChange={handleNameChange} value={fullName}></input>
            <br/>
            <p>Full Name: {fullName}</p>
        </div>
    )
}


export default Props