
// Function with return type and without parameters

function calculate():void
{
    let num1: number = 10;
    let num2: number = 20;
    let sum: number = num1 + num2;
    
    console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);
}
calculate();


console.log("-----------------------------");

function calculate1():number{
    let num1: number=22;
    let num2: number=33;
    let sum: number=num1+num2;
    return sum; 

}
console.log(calculate1());

console.log("-----------------------------");

function calculate2():string{
    let num1: number=22;
    let num2: number=33;
    let sum: number=num1+num2;
    let t="tiger";
    console.log(sum);
    return t; 
}
console.log(calculate2());


