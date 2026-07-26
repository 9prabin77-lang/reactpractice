import React, { useRef } from 'react'

let Uncontrol = ()=>{

    let emailRef = useRef(null)
    let passRef = useRef(null)

    let handleSubmit = (ev)=>{
        ev.preventDefault()
        
    }

    return(
        <div>
            <h1>Uncontroled Form Ecample</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    E-Mail:
                    <input type="email" placeholder="enter yo mail"/>
                </label><br/>
                <label>
                    Password:
                    <input type="password" placeholder="enter yo password"/>
                </label>
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Uncontrol