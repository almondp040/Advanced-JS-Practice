const BASE_URL = "https://pokeapi.co/api/v2/pokemon"; 

const fetchPokemon = [
    fetch(`${BASE_URL}/2`), 
    fetch(`${BASE_URL}/3`), 
    fetch(`${BASE_URL}/4`), 
    fetch(`${BASE_URL}/5`), 
    fetch(`${BASE_URL}/6`), 
    
]; 

Promise.any(fetchPokemon) //will return the first resolved value and will only reject if ALL promises are rejected!
    .then((data)=>{
       
       console.log("Promise.any value: ", data)
    })
    .catch((error)=> console.log("Error: ", error));  


Promise.race(fetchPokemon)//will return the first value regardless if it got rejected or not
    .then((data)=>{
        console.log("Promise.race value: ", data); 
    })
    .catch((error)=> console.log("Error: ", error));  


//Async / Await: Response first, then use .json() on our response
const pokemon = async () => {
    const pokeAnyResponse = await Promise.any(fetchPokemon); 
    const pokeAnyData = await pokeAnyResponse.json(); //JSON Conversion of our response

console.log(pokeAnyData.name)
    
   
}
pokemon()

