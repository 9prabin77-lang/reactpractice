import PI, { c, gOnEarth ,calcArea, SI } from "./data.js"

console.log("c from data.js",c)
console.log("g on earth from data.js",gOnEarth)
console.log("PI from data",PI)

let res=calcArea(20)
console.log("area of circle is",res)

let res1=SI(100,2,3.5)
console.log("Simple Interest",res1)