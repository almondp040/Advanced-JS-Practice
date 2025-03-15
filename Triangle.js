//Triangle contains the functions we need to use for triangles

class Triangle {

    constructor(sideA, sideB){
        this.sideA = sideA
        this.sideB = sideB
    }
    getArea() {
        
        console.log( (this.sideA * this.sideB) / 2); 
    }

    getHypotenuse() {

        return Math.sqrt(this.sideA ** 2 + this.sideB ** 2); 

    }

    getTriangleName (name){
        console.log(`Hello ${name} you can now measure triangles!!`)
    }

    describe(){
        console.log(`I am a Triangle with the area of ${this.getArea()}`)
    }
}

const newTriangle = new Triangle(5, 4); 

newTriangle.describe(); 

//Shy Triangle Example: 
class ShyTriangle  extends Triangle{
    

    describe(){
        //console.log(`I am a Triangle with the area of ${this.getArea()}`)
        console.log("runs and hides!"); 
    }

}

const shyTri = new ShyTriangle(10, 5); 

shyTri.describe()
console.log(shyTri.sideA)

class ColorTriangle extends Triangle {
    constructor(sideA, sideB, color) {
        super(sideA, sideB)
        this.color = color
    }

  describe(){
    console.log(`The Area of this triangle`)

  }
}

class ColorHappyTriangle extends ColorTriangle {
    constructor(sideA, sideB, color, triMood) {
        super(sideA, sideB, color)
        this.triMood = triMood
    }

    mood (){
        console.log(this.triMood)
        console.log()
    }
}

const moodTriangle = new ColorHappyTriangle(5, 200, "Orange", "Happy!"); 

moodTriangle.getArea()
moodTriangle.mood()


class CatWithStaticProp {
    constructor(name, age, breed) {
        this.name = name
        this.age = age
        this.breed = breed
    }

    static genericName = "genericHouseCat"; 
    static genericAge = 0
    static genericBreed = "American"

    static genericCatStats (){
        
        const genericScript =  `Here's ${CatWithStaticProp.genericName} you wonderful Cat, who is turning ${CatWithStaticProp.genericAge} years old! What a beautiful ${this.genericBreed} they are!`
        console.log(genericScript)
    }

    catStats (){
        if (!this.name) {
            CatWithStaticProp.genericCatStats()
        } else {
            const script = `Here's ${this.name} you wonderful Cat, who is turning ${this.age} years old! What a beautiful ${this.breed} they are!`
            console.log(script); 
        }

    }

}

const cat = new CatWithStaticProp("Almond", 6, "European Swift"); 
cat.catStats()