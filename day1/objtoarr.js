let std={
    fullname:"Prabin Timilsena",
    roll:100,
    mark:1000,
    behaviour:"excellent"
}

// converting a key value pair into an array
// loop cant be used in object so we convert it to an array
// conversion array

let keyarray=Object.keys(std)
console.log("onlykey array:", keyarray)
let valuearray=Object.values(std)
console.log("onlyvalue array:", valuearray)
// value amnd key cobination is called a entry
let entriesarray=Object.entries(std)
console.log("entry array:", entriesarray)


