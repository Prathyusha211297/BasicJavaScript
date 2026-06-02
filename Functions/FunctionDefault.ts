function fixeddeposit(age:number,status:string="eligible for scheme"){
    if(age>=18)
    {
        console.log("You are "+status);
    }
    else{
        console.log("You are not eligible for the scheme");
    }
}

fixeddeposit(25);
fixeddeposit(17);
fixeddeposit(30,"not eligible for scheme");