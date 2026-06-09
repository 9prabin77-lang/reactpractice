const user = {
  name: "Prabin",
  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
}
user.greet()


const secondGreet = user.greet.bind(user)
secondGreet()

const guy1 = { name: "Do" }
const guy2 = { name: "Re" }

function call() {
  console.log(`calling ${this.name}`)
}


const callDo = call.bind(guy1)
const callRe = call.bind(guy2)

callDo()
callRe()






