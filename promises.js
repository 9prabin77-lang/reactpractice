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
