class Cat {
    constructor(firstName) {
        this.firstName = firstName
    }

    superGreet(){
        console.log(`#1: I am ${this.firstName}`)
        
        //With an arrow functions we do not have to bind as much since it does NOT change the value of "this"
        setTimeout(() => {
            console.log(`This is:`, this)
            console.log(`#2 I am ${this.firstName}`)
        }, 500);

        setTimeout(() => {
            console.log(`This is:`, this)
            console.log(`#3 I am ${this.firstName}`)
        }, 500);

    }


    // greetMe = () =>{
    //     console.log(`Hey There: ${this.firstName}`)
    // }





 
}



const kitty = new Cat("Kitty")

kitty.superGreet()

