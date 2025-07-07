

//Single Responsibility Priniciple
//Violates the principle since this class is doing more than 1 thing: 
// class User {
//     constructor(name) {
//         this.name = name; 
//     }


//     toJSON(){
//         return JSON.stringify(this.name); 
//     }
// }

// class User2 {
//     constructor(name) {
//         this.name = name; 
//     }
// }

// class UserConvert {

//     static toJSON2(){
//         return JSON.stringify(user) // In a real world scenario we would replace User2 with the actual user we want to use: 
//     }
// }

// const allen = new User2("allen"); 

// const userConvert = new UserConvert.toJSON2(allen); 


//Open Closed Principle: 
//Make our own individual shapes, then write a class to calculate the area: 
class Circle {
    constructor(radius) {
        this.radius = radius; 
    }
    area(){
        return Math.PI * this.radius ** 2; 
    }
}

class Square {
    constructor(side) {
        this.side = side; 
    }
    area(){
        return this.side * this.side; 
    }
}

//Area Calculator will always work as long as the class in Area Calculator matches the one in the object
class AreaCalculator {
    //Function to calculate the area method on the shapes
    static calculate(shape){
        return shape.area()
    }
}


const circle = new Circle(5); 
const square = new Square(3); 

//This way we can make new shapes, while keeping Area Calculator the same!
console.log(AreaCalculator.calculate(circle)); 
AreaCalculator.calculate(square); 

//Liskov Substitution Principle