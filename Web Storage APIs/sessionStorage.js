
//Pretty much the same idea as localStorage: 
// const warnUserOnce = () =>{
//     if (!sessionStorage.getItem("shownWarning")) {
//         console.log("We are shutting down our app in 2 weeks!"); 
//         alert("We are shutting down our app in 2 weeks!"); 
//     }
//     sessionStorage.setItem("shownWarning", "true"); 
// }

// warnUserOnce(); 

//Session Storage Example with a form
//With this approach we can have as many inputs as we want
const form = document.getElementById("checkoutForm"); 

form.addEventListener("input", event =>{
    console.log(event.target.name);
    const {name, value} = event.target; 
    const formData = JSON.parse(sessionStorage.getItem("formData")) ?? {}; 
    formData[name] = value; 
    sessionStorage.setItem("formData", JSON.stringify(formData)); 
    console.log(sessionStorage)
}); 

const populateForm = () =>{
    const formData = JSON.parse(sessionStorage.getItem("formData")) ?? {}; 
    for(let field in formData){
        form.elements[field].value = formData[field]; 
    }
}

populateForm()

