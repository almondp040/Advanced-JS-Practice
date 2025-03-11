const key = "species"
const pet = {species: "Dog", name: "Elton", age: 1.5}

pet[true] = "hello!!"

pet.bark = ()=>{
    return "Woof!!"
}

pet.kneel = ()=>{
    return "Lay Down"
}

const getTriangleArea = (a,b)=>{
    return (a * b) / 2
}

const getTriangleHypotenuse = (a,b)=>{
 return Math.sqrt(a ** 2 + b ** 2); 
}

