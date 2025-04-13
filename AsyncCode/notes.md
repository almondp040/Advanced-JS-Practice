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
