function playername(n:string):void
{
    console.log(n);
}
playername("Virat Kohli");

console.log("-----------------------------");

function playerplays(game:(n:string)=>void):void{
    game("cricket");
}
playerplays(playername);