//Class way that is new: 
// class Dog {
//     constructor(name, breed) {
//         this.name = name
//         this.breed = breed
//     }

//     bark (){
//         console.log(`${this.name} says WOOF!!`)
//     }

//     sleep(){
//         console.log(`${this.name} is sleeping!!`)
//         console.log("This is:", this); 
//     }
// }


// //New Keyword: 
// const kevin = new Dog("kevin", "Aussie"); 

// kevin.bark()
// kevin.sleep()

//Before we had classes we would have to write constructor functions: 
//Constructor functions would generate a object
//THIS IS WHAT CLASSES DO UNDER THE HOOD!!
function Dog(name, breed){
    this.name = name; 
    this.breed = breed; 
    console.log("This is:", this); //old method that will give us the global object if we do not put new in front of the function

}


//Prototype method to illistrate the old way
Dog.prototype.bark = function () {
    console.log(`${this.name} says WOOF!!`)
}

Dog.prototype.sleep = function(){
    console.log(`${this.name} is sleeping!!`)
}

//If we put the New keyword infront of the Dog function this will make us a Dog object: 
//Create 3 new dogs to use the bark and sleep prototypes
const chuck = new Dog("Chuck", "Aussie"); 
const elton = new Dog("Elton", "Golden");
const pepper = new Dog("Pepper", "Doodle"); 

chuck.bark()
elton.bark()
pepper.bark()

//We can use constructor to create another dog, works like the call() method: 

const adam = elton.constructor("Adam", "Pug")






function User (username, email){
    this.username = username; 
    this.email = email; 
    this.isAdmin = false; 


}


const almond = new User("almond", "almondpaschal@gmaill.com"); 


//Prototypes Pt. 2
const myObj = {
    color: "Purple", 
    score: 99, 
    greet (){
        console.log("Hi!!")
    }
}

console.log(myObj); 

const nums = [1,2,3]