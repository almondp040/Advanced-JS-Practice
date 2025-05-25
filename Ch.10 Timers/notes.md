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

- Debouncing
    - Adding a pause before the next function is ran via Debouncing, really useful for making a bunch of API calls. 
    - We are essentially putting a pause while using our setTimeout
    - Super important for FE development
    - Soon as the event is triggered we will clear the timeout and then run the code again


    - Writing a fancy debouncing function: 
        - 