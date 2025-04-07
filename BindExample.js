// const conan = {
//     name: "Conan", 
//     city: "Los Angeles", 
//     sing: function (){
//         console.log("This is:", this)
        
//         return `${this.name} sings LA LA LA`
//     }
// }





// //const button = document.getElementById("button")

// button.addEventListener("click", conan.sing.bind(conan))
//button.addEventListener("click", conan.sing.bind(conan))

//Bind with Callbacks using setTimer

class Counter {
    constructor(counter, interval) {
        this.counter = counter
        this.interval = interval
    }


    start(){
        setInterval(this.incrementAndPrint.bind(this), 1000 ); 
    }

    incrementAndPrint(){
                console.log(this.counter); 
                this.counter += this.interval; 
    }
}

const count = new Counter(1, 100)

count.incrementAndPrint()
//count.start()



