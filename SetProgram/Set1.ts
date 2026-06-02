let k =new Set();
k.add(1);
k.add("prathyusha");
k.add(false);
k.add(true);
k.add(false);     // set will not allow duplicate values
k.add("mkok");
console.log(k);
console.log(k.size); // size of the set
console.log(k.has("prathyusha")); // check if the value is present in the set or not
k.delete(1); // delete the value from the set
console.log(k);
k.clear(); // clear all the values from the set
console.log(k);

