
console.log("hi there")

var a = 5;
var b = 6;
var c = "akash";
console.log(a + b + 8 + " " + c)

console.log(typeof a, typeof b, typeof c)

const aa = 78;

// this will give error cuz  Assignment to constant variable is not allowed cuz aa is constant.
// aa=aa+6;

{
    let a = 77;
    console.log("value of a in block scope = " + a);
}

console.log("value of a in global scope = " + a);

let x = "akash";
let y = 22;
let z = null;

const p = undefined;
let q = true;
let r = 33.212;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y,typeof  z, typeof p, typeof q, typeof r);

let o={
    name:"Akash",
    "job code":8900,
    age:56,
    ishandsome:true
}
console.log(o)
// now to add 
o.salary=3000000

console.log(o)
// now to add 
o.salary="50cr"

console.log(o)


