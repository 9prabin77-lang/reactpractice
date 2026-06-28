let fruits=["apple","Banana","Coconut","Kiwi","DeezNuts"]

const ListRender=()=>{
    return(
        <div>
            <h2>All Fruits</h2>
            {
                fruits.map(
                    (e,index)=>{
                    return(
                        <div key={`${index}-${e}`} style={{backgroundColor: "black",padding:"20px"}}>
                            {e}
                        </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default ListRender
