/*let I : string = "India is My Country";
> Print reverse of each word --> "aidnI si yM yrtnuoC". */

let I: string = "India is My Country";                  // Storing string value in variable I

let words = I.split(" ");                         // Splitting the string into an array of words using space as a delimiter
let result: string = "";                             // Initializing an empty string to store the final result

for (let i = 0; i < words.length; i++) {
    result = result+ words[i].split("").reverse().join("") + " " ;  // For each word, split it into characters, reverse the array of characters, join them back into a string, and add a space after it. Then concatenate it to the result string.
}

console.log(result.trim());