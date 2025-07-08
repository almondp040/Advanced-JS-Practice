# Design Patterns and Proxy Objects

- Module Pattern
    - The Module Pattern ensures private and public encapsulation in JS that protects the global namespace and diminishing naming conflicts
    - jQuery uses the Module Pattern to protect internal details and reveals only the public API
    - RequireJS uses a variation of the Module Pattern as well


- Singleton Pattern assures only ONE instance of a class
    - Redux store in React applications acts as a Singleton, ensuring a singular store instance
    - Node.js module system acts like a signleton as well in regards to working with modules
    - Describe the shape or function of the object, check to make sure only 1 has been created then return it