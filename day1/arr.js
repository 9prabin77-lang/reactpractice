

// Example: Array

let fruits = ["apple","coconut","orange",'mango']
console.log(`fruits at 0: ${fruits[0]}`)

console.log(`${fruits[3]}`)

//adding new element

fruits.push("strawberry")
console.log(`${fruits[4]}`)
console.log("All fruits",fruits)

fruits.pop()
console.log("after pop", fruits)

// updating element of index 2

fruits[2]="banana"
console.log("AFTER update at 2",fruits)

// finding index of element

let indexOfCoconut = fruits.findIndex((ele)=>{
    return ele == 'coconut'
})

console.log("index of coconut: ",indexOfCoconut)

// finding element in array

let matchedEle = fruits.find((ele)=>{
    return ele == "mango"
})

console.log("matched ele ", matchedEle)

//removing or deleting element of a specific object

// splice(index, number of elements to delete from that index)

fruits.splice(0,1)

console.log("after splice ",fruits)

// sub list

let fruitSublist = fruits.splice(1,2)
console.log("sublist ", fruitSublist)

// loop in array
// forEach

fruits.forEach(
    (element, index)=>{
        console.log(`Index; ${index} , ${element}`)
    }
)

let modifiedFruits=fruits.map(
    (e,i)=>{
        return e.toUpperCase()
    }
)

console.log("modified fruits: ", modifiedFruits)
