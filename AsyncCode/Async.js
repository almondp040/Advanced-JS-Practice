//Async and Await practice

//We can define any function as a async function and this function will return a promise: 

//Async turns hello into a promise that we can use

const baseUrl = "https://pokeapi.co/api/v2/pokemon"; 
const url = `${baseUrl}/1`; 

//Function allows us to fetch 4 pokemon using their IDs: 
// const fetchPokemon = async (pokemon1, pokemon2, pokemon3, pokemon4) => {
//     try {
//         //Make the call to the API to grab our data: 
//     const response1 = await fetch(`${baseUrl}/${pokemon1}`)
//     const response2 = await fetch(`${baseUrl}/${pokemon2}`)
//     const response3 = await fetch(`${baseUrl}/${pokemon3}`)
//     const response4 = await fetch(`${baseUrl}/${pokemon4}`)

// //Turn our response into JSON so we can use the data
//     const pokemon1Data = await response1.json()
//     const pokemon2Data = await response2.json()
//     const pokemon3Data = await response3.json()
//     const pokemon4Data = await response4.json()
//     console.log(pokemon1Data)
   
//     //Setting up our HTML: Yes, there are better ways to go about this, for this example lets be lazy
//     const h3 = document.getElementById("pokemonName"); 
//     h3.innerText = `1: ${pokemon1Data.name} 2: ${pokemon2Data.name} 3: ${pokemon3Data.name} 4: ${pokemon4Data.name}` 

//     const img1 = document.getElementById("pokemonImg1")
//     const img2 = document.getElementById("pokemonImg2")
//     const img3 = document.getElementById("pokemonImg3")
//     const img4 = document.getElementById("pokemonImg4")
//     const setImg1 =  img1.src = pokemon1Data.sprites.front_shiny
//     const setImg2 =  img2.src = pokemon2Data.sprites.front_shiny
//     const setImg3 =  img3.src = pokemon3Data.sprites.front_shiny
//     const setImg4 =  img4.src = pokemon4Data.sprites.front_shiny
//     } catch (error) {
//         console.log("Error Detected:", error)
//     }

// }

// //Now we can use our promise on the front end:
// fetchPokemon(4, 20, 18, 87)


// const fakeWebsite = async () => {
//     try {
//         const response = await fetch("https://nope.nope")
//         const useableData = await response.json()
//     } catch (error) {
//         console.log("Error Found:", error)
//     }
// }

// fakeWebsite()


//Parallel Async Operations, whenever it finishes it will push the results into an array
// const results = []; 

// //Add our results into an array for use: 
// fetch(`${baseUrl}/1`)
//     .then((response)=> results.push(response))

//  fetch(`${baseUrl}/2`)
//     .then((response)=> results.push(response))

// fetch(`${baseUrl}/3`)
//     .then((response)=> results.push(response))

// fetch(`${baseUrl}/4`)
//     .then((response)=> results.push(response))

// console.log(results)


//Rewrite the .then and .catch promises above as async

const asyncResults = []

const call1 = async () => {
    try {
        const response = await fetch(`${baseUrl}/1`)
        asyncResults.push(response)
    } catch (error) {
        console.log("Error Found:", error)
    }
}

const call2 = async () => {
    try {
        const response = await fetch(`${baseUrl}/2`)
        asyncResults.push(response)
    } catch (error) {
        console.log("Error Found:", error)
    }
}

const call3 = async () => {
    try {
        const response = await fetch(`${baseUrl}/3`)
        asyncResults.push(response)
    } catch (error) {
        console.log("Error Found:", error)
    }
}

const call4 = async () => {
    try {
        const response = await fetch(`${baseUrl}/4`)
        asyncResults.push(response)
    } catch (error) {
        console.log("Error Found:", error)
    }
}

call1()
call2()
call3()
call4()
console.log(asyncResults)


//In Sequence One after the Other: 
//For the .then/.catch way we will need to return the next step in the order
const results = []; 

//Add our results into an array for use: 
fetch(`${baseUrl}/1`)
    .then((response)=>{ 
        results.push(response)
        return fetch(`${baseUrl}/2`) //return 2 since this is the next step
    })
    .then((response)=>{
        results.push(response)
        return fetch(`${baseUrl}/3`) //return 3 since this is the next step
    })
    .then((response)=>{
        results.push(response)
        return fetch(`${baseUrl}/4`) //return 4 since this is the next step, 4 will not show until the next step!
    })

 

