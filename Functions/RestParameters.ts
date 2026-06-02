function sumOfStdMarks(...marks:number[]):void
{
let totalsum :number=0;
for(let sum of marks){
    totalsum += sum;
    console.log("Total sum of marks is: " + totalsum);
    
}
}
sumOfStdMarks(50,60,70);