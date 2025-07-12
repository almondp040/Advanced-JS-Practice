//Proxy Example
const input = document.querySelector("#userNameInput"); 
const h1 = document.querySelector("#h1"); 

//We have an object that stores the state of the object that stores the current value of the object
const userInfo = {
    username: ""
}

//Whenever any property is changed we will update the DOM, if we want things to be tied to a specific property we can use a if condition
const handler = {
    set: function(object, property, value){
        console.log("SETTING UP THE HANDLER!"); 
        object[property] = value; 
        h1.innerText = `Hello There, ${value}`; 
        
    }
}

const userProxy = new Proxy(userInfo, handler); 

input.addEventListener("keyup", (event)=>{

    userProxy.username = event.target.value
    

})

