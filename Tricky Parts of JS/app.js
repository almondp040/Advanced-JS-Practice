

//Float Imprecision, JS does some funky stuff with decimals: 
console.log(0.1 + 0.2) // equals 0.30000000000000004

//Are floats equal to make sure we do not encounter any errors working with large decimals: 
//Libraries can help with this as well
function areFloatsEqual(a, b, epsilon = 1e-10) {
    return Math.abs(a-b) < epsilon; 
}; 

//Largest number we can work with: 
let largeNumber = Number.MAX_SAFE_INTEGER; 

//We start to lose accuracy due to the extremely large number so we cannot be sure we are getting precise results: 
console.log(largeNumber +8); 

//We can use BigInt() to work with really large numbers: 
let bigAssNum = 217389172389127893127893127219837128921781973128912798218912372819371283n; 

let superNum = BigInt(Number.MAX_SAFE_INTEGER); 

//This will work as long as the first big number has a n behind it
console.log(bigAssNum + superNum); 

//How to check if a number is NOT a number, can take arrays and will return a 0. dont ask why lol
let string = "I like my dogs"; 
let crazy = 0/0; 
console.log(isNaN(crazy)); // true, NOT A NUMBER
console.log(isNaN(string)); //If true then the item we are passing to this function is NOT a number; 
console.log(isNaN(5));  // if false then the item we are passing to this function IS a number; 

//2nd way to see if a number is NOT a number: will ONLY return TRUE if that value is truly not a number
const test = Number.isNaN()//truely makes sure the value passed through is a number or not
console.log("Number.isNAN Result:", test); 

//  - ++x and x++ depends on if we add first or not: 
//Also works with -- as well
let x = 5; 
let y = x++; //5+1 = 6. Gets the value of x then adds

let y2 = ++x; // 6 + 1 = 7. Add first then we get the value of x
console.log("Value of x:", x, "Value of y: ", y, "Value of y2: ", y2); 

class Counter {
        count = 1
        nextAfter(){
    let countMe = this.count++; 
    console.log("++ is After: ", countMe); 
    return countMe; 
}

nextBefore(){
    let countMe = ++this.count; 
    return `++ is before ${countMe}`; //return is our output of this function!
}

}

const countTest = new Counter(); 
countTest.nextAfter()
console.log(countTest.nextBefore())
//countTest.nextBefore()

//Return reminder is just the output of the function: 
const favNum = (num = 0)=>{
return `My favorite number is: ${num}`; 
}

const runNum = favNum(6); 
console.log(runNum); 

//Generator Example: 
//Write our genator first, then call it with next.()
function* evens (n){
    while (true) {
        n +=2; 
        yield n; 
    }
}



//Each time we call the next() function this will return whatever our yield value is
const evenGen =evens(8); // seems like a shorter way to write loops
console.log(

    evenGen.next(),
    evenGen.next(),
    evenGen.next(),
    evenGen.next(),
    evenGen.next(),
    evenGen.next()

); 

//Literally just putting a star and using yield instead of return, kinda like a new way to write a function that returns a specific value each time: 
//Really useful for repeatable functions that iterate
//Or if we need a function to spit out an object
//Once done the last object will return undefined and done will be set to true
const cats = function* () {

    yield "Blue"; 
    yield "Kitty"; 
    yield "Cream"; 
    yield "Creedence"; 

    //Insert my loop: Loop is required, we're basically packing up a loop that way we only need to write it once 
    // while (true) {
    //     console.log(n)
    //     n +=1; 
    //     yield `Here are my ${n} cats`; 
    //     yield `They are so awesome!`; 
    // }

};

//Now we assign our objects to a variable:
const callCats = cats(); 

const Blue = callCats.next().value; 
console.log(
    `We love ${Blue}`
    // callCats.next().value, 
    // callCats.next(), 
    // callCats.next(), 
    // callCats.next(), 
    // callCats.next(), 
 
)


//fibonacci example: 

