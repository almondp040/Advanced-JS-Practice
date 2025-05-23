//parseAndCheck
//Create a function that takes in an array of values and if they of those values are not a number throw a error with the message Invalid Number
const parseAndCheck = (value = []) =>{

  //First maps the items in the array and changes them to numbers, if NaN this will show
    const parseResults =  value.map((nums, index)=>{
        const numChange = parseFloat(nums); 
        return numChange; 
    }); 

//now we can use a loop to throw an error if any of our results are NaN: 
    //console.log(parseResults);
    parseResults.forEach((result) => {
      //  console.log(result, isNaN(result)); 
        if (isNaN(result)) {
            //console.log(result); 
            throw new Error("Invalid Number");     
        }
    }); 

//console.log(parseResults); 
return parseResults;

   

}; 

const nums = [1,2,3,4,5,6,7,8]; 

parseAndCheck(nums); 


//#2: 

const decrementArrayElements = (array = []) => {

    //check if the array is empty or not, next step
const changed = array.map((nums, index)=>{
    if (index > -1) {
        nums--; 
        return nums;
    } else {
        return "Empty Array"; 
    }

})

    //console.log("Changed Array:", changed); 

}

decrementArrayElements([]); 

//Range Generator Practice: 
//Takes in numbers and gives me a range between these numbers
function *rangeGenerator(start, end) {
    //Start is less than end: 
    if (start <= end) {
        for (let i = start; start <= end; yield i++) {
            yield i; 
        }; 

    } else {
         for (let i = start; start >= end; i--) {
       yield i; 
    }
    }

}; 

