// default parameters

let div=(a,b)=> a/b
let res=div(5,10)
console.log(`division result is ${res}`)

let div1=(a=1,b=1)=>{
    let res=a/b
    console.log(`Result  is ${res}`)
}

div1()
div1(30)
div1(10,1000)


