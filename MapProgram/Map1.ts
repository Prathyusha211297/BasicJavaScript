let s = new Map();
s.set("name","prathyusha");
s.set(false,567);
s.set(123,"mkok");
s.set(false,987);
s.set(765,"mkok");
s.set("name","prathyusha"); // map will not allow duplicate keys but it will allow duplicate values
console.log(s);
console.log(s.size); // size of the map
console.log(s.get("name")); // get the value of the key
console.log(s.has("mkok")); // check if the key is present in the map or not
s.delete(123); // delete the key from the map
console.log(s);
s.clear(); // clear all the key-value pairs from the map
console.log(s);