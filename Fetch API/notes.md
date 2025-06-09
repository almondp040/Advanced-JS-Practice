 # Fetch API

 - The basics of fetch
    - A modern way to work with network requests, replacing the older XMLHttpRequests or XHR
    - fetch has become the standard way of making requests

- Error Handling by Checking the Response Status: 
    - Fetch will not reject the promise if there's a 404 error, it will only reject the promise if our internet is shut off or if something is wrong with CORS. 
    - we can use the response.ok property to make sure our call is working. 
        - It's easier to use the response.ok since its better for the status

- Get Request with Custom Headers
    - How to send custom headers with our request!
    - Use the new Headers constructor so its easier for use and it standardizes the header info we are sending

- POST Requests with Fetch
    - we can use a {} after our fetch url to specify the type of request we are looking to use and add any headers we need
    - to send data we will pass our payload through body: JSON.stringify(payload)

- Using Fetch to upload a file:
    