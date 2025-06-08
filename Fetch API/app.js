//Fetch API section: Use classes cause more practice!
class apiGet {
    constructor(url, id) {
        this.url = url
        this.id = id
        this.urlWithID = `${this.url}${this.id}`
    }

    //Fetch Call without any fancy headers: 
  async  fetchData (){
   try {
    
    const response = await fetch(this.urlWithID); 
    //Must use response.ok to make sure our response object is ok, then we can grab our data
    if (response.ok) {
    console.log("Headers", response.headers); 
    const data = await response.json(); 
    console.log(data); 
    return data; 
    }; 
    return data; 
   } catch (error) {
    console.log("Error Found", error); 
   }; 
    }

//Fetch Call with Header info: 

async fetchDataWithHeaders () {
    //Define our headers in the Headers object
    const headers = new Headers({
        'Content-Type': 'application/json', 
        'Authorization': 'OUR-API-TOKEN'
    }); 
    //Then use in fetch: 
    //Replace the url with the urlWithID property for this to actually work
    try {
        const response = await fetch("https://api.example.com/data", {headers}); 
        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.log("Error Detected!", error); 
    }
}

  }; 


//Can be used with any api and a ID, but the ID isn't really needed
const pokemon = new apiGet("https://pokeapi.co/api/v2/pokemon/", 45); 

const pokeFetch = pokemon.fetchData(); 
