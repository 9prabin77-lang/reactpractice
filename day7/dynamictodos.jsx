import { useState }  from "react"
import "./dynamiclist.css"
const DyListTodos =()=>{
    let [todos,setTodos]= useState(
        [
            {
                id:1,
                title: "Beautify dynamic List Todo",
                desc:"complete the CSS",
                date:"06-30-2026",
                compltete:"false",
            }
        ]
    )

    return(
        
        <div className="main-container">
            <h1><b>ToDos Form</b></h1>
            <div className="todo-form">
                <label htmlFor="todo-title">Title:
                <input id="todo-title"  type="text" placeholder="enter title"/>
                </label><br/>
                <label htmlFor="todo-desc">Description:
                <textarea id="todo-desc" type="textarea" placeholder="enter the description" />
                </label><br/>
                <label htmlFor="todo-date">Date:
                <input id="todo-date" type="date"/>
                </label><br/>
                <label>
                    <input type="checkbox"/>Completed
                </label><br/>
                <button>Add ToDo</button>
            </div>
            <h2>All ToDos</h2>
            {
            todos.map((el) =>{
                return(
                    <div ket={`${el.id}-$[el.title]`}>
                        <h4>{el.title}</h4>
                        <p>{el.desc}</p>
                        <b>Date; {el.date}</b>
                        <b>Completed:{el.compltete? "true" : "false"}</b>
                    </div>
                )
            })
        }
        </div>
    )
}

export default DyListTodos