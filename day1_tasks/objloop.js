


let std = {
    fullname: "Prabin Timilsena",
    roll: 100,
    mark: 1000,
    behaviour: "excellent"
}



let keyArray = Object.keys(std)
console.log("only key array:", keyArray)

let valueArray = Object.values(std)
console.log("only value array:", valueArray)
let entriesArray = Object.entries(std)
console.log("entry array:", entriesArray)




// map on keyArray
let upperKeys = keyArray.map(key => key.toUpperCase())
console.log("map keyArray:", upperKeys)

// map on valueArray
let valueTypes = valueArray.map(value => typeof value)
console.log("map valueArray:", valueTypes)

// map on entriesArray using destructuring
let entryMap = entriesArray.map(([key, value]) => `${key} = ${value}`)
console.log("map entriesArray:", entryMap)




// forEach on keyArray
keyArray.forEach(key => {
    console.log("forEach key:", key)
})

// forEach on valueArray
valueArray.forEach(value => {
    console.log("forEach value:", value)
})

// forEach on entriesArray using destructuring
entriesArray.forEach(([key, value]) => {
    console.log(`forEach entry: ${key} -> ${value}`)
})




// find in keyArray
let foundKey = keyArray.find(key => key === "mark")
console.log("find keyArray:", foundKey)

// find in valueArray
let foundValue = valueArray.find(value => value === 100)
console.log("find valueArray:", foundValue)

// find in entriesArray using destructuring
let foundEntry = entriesArray.find(([key, value]) => key === "behaviour")
console.log("find entriesArray:", foundEntry)




// filter on keyArray
let filteredKeys = keyArray.filter(key => key.length > 4)
console.log("filter keyArray:", filteredKeys)

// filter on valueArray
let filteredValues = valueArray.filter(value => typeof value === "number")
console.log("filter valueArray:", filteredValues)

// filter on entriesArray using destructuring
let filteredEntries = entriesArray.filter(([key, value]) => typeof value === "string")
console.log("filter entriesArray:", filteredEntries)


// reduce on keyArray
let keySentence = keyArray.reduce((acc, key) => acc + " " + key)
console.log("reduce keyArray:", keySentence)

// reduce on valueArray
let total = valueArray.reduce((acc, value) => {
    if (typeof value === "number") {
        return acc + value
    }
    return acc
}, 0)

console.log("reduce valueArray:", total)

// reduce on entriesArray using destructuring
let objAgain = entriesArray.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
}, {})

console.log("reduce entriesArray:", objAgain)




// for-in on std object
for (let key in std) {
    console.log(`for-in object: ${key} -> ${std[key]}`)
}

// for-in on keyArray
for (let index in keyArray) {
    console.log(`for-in keyArray: ${index} -> ${keyArray[index]}`)
}

// for-in on entriesArray
for (let index in entriesArray) {
    console.log(`for-in entriesArray:`, entriesArray[index])
}



// for-of on keyArray
for (let key of keyArray) {
    console.log("for-of keyArray:", key)
}

// for-of on valueArray
for (let value of valueArray) {
    console.log("for-of valueArray:", value)
}

// for-of on entriesArray using destructuring
for (let [key, value] of entriesArray) {
    console.log(`for-of entriesArray: ${key} => ${value}`)
}
