//Darkmode Demo: 
const button = document.getElementById("toggle"); 

const toggleTheme = () =>{
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "light"); 
        document.body.classList.remove("dark-mode"); 
        button.textContent = "Enable Dark Mode"; 
    } else {
        localStorage.setItem("theme", "dark"); 
        document.body.classList.add("dark-mode"); 
        button.textContent = "Enable Light Mode"
    }
}

const applyTheme = ()=>{
    const theme = localStorage.getItem("theme"); 
    console.log(theme); 
    if (theme === "dark") {
        document.body.classList.add("dark-mode"); 
         button.textContent = "Enable Light Mode"; 
    } else {
        document.body.classList.remove("dark-mode"); 
        button.textContent = "Enable Dark Mode"; 
    }


}
//Run apply theme to apply our darkmode styles:
applyTheme(); 

button.addEventListener("click", ()=>{
    toggleTheme(); 
})

//Use this to sync the DOM with the changes coming from local storage
window.addEventListener("storage", (event) => {
    console.log(event); 
    if (event.key === "theme") {
        applyTheme(); 
    }
});

