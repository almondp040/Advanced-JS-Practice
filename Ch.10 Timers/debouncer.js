//Fancy Debouncer function: Useful for pulling info from APIs!
console.log("Live from the debouncer file!! "); 

//Mock API hit, replacable with a actual api call
const queryAPI = (searchTerm) =>{
console.log(`Searching the API for ${searchTerm}`); 
return searchTerm; 
}; 

//Old Version: 

// //Search input:
// const search = document.getElementById("search"); 

// let debounceTimeout; 

// search.addEventListener("input", (event)=>{
//     //Clear debounce, then run the setTimeout on input: 

//     clearTimeout(debounceTimeout); 
//     debounceTimeout = setTimeout(() => {
//         queryAPI(); 
//     }, 400);
// })


//Fancy Version: 
const search = document.getElementById("search"); 
const valueParagraph = document.getElementById("value"); 

//We wrote a function that took in a callback: 
//Our debounce takes a callback and a delay
const debounce = (callback, delay) =>{
    let timeOutID; 

    //Kinda like returning groceries all at once: 
    // returns a function that takes in arguments: 
    return (...arguments)=>{
        if (timeOutID) {
            //if timeout is there clear it: 
            clearTimeout(timeOutID); 
        }

        //timeout calls our callback after the delay has passed, can be adjustable via delay parameter: 
        timeOutID = setTimeout(() => {
            callback(...arguments); 
        }, delay);
    }
}

//run it: 
const debouncedQueryAPI = debounce(queryAPI, 400); 

//example of how to use it: 
search.addEventListener("input", (event)=>{
    //Anything passed to this function will be debounced: 

    debouncedQueryAPI(event.target.value); 
    //queryAPI(event.target.value)
})


//Its ok if we do not remember this, the important part is knowing when to debounce!

