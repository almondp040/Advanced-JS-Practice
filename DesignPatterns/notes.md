# Design Patterns and Proxy Objects

- Module Pattern
    - The Module Pattern ensures private and public encapsulation in JS that protects the global namespace and diminishing naming conflicts
    - jQuery uses the Module Pattern to protect internal details and reveals only the public API
    - RequireJS uses a variation of the Module Pattern as well


- Singleton Pattern assures only ONE instance of a class
    - Redux store in React applications acts as a Singleton, ensuring a singular store instance
    - Node.js module system acts like a signleton as well in regards to working with modules
    - Describe the shape or function of the object, check to make sure only 1 has been created then return it

- Observation Pattern
    - The Observation Pattern enables a subscription model where objects (observers) listen to events and get notified when events occur
    - Real World Examples include addEventListeners in the DOM that are built upon the Observer Pattern 
    - Once the state of the subject is changed, the observers are notified
    - Vue.js uses a reactice data model where component re-renders are triggered by data changes, which is an application of the Observer Pattern. 
    - RxJS is a library that provides utilities for working with Observables

- Registry Pattern
    - The registry pattern is a design pattern used to store and retrieve instances of objects
    - Idea is that we have a centralized manager or a database of our objects and from there we can use the data how we want 
    - It acts like a central place to manage the objects, and it is particularly useful when you want to access the instances from different parts of your application without needing to pass them around as parameters.
    - Major risk is having a single point of failure

- Mixin Pattern
    - When we mix in our object methods to our class, that we can selectively mix in to our class


- Proxy Pattern
    - We have access to a object called Proxy in JS, which creates proxy objects that gives us more control on how we interact with other objects
    - We can proxy functions as well
    - This can be useful for validation or function logging and debugging purposes!
    - Basically we are running a function in the middle before the function runs! 