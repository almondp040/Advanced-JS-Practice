//Local Storage Notes App Demo: 
//Get our input from the text area: DONE, 
//Save this to Local Storage
//Save 1 note on submission, then save the next

class notesApp {
    constructor(textAreaID, buttonID, ulID, listItemID) {
    this.buttonID = document.getElementById(buttonID); 
    this.textAreaID = document.getElementById(textAreaID); 
    this.ulID = document.getElementById(ulID); 
    this.listItemID = document.getElementById(listItemID); 
    this.textData = this.turnLocalStorageIntoArray(); //probably rename this  
    this.buttonID.addEventListener("click", this.runButton); 
        
    
    }

 
   
    getAndSaveText = () =>{
       const text =  this.textAreaID.value; 
       console.log(text);  
       this.textData.push(text); 
       const JSONtext = JSON.stringify(this.textData); 
       localStorage.setItem("text", JSONtext); 
       console.log(localStorage); 
    }


    turnLocalStorageIntoArray = () =>{
      const  grabTextDataFromLocalStorage = localStorage.getItem('text'); 
      console.log(grabTextDataFromLocalStorage)
        const convert = JSON.parse(grabTextDataFromLocalStorage ) ; 
        console.log("Data for use:", convert)
        return convert; 
    }

    applyArrayToListItems = () =>{
        this.textData
    }

    runButton = () =>{
        this.getAndSaveText()
        
    }



}

const notes = new notesApp("textArea", "saveNote",  "notesContainer", "listItem"); 
const notesData = notes.turnLocalStorageIntoArray(); 
console.log(notesData)
