//Performance Example: 

//Create a array with lots of numbers, then check the performance
const largeArray = Array.from({length: 10000}, ()=>{
   return Math.floor(Math.random() * 1000); 
})

console.log(largeArray); 

//Copies our array
const arrayForNativeSort = [...largeArray]; 

//Marks the start
performance.mark("Native Sort Start"); 
//Sorts our array
const nativeSort = arrayForNativeSort.sort((a,b) =>{
    return a-b; 
})

//Marks the end: 
performance.mark("Native Sort End"); 

//Measurement: 
const measure = performance.measure("Native Sort Time", "Native Sort Start", "Native Sort End"); 

//Looks at our measurement using the Native Sort times, proves that the built in .sort() is faster than bubble sort
//Can be used anywhere in our code using the Start and End marks
const nativeDuration = performance.getEntriesByName("Native Sort Time")[0].duration
//See our values: 
console.log( `Native took ${nativeDuration}`)

//performance.getEntries grabs the performance metrics for everything! 
console.log(performance.getEntries())

//this allows you to pick out the stuff specifically inside of the getEntries array based off the name
//Performance Entries: 
const entries = ()=>{

    let results = []; 
    window.addEventListener("load", ()=>{
    performance.getEntriesByType("resource")
        .filter(entry => entry.initiatorType === "img")
        .map((entry)=>{
                 const duration = entry.duration; 
                 const entryName = entry.name; 
                 const script = `Here is our Duration based on performance: ${duration}ms to load, and here is our Entry Type: ${entryName}`; 
                 results.push(script); 
                 console.log(script); 
                 return results; 
    
}); 


}); 

};  


entries(); 

//Web Audio API: Good for a prank lol: 
// const audioContext = new AudioContext(); 
// const oscillator = audioContext.createOscillator(); 
// //Making our audio from scratch!
// console.log(oscillator); 
// //Say what type of sound wave you want: 
// oscillator.type = "square"; 

// //Apply this wave to the audio destination
// oscillator.connect(audioContext.destination); 

// //Play Sound: Really load tho
// //oscillator.start()


//Example: 
const sliderFunctionality = () =>{
    const context = new AudioContext(); 
    const slider = document.querySelector("#freqSlider"); 
    const playButton = document.querySelector("#playBtn"); 
    const stopButton = document.querySelector("#stopBtn"); 
    const span = document.querySelector("#freqLabel"); 

   //Set up a null variable for use and reassignment: 
    let oscillator = null; 


    //on click play sound:
    playButton.addEventListener("click", ()=>{

        //Change oscillator into what is supposed to be: 
    oscillator = context.createOscillator(); 
    oscillator.type = "triangle"; 
    oscillator.frequency.value = slider.value; 
    oscillator.connect(context.destination); 
    oscillator.start(); 
        
    })

    //on click stop sound
    stopButton.addEventListener("click", ()=>{
        if (oscillator) {
            oscillator.stop(); 
            oscillator = null; 
        }
        
    })


    //Slider Funtionality: 
    slider.addEventListener("input", (event)=>{
        const frequency = event.target.value; 
        span.textContent = `Frequency is ${frequency}hz`
        if (oscillator) {
            oscillator.frequency.value = frequency
        }
    }); 

    
   
   
}; 

sliderFunctionality(); 