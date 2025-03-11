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