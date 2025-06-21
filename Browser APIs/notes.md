# Browser APIs

- Using the Geolocation API
    - Allows users to share their location with web applications
    - Not supported by older browsers
    - Is a async operation as well
    - getCurrentPosition and .watchPosition are the functions to use with geolocation
    - watchPosition will run anytime a user's location changes

- MediaStream (getUserMedia)
    - Accesses the user's camera and microphone
    - wrapped in promises as well, and we can also use the audio
    - we can also get a list of cameras or microphones as well
    - a more in depth look into this can be found on MDN

- Intersection Observer API: 
    - Provides a way to asynchronously observe changes in the intersection of a target element with its parent or view port
    - Basically we can customize what shows in the view when a user is scrolling
    - Helps us figure out when elements are intersecting 
    - USEFUL FOR LAZY LOADING!! 
    - isIntersecting tells us if we can view it!

- Intersection Observer Options
    - One of the most important options is called Threshold
    - Threshold is how much of this element is visible before the entry callback runs
        - How much should the ad show before our function runs??
        - we can also give threshold an array of values to run things when the element passes the threshold 
            - can do 0, 0.5, or 1
        - We can use entry.target with the ID to have actions run based of the element ID from the HTML page
    - Can help alot with LazyLoading, where the photo will load once the others are in view
    - use entry.IsIntersecting for the if condition check

