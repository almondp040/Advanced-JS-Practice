//Local Storage API

//To use localStorage: 
localStorage.setItem("color", "blue"); 

//to get our item from local storage: 
const blue = localStorage.getItem("color"); 
console.log(blue); 

//to remove an item: takes in a key like "color"
const removeBlue = localStorage.removeItem("color"); 

//to wipe everything from localStorage we will use this: 
const clearEverything = localStorage.clear(); 


//Arrays and local storage: 
const nums = [1,2,3,4,5,6]; 

const saveNumsToLocalStorage = localStorage.setItem("nums", nums); 

//const getNums = localStorage.getItem("nums"); 
//console.log(getNums); 

//To use our array more easier turn it into json, then turn it back once we look to retrieve our data: 
const numsJSON = JSON.stringify(nums) //turn it into a string to store it
const saveNumsViaJSON = localStorage.setItem('nums',  numsJSON); 
const getNumsViaJSON = localStorage.getItem('nums'); 
const convert = JSON.parse(getNumsViaJSON) //turns this back into a array, use json.parse to turn it into a object or an array
console.log(convert) // now its a array via the console

//Session Storage: 
sessionStorage.setItem("color", "teal"); // this will set this piece of data for a particular item in the tab, but once they switch tabs this will not be apart of the sessionStorage
