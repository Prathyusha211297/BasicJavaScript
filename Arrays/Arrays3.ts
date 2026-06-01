let animals: string[]=["dog","cat","tiger","lion","elephant"];
console.log(animals);
console.log(animals[3]);
console.log("numbers of animals:" +animals.length);

//adding elements in the starting of the array

animals.unshift("monkey");
console.log(animals);

//removing elements from the starting of the array
animals.shift();
console.log(animals);

//adding elements in the end of the array
animals.push("giraffe");
console.log(animals);

//removing elements from the end of the array
animals.pop();
console.log(animals);

