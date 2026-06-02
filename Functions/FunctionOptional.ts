function bankstatement(name:string,aadharcard?:number)
{
if (aadharcard==undefined)
{
    console.log("aadharcard is not provided for "+name);
}
else{
    console.log("aadharcard is provided for "+name);
}
}
bankstatement("prathyusha");
bankstatement("Ammuu",123456789012);