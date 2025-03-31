const conon = {
    name: "Conon", 
    city: "Los Angeles", 
    sing (){
        console.log(`${this.name} sings LA LA LA`, this); 
        return `${this.name} sings LA LA LA`; 
    }
}

//Lisa call example
const lisa = {
    name: "Lisa", 
    city: "Los Angeles"
}

let sings = conon.sing
sings.call(lisa)





//Another example
class Cat {
    constructor(firstname) {
        this.firstname = firstname
    }

    dance (style = "Tango"){
        const script = `Meow, I am ${this.firstname} and I like to ${style}`; 
        console.log(script); 
        return script; 
    }
}

const Chuck = new Cat("Chuck")

//Will error out if we do not run the function
Chuck.dance()

//Call Example, where we manually set a "this" value
const max = new Cat("Max"); 

let maxDance = max.dance
maxDance.call(max, "Break Dance")

const kitty = new Cat("Kitty")
maxDance.call(kitty, "Salsa")


// function whatIsThis(params) {
//     console.log("The value of this is:", this)
// }

// whatIsThis()

// const obj = {
//     age: 2,
//     color: "purple",
//     whatIsThis: whatIsThis
// }

// obj.whatIsThis()
