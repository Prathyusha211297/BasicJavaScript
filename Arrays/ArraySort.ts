let fancynumber1: number[]=[52,120,2315,4420,925];
let fancynumber2: number[]=[52,120,2315,4420,925];

//console.log(fancynumber);

////let neworder = fancynumber.sort();
let neworder1 = fancynumber2.sort((a:number,b:number)=>b-a); //descending order
let neworder2 = fancynumber1.sort((a:number,b:number)=>a-b); //ascending order
//let reverseorder = fancynumber.reverse(); //reverse order


//console.log(neworder);
console.log(neworder1);
console.log(neworder2);
//console.log(reverseorder);





/* let fancynumber: number[] = [52,120,2315,4420,925];

let neworder = [...fancynumber].sort();
let neworder1 = [...fancynumber].sort((a:number,b:number)=>b-a);
let neworder2 = [...fancynumber].sort((a:number,b:number)=>a-b);
let reverseorder = [...fancynumber].reverse();

console.log("Original:", fancynumber);
console.log("Default Sort:", neworder);
console.log("Descending:", neworder1);
console.log("Ascending:", neworder2);
console.log("Reverse:", reverseorder); */