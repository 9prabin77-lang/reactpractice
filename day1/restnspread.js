let num=[1,2,3,4,5]

console.log("before: ", num)
console.log("after spread:", ...num)
//merging two array

let maxmun=[100,2000]
let merged=[...num,...maxmun]
console.log("merged array:",merged)


//rest example

let add=(...values)=>{
    let res=values.reduce(
        (accumulator,ele)=>{
            return accumulator+ele

        },
        0// initial value of accumulator
    )
    console.log("addresult:",res)
}
add(...num)
add(1,2,3,4,5,6)

// spread in obj

let ob1={
    name:"ram",
    age: 100
}

let ob2={
    hi:"hari",
    pr:200
}

let mergeob={...ob1,...ob2}
console.log("merged object:",mergeob)