# Scopes and Closures

- Recaping Var & Scope: 
    - Nothing with var is scoped to a code block and variables are scoped to their functions! 
    - if made outside of a function it can be used globally

- Recaping Let, Const and Scope
    - using Var can mess up the variables tied to the window object
    - let allows us to have a redefinable variable 
    - const allows us to have a constant variable
    - just use let and const if possible, this will not conflict with the variables tied to the window object/items. 
        - Same with const. 
    - These are blocked scoped so let and const will be scoped to these blocks

- The Scope Chain
    - When we use a variable in a line of code, it will conduct the search in this order: 
        - In the Local Scope
        - Any Outer Functions
        - Global Scope
    
- Static Scope
    - JS uses Static Scoping 
    - The scope of a variable in JS is determined when it is declared
    - Most languages are all static scoped and this makes it easier since the variables will not change when stuff is called!

- Hoisting
    - variable declarations are pulled to the top of their function
        - So the variable is legal, but equal to undefined until definition
        - Basically JS sets the value as undefined first, then sets the value of the variable 
        - JS pulls the variable to the top of the scope, basically pulls variables to the top of either the file or the function, but this ONLY happens with var
        - JS technically hoists const and let variables but it does not allow us to access these variables, this is called the Temporal Dead Zone
        - Essentially use let and const and we will not encounter Hoisting issues

- IIFE
    - Immediately Involked Functional Expressions 
    - Running a function without a name!
    - Immediately running a function
    - This is good for privacy, and will only run once
    - Can also be good for global scope pollution, to limit things being in the global scope. 

- Closures: The Basics
    - The ability for inner functions to remember variables defined in outer functions, long after the outer function has returned
    - allows the inner function to access stuff from the parent function once its ran
    - Basically allows us to avoid using a bunch of global variables
    - Allows us to create essentially private variables!
    - Forces people to actually use the function, and does not allow us to access the count variable, useful to protect variables

- Closures Factory Functions
    - Making functions out of functions, which returns certain items 
    - Think of promise chaining but just with functions. 
        - See the Unique ID function

- Closures Loops
    - Loops do not create their own scope and everything would be global
    - Essentially we would need to create a new scope inside of the loop, IF we do not use let. 
    - with let the index will be scoped via the loop so other functions inside of the loop can use the index