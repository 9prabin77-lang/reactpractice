// original fruits array
let fruits=["apple","orange"]
fruits.push("banana")
console.log("original array: ",fruits)

//all array n objects are mutable initially
let temp= fruits
temp.push("coconut")
console.log("temp fruits ", temp)
console.log("original fruits ",fruits)
// immutability principle:  original array and object should never be changed i.e. must be immutable forever
//for this use spread operator
let newfruits=[...fruits]
newfruits.push("strawberry")
console.log("new fruits: ",newfruits)
console.log("original array: ",fruits)
