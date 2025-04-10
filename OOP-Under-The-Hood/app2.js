//The Prototype Chain: 
const grandparent = {
    greet(){
        console.log("Hi There!!");
    }
}

const parent = {
    color: "purple", 
    sing(){
        console.log("LA LA LA")
    }, 
    __proto__: grandparent
}

//the proto would link the child object to the parent object, so that child can use color and sing
const child = {
    num: 2, 
    __proto__: parent
}