//those function which has function as a  parameter and or returns function

// res = (A *B)/(C+D)
let calcomplex=(a,b,c,d,mulfunc,sumfunc)=>{
    return mulfunc(a,b) / sumfunc(c,d)
}

let resComplex=calcomplex(
    27,3,1,3,
    (a,b)=>a*b,
    (c,d)=>c+d
)


console.log("Complec calculaiton result: ",resComplex)
