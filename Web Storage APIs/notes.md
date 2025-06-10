# Web Storage APIs
 - LocalStorage Basics
    - Allows web applications to store key-value pairs in a web browser persistently across sessions 
    - Data will remain there even if they close the browser, turn off the computer etc. 
    - Cannot use it to store a massive amount of information
    - called localStorage will show us the data stored in our browser
    - to store something in local storage we use localStorage.setItem

- We can only store Strings, and will change everything into a string
- We can get around this by turning turning our items into JSON before we use setItem
- USE SINGLE QUOTES!!!

- If we want to store anything we MUST turn it into a string first via JSON.stringify(data)
- To retrieve our data we MUST parse it from JSON via JSON.parse(data)
- Roughly 5mbs per local storage

- What should or should not be in local storage?
    -  Store NON SENSITIVE DATA!!! Because localStorage can be used with JS and can be compromised! 
        - NO USER SPECIFIC DATA, (Passwords, Phone Numbers, Emails etc. )
    - User settings or a dark mode toggle can be stored in local storage
    - History of a user, Interactions, Partially filled out a form, we can use local storage for this**
        - Can maybe use this with forms?
        - Shopping cart data is an extremely common use case
        - analytics and ad tracking as well is extremely common