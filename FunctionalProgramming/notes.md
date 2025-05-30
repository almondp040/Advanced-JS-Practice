# Functional Programming

- Functional Programming
    - A new way of thinking about code and structuring/organizing our code
    - The Process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. 
    - Functional Programming is often declarative rather than imperative, and application state flows through pure functions. 

- FP Idioms we have seen so far: 
    - Functional Programming methods you've met and should know: 
        - map, filter, some/every, find/findIndex

- Esssential Concepts to cover: 
    - Higher Order Functions, first class functions 
    - pure functions
    - immutability
    - closure
    - partial application / currying
    - function composition

- What FP Avoids
    - looping
    - mutation and shared state
    - variable declaration

- Essentially its a style of how we want to code!

- Imperative Programming
    - All about describing how a program operates using statements and code to manipulate a program's state
    - changes the variable

- Functional Programing 
    - Essentially using functions to program, using code to solve stuff without mutating existing variables
    - does not change a variable
    - basically working with data, but not changing the original data
    - more about the relationship between the input / output
    - using functions to do the programing for us rather than build everything from scratch

- First Class Functions
    - JS doesn't care how are functions are ran or stored
    - Basically using functions as arguments or parameters
    - JS treats functions as any other variable

- Pure Functions
    - Pure Functions are deterministic
    - Referential Transparency
        - The function always gives the same return value for the same arguments
        - The function should only depend on its input argument
    - Side-effect free: 
        - The function should not cause any side effects
        - Side effects may include modifying a mutable object, reassigning a variable etc. 

- Returning Functions
    - Higher Order Functions:
        - Is a function that receives another function as an argument, returns a function, or does both

- Immutability (use the spread operator to make copies of arrays and objects, then use those copies)
    - The idea that once a piece of data is created, it cannot be changed
    - We try not to modify the original form of the data
    - Usually leads to writing functions to copy arrays and objects
        - Can also use Object.freeze to handle this as well

- Recursion (Watch a video on this tbh)
    - When a function calls itself in order to solve a problem, which allows the function to be called multiple times without using a loop
    - Might wanna watch a yt video on it for more knowledge