console.log("Results:" , results)

//Rewrite this as a async: 

const stepByStepResult = []
const stepByStep = async (num1, num2, num3) => {
    try {
        const res1 = await fetch(`${baseUrl}/${num1}`)
        const res2 = await fetch(`${baseUrl}/${num2}`)
        const res3 = await fetch(`${baseUrl}/${num3}`)
        
        stepByStepResult.push(res1, res2, res3)
        console.log(stepByStepResult)
    } catch (error) {
        console.log("Error:", error)
    }
}

stepByStep(1, 2, 3)

//Promise All Example when you need to run some code once all of these promises are done: 
//First put your promises in a array
//Then use Promise.all()
const lotsOfFetchCalls = [
    fetch(`${baseUrl}/1`), 
    fetch(`${baseUrl}/2`), 
    fetch(`${baseUrl}/3`), 
    fetch(`${baseUrl}/4`), 
    fetch(`${baseUrl}/5`), 
    fetch(`${baseUrl}/6`), 
    fetch(`${baseUrl}/7`), 
]

//Useful for if you want to run code after a bunch of promises are done: 
Promise.all(lotsOfFetchCalls)
    .then((response)=>{console.log("Response from .then / .catch", response)})
    .catch((error)=> console.log("Error", error))


//This is how we would use Promise.all in a async function
const lotsOfFetchCallsAsync = [
    fetch(`${baseUrl}/1`), 
    fetch(`${baseUrl}/2`), 
    fetch(`${baseUrl}/3`), 
    fetch(`${baseUrl}/4`), 
    fetch(`${baseUrl}/5`), 
    fetch(`${baseUrl}/6`), 
    fetch(`${baseUrl}/7`), 
]

const getLotsOfCalls = async () => {
    try {
        const response = await Promise.all(lotsOfFetchCallsAsync)
        console.log("Response from Async:", response)
    } catch (error) {
        console.log("Error:", error)
    }
}

getLotsOfCalls()

//Promise.allSettled() example using the Github API: 
const allSettledDemo = async () => {
    //Base Github API: 
    const baseURL = "https://api.github.com"; 


    try {
        let elieP = fetch(`${baseURL}/users/elie`)
        let joelP = fetch(`${baseURL}/users/joelburton`)
        let badURL = fetch(`https://definitelynotawebsite.com`)
        let coltP = fetch(`${baseURL}/users/colt`)
        let anotherBadUrl = fetch("https://definitelynotawebsite.com")

        //Promise.allSettled example will return us with the results in a array
        let result = await Promise.allSettled(
            [
                elieP, 
                joelP, 
                badURL, 
                coltP, 
                anotherBadUrl
            ]
        )


  
//Filter out the Filled and Rejected promises, no need for a new array since filter will return our filtered array
const passed = result.filter((promise)=> promise.status === "fulfilled")
const failed = result.filter((promise)=> promise.status === "rejected")

console.log(passed)
console.log(failed)
       
    } catch (error) {
        console.log("Error:", error)
    }
}

allSettledDemo(); 


//Promise Race() Example: Will return the first one back regardless of whether the promise is Fulfilled or Rejected: 
const lotsOfFetchCallsRace = [
    fetch(`${baseUrl}/1`), 
    fetch(`${baseUrl}/2`), 
    fetch(`${baseUrl}/3`), 
    fetch(`${baseUrl}/4`), 
    fetch(`${baseUrl}/5`), 
    fetch(`https://nope.nope`), 
    fetch(`${baseUrl}/7`), 
]


Promise.race(lotsOfFetchCallsRace)
    .then((response)=> console.log("Race:", response))
    .catch((error)=> console.log("Error:", error))


//Building our own promises example: 

//Make a new promise in wait
//Make me a new promise and after a given duration resolve the promise
//new Promise takes in a resolve or reject function and returns a promise
const wait = (duration) =>{
    const newPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("this syntax is kinda shitty"); 
        }, duration)
    })
    return newPromise
}

// const demo = async (params) => {
//     console.log("Hello!!")
//   const value =  await wait(1000)
//     console.log("There!")
//     console.log(value)
// }

// demo()

//Can also call wait like this: 
wait(2000).then((value)=> console.log(value))


