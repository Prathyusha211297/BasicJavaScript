let animals: string[]=["dog","cat","tiger","lion","elephant"];
let colors: string[]=["red","green","blue","yellow","orange"];

//copying elements of one array to another array
let animalscopy:string[]=[...animals];
console.log(animalscopy);

//merging two arrays
let mergedarray:string[]=[...animals,...colors];
console.log(mergedarray);

//copying elements of one array to another array and adding new elements
let newarray:string[]=[...animals,"monkey","giraffe"];
console.log(newarray);

//concatenating two arrays
let concatenatedarray:string[]=animals.concat(colors);
console.log(concatenatedarray);

