# Newer JS Features

- Optional Chaining
    - Optional chaining allows reading the value of a property located deep within a chain of connected objects without having to check each reference in the chain. 
    - Helps with inconsistent data! See app.js in the JS Features folder
    - We can use the same idea for methods too!


- Nullish Coalescing Operator
    - The nullish coalescing operator (??) is a logical operator that returns its right hand operand when its left hand operand is null or undefined, and otherwise returns its left hand operand. 
        - This is a way to handle default values more predictably than using the OR (||) operator. 
        - Will only give us the right hand value when the left hand value is null or undefined
        - Useful for If() conditions!

- Numeric Separators
    - Numeric Separators enhance readability by allowing underscores(_) to be inserted between digits in numeric literals

- Array.at()
    - allows us to access elements in an array via the index and will allow negative indexes to work backwards in the array, usefull if we need to work backwards in a array

- .replaceAll() Methods for strings
    - Allows us to replace words in a string, and we can also use regular expression as well if we need to look for certain patterns

- Logical Assignment
    - Logical Assignments are a combination of logical operators(&&, ||, ??) and assignment expressions
    - Put the equal sign after the logical assignment symbol

- Promise.any()
    - Promise.any() takes an iterable of Promise objects and returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected if all of the given promises are rejected. 
        - See Promise Any for an example
    - Different from Promise.race() because this will resolve the 1st value no matter what regardless if it is resolved or rejected
    - GIVES US THE PROMISE VALUE WHEN SOMETHING PASSES! WILL ONLY REJECT IF ALL PROMISES ARE REJECTED
    - Can be used with async as well

- Class fields (Public and Private)
    - Public and private class fields provide a way to maintain instance-specific state on classes. 
    - See this in app.js, same stuff in our work computer that we will need to bring over into VS code

- Static Class Initialization Blocks
    - This feature allows you to have a block of code that runs once when the class is defined, useful for setting up shared state or configurations for classes. 

