

class Circle {

    getArea(circumference) {
        const pi = 3.14; 
        const radius = circumference * circumference
        console.log(pi * radius)
    }

    getName (name) {

        console.log( `Hello There ${name} It's so nice to meet you! `)

    }

}

class SearchEngine {
    constructor(text, results, url) {
        this.text = text; 
        this.results = results; 
        this.url = url; 
    }

    getText (){
        console.log(`Do we now understand Objects? ${this.text}?`)
    }

    async getResults (searchField){
        console.log(searchField); 
        
        try {
            const response = await fetch(this.url); 
            const data = await response.json()
            
       return data
            
        } catch (error) {
            console.log(error); 
        }

    }

    async processResults () {
        try {
            const fetchedData = await this.getResults(); 
            const results = fetchedData.results; 

            results.forEach(item => {
                console.log(item.name, item.diameter, item.population)
            });
            
        } catch (error) {
            console.log(error); 
        }
    }
}

// const search = new SearchEngine("Almond", "PASS", "https://swapi.dev/api/planets" )




// console.log(search.url)

// search.getResults(search.url)
// search.processResults()


const myCircle = new Circle()

myCircle.circumference =20
myCircle.name = "Almond"
console.log(myCircle)
myCircle.getArea(myCircle.circumference)



//myTriangle becomes a object with new

const testing = new Triangle()


// testing.a =6
// testing.b = 7
// testing.name = "Almond!!"
// console.log(testing)
// testing.getTriangleName(testing.name)


class Spaceship {
    constructor(shipType, fuel, destination) {
        this.shipType = shipType; 
        this.fuel = fuel; 
        this.destination = destination; 
    }

    getShipType (){
            console.log(`Welcome Aboard ${this.shipType}, please enjoy your stay!!`)
    }

    getRemainingFuel (){
        console.log(`We have ${this.fuel} remaining!`)
    }

    getDestination(){

      console.log(`Here's your destination: ${this.destination}`)  

    }
}

const shipInfo = new Spaceship(); 
shipInfo.destination = "Saturn"
shipInfo.fuel = "FULL"
shipInfo.shipType = "MK. 5000 SPEEDMASTER"

shipInfo.getShipType()
shipInfo.getRemainingFuel()
shipInfo.getDestination()
