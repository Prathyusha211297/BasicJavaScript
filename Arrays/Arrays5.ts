let animals: string[]=["dog","cat","tiger","lion","elephant"];
let animals2: string[]=["dog","cat","tiger","lion","elephant"];

console.log(animals);

animals.splice(1,3); //staring index, number of elements to be removed
console.log(animals);

animals2.splice(3);  //delete all the elements starting from index 3
console.log(animals2);