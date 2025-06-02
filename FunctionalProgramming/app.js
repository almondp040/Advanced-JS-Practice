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


//Partial Application with Bind: 
function greetAgain(greeting, name) {
    console.log(`${greeting}, ${name}`); 
}

//Just baking in the greeting, but we still have to add our name to the function
//This will have the greet function and arguments baked into the aussieGreet
const aussieGreet = greetAgain.bind(null, "G'Day"); 

//So now when we call aussieGreet this will set our greeting to G'Day and all we have to provide is the name
aussieGreet("Elton"); 

//Able to pass in more arguments if i need to. Essentially we are building on top of an existing function
const spitefulGreet = greetAgain.bind(null, "I hate you")

spitefulGreet("Tom Brady"); 

//How to build a partial function from scratch: 
function multiplyPartial(a, b) {
    return a*b; 
}

//With this partial we can take in multiple arguments at once, and these arguments have to be in order. 
//We can bake in arguments like a URL or a API key for example
function partial(func, ...fixedArgs) {
    return function (...remainingArgs) {
        return func(...fixedArgs, ...remainingArgs) 
    }
}

const doublePartial = partial(multiplyPartial, 2); 
const triplePartial = partial(multiplyPartial, 3)

console.log(

    doublePartial(10), 
    triplePartial(30)


)

//Calculate Tax example using a partial function: 
//We use the calculate tax, and with partial we can essentially copy this function, pass in a set tax rate, then run our calculate function with a given amount

function calculateTax(rate, amount) {
    total = rate * amount; 
    const rounded = total.toFixed(2); 
    return Number(rounded); 
}; 
const calculateCASalesTax = partial(calculateTax, .07); 
const calculateNJSalesTax = partial(calculateTax, .06);
console.log(
    calculateCASalesTax(1000),
    calculateNJSalesTax(1000)
); 

//Composition is combining multiple functions to build a more complicated function
const add = (a, b) =>{
    return a+b; 
}

const squareComp = (a)=>{
    return a*a; 
}

//Using multiple functions at once to get 1 result: 
//Having 1 function do the heavy lifting as the other function runs the result
const test = add(squareComp(3), squareComp(6)); // 9 + 36 = 45
const test2 = squareComp(add(4,3)); // 4+3 = 7 then 7*7 = 49

//Now we can make a 3rd function that will combine everything together: 
//addAndSquare uses square and add 
const addAndSquare = (a,b) =>{
  return  square(add(a,b)); 
}

const test3 = addAndSquare(4, 4); 
console.log(test, test2, test3)

//A simple compose function that we can use for other stuff: 
//Expects 2 functions that takes in 2 functions that returns a function with a value, then will run function2 with function1 inside of it with a value
//ANYTIME WE ARE RETURNING A FUNCTION WE MUST SAVE IT TO A OBJ THEN RUN THAT OBJ
function compose(fn1, fn2) {
    return function (value) {
        return fn2(fn1(value)); 
    }
}; 

function repeatTwice(string) {
    return string.repeat(2); 
}; 

function upperCase(string) {
    return string.toUpperCase(); 
}; 

const repeatAndUppercase = compose(repeatTwice, upperCase); 
const myThoughts = repeatAndUppercase("Idk about functional programming"); 

const squareAgain = (a) => a*a; 
const doubleAgain = (a) => a *2; 

const doubleAndTriple = compose(squareAgain, doubleAgain)
const run = doubleAndTriple(4)
console.log(myThoughts, run)

//Fancy Compose Function: 
//Takes in a array of functions then returns a new function via reduce right that takes in the data
function fancyCompose(...functions) {
    return function (data) {
      return functions.reduceRight(
            (val, func)=>func(val), data
        
        )
    }; 
}; 

//See example: 
function lowerCase(string) {
    return string.toLowerCase(); 
}

function splitWords(string) {
    return string.split(" "); 
}

function joinWithDash(array){
    return array.join("-"); 
}

function replaceS(string) {
    return string.replaceAll("s", "$"); 
}

//Starts from right to left, therefore we need joinWith to go first: 
//Can also make a class / object with methods that can do this as well
//Reduce takes multiple values from an array and reduces it to one
//This will work with any number of functions!
const newCompose = fancyCompose(joinWithDash, splitWords, lowerCase, replaceS); 
console.log(newCompose("I HAT OKRA AND VFE also the s should change")); 



//Currying Example:

//Regular Function: 
function addRegular(a, b, c) {
    return a+b+c; 
}; 

//Currying Function: CAN ALSO JUST USE A FUNCTIONAL PROGRAMMING LIBRARY!!!
//Defining multiple functions inside of a function then combining all of the arguments together
function addCurryExample(a) {
    return function (b) {
        return function (c) {
            return a+b+c
        }
    }
}

const fifteenExample =addCurryExample(5)(5)(5); 

console.log(fifteenExample)

//Fancy Version of Currying
function add3(x,y,z) {
    return x+y+z; 
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args); 
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2)); 
            }
        }
    }; 
}; 

const curriedAdd = curry(add3); 

//Gives us the ability to call things in multiple ways, makes our functions extremely flexible: 
//Can use with 1 or 2 or all 3 arguments: 
console.log(
    curriedAdd(3,4,5),
    curriedAdd(3)(4)(5)

)