console.log("tutorial on Loops")

let a = 5;
for (let i = 0; i < 5; i++) {

    console.log(a--);

}

let obj = {
    name: "Akash",
    role: "Teacher",
    company: "accenture"
}
for (const key in obj) {
    const element = obj[key]
    console.log(element)
}

for (const key  in obj) {
   
       console.log(key)    
       console.log(key)    
}

for (const element of "Harry") {
    console.log(element)
}
let i=0;
while(i<5){
    console.log(i++)
}

do {
    console.log(i)
    i++;    
} while (i<1);