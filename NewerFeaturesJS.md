# Newer OO Features in JS 
    - Getters and Setters 
        - JS provides special methods, termed "getters" and "setters", which allow you to define the ways to retrieve or change the values of object properties respectively. 

    - Getters
        - Allow you to retrieve the value of an object's property
        - Basiically allows us to use functions like a object in the class
        - Useful for properties coming from other values
        - Underscore means not to change the items in the class so it will look like this._radius
        - See the Circle class as an example

    - Setters
        - Allow you to set the value of an object's property
        - The setter here ensures that the radius of the circle is not set to a negative value. 
            - Setters can be very useful for validation and to make the constructor shorter. 
            - Will require a parameter, because it has to set a value or item to something else
            - Might just be easier to use regular classes and constructor