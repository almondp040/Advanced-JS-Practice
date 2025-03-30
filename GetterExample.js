//Getter Example: 
// class Circle {
//     constructor(radius) {
//         this.radius = radius
//     }

//     //Radius for the diameter: 
//     get diameter (){
//         const math = this.radius * 2; 
//         console.log(math); 
//         return math; 
//     }

//      radiusDisplay(){
//         console.log(this.radius)
//     }
// }

// const newCircle = new Circle(10)
// newCircle.diameter
// newCircle.radiusDisplay()


// //Setter Example: 

// class CircleSetter {
//     static  allowedColors = new Set(["Red", "Blue", "Green"]); 
//     constructor(radius, color) {
//         this._radius = radius
//         this._color = color
//     }

//     set radius(value){
//         console.log(value)
//         if (value < 0) {
//             console.log(this._radius)
//             throw new Error("Radius cannot be negative!!")
//         } else {
//             this._radius = value
//         }
//     }

//     get color () {
//     return this._color
//     }

//     set color(newColor) {
       

//         if (CircleSetter.allowedColors.has(newColor)) {
//             this._color = newColor
//             console.log(this._color)
//         } else {
//             throw new Error("This color is NOT allowed!");
            
//         }

//     }
// }


// const newCircle2 = new CircleSetter(8, "Purple"); 

// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     get fullName(){
//         const nameCombined = `${this.firstName} ${this.lastName}`
//         console.log(nameCombined)
//     }

//     set fullName(newName){

//         const [first, last] = newName.split(" ")
//         this.firstName = first
//         this.lastName = last

//         console.log(first, last)
//     }


// }

// const user = new User("Almond", "Paschal")
// user.fullName
// user.fullName = "George Smith"


