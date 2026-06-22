

import { useState } from "react"

const Counter=()=>{
    let[count,setCount]= useState(0)

    let handleInc=()=>{
        setCount(count + 1)
                console.log(count)
    }

    let handleDcr=()=>{
        setCount(count - 1)
                console.log(count)
    }

    let handleReset=()=>{
        setCount(0)
                console.log(count)
    }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDcr}>Decrement</button>
            <button onClick={handleReset}>Reset</button>

            
        </div>
    )

}
export default Counter