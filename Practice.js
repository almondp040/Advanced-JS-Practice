//Practice: 
const butters = {
    firstName: "Butters",
    lastName: "Cluckly",
    greet: function(){
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

const fluffy = {
    firstName: "Fluffy",
    lastName: "Meowson",
}

function greetFluffy(){
    // Invoke the greet method but instead of returning "Hello Butters Cluckly", return "Hello Fluffy Meowson". Do not modify the fluffy object above. 
   const fluffyCall =  butters.greet.call(fluffy); 
   return fluffyCall
   
}

greetFluffy(); 


class Timer {
    constructor(tick = 0, tickerID) {
        this.tick = tick
        this.tickerID = tickerID
    }



    start(){
     this.tickerID =   setInterval(()=>{

        this.tick +=1; 
        console.log("New Test:", this.tick)

        if (this.tick > 4) {
            this.stop()
        }

        }, 1000)


        
    }

    stop(){

        clearInterval(this.tickerID)
        console.log("Stopped!!")

}

}


const time = new Timer()

time.start()



