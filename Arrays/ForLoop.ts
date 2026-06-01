let animals: string[]=["dog","cat","tiger","lion","elephant"];

let DOBdata =
{
    "name": "Prathyusha",
    "place": "Hyderabad",
    "date": 21,
    "month": "December",
    "year": 1998,
    "humanbeing": true

}

for (let A of animals)
{
console.log(A);
}

for(let O in DOBdata)
{
    console.log(O);
}