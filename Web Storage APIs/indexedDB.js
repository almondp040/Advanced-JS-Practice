//Indexed DB example: Storing a large amount of data on the client side!
//We can also just store data in a actual DB
//Opening a connected to a DB: Name of the DB is called MyFirstDB
const open = indexedDB.open("MyFirstDB", 2); 

//Will need to run when the DB is either upgraded or created
open.onupgradeneeded =() =>{
    const db = open.result; 
    db.createObjectStore("MyUserStore", {keyPath: "id"})
    
    
} 

//Making sure our db connection is successful, once it is successful add data via the transaction
open.onsuccess = () =>{
console.log("Success!!"); 
const db = open.result; 
console.log(db)
const transaction = db.transaction("MyUserStore", "readwrite"); 
const store = transaction.objectStore("MyUserStore"); 

//Inserting our Data: 
//store.put({id: 1, username: "Almond", age: 99}) // the put adds data to our DB
// store.put({id: 2, username: "Jimmy", age: 59}); 
// store.put({id: 3, username: "Paschal", age: 12}); 
// store.put({id: 4, username: "Josh", age: 32}); 

//Grabing data
const user = store.get(4);  //grabs a user via the ID

const allUsers = store.getAll(); 

//Using our data: 
allUsers.onsuccess = () =>{
    console.log(allUsers.result)
}

//Then another callback to grab our results:
user.onsuccess = () =>{
    console.log(user.result); 
}

transaction.oncomplete = () =>{
    db.close(); 
}

}; 

open.onerror = () =>{
    console.log("ERROR"); 
}



