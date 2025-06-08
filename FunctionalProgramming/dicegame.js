console.log("Dice Game !"); 

//Will show the difference between the iterative approach and the functional programming approach

//Iterative Approach to the dice game: 
class DiceGame {
    constructor(buttonId, paragraphId) {
        //HTML Elements:
        this.buttonId = document.getElementById(buttonId) 
        this.paragraphId = document.getElementById(paragraphId)
        this.buttonId.addEventListener("click", this.rollDice)
    }

    //Generate our random number from 1 to 6:
     generateRandomNumber  = () => {
       return Math.floor(Math.random() * 6) + 1; 
    }

    //Roll dice function
    rollDice =() => {
       const roll = this.generateRandomNumber()
        
        if (roll === 6) {
            const script = `You Win your roll was ${roll}`; 
            console.log(script); 
            this.paragraphId.innerText = script;
            return script;
            
        } else {
            const script = `Here's your roll ${roll}`;
            console.log(script);  
            this.paragraphId.innerText = script; 
            return script; 
        }
    }
}

const  createGame = new DiceGame("diceRoll", "statement"); 

// setInterval(() => {
//    let run = createGame.rollDice(); 
//    console.log(run)

// }, 2000);


