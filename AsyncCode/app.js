//Async Code Practice and Study Sesh: 

//Callback example: 
//Filter function takes in a function to filter the results: 
const nums = [1,2,3,4,5,6,7,8,9,10]; 

const evens = nums.filter((number)=> number %2 === 0); 

console.log(evens); 

//Promises: Hitting the pokemon api: 
const baseUrl = "https://pokeapi.co/api/v2/pokemon"; 
const url = `${baseUrl}/1`; 

//We can use fetch to make API calls: 
//Use the curly brackets if we have more than one item for the function fyi

//.then and .catch example


//Make multiple Pokemon Request Example: 
//.then and .catch example
fetch(url)
//Pokemon 1:
.then((data)=>{
    console.log("Data 1: ", data); 
    return fetch(`${baseUrl}/1`)
})
//Pokemon 2: 
.then((data)=>{
    console.log("Data 2: ", data); 
    return fetch(`${baseUrl}/2`)
})
//Pokemon 3: 
.then((data)=>{
    console.log("Data 3: ", data); 
    return fetch(`${baseUrl}/3`)
})
//Pokemon 4:
.then((data)=>{
    console.log("Data 4: ", data); 
    return fetch(`${baseUrl}/4`)
})
//Pokemon 5: 
.then((data)=>{
    console.log("Data 5: ", data); 
    return fetch(`${baseUrl}/5`)
})
.catch((error)=> console.log("Error is: ", error)); 