# The Mysterious Keyword "This"

- Introducing This
    - The Keyword This


- JS Functions 
    - In a sense, JS doesn't have true functions and everything is called on something, like a method

- Global Object
    - When you call a function on "nothing", you call it on the global object
    - Kinda similar to the window property with HTML pages 
        - In browser JS that's typically window or the browser window
             - Can show us the functions that JS can do in the browser
        - In NodeJS, that's global, where some Node Utilities are
            - Can show us the functions that JS can do in the browser

- The "Left Of The Dot Rule"
    - The value of this is determined when our code runs!
        - We can see that this refers to the global object in Node, and the Window object in the browser
    - The value of this is usually on the left of the "."

- This and Classes
    - In classes This refers to the class and not the window, so we need to be sure to run our function in the class
    - OOP and this
        - When you call a function on nothing, but the function comes from inside a class, the value of this will be undefined, not the window. 
        - If its outside of the class the this value will be the window
        - It's all reference to losing the value of this context, but we can force this to have a value

- Call Method
    - Methods that help us set and manipulate the value of this
    - Sometimes you'll need to say "call this function on this object"
        - That's what call() is for!
    - Essentially we are switching our objects 
    - We can also pass arguments that can be used in our function
        - See the max and kitty cats as an example
        - All we are doing is setting up a method as a variable to be used with other objects via call()
        - Allows us to reuse methods with other objects

- Apply Method
    - Expects all of the arguments inside of an array
    - Works exactly the same way as the call method, the ONLY difference is Apply uses Arrays ONLY


- The Bind Method
    - You can "perma-bind" a function to a context
    - Its like putting a setting to a variable 

    