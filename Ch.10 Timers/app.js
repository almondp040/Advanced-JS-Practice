//Timers! Build in Browser APIs for JS 

// setTimeout: 
const myTimeOut = setTimeout(() => {
    console.log("This will be ran every 2 seconds!"); 
}, 2000);

// An example of this would be a show message function
const showNotification = (message, timer) =>{
    const notification = document.createElement("div"); 
    notification.innerText = message; 
    document.body.appendChild(notification); 
    //Remove the notification after a certain amount of time. 
    const myTimeout =  setTimeout(() => { 
        notification.remove(); 
    }, timer);
    clearTimeout(myTimeout); 
}; 


showNotification("Hello There!", 4000); 
//showNotification("Signed In!", 5000); 
//showNotification("Love Ya!", 10000); 


//setInterval: 
const myInterval = setInterval(() => {
    console.log("This is my setInterval Function! This will run every 2 seconds!"); 
    clearInterval(myInterval); 
}, 2000);

const startCountDown = (duration) =>{
    let seconds = duration; 
    const time = document.getElementById("time"); 
    //time.innerText = seconds;
   const intervalID = setInterval(() => {
        console.log("Seconds:", seconds); 
       // time.innerText = seconds;
        seconds-=1; 
        if (seconds < 0) {
            clearInterval(intervalID); 
           // time.innerText = "Time is Up!!";
        }
    }, 1000);
}; 

//startCountDown(0); 

//Clear Timeout Example: 
//const cancelButton = document.getElementById("cancel"); 

// const timeoutID = setTimeout(() => {
//     window.location.href = "https://www.google.com/"; 
// }, 5000);

// cancelButton.addEventListener("click", ()=>{
//     clearTimeout(timeoutID); 
//     console.log("Stopped the redirect")
// }); 

//Debouncing Example when conducting a live search by hitting a API: 
const queryAPI = () =>{
    console.log("Search the API"); 
    console.log("Making an API Request"); 
}; 

const searchInput = document.getElementById("search"); 

//First we clear the debounce, then after 1 second we hit the api with our search results: 
let debounceTimeout; 
searchInput.addEventListener("input", ()=>{
    //Instead of hitting the API everytime, we can put this into a setTimeOut function: 
    clearTimeout(debounceTimeout); 
    debounceTimeout = setTimeout(() => {
        queryAPI(); 
    }, 1000);
    
})




