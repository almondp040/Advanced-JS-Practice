//Async and Await practice

//We can define any function as a async function and this function will return a promise: 

//Async turns hello into a promise that we can use

const baseUrl = "https://pokeapi.co/api/v2/pokemon"; 
const url = `${baseUrl}/1`; 

//Function allows us to fetch 4 pokemon using their IDs: 
const fetchPokemon = async (pokemon1, pokemon2, pokemon3, pokemon4) => {
    
//Make the call to the API to grab our data: 
    const response1 = await fetch(`${baseUrl}/${pokemon1}`)
    const response2 = await fetch(`${baseUrl}/${pokemon2}`)
    const response3 = await fetch(`${baseUrl}/${pokemon3}`)
    const response4 = await fetch(`${baseUrl}/${pokemon4}`)

//Turn our response into JSON so we can use the data
    const pokemon1Data = await response1.json()
    const pokemon2Data = await response2.json()
    const pokemon3Data = await response3.json()
    const pokemon4Data = await response4.json()
    console.log(pokemon1Data)
   
    //Setting up our HTML: Yes, there are better ways to go about this, for this example lets be lazy
    const h3 = document.getElementById("pokemonName"); 
    h3.innerText = `1: ${pokemon1Data.name} 2: ${pokemon2Data.name} 3: ${pokemon3Data.name} 4: ${pokemon4Data.name}` 

    const img1 = document.getElementById("pokemonImg1")
    const img2 = document.getElementById("pokemonImg2")
    const img3 = document.getElementById("pokemonImg3")
    const img4 = document.getElementById("pokemonImg4")
    const setImg1 =  img1.src = pokemon1Data.sprites.front_shiny
    const setImg2 =  img2.src = pokemon2Data.sprites.front_shiny
    const setImg3 =  img3.src = pokemon3Data.sprites.front_shiny
    const setImg4 =  img4.src = pokemon4Data.sprites.front_shiny
}

//Now we can use our promise on the front end:
fetchPokemon(4, 20, 18, 87)




