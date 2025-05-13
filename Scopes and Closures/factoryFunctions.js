//Factory Functions example: 
//All we are doing is returning functions!!
function createExponentFunction(exp) {
    return function (val) {
     //   console.log(val, exp); 
        return val ** exp; 
    }
}; 

const square = createExponentFunction(2); 
const cube = createExponentFunction(3);

const run = (sqr, cubeEnter)=>{
    console.log(sqr, cubeEnter); 
    sqr = square(sqr); 
    cubeEnter = cube(cubeEnter); 
    //console.log(sqr, cube); 
    return {
        Square: sqr, 
        Cube: cubeEnter
    }; 
}

const main = (num1, num2) =>{
    console.log(square(num1), cube(num2)); 
    //console.log(run(5,6))
   return run(num1,num2); 
}

//Set to a object that way we can use it: 
const obj = main(10,48); 

console.log(
    
    `This is our Square Value: ${obj.Square}, and this is our Cubed Value: ${obj.Cube}.` 
    
); 

//Unique ID Example: 
//Build a unique ID generator that returns a prefix
//Function takes in a prefix, then increments the count: 
const uniqueIDGenerator = (prefix) =>{
    let count = 0; 
    return counter = () =>{
         count ++; 
        console.log(prefix, count); 
        return ` ${prefix}-${count}`; 
    }; 
}

//Functions to run:
const getBookId = uniqueIDGenerator("book"); 
const userId = uniqueIDGenerator("user"); 
console.log(userId(), getBookId()); 


//Button with an event listener example: 
const click = () =>{
    let count = 0; 
    return increaseCount = () =>{
        let value = count++; 
       console.log(value); 
       return value;   
    }; 
}; 



const button1 = document.querySelector("#btn1"); 
const button2 = document.querySelector("#btn2"); 
const button3 = document.querySelector("#btn3"); 

button1.addEventListener("click", click())
button2.addEventListener("click", click()); 
button3.addEventListener("click", click()); 

//Another way of doing this with the button in the function: 
//Better way to do this that way the button variable does not need to be global!
const createButton = (buttonId) =>{
    let button = document.getElementById(buttonId); 
    let count = 0; 
    //Function has to be in the other function
  button.addEventListener("click", ()=>{
    count+=1; 
    button.innerText = `Clicked ${count} times`; 
  }); 
}; 

createButton("btn4"); 
createButton("btn1"); 
createButton("btn2"); 
createButton("btn3"); 

