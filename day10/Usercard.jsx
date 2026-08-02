
let UserCard=({name, age, address, phone, status, id}) => {


    return(

    <div key={`${name}-${id}`} className="userCard">
    <h4>Full name : <span>{name}</span></h4>
         <b>Age : {age} | Address : {address}</b>
        <p>Contact : {phone} </p>
        <p className={`userStatus ${status === "active" ? "userStatusActive" : "userStatusInactive"}`}>{status}</p>
        
         </div>
    )
}

export default UserCard
