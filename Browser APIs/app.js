//Browser APIs
//Check if the browser can run navigator: 


//GEOLOCATION:
if(navigator.geolocation) {
    console.log("HELLO THERE!")
    console.log(navigator)
}

//Select our button for use: 
const button = document.querySelector("#getLocation"); 
const locationDisplay = document.querySelector("#locationDisplay"); 

//Uses getCurrentPosition that takes in 2 callback functions, one on success and one on error
//We can re-write this to make 2 seperate success / error functions but eh
button.addEventListener("click", ()=>{
    if(navigator.geolocation) {

        navigator.geolocation.watchPosition((position)=>{
            console.log(position.coords.latitude, position.coords.longitude)
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude; 
            const script = `Here's your location: ${latitude}, ${longitude}`; 
            locationDisplay.innerHTML = script; 

        }, (error)=>{
            console.log(error); 
            if (error) {
                const script = `Error Detected!! Here's the error: ${error.message}`; 
                locationDisplay.innerHTML = script; 
            }
        })
}
})


//MEDIASTREAM (getUserMedia): 
const streamButton = document.querySelector("#startStream"); 

streamButton.addEventListener("click", async ()=>{
try {
        console.log("Clicked!")
         const stream = await navigator.mediaDevices.getUserMedia({video: true, audio:true}); 
         const videoElement = document.querySelector("#videoElement")
         videoElement.srcObject = stream; 
} catch (error) {
    console.log("Error", error); 
    const errorText = document.querySelector("#errorText"); 
    errorText.textContent = error
}

})

const mediaDevices = async (params) => {
    //Gives us an array of media devices for use: 
try {
        const device = await navigator.mediaDevices.enumerateDevices(); 
        console.log(device); 
        return device
} catch (error) {
    console.log(error)
}
}

mediaDevices(); 


//Intersection Observer API: 
//Automatically pass in a list of entries in an array
//Set up our observer
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting === true) {
            const percentage = Math.round(entry.intersectionRatio *100, 2)
            console.log("AD IS SHOWING!!!", entry); 
            console.log("Percentage showing is:", percentage)
        } else {
            console.log("AD IS NOT VISIBILE"); 
        }
    }); 
    //Threshold: How much of the ad is visible before our function runs. Works like a fraction
}, {threshold: [0, 0.5, 0.75, 1]}); 

//Select the element we would like to observe: 
const ad = document.querySelector(".ad"); 
//We will see this in the console once we are able to view it: 
observer.observe(ad); 

//Another Example looking at how long in milliseconds the ad was viewed: 
//Works for a single ad
let adViewTimes = []; 
let adVisibleStartTime; 

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        const {isIntersecting} = entry; 
        if (isIntersecting) {
            //ad is visible
            adVisibleStartTime = Date.now()
        } else if (adVisibleStartTime) {
            //ad has been visible, no longer is visible
            let adViewDuration = Date.now() - adVisibleStartTime; 
            adViewTimes.push(adViewDuration); 
            console.log(`Ad was viewed for ${adViewDuration} ms`); 
            adVisibleStartTime = undefined; 
        }
    })
}, {threshold: 0.5}); 

observer2.observe(ad); 

//Example using multiple ads: 
//Shows which is visible based on the div ID: 
//Also Lazy Loading: can expand this to images or anything on the DOM: 
const observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{

        const {isIntersecting} = entry; 
        console.log(entry)
        const {id} = entry.target; 

        if (isIntersecting) {
            console.log(`${id} ad is visible!`); 
        } else {
            console.log(`${id} ad is NOT visible`); 
        }


    })
}, {threshold: 0.5}); 

const allAds = document.querySelectorAll("div"); 

allAds.forEach((ad)=>{
    observer3.observe(ad); 
});
