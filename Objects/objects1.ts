
interface wife 
{
    wname: string,
    wage: number,
    wcity: string
}

let wifedetails:wife = 
{
    wname: "Juliet",
    wage: 22,
    wcity: "Hyderabad"
}

interface husband
{
    hname: string,
    hage: number,
    hcity: string
}
let husbanddetails:husband = 
{
    hname: "romeo",
    hage: 25,
    hcity: "Hyderabad"
}

let family = {...wifedetails,...husbanddetails}
console.log(family)
