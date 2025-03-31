const ringo = {
    firstName: "Ringo", 
    greet (greeting){
        console.log(`${this.firstName} says ${greeting}`)
    }
}

const george = {
    firstName: "George", 
    lastName: "Harrison"
}

ringo.greet("Hey!!")

//Call Example
ringo.greet.call(george, "Now we use the Call Method!")

//Apply example
ringo.greet.apply(george, ["Hello There Friend!!"])

//We can also use apply to pass an argument, call does not care but apply passes an array

//Apply inside of a function example:
const nums = [1,3,5,7,99]

function applyExample(params) {
    console.log(Math.max.apply(null, nums))
}

applyExample()