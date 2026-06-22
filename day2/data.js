let PI = 3.14
let c="3*10^8"
let gOnEarth=9.8

//default export
// only one default export per file

export default PI

//named export

export{c,gOnEarth}
/*
{
"c"="3*10^8",
"g"="9.8"
}
*/

let calcArea=(radius)=>{
    return PI*radius*radius
}

export{calcArea}

let SI=(p,t,r)=>{
    return (p*t*r)/100
}

export{SI}








