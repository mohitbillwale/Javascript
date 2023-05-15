console.log("This is Tutorial Java Script");
function great(name,greatText = "MOHITTFYYCTT"){
    console.log(greatText + "" +    name); 
    console.log(name + " is Good Boy"); 
}

let name = "MOHIT";
let name1 = "MAYANK";
let name2 = "KARAN";
let name3 = "MOHIT";
let greatText = "Good Morning";

great(name, greatText);
great(name1, greatText);
great(name2, greatText);
great(name3);
// console.log(name + " is Good Boy");
// console.log(name1 + " is Good Boy");
// console.log(name2 + "is Good Boy");
// console.log(name3 + "is Good Boy");