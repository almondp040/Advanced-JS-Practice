//Design Patterns and Proxy Objects

//Module Pattern 
//Immediately invoke our function then return a function or variable other pieces of code can interact with
const ChickenModule = (()=>{
const eggColor = "white"; //private variable
const cluck = () => console.log("cluck cluck"); //private function 
return {
    layEgg: ()=>{
        console.log("Laid a ", eggColor, "egg"); 
        cluck();
    }
}
})()

ChickenModule.layEgg(); 

//Module pattern in action: 
const myModule = (()=>{
const privateMethod = "This should be private"; 
const privateFunc = ()=> console.log("This is our private function!!"); 

//Then we return or output what we want to be public:
return{
 publicVariable: "I AM PUBLIC!!!", 

 publicFunc: ()=>{
    privateFunc()
 }
}
})()

//Singleton Pattern
//Creates only 1 instance of total chickens
const ChickenFarm = (()=>{
let instance; 
const createInstance = () => ({totalChickens: 100}); 
return {
    getInstance: ()=>{
        if (!instance) {
            instance = createInstance();
        }
        return instance
    }
}
})()

//DB Connection Example using the Singleton Pattern
//Only makes 1 DB connection no matter what
//Basically only make a connection IF there is no instance, if there is grab the established connection
class DatabaseConnection {
    constructor() {
        if (!DatabaseConnection.instance) {
            this.connection = this.createConnection()
            DatabaseConnection.instance = this; 
        }
        return DatabaseConnection.this
    }

    createConnection(){
        //Logic to connect to the DB
        console.log("Creating connection to DB"); 
        return "I am the DB Connection Object"
    }

    //Can enter other DB Methods if needed!
}

//Observation Pattern: 
//Imagine the subject class as a button and we apply methods and functions to it
//Subjects is an array then our methods will determine what happens to the array
class Subject {
    constructor(parameters) {
        this.observers = [];
    }
    subcribe(fn){
        this.observers.push(fn); 
    }

    unsubcribe(fn){
      this.observers = this.observers.filter((observe)=> observe !== fn); 
    }

    notify(data){
        this.observers.forEach(fn => fn(data)); 
    }
}

const observer1 = (data) => console.log("Observer 1", data);
const observer2 = (data) => console.log("Observer 2", data); 
const observer3 = (data) => console.log("Observer 3", data);  

const nums = [1,2,3,4,5]; 
observer1(nums); 
observer2(nums); 
observer3(nums); 

const subject = new Subject(); 
subject.subcribe(observer1); 
subject.subcribe(observer2); 
subject.subcribe(observer3); 


subject.notify(nums); 

//Subcriber Example 
//A great use case we should write out our classes and what they do before we code!!
class Subscriber {
    constructor(parameters) {
        this.subscriber = []
    }

subcribe(subcribers){
    this.subscriber.push(subcribers); 
}

unsubcribe(subcribers){
    this.subscriber = this.subscriber.filter((sub)=> sub !== subcribers)
}

publish(post){
    this.subscriber.forEach((subcribers)=> subcribers.notify(post)); 
}
}

class ActualSub {
    constructor(name) {
        this.name = name; 
    }

    notify(post){
        const script = `${this.name} received a notification: New Post Published: ${post}`; 
        console.log(script)
    }
}

const Allen = new ActualSub("Allen"); 
const Barry = new ActualSub("Barry"); 

const blog = new Subscriber(); 

const allenSubs = blog.subcribe(Allen); 

console.log(Allen.notify("New Post from Allen")); 

//Registry Pattern: Like this pattern the most!
//Here's our chicken data in the form of a class
//Creates a shared centralized place that contains all methods tied to the object
class Chicken {
    constructor(id, name, age, breed) {
        this.id = id, 
        this.name = name, 
        this.age = age, 
        this.breed = breed
    }
    //Chicken Methods: 
}

//Chicken class represents our data!!
class ChickenRegistry {
    #chickens = new Map(); 

    //Passes in a chicken with the items from the Chicken Class
    addChicken(chicken){
        if (!chicken.id) {
            throw new Error("Chicken must have a ID!");
        }

        this.#chickens.set(chicken.id, chicken); 
    }

    getChicken(id){
        console.log(this.#chickens.get(id))
        return this.#chickens.get(id); 
    }

    removeChicken(id){
        this.#chickens.delete(id); 
    }

    getAllChickens(){
        return [...this.#chickens.values()]; 
    }

}

const chicken1 = new Chicken(1, "Almond", 5, "Super Chicken"); 

const chickenRegistry = new ChickenRegistry(); 

const addChicken1 = chickenRegistry.addChicken(chicken1); 
chickenRegistry.getChicken(1); 

//Mixin Pattern
//Mixing in our objects methods to our classes!
const fly = {
    fly(){
        return `${this.name} flys!!!`
    }, 

    land(){
        return `${this.name} , the ${this.species} has returned to earth!`; 
    }
}

const swim = {
    swim(){
        return `${this.name} can swim!!`
    }
}
//Now some of our animals can swim or fly but we do not want to bake that into the original class
class Animal {
    constructor(name, species) {
        this.name = name; 
        this.species = species; 
    }

    greet(){
        console.log(`${this.name} says Hi!`); 
    }
}

const bernie = new Animal("Bernie", "Pelican"); 
Object.assign(bernie, fly); //This is where we are mixing in functionality from the fly object and methods
Object.assign(bernie, swim)

//Proxy Patttern
//We can have a proxy object to interact with the cat object
const cat = {
    name: "Blue Steel",
    age: 7, 
    breed: "Scottish Fold"
}; 

//Uses a set of proxy methods (Check MDN for details)
//Now every time we attempt to get information from the cat object we will return the string LOL 
//This sits in the middle of cat and the proxy and will return LOL each time we attempt to access the property
const handler = {
    get: function (object, property) {
        console.log(`Assessing ${property} from object`); 
        return object[property]
    }, 

    //Example if the property = age we will make sure the value is greater than 0
    set: function(object, property, value){
        if (property === "age") {

            if (value < 0) {
                object[property] = 0
                throw new Error("Age must be greater than 0!");
            } else {
                object[property] = value; 
            }
        }
    }
}

//We can use this proxy object to govern and control how we interact with this object! 
const catProxy = new Proxy(cat, handler); 


//Proxy Pattern with Functions: 
function multiply(a, b) {
    console.log(a*b);  
}

function sum(a, b){
    console.log(a+b); 
}

//Basically adding in some logging around which function is running
const handler2 = {
    //This will run whenever a function is ran
    apply: function(targetFunc, thisArg, argsList){
            console.log("You ran the function!!"); 
            console.log("args are: ", argsList)
            targetFunc(...argsList);
    }
}

const funcProxy = new Proxy(multiply, handler2); 
const sumProxy = new Proxy(sum, handler2); 

funcProxy(7,3); 
sumProxy(7, 3); 