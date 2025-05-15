//Create a function that takes in a whole number between 0 and 99, that returns a function that allows you to guess a random number
//If we make a new game, this should select a different random number 
//We will need to track the number of guesses, each time the function is ran until they match the number

function guessingGame() {
  const ANSWER = Math.floor(Math.random() * 100);
  let isOver = false;
  let numGuesses = 0;
 
  return function guess(num) {
    if (isOver) return "The game is over, you already won!";
    numGuesses++;
    if (num === ANSWER) {
      isOver = true;
      const guess = numGuesses === 1 ? "guess" : "guesses";
      return `You win! You found ${num} in ${numGuesses} ${guess}.`;
    }
    if (num < ANSWER) return `${num} is too low!`;
    if (num > ANSWER) return `${num} is too high!`;
  };
}

const play = guessingGame(); 

play(25)

