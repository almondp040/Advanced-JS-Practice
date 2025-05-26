# Ch.10 Timers! Built in Browser APIs! 

- setTimeout 
    - Executes a function after waiting a specified number of milliseconds
    - Built in function that allows us to excute code after a delay!
    - Takes in a function, then runs it after a specific amount of time!
    - One use case for this would be to set up notifications based off of a timer. 

- setInterval
    - Executes a function repeatedly, with a fixed time delay between each call. 
    - Going to run a function repeatedly every second or entered duration

- clearInterval
    - Clears an interval set with setInterval, stopping the function from executing repeatedly. 
    - We must save our interval or timeout to a ID variable then pass it through the clearInterval function! 
    - Basically we just pass this a interval ID which will stop the interval function from running. 

- clearTimeout
    - Clears a timeout set with setTimeout, preventing the function from executing. 
    - Works the same way as clearTimeout(myTimeout); 
    - Telling JS to run something after a specific amount of seconds, then we will cancel it. 

- Debouncing: USE A LIBRARY
    - Adding a pause before the next function is ran via Debouncing, really useful for making a bunch of API calls. 
    - We are essentially putting a pause while using our setTimeout
    - Super important for FE development
    - Soon as the event is triggered we will clear the timeout and then run the code again
    - Controls how often a function is called after a certain amount of time has passed 


 - Writing a fancy debouncing function: 
    - See the debouncer.js file for an example of a better way to debounce
    - We can also look up debouncer functions for JS if we ever need them

- Throttling: USE A LIBRARY try throttle-debounce library 
    - Another technique to control how often a function is ran based on a specific event
    - Make sure a function is called at least once over a period of time
    - Useful for when we are hitting a API a bit too much
    - Can also use a library for this as well, might be easier
    - Makes sure our function does not run unless 300 miliseconds have passed

- We should look to throttle or debounce whenever we look to pull/push info from a API to slow down the actions so that it does not overload the API. 
    -Try to not create our own throttling logic, use a library to slow down the function calls 
    - Super useful with rapidly occuring events like infinite scrolling!


- requestAnimationFrame Basics
    - Designed for animations such as repeated movements, animations to create smooth animations for the user
    - This will automatically run whatever we give it once it reloads the webpage, helps with using animations and will lead to smoother animations

- requestAnimationFrame with Timestamps
    - Passes an argument of a timestamp to calculate the time elasped between animation frames in milliseconds
    - We can use this number how much time has elasped between each frame
