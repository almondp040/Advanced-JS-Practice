//Generator Function for Fibonacci: 
function *fibonacci() {
    let a = 0 
    let b = 1; 

    while (true) {
        yield a; 
        [a, b] = [b, a + b]; 
    }

}

//Save it to a variable for use: 
const fibGen = fibonacci(); 

 
//Use our variable inside of a loop: 
const runFibonacci = () =>{

    for (let index = 0; index < 20; index++) {
        const element = fibGen.next().value;
        console.log(element); 
    }

}

//Run Fibonacci: 
runFibonacci(); 


//Pagination: 

//When are generators useful: 
const allImages = Array.from(

    {length: 1000}, 
    (_, i) => `https://placeimg.com/640/480/any?image=${i}`


)

const getBatchOfItem = function *(item, batchSize = 10 ) {
    let currIndex = 0; 
    while (currIndex < item.length) {
        const itemSlice = item.slice(currIndex, currIndex+batchSize); 
        console.log(itemSlice) // will give me 10 images in my array but I can adjust this when I call the function
       yield itemSlice; 
       currIndex += batchSize; 
    }

}



const imgGen10 = getBatchOfItem(allImages); 
const imgGen50 = getBatchOfItem(allImages, 50); 
imgGen10.next().value //Give me 10 items, if i want 10 more i can loop it 
imgGen50.next().value //Give me 50 items

