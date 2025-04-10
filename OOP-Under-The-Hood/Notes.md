# OOP Under The Hood Notes:
- Intro
    - Includes: 
        - New
        - Protoypes
        - Constructor
        - Object.getPrototypeOf
        - prototypal inheritance
    - Discusses things that was used before we had classes


- The New Keyword
    - Does 4 things: 
        - Creates an empty Object
        - Sets the keyword "this" to be that Object
        - Returns the object: return this
        - Creates a link to the object's prototype
        - See app.js as an example
        - Essentially we make a factory function that takes in the Dog's name and breed then we use New to insert new items into the object
            - Example of a constructor function: used in JS to generate objects for us 
        - Basically it creates an empty Object and sets the "this" to that object specifically


- Prototypes Pt 1
    - On the Dog constuctor we can make our own methods and are defined on each individual Dog
    - See the Dog constuctor function as an example
    - Essentially JS is copying these methods over and over that are stored on each object, but with Classes they do not copy the method over and over
    - Classes keep the methods out of the object itself


- Prototypes Pt 2
    - Prototypes are the basic mechnism that allows JS to be used with each other
    - Shows us what methods we can use for Objects and Arrays essentially by using ArrayName.__proto__ or ObjectName.__proto__
    - Works on the FRONT END!!
    - JS automatically adds these methods onto the new object for us via proto
    - All objects have access to this .__proto__ object

- Prototypes Pt 3
    - We can assign the prototype to a specific function that way it does not copy those methods each time a new Dog is created. 
    - Old way does not work with arrow functions

- Creates a Link? 
    - Before we get there: 
        - Every function has a property on it called prototype
        - The prototype object has a property called constructor which points back to the function
        - When the "new" keyword is used to invoke a function, a link between the object created from new and the prototype object is established