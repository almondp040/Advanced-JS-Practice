//Inheritance Example: 
class Dog {
        constructor(name, breed) {
            this.name = name
            this.breed = breed
        }
    
        bark (){
            console.log(`${this.name} says WOOF!!`)
        }
    
        sleep(){
            console.log(`${this.name} is sleeping!!`)
            console.log("This is:", this); 
        }
    }

    class GuideDog extends Dog {
        constructor(name, breed, owner) {
            super(name, breed)
            this.owner = owner
        }

        alert(){
            const script = `${this.name} alerts you to danger!`; 
            console.log(script)
        }
    }

    const pippy = new GuideDog("Pippy", "Golden", "Almond"); 
    pippy.alert()