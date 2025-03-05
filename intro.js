const key = "species"
const pet = {species: "Dog", name: "Elton", age: 1.5}

pet[true] = "hello!!"

pet.bark = ()=>{
    return "Woof!!"
}

pet.kneel = ()=>{
    return "Lay Down"
}