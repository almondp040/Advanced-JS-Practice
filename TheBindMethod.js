//Bind Example: 

const conan = {
    name: "Conan", 
    city: "Los Angeles", 
    sing: function (){
        console.log("This is:", this)
        
        return `${this.name} sings LA LA LA`
    }
}



const lisa = {
    name: "Lisa", 
    city: "Los Angeles"
}

const lisaSing = conan.sing.bind(lisa); 
const conanSing = conan.sing.bind(conan)
//Now its permantly bound to lisa
//console.log(lisaSing())
//console.log(conanSing())


//Tax Rate Example: 
const calculateTaxRate = (taxrate, price) =>{

    const math = price + price * taxrate; 
    console.log(math); 
    return math; 

}

//calculateTaxRate(0.005, 240)

//Now we can bind this function with the Tax rate of california: 
//set the value of this to null, then set our tax rate
const applyCaliforniaTaxRate = calculateTaxRate.bind(null, 0.0725)
const applyMontanaTaxRate = calculateTaxRate.bind(null, 0)

applyMontanaTaxRate(100)
applyCaliforniaTaxRate(100)

//Another Example

function multiply(a,b) {

    const run = a * b
    console.log(run); 
    return run
}



//Always have the function set to 2:
//Basically we are assigning functions to variables and with bind we can permantly set our parameters
const double = multiply.bind(null, 2)
const triple = multiply.bind(null, 3)
const nine = multiply.bind(null,3, 3)

double(10)
triple(10)
nine()


//console.log(double)