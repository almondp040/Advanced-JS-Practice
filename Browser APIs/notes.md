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