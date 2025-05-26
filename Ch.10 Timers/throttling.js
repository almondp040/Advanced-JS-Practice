const main = () =>{
    return `Live from the throttling file!`;
}; 

//Simple Throttle Example: In the real world we would likely use a library for Debounce and Throttle
//Will not run the main function until after the setTimeout function is ran
let isThrottled = false; 
window.addEventListener("scroll", ()=>{
    if (!isThrottled) {
        main(); 
        isThrottled = true; 
        setTimeout(() => {
            isThrottled = false; 
        }, 300);
    }
})


//Infinite Scroll Example: 
const throttle = (callback, delay = 500) =>{
    let isThrottled = false; 
    let savedArgs = null; 

    const excuteCallback = () =>{
        if (savedArgs === null) {
            isThrottled = false; 
        } else {
            callback(...savedArgs); 
            savedArgs = null; 
            setTimeout(excuteCallback, delay); 
        }
    }; 

    return (...args)=>{
            if (isThrottled) {
                savedArgs = args; 
                return; 
            }

            callback(...args); 
            isThrottled = true; 
            setTimeout(excuteCallback, delay); 
    }

    
}; 

//In use throttle() takes a function with a delay

const throttleLoadItems = throttle(main, 400); 
console.log(
    
    main()

)