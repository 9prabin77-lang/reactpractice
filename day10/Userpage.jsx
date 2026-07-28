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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam adipisci voluptates dolorum voluptatum rerum fugiat et facere alias accusamus? Accusamus, dolore hic! Voluptas perferendis delectus, dicta atque ad ea ullam!</p>
            <div className="userCardSection">

                {/* User list */}

                {
                    users.map((e,i)=>{
                        return(
                            <div key={`${e.name}-${e.id}`} className="userCard">

                                <h4>Full name: {e.name}</h4>

                                <b>Age: {e.age}</b>
                                <p>Address: {e.address}</p>

                                <


                            </div>
                        )
                    }   )
                      
                }   
            </div>

        </div>
    )
}

export default Userpage