//Getters and Setters Excerise Practice

//Create a class called UserProfile that has username, email, birthdate
class userProfile {
    username; 
    email; 
    birthdate; 
    constructor(username, email, birthdate) {
        this._username = username; 
        this._email = email;
        this._birthdate = birthdate; 


        
    }

//Gets the current UserName
    get userName (){

        //Username Validation:
     console.log(this._username)

    }

    set userName (userNameInput){

        if (userNameInput === "" || typeof userNameInput !== "string") {
            throw new Error("Invalid Username.");
            
        } else {
            this._username = userNameInput
            console.log(this._username)
            console.log(userNameInput)
            return this._username; 
            
        }


    }

    //email
    get eMail (){
        console.log(this._email); 
        return this._email;
    }

    set eMail (emailInput) {
        //Regular Exp to check for a @ in the email:
        const regularExpCheck = /@/; 
        //Save our test result to a variable for the if condition: 
      const emailTest =  regularExpCheck.test(emailInput); 

      //If the email has a @ print and assign the email, if not throw an error!
      if (emailTest === true) {
        console.log(emailInput); 
        this._email = emailInput;
        return this._email; 

      } else {
        throw new Error("Invalid Email.");
        
      }
    }

    //birthdate
    get birthDay (){
        console.log(this._birthdate); 
        return this._birthdate;
    }

    set birthDay(birthDayInput){

        //Regular Exp to check if the input string is a date: 
        const regularExpDateCheck = /^\d{4}-\d{2}-\d{2}$/gm; 
        const dateCheck = regularExpDateCheck.test(birthDayInput); 

        if (dateCheck === true) {
            console.log(birthDayInput)
            this._birthdate = birthDayInput; 
            return this._birthdate
        } else {
            throw new Error("Invalid Birthdate.");
            
        }

    }


}


//Testing and Using our Class:
const user = new userProfile()

user.userName = "Austin Paschal"
user.eMail = "almondpaschal@gmail.com"
user.birthDay = "1995-10-01"

