interface empdata
{
 empid:number;
 empname:string;
 empage:number;
 empisAlive:boolean;
 empaddress:
 {
    estreet:string;
    earea:string;
    elocation:string;
 }

}

let employeeinfo:empdata={

    empid: 101,
    empname: "Prathyusha",
    empage: 25,
    empisAlive: true,
    empaddress:
    {
        estreet: "Patrika Nagar",
        earea: "Hi-tech City",
        elocation: "Hyderabad"
    }   
}

console.log(employeeinfo);
console.log(employeeinfo.empid);  //to get empid

//adding emp designation
employeeinfo.designation="Software Engineer";
console.log(employeeinfo);

//updating emp age
employeeinfo.empage=26;
console.log(employeeinfo);

//deleting empisAlive property
delete employeeinfo.empisAlive;
console.log(employeeinfo);

//check the data exists or not
console.log("empid" in employeeinfo);  //to check if empid exists
console.log("designation" in employeeinfo);  //to check if designation exists
console.log("empisAlive" in employeeinfo);  //to check if empisAlive exists