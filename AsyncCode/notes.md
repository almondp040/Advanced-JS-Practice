# Async Code

- Goals
    - Examine callbacks in context of asynchronicity
    - Understand the role of promises
    - Understand the role of Async and Await
    - See common patterns and how to solve with Async / Await

- Callbacks 
    - A callback is a function passed to another function, for it to call. 
        - They are used for many things in JS
        - A function that uses another function is a callback 
        - Useful for seperating processing patterns 
        - Function as an argument to another function
        - Same thing happens with event listeners!
        - Another place we use callbacks is when working with async code
            - AKA calls a function at a later point in time
        
 - Callbacks will ALWAYS be useful
    - First 2 cases will always be done with callbacks: 
        - Functional Programming Patterns
        - Event-driven programming 

- Callback Hell and the Pryamid of Doom
    - By having a callback function for "once-async-thing-is-done", JS can finish running your code as quickly as possible. 
    - This way it can get to those other waiting tasks ASAP. 
    - Callback Hell refers to having lots of nested callbacks within one function
    - Thankfully Promises solve our callback hell issue!!


- Promises 
    - How to manage async operations in JS 
    - Promises provide an alternate way to think about asynchronicity
        - Do something after some time passes
        - A promise is one-time guarantee of future value. 
        - Allows us to right cleaner async code and chain things together
        - Fundamental part of JS development
    - Promises are objects that promise us to get something back from a API or async operation
    - 3 different states: Can see the status on the front end
        - Pending - It does not have a value
        - Resolved - It has successfully obtained a value 
        - Rejected - It failed to obtain a value for some reason
    - The only way to access the resolved or reject value is to chain a method on the end of the promise (what await is used for!). 


- .then and .catch
    - In order to gain access to the data from a promise we will use .then and .catch
    - Promises provide a .then and a .catch, which both accept callbacks. 
    - The callback to .then() will run if the promise is resolved, and has access to the promise's resolved value. 
    - The callback to .catch() will run if the promise is rejected, and typically has access to some reason behind the rejection

- Promise Chaining
    - When calling .then() on a promise, can return new promise callback!
        - Can chain asynchronous operations together with .then calls
    - We would only need one .catch() at the end since we don't have to catch every promise!
    - We would simply return the next portion of the promise - See pokemon example!
    - We use RETURN so that we can chain the next fetch request!! Allows us to chain requests together!
    - Works ONLY if we return a promise from our callback 

- Error Handling with Promises
    - Error handling can be used with .catch(), and we only will need 1 .catch()
    - Any promise with an error will give us the error message

- Benefits of Promises Over Callbacks 
    - Easier to write good functions
    - With promises, .then() method can just return value for next without having to itself know what comes next!


- Async / Await
    - Async / Await are language keywords for working with promises
    - Async 
        - You can declare ANY function in JS as async by putting Async in front of the function
        - Async functions ALWAYS return promises
        - No need for .then() or .catch()
    - Await
        - Inside an Async Function, we can use await
        - await pauses execution 
        - Can await ANY Promise or other async functions
        - Await waits for promise to resolve & evaluates to its resolved value
            - Kinda like having a .then() inside of the function or a pause button
            - The awaits do NOT run until we have a value from the previous function
        - WE MUST USE ASYNC WITH AWAIT!!!


- Error Handling with Async Functions
    - We will use Try / Catch for Async functions
    - This will allow us to catch any errors that come from our async function. 
    - Works the same way as .then() .catch()

- Async Patterns: Parallell Async Operations
    - Comparing .then/.catch and async/await
        - Under the hood, they do the same thing
        - async / await is the modern improvement 
            - code can be written more naturally 
        - There are a few cases where its easy to deal with promises directly 
         
- Async Patterns: In Sequence
    - When we need to make AJAX calls one at a time, in order
        - In the .then/.catch way we will need to return the next step
        - In the Async / Await way we will need to put all of our calls in the same Async Function
            - See Async for an example of .then/.catch and async

- Async Patterns: Promise All
    - Promise.all accepts an array of promises and returns a new promise
    - New Promise will resolve when every promise in array resolves, and will be rejected if any promise in the array is rejected
    - Basically like combining all of our calls into 1 promise
        - See Async.js for an example! 

- Async Patterns: Promise All Settled
    - Many Calls, In Sequence
    - Very Similar to Promise.all(), however Promise.allSettled() resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise
    - Will take an array of promises, and we will get our data back in a array of objects
    - This will give us an array of promises even if some of the URLs or Promises are rejected
        - See the all settled demo in Async.js for an example
        - All Settled doesn't care what is filled vs what is rejected

- Async Patterns: Promise Race()
    - Gives us the ability to send out a bunch of async operations, then handle the first one we get back whether its filled or rejected
    - Accepts an array of promises and returns a new promise
    - This new promise will resolve or reject as soon as one promise in the array resolves or rejects
    - It only cares about the first one back and will ONLY return the first Promise back!


- Building Own Promises
    - How do we create our own promise objects
    - You can use Promise with the new keyword to make your own promises
    - Syntax sucks
    - Promise accepts a single function as an argument, lets call it fn
        - fn accepts 2 functions as arguments, resolve and reject
            - Pass resolve a value for the promise to resolve to that value 
            - Pass reject for the promise to reject to that value 
            - See Random Resolve to see a more detailed example


- Promising Node's FS File
    - See NodeFS.js file for an example of making a promise from scratch to grab file info for files 1 through 3
