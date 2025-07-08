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