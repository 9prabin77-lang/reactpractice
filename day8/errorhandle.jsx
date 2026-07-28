import { useState } from "react"

let ErrorHandling = ()=>{
    let [fullName, setFullName] = useState("")
    let [age, setAge] = useState(0)
    let handleFormSubmit = (e)=>{
        // preventing the default behaviour of form submit in html
        e.preventDefault()
        if(fullName === ""){
            setErrorFullName("full name is required")
            return
        }
        if(fullName.length <3){
            setErrorFullName("full name must be greater than 2 characters")
            return
        }
        setErrorFullName(null)
        console.log("age: ", age)
        console.log("full name: ", fullName)
    }
    let [errorFullName, setErrorFullName] = useState(null)
    // todo: validate for age
    return(
        <div>
            <h1>Error Handling Example</h1>
            <form onClick={handleFormSubmit}>
                <label htmlFor="full-name">
                    FullName:
                    <input id="full-name" type="text" placeholder="Enter your full name" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                </label>
                <br/>
                {errorFullName &&  <i style={{color: "red"}}>{errorFullName}</i>}
                <br/>
                 <label htmlFor="age">
                    Age:
                    <input id="age" type="number" placeholder="Enter your age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </label>
                <br/>
                <i style={{color: "red"}}>age is required</i>
                <br/><br/>
                <button type="submit">Validate</button>
            </form>
        </div>
    )
}
export default ErrorHandling
