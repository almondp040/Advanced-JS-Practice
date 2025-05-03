# Tricky Parts of JS Quirks of the Language!
    - Working with Float Imprecision (working with numbers)
        - JS represents numbers as floating point, like 1.234
        - Sometimes, this leads to mildly imprecise results: 
        - this can lead to bugs at times, and JS might not be the best language to use for really precise numbers calculations
        - Comparisons might yeld unexpected results depending on what we are looking to do

    - BigInt() and really large numbers
        - BigInt() is used to store and manipulate large numbers
        - We can take a extremely large number and leave n behind it to tell JS this is a huge number
            - See App.js for an example
            - Math.sqrt() does not work with bigint(), 
            - likely easier to pass in the number through BigInt()

    - Not a Number
        - JS's NAN value can be tricky and it often comes from: 
            - Logical math errors like: 0/0
            - or taking the square root of -1
        - Checking for NAN
            - All NAN values are considered unique, so NAN === NAN is false
                - if we need to check for NAN there are 2 different ways: 
                    - To check for NAN we must use isNaN(n) 
                        - This will return True if n is NAN or is a value that cannot be coerced into a number

    - ++x and x++
        - There is a difference between ++x and x++
            - both will add 1 to a value
            - See app.js for an example

    - Semicolons
        - You can write JS with or without semicolons; if you omit them, they will be inserted by JS in a process known as ASI: Automatic Semicolon Insertion. 
            - Try to ALWAYS put in semicolons
            - Line breaks matter so always try to put semicolons at the end of each code block


    - JS Generator Functions and Yield
        - JS can have generator functions which are functions that return a Generator that can be looped over: 
        - Basically functions that allow us to pause the excution of the function, then resume it after a specific value 
        - Then we can use .next() on the function to acquire our object!
        - Able to run some code that gives me a another value after it gets called
            - See app.js for an example!

    -  When are generators useful? 
        - When you have a large batch of a resource, and you wanna break it down AKA PAGINATION
            - See getBatchOfItem for an example!