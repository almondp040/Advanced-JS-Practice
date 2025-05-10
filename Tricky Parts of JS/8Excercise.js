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

console.log(parseResults); 
return parseResults;

   

}; 

const nums = [1,2,3,4,5,6,7,8]; 

parseAndCheck(nums); 


//#2: 

const decrementArrayElements = (array = []) => {

const changed = array.map((nums, index)=>{
    nums--; 
    return nums; 
})

    console.log("Changed Array:", changed); 

}

decrementArrayElements([1,2,3,5])
