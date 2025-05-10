//Array.from Examples: 
// export default class Name {
//     constructor(name, age) {
//         this.name = name, 
//         this.age = age;
//     }

//     greeting(){
//         return `Hello there ${this.name}, nice to meet you! Good to know a fellow ${this.age} year old person`; 
//     }
// }

//Array.from()
//pass in anything that can be turned into an array, so lists, strings, maybe objects

const test = Array.from("Hello!"); 


//Button test Grab all buttons on the page: 
const buttons = document.querySelectorAll("button"); 

//Grab alll of the buttons at once by using array.from() so we don't have to use Array.push kinda. 
const buttonTest = Array.from(buttons); 


//Then we can incorporate Array methods while using Array.From()

//Array.From example: 

//Array that takes in a string, then changes all of its letters to uppercase 
const stringTest = Array.from("HelloThere", letters => letters.toLocaleUpperCase()); 




//Add characteristics to our array, our map returns what we want in the array
const addCharacteristics = Array.from( {length: 20}, everyData =>  "Hello there!" ); 

//We can also do a sequence: 
const sequence = Array.from({length: 100}, (num, index )=> index +1)

//Run code in console: 
console.log(
    stringTest,
    addCharacteristics, 
    buttonTest, 
    test, 
    sequence

)