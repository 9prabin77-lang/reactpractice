const user = {
  name: "Prabin",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

user.greet();