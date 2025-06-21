//Performance Example: 

//Create a array with lots of numbers, then check the performance
const largeArray = Array.from({length: 10000}, ()=>{
   return Math.floor(Math.random() * 1000); 
})

console.log(largeArray); 

//Copies our array
const arrayForNativeSort = [...largeArray]; 

//Marks the start
performance.mark("Native Sort Start"); 
//Sorts our array
const nativeSort = arrayForNativeSort.sort((a,b) =>{
    return a-b; 
})

//Marks the end: 
performance.mark("Native Sort End"); 

//Measurement: 
const measure = performance.measure("Native Sort Time", "Native Sort Start", "Native Sort End"); 

//Looks at our measurement using the Native Sort times, proves that the built in .sort() is faster than bubble sort
//Can be used anywhere in our code using the Start and End marks
const nativeDuration = performance.getEntriesByName("Native Sort Time")[0].duration
//See our values: 
console.log( `Native took ${nativeDuration}`)