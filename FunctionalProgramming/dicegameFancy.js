//Functional Programing Dice Game: Fancy Version
//Really overkill but good practice!

//Utility Functions: CAN COME FROM A FP LIBRARY!!!
const partial = (func, ...fixedArgs) => (...args) => func(...fixedArgs, ...args); //allows a function to run with a prebaked in function
const compose = (...fns) => fns.reduceRight((a, b)=> (...args) => a(b(...args))); //allows us to run multiple functions at once that passes things from one function to another


//Make our overall function first then split it out into pure functions: 
const getRandomRoll = () =>{
    return Math.floor(Math.random() * 6) + 1; 
}; 

const checkWin = (roll) => roll === 6; 

const displayResult = (element, message) =>{
    element.innerText = message; 
}

const message = (roll) =>{
     const condition = checkWin(roll) ? `You rolled a ${roll}. You win!` : `You rolled a ${roll}. Try again!`; 
     return condition; 
}

//Returning a function shortcut too: 
const createDiceGame = (rollBtnId, resultDisplayId)=>{
const rollBtn = document.getElementById(rollBtnId); 
const resultDisplay = document.getElementById(resultDisplayId); 
const showResult = partial(displayResult, resultDisplay);  //baking in our result and resultDisplay
const playGame = compose(getRandomRoll, message, showResult); 
rollBtn.addEventListener("click", playGame)

}

//Run these 3 functions at once

createDiceGame("diceRoll", "statement"); 

