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


    //Object.create() is a different way to create an object, might be easier via the class method: 
    const person = {
        sing(){
            console.log("LA LA LA"); 
        }, 
        isHuman: true 
    }


    const ling = Object.create(person); 
    const timmy = Object.create(person); 

    //Another Object method: Gives us the associated methods tied to the object
    Object.getPrototypeOf(timmy)

    // Object.setPrototypeOf allows us to set prototypes 
    Object.setPrototypeOf(timmy, {isHuman: false}); 

    //Object.isPrototypeOf will return true or false if our object is using a specific prototype: 
    person.isPrototypeOf(ling); //Will return true since Ling is using the person object 