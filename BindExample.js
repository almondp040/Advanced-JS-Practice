const conan = {
    name: "Conan", 
    city: "Los Angeles", 
    sing: function (){
        console.log("This is:", this)
        
        return `${this.name} sings LA LA LA`
    }
}





const button = document.getElementById("button")

button.addEventListener("click", conan.sing.bind(conan))
//button.addEventListener("click", conan.sing.bind(conan))