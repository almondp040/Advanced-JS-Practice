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

//Example of an impure function: 
let value = 2; 
//This is impure because we are updating and changing a the value of 2
//The same input should give us the same output
function square(num) {
  value = num * num; 
  return value
}

//Pure function: 
//Where the value is not being changed
//Function takes in a number and squares that number 
function pureSquare(num) {
    return num * num; 
}
pureSquare(4); 


//Another example: 
const colors = ["red", "blue"]
function addToArray(array, value) {
     array.push(value); 
     return array; 
}; 

console.log(addToArray(colors, "Yellow"))//This is a impure fucntion since it is changing the array of colors!

//Instead we will make a copy of the array for use: 
function pureAddToArray(array, value) {
    return [...array, value]; //Copy of our array and the value we will push to the copy!
}

console.log(pureAddToArray(colors, "Orange"))

//This does not change the array of colors, but instead copies it, then from there we can change the copy!


//Higher Order Functions: 
//Wrote a function that takes a function and runs it twice
function doTwice(func) {
    func(); 
    func();
}

//Takes a function that spits out our console log and since the higher order function runs it twice, this will happen in the doTwice function

doTwice(()=>{

    console.log("Hello there, this will probably run twice!")

}); 

//Returning a function: 
//Essentially it makes a function for us: 
function multiplyBy(factor) {
    //Makes a function that takes in a number and uses that to multiply by the factor:
    return (number)=>{
        return number * factor; 
    }; 
}; 

//To use our function being returned we must assign it to a variable
//This first assignment runs the multiplyBy function
const triple = multiplyBy(3); 
const double = multiplyBy(2); 

//Essentially this is what we are doing: 
multiplyBy(4)
//Then by calling the assignment this will run the second function inside of the first: 
console.log(
triple(10), 
double(10)
)


//Immutability with Arrays
const nums = [1,2,3,4,5] // we do not want to change this so we will make a copy!

function pushArray(array, value) {
    return [...array, value]
}

function removeLastItem(array) {
    return array.slice(0, -1); 
}

console.log(
    pushArray(nums, 6),
    removeLastItem(nums)
)


//Immutability with Objects
const person = {name: "Almond", age: 29}; 
//{...person, age: 16} when called will make a copy of our object and change the age to 16

//Recursion

//Computing a Factorial with recursion
//Kinda like making a loop without the loop
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1; 
    }

    //We call the function we created inside of itself, this is recursion: 
    return number * factorial(number-1) //Will call this function repeatedly
}; 
console.log(
    factorial(2)
)