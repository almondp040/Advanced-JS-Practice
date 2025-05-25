const specialAdd = (number = 0) =>{

//Initial add: 
let value = number; 
let add = number++; 

console.log("Value:", value, "Add:", add)
//console.log(add); 

const addMore = () =>{
 let plus =   add + 1; 
 //console.log(plus)
 return plus + value; 
}; 

return addMore(); 


}
//Function that adds +1 to everything lol: 
console.log(specialAdd(12));
