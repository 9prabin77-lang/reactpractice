import UserCard from "./UserCard"
import "./Userstyle.css"


let users =[
    {
        id: 1,
        name:"Hee heee",
        age : 32,
        address :"ktm",
        status:"active",
        phone:"9876543210",

    },
    {
        id: 2,
        name:"Hoo hoo",
        age : 39,
        address :"llt",
        status:"inactive",
        phone:"9866663210",
        
    }
]
let Userpage =()=>{

    return(
        <div className="userContainer">
            <h2>User Page</h2>
            <div className="userCardSection">

                {
                    users.map((e,i)=>{
                        return(
                                <UserCard
                                id = {e.id}
                                name= {e.name}
                                age = {e.age}
                                address ={e.address}
                                phone = {e.phone}
                                />
                        )
                    }   )
                      
                }   
            </div>

        </div>
    )
}

export default Userpage
