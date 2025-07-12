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







