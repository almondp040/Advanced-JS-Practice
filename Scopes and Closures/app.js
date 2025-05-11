//var recap
//Global: 
var color = "red"; 

function run() {
    //Only in the function: 
    var newColor = "purple"; 
    console.log(color, newColor); 
}
run(); 

if (true) {
    let animal = "Grizzly Bear"; 
    console.log("Here's my animal:", animal); 
}

//We will not see animal outside of the condition since its scoped to it
