# Solid OOP Principles

- How to structure Object Orientated Code
    - Doesnt have to be followed but recommended

- Single Responsibility Principle
    - A class should have only one reason to change. It means that a class should only have 1 job or responsibility
    - KEEP CLASSES DOING 1 THING AND SIMPLE!!


- Open/Closed Principle
    - Software entities should be open for extension but closed for modification. This means that the behavior of a module can be extended without modifying its source code. 
    - We should be able to extend functionality without modifying the original class

- Liskov Substitution Principle
    - Objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program. 
    - Making sure a subclass can stand in for the parent class without making any problems
    - Basically making subclasses for the main class with the same methods 
        - All subclasses should be able to use all of the methods in the parent class

- Interface Segregation Principle (ISP)
    - A class should not be forced to implement interfaces it does not use
    - JS doesn't have interfaces in the way Java or Typescript does, but the principle can still be applied conceptually using duck typing or optional methods 
    - Classes should NOT be forced to depend on interfaces they will NOT use!
    
- Dependency Inversion Principle (DIP)
    - High Level Application Logic (modules) should not depend directly on low level modules such as specific tools or libraries
    - Basically build your main application logic yourself 
    - Both should depend on abstractions (interfaces or general ideas)
    - Highlevel code should not depend on low level code!

- Law of Demeter
    - The main idea is to ensure that our objects don't reveal too much about their structure or their collaborators structures
    - For a given object, it should only talk to its friends
    - We want to stay away from chaining multiple layers of objects
    - AKA KEEP CLASSES AS SIMPLE AS POSSIBLE!

