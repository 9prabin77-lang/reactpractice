// template literals embedding variable value inside the string
// syntax: `${}`

let msg="welcome"
let name=" Prabin"
let role="Student"
let age=1000


let combine=`${msg}, My name is ${name} and i am a ${role}. Not my age ${age}`

//uppercase 
 
let upr=`This is uppercase ${name.toUpperCase()}`

console.log(combine)
console.log(upr)

//without temp literals

let basicMsg= msg + " My name is " + name + " and my role is " + role + "."

console.log(basicMsg)





