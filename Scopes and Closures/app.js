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


//Scope Chain: 

//JS looks for variables in this level: 
//1. Local Scope, then 2. Outer Functions, Then 3. Global Scope
let age = 10; //Global
console.log(age); 

function outer() {
    //Now this will print out ageless due to the scope chain: 
    let age = "ageless"; //Outer
    console.log(age);

    function inner() {
        let age = "Eternal"; 
        console.log(age); 

         function superInner(params) {
        console.log(age); //will print out Eternal since there's no age assigned in the superInner Function
    }

    superInner(); 
    }
    inner(); 


}; 

outer(); //If we do not run this function then JS will grab the global scope

//Static Scoping 
//Scope is determined when the variable is declared

let animal = "Barn Owl"; 

function printAnimal(params) {
    console.log(animal); 
}; 

function alsoPrintAnimal(params) {
    let animal = "Burrowing Owl"; 
    console.log(animal); 
}; 



//Hoisting

//Example of Hoisting when we just had var: 
//How hoisting looks behind the scenes: 
var food = undefined
console.log(food); // this will be undefined since it knows what food is but it does not have a value yet
food = "pizza";
console.log(food);  


//Immediately Involked Functional Expressions: Basically running a function ASAP!
(
    function () {
        console.log("Immediately Involked Function!!!"); 
    }
)()

//Closure Example: 
//Inner functions remember the variables in the parent function
function outerFunction() {
    let outer = "Live from the Outer Function, JS will remember me!"; 

    function innerFunction() {
        console.log("From the inner function:", outer); 
    }

    //Spits out the inner function: 
    return innerFunction; 
}

const myClosure = outerFunction(); 

//ID Generator Closure example: 

function idGenerate() {
    let count = 1; 

  return function goGenerate() {
        console.log(count); 
        return count++; 
    }
}

const generateID = idGenerate(); 

generateID(); 


//Another Closure Example: 
//Create a function that will return an object with a increment, decrement and getCount object
//Basically setting variables in a parent function to be used in the child functions: 
function createCounter() {
    let count = 0; 

    //Object to contain methods to count: 
    const countObj = {
        increment(){
            count++; 
            console.log("Increment",count); 
            return count; 
        }, 
        decrement(){
            count--; 
            console.log("Decrement",count); 
            return count; 
        }, 
        getCount(){
            console.log("Current Count", count)
        }

    }

    return countObj; 
}

const counter= createCounter(); 

counter.getCount(); 
counter.increment(); 

function main() {
    printAnimal(); 
    alsoPrintAnimal(); 
    myClosure(); 
    counter.increment()
}

main(); 

