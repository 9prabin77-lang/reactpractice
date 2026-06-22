
// object(key:value Pair) :- {   }
// let me= {
//     name="shyam "
//     age =" 10"
// }
//accessing the value by key
// me.name
// me["name"]


let obj = {
    price: 100,
    "name": "television",
    status: true,
    
}

//accessing the value

//1. Bracket notation

console.log("price :" , obj["price"])
console.log('status: ',obj["status"])

//2.dot notation

console.log("price by dot :", obj.price)
console.log("name by dot: ", obj.name)

//adding new key value pair

obj.address ="ktm"

console.log("after adding address:", obj)

//updating a value 

obj.status=false

console.log("status after update:", obj.status)

// deleting a key

delete obj.price
console.log("after deleting the price:", obj)

