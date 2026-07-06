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
                complete:false,
            }
        ]
    )


    let [title,setTitle]=useState("")
    let [desc,setDesc]=useState("")
    let [date,setDate]=useState(new Date().toISOString().split('T')[0])
    let [complete,setComplete]=useState(false)

    let handleTitle=(e)=>setTitle(e.target.value)
    let handleDesc=(e)=>setDesc(e.target.value)
    let handleDate=(e)=>setDate(e.target.value)
    let handleComplete=(e)=>setComplete(e.target.checked)

    let handleAddTodo=(e)=>{

        e.preventDefault()
        let newdatas= [...todos, {
                id:todos.length + 1,
                title: title,
                desc: desc,
                date: date,
                complete:complete,
            }
        
    ]
    setTodos(newdatas)
    // alert(`New Todo ${title} added`)

    }

    let handleDelete=(td)=>{
        let deleteconfirm = window.confirm("Do you really want to delete this ToDo? ")
       if(deleteconfirm){
         let matchTodoIndex = todos.findIndex((ele)=>{
            return ele.id===td.id
        })

        todos.splice(matchTodoIndex, 1)
        setTodos([...todos])
        alert(`ToDo : ${td.title}, successfully deleted...`)
       }
       else{
        alert("Deletion Cancelled by User....")
       }
    }

    

    return(
        
        <div className="main-container">
            <h1><b>ToDos Form</b></h1>
            <form onSubmit={handleAddTodo}>
            <div className="todo-form">
                <label htmlFor="todo-title">Title:
                <input value={title} onChange={handleTitle} id="todo-title"  type="text" placeholder="enter title"/>
                </label><br/>
                <label htmlFor="todo-desc">Description:
                <textarea value={desc} onChange={handleDesc} id="todo-desc" type="textarea" placeholder="enter the description" />
                </label><br/>
                <label htmlFor="todo-date">Date:
                <input value={date} onChange={handleDate} id="todo-date" type="date"/>
                </label><br/>
                <label htmlFor="todo-status">
                    <input checked={complete} onChange={handleComplete} type="checkbox" id="todo-status"/> Completed
                </label><br/>
                <button type="submit" >Add ToDo</button>
            </div>
            </form>
            <h2>All ToDos</h2>
            <div className="todo-render">
            {
            todos.map((el) =>{
                return(
                    
                    <div className="todo-card" key={`${el.id}-$[el.title]`}>
                        <h4>{el.title}</h4>
                        <p>{el.desc}</p>
                        <b>Date: {el.date}</b>
                        <b>Completed:{el.complete? "true" : "false"}</b>
                        <br/>
                        <button>Edit</button>
                        <button onClick={()=>handleDelete(el)}>Delete</button>
                    </div>
                    
                )
            })
        }
        </div>
        </div>
    )
}

export default DyListTodos
