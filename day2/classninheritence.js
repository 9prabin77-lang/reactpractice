//class : blueprint of a real object
class Car{
    // constructor
    constructor(name,color,engine,brand){
        //property
        this.color =color;
        this.name=name;
        this.engine=engine;
        this.brand=brand;
    }
    //methods: functionality of an object
    move(){
        console.log(`${this.name} car is moving`)
    }

    start(){
        console.log(`${this.name} car has started zooming`)
    }

    stop(){
        console.log(`${this.name} car has stopped moving`)
    }
}

// making a car object

let myCar=new Car("drift","blue","v8","brawn")

myCar.start()
myCar.move()
myCar.stop()

console.log("color of drift is",myCar.color)

