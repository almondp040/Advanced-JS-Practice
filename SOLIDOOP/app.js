

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
class Bird {
fly(){
    console.log("This bird can fly!"); 
}
}

class Duck extends Bird {
fly(){
    console.log("Ducks can fly!"); 
}
}

//Then we can make another class with different birds using the same fly method!
class Eagle extends Bird {
    fly(){
        console.log("Eagles can fly!"); 
    }
}

function makeBirdFly(bird) {
    bird.fly(); 
}

const duck = new Duck(); 

makeBirdFly(duck); 


//Interface Segregation Principle (ISP)
class Worker {
    work(){
        console.log("Working on work!")
    }

    eat(){
        console.log("Eating some food!")
    }

    sleep(){
        console.log("Sleeping!")
    }
}

class Workable {
        work(){
        console.log("Working on work!") 
        }
}

//This function will depend on the work method in the worker class, in this case we would not be supporting ISP
//To adhere to ISP we would have a class for each method instead of having everything tied to Worker
function manageWork(workable) {
    workable.work()
}


//Dependency Inversion Principle (DIP)
//Basically make 1 main class, then the following classes will depend on the main class, have classes be related to each other

class AbstractAuthMethod {
    authenticate(credientials){
        throw new Error("This method should be overridden!");
    }
}

class UsernamePasswordAuth extends AbstractAuthMethod {
    authenticate({username, password}){
        //Logic to authenticate using username and password
    }
}

class EmailAuth extends AbstractAuthMethod {
    constructor({email, token}) {
        //Logic to auth using email and token sent to the email
    }
}

//Then to use it: 
class User {
    constructor(authMethod) {
        if (!(authMethod instanceof AbstractAuthMethod)) {
            throw new Error("Invalid Auth Method!");
        }

        this.authMethod = authMethod
    }

    //Login Method: 
    login(credientials){
        return this.authMethod.authenticate(credientials); 
    }

}

//Anytime we wanna have a new auth method, we will not need to change the User class, we can simply create a new method that extends the Abstract Auth method


//Law of Demeter
//Write classes or objects that only interact with the other immediate object