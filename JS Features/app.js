//New Features for JS

//Optional Chaining: 
const user = {
    name: "Alice", 
    address: {
        city: "Wonderland"
    }, 
    greet(){
        //console.log(`Hello There!! My Name is ${this.name}`); 
    }

}

//It's basically a true/false on if the Name or City is in the user object
//Traditional Way: Check each item in the chain: 
const city = user && user.address && user.address.city; 

//Optional Chaining Way: 
const optCity = user?.address?.city;  //Output Wonderland

//Optional Name Example: 
const optName = user?.name; 
//console.log("Name:", optName); 


//Optional Chaining with Methods:
//Will run the function on this object if the greet() method is present, if not we will see undefined 
user.greet?.()


//Nullish Coalescing Operator: Will give us the left side unless the left side is null or undefined: 
//console.log(null ?? "Testing!") // this will show us Testing since the left side is null
//console.log("F1" ?? "Testing!") // this will show us F1 since the left side is NOT null or undefined

//Numeric Separators: Using underscores to seperate out the numbers to make things easier to read: 
let num = 8_000_000_000; 
//console.log(num) //Will still print out 8 million, just makes the number easier to read


//Array.at() allows us to pick the index within an array and will allow negative indexes to work backwards in the array
const colors = ["blue", "red", "orange", "purple", "teal"]; 
const purple = colors.at(3); //Will choose purple since the index = 3; 
const orange = colors.at(-3); //Teal becomes -1 then works backwards; 
//console.log(purple); 
//console.log(orange); 

//.replaceAll() method for strings: 
const string = "I really love cats. My cat is such an amazing pet. She loves to cuddle with me and play. What a great cat!"

const dog = string.replaceAll("cat", "dog"); 
const Janice = string.replaceAll("She", "Janice"); 

//console.log(dog); 

//Logical Assignment: ||, &&, ?? Conditional Shortcuts!
const toDo = {priority: "", task: "Do VFE Work"}; 

//If left side is present (truthy) it will give us the priority, but if the priority is NOT there then it will set this to MEDIUM
//Right side will never run if the left side is true for the OR (||)

//OR assignment Operator ||
toDo.priority ||= (toDo.priority = "MEDIUM"); 
//console.log(toDo); 

//10 will only become 50 if number is a truthy value or if number = 10
let number = 10; 
number = null; 
number &&=50; 

//console.log(number); 

//AND assignment Operator &&
//A real world example with seeing if there's a logged in user, then setting their preferences to purple: 
let loggedInUser = []

//If logged in user is present, copy my array and add the colorPreference Purple: 
if (loggedInUser) {
    console.log(  {...loggedInUser, colorPreferences: "Purple"}); 
}

//OR we can use Logical Assignment for our conditional statement: 

//Checks if there's a logged in user then sets their color preferences to Purple, same as the conditional statement above:
loggedInUser &&= {...loggedInUser, colorPreferences: "Purple"}; 

//Nullish Operator Coalescing Assignment ??=
//Will only return the right side if the left side is null or undefined!
null ?? 1 // this will give us 1
undefined ?? 1 // this will give us 1
2 ?? 1 //this will give us 2 since 2 is a value

//Example: 
let score; 
score ??= 0
score ??= 100 //now score will be 0 since the logic above is setting score to 0 and since score is now defined it will return that value!
console.log("Hello!", score)

//Actual Example: 
function doSomething(options = {}) {
    options.timeout ??= 3000; 
    options.retries ??=5; 
    console.log(options); 
}

doSomething({timeout: null, retries: 1000}) //if timeout is null our Nullish Operator will make the value 3000

//Public and Private Class fields 
class myClass {

    //Public Field:
    publicField = "Public Field Here!"; 

    //Private Field: 
    #privateField = "Private Field"; 

    getPrivateField(){
       console.log(this.#privateField); 
    }

    //Static Class Initialization Blocks:
    static sharedState; 

    static{
        this.sharedState = "Initialized"
    }
}

const testingStuff = new myClass()

testingStuff.getPrivateField(); 
console.log(testingStuff.publicField)
