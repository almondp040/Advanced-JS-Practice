const greet = (person) =>{
    console.log(`Hello There! ${person}`)
}; 

greet("Elton"); 

function callWithBlue(func) {
    func("Orange"); 
}

//Pass our call with Blue function greet: 
callWithBlue(greet)

//Can also work with a anonoymous function: 
callWithBlue((color)=>{
    console.log(`${color} is the best color`)
})