const fs = require("fs")

//Takes in the file name, encoder then a callback with error and data parameters
// fs.readFile("./test.txt", "utf8",  (error, data)=>{

//     if (error) {
//         console.log("Error:", error)
//     } else {
//         console.log("File says: ", data)
//     }
    
// })

//If we want to have a function that reads a file after the other we will need to put our readfile logic in a promise: 
//A promise from scratch, we write our logic, then manually say what we want for the resolve and rejection, then we can use this promise via return or async / await
const asyncReadFile = async (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf8", (error, data)=>{
            if (error) {
                console.log("Error:", error)
                reject(error)
            } else {
                //console.log("Data:", data)
                resolve(data)
            }
        } )
    })
}

//Using our function with a made from scratch promise: 
asyncReadFile("./test.txt")
    .then((data)=>{
        console.log(data)
        return asyncReadFile("./test2.txt")
    })
    .then((data)=>{
        console.log(data)
        return asyncReadFile("./test3.txt")
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=> console.log("Error:", error))


//Write out our manual promise first with the promise logic, then use that promise with Async / Await
//Rewrite this as a async: 
const getText = async () => {
   try {
     const text1 = await asyncReadFile("./test.txt")
     const text2 = await asyncReadFile("./test2.txt")
     const text3 = await asyncReadFile("./test3.txt")
     console.log("Async Method:" ,text1, text2, text3 )
   } catch (error) {
    console.log("Error:", error)
   }
}

getText()