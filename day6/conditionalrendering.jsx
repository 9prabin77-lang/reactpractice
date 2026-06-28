//conditional rendering using if-else

import { useState } from "react"


    const Checklogin=({loggedstatus=true})=>{
        if(loggedstatus){
            return(<MyDash/>)
        }else{
            return(<Loginpage/>)
        }
    }

    const Loginpage=()=>{
        return(
            <h1>Login Page</h1>
        )
    }

    const MyDash =()=>{

        const[isActive, setisActive] = useState(true)
        const[age,setAge]=useState(46)
        return(
            <div className="dashboard">
                <h1>My Dashboard</h1>
                {/* {ternary operator ? : } */}
                { isActive ? <p>User is active</p> : <p> User is Inactive</p> }
                {/* logical and : short circuit evaluation */}
                { age%2===0 && <p> Age is Even</p>}
                {/* logical or : default fallback value */}
                { age%2===0 || <p>Age is Odd</p>}
                
            </div>
        )
    }

export default Checklogin