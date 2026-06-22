// dynamically typed datatype
let a=10
const PI=3.14
var message="hello"
console.log(a,PI,message)

//var = function scope

function dis(){
    var x=100
    console.log("inside display",x)
}
dis()

//console.log("outside display",x)


if(true){
    var test="Test"
    let price = 100
    console.log("price=",price)
}

console.log("outside block=")
console.log(test)
//console.log(price)

let add=(a,b)=>a+b
let res=add(10,5)

console.log("res:",res)

let display=(name)=>{
    console.log("name is ", name)
    console.log("hello wazaaa",name)
}

display("wut")

