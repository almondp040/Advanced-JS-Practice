//Excercise 1 Number Facts:
const baseURL = "http://numbersapi.com/"
//Write a function that makes a request to the Numbers API to get trivia about your favorite number DONE defaults to 1 if no numbers are provided
// const showNumberTrivia = async (number = 1) => {
//   try {
//       const response = await fetch(`${baseURL}${number}/trivia?json`)
//       //console.log(response)
//       const data = await response.json()
//       const numberFact = data.text
//       console.log(numberFact)
//   } catch (error) {
//     console.log("Error:", error)
//   }
// }

// showNumberTrivia()
//Write a function using promise race that returns the first result to the console SEPERATE FUNCTION FROM ABOVE!
//The function itself MUST take in a array
const showNumberRace = async (num) => {
   try {
     const responsePromises = num.map((number)=> fetch(`http://numbersapi.com/${number}/trivia?json`))
     const result = await Promise.race(responsePromises)
     const data = await result.json()
     console.log(data.text)
   } catch (error) {
    console.log("Error:", error)
   }
}





//Write a function using promise all that asks trivia about different numbers, make all of the requests at the same time and have error logic inside
//Will need to use array.map for our fetch, and have our function take in a array
//Responses Pass or Fail should return an array

const showNumberAll = async (num) => {
    const responsePromises = num.map((number)=> fetch(`http://numbersapi.com/${number}/trivia?json`))
    const resultAll = await Promise.allSettled(responsePromises)
    
const okResponses = resultAll.filter((r)=> console.log(r))
console.log(okResponses)
}
//Write a main function that will call all of these functions in order (custom promise) ONLY after the current function completes

const main = () =>{
   // showNumberTrivia()
  //  showNumberRace([2,3,4,5])
    showNumberAll([3,4,5, "WOW"])
}

main()