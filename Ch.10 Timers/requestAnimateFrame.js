console.log("Live from the Animation Frame Function"); 

//Request Animation Frame: 
const boxInterval = document.getElementById("interval"); 
const boxAnimate = document.getElementById("animate"); 

let intervalAngle = 0; 
let animationFrameAngle = 0; 
//Way better to set this up via CSS
const animateWithInterval = () =>{
    boxInterval.style.transform = "rotate(" + intervalAngle + "deg)"; 
    intervalAngle +=2; 
}

//Calling our animateWithInterval function to make it 60fps
setInterval(animateWithInterval, 16); 

let previousTime; 
const animateWithAnimation = (currentTime) =>{
    //Will show us our frame rate, how much time is happening between our animation calls
    console.log(currentTime - previousTime); 
    previousTime = currentTime; 
    boxAnimate.style.transform = "rotate(" + animationFrameAngle + "deg)";
    animationFrameAngle +=2; 
    //just runs once so we will need to call this inside of our animation function: 
    requestAnimationFrame(animateWithAnimation); 
}; 

//By using this the browser decides when to call our animation function, then we would rely on currentTime to control the time with start and end variables
 //requestAnimationFrame(animateWithAnimation); 
