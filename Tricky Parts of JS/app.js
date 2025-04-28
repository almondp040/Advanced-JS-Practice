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
    console.log("++ is before:", countMe); 
    return countMe; 
}

}

const countTest = new Counter(); 
countTest.nextAfter()
countTest.nextBefore()
countTest.nextBefore()


