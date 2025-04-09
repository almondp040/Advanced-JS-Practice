# The Bind Method

- You Can "Pema-bind a function to a context": 
    - See the Bind Method.js file

- Binding Arguments 
    - You can also bind arguments to functions. 
        - That will bake them into the function. 

- Bind with Event Listeners
    - Useful when you do not directly call functions ourselfs but let JS call them for us
        - Useful for eventListeners, timers, callback functions using map, filter async etc. 

- Bind with Timers 
    - We can use Bind to correct the value for this, see our Counter Class in the Bind example for a view of this 

- Arrow Functions
    - Arrow functions do NOT make their own this
    - If we use a arrow function this will remain the this from the class
        - See ArrowFuncAndThis as an example!
        - Arrow functions do NOT change the value of this! 

- This Takeaways
    - This is a reserved keyword whose value is determined only at the point of function execution
    - If you don't call a function yourself (callback), you need to ensure JS knows what the "this" context should be. 
    - This depends on how we run our functions, but the use of arrow function will never reset "this"