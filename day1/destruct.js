// array

let animals =["lion","cheetah","tiger"]

//destructuring array

let [a1,a2]=animals
console.log("a1:",a1)
console.log("a2:",a2)

let animal={
    name:"cow",
    color:"brown"
}

//destructuring an object
let{color,name}=animal

console.log("name: ",name)
console.log("color: ",color)

//destructuing in func parameter

let myfunc=({name})=>[
    console.log("name inside function:",name)
]
myfunc(animal)


