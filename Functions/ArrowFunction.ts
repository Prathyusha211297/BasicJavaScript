function multiply(a:number,b:number):number{
    return a*b;
}
console.log(multiply(5,10));

// Arrow function with return type and with parameters
let z= (a:number,b:number):number=>a*b;
console.log(z(5,10));