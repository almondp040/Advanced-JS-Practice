# Object Orientated JS
    - Mixing data functionality
        - We can combine data and objects together to easily work with functions
        - View triangle-pojo.js for an example
        - FUNCTIONS THAT LIVE ON OBJECTS ARE METHODS!!

    - Plainold JS Object 
        - So we can use this (See pojoDemo.js as an example)
        - It's tidy: related functionality lives together
        - Annoying when we have more than one triangle
            - Difficult to maintain
            - If we have 1000 triangles like we had in the example, we would have 1000s of copies of these functions, which wastes memory!

    - Classes!
        - Class basics: 
            - Classes are a blueprint of functionality
            - Allows us to more easily objects and data based off of the blueprint which is a class. 
            - Bundles together functionality, what do you want your triangle to do!
            - Refer to the Classes.js file as an example
            -Bundles your functions into a useable suitcase to be used on your objects 
            - Blueprint code to be used for objects. Like the blueprint of a house and the house is our object
            - Class names should be UpperCamelCase
                - Reduces confusion between triangle (individual triangle) and Triangle(the class of all triangles!)


    - Constructors
        - Any method named constructor will be called on making a new instance
        - see the Spaceship class as an example
        - Allows us to set properties to our class

        - What can you do in the constructor? 
            - Whatever you want!
            - Common things: 
                - Validate data
                - Assign properties
                - We can also implement logic for the items inside of the constructor
                - Constructor returns always return undefined, and is automatically called for us via the new syntax

        - Methods 
            - Functions places in a class are methods (formally, instance methods)
                - instance methods refers to the particular object that the class is assigned to
            - They have access to properties of object with this. 
            - They take arguments / return data like any other function
            - A method can call another method! But it will require you to use this.methodName() see Class Triangle for an example!
            - Only needed if we need to use a method inside of another method thats in the same class
