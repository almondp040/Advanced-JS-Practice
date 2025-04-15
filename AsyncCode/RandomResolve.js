//Making our promise from scratch: 
const randomRes = () =>{
    const randomMath = Math.random()

    //Manually create our promise: 
    const newPromise = new Promise((resolve, reject)=>{

        //Set Timeout to check if the random number is larger than 0.5, resolve it, if not reject it after 2 secs
       setTimeout(() => {
         if (randomMath > 0.5) {
             resolve("Number Greater Than 0.5")
         } else {
             reject("Number Less Than 0.5")
         }
       }, 1000);

    })

    return newPromise; 
    
}

//We can also chain callbacks using this as well by returning the randomRes()
randomRes()
    .then((value)=> {
        console.log("1st Resolved:", value)
        return randomRes()
    })
    .then((value)=>{
        console.log("2nd Resolved:", value)
        return randomRes()
    })
    .then((value)=>console.log("Last Resolved:", value))
    .catch((error)=> console.log("Rejected:", error))
