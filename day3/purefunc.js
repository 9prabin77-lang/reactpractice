// pure function: those function which doesnt have side effevts that means external variable does not effect the result of the function



const PI=3.14
// pure
let cal=(x,y)=>{
    console.log("sum of x and y is ",x+y)
}
//impure
let calareaofcircle=(radius)=>{
    console.log("area of circle is ",PI*radius*radius)
} 

cal(3,4)
calareaofcircle(23)
