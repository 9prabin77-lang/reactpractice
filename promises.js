console.log("as")
let promises = new Promise(
    //callback function
    (resolve,reject)=>{
        let tmrolagitarajhardinxu = false;
        if(tmrolagitarajhardinxu){
            resolve("hera maile tara jhardiye")

        }else{
            reject("maile jharna sakina")
        }
    }
)

let kasamkhau = ()=>{
    promises.then(
        (data)=>{
            console.log("success: ",data)
        }
    ).catch(
        (e)=>{
            console.log("Error: ",e)
        }
    ).finally(
        ()=>{
            console.log("k garney runey ki hasney")
        }
    )
}

kasamkhau()
// callback hell problems solution: async and await this async and await makes code looks like synchronous programming. but actually is asynchronous programming

let kasamasync =async =>{
    console.log("starting async fiunction")
    try{
         let res= await promises
         if (res=""){
            throw "timle promise khako xaina"
         }
    console.log("after promises ", res)
    }
    catch(e){
        console.log("error on async/await: ",e)
    }
    finally{
        console.log("finally called")
    }
}
kasamasync()


