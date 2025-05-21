//Bank Account Excercise: 
//Write a function that will take in a pinCode and a initial deposit from the customer
//Then create methods to make sure the correct pin code is entered and once the pin code is entered create checkBalance, deposit, withdraw, changePin
//deposit should add a amount to the initalDeposit
//withdraw should subtract from the initalDeposit, and if the withdrawAmount is > than the initialDeposit show a message saying its canceled
//changePin should allow users the ability to change their pinCode by setting the newPin to the pinCode if it passes the pinCodeCheck
const createAccount = (pinCode, initialDeposit = 0) =>{
const account = {
    pinCode: this.pinCode, 
    initialDeposit: this.initialDeposit, 
    checkBalance (pinCodeCheck){
       // console.log("Pin Code Check:", pinCodeCheck, "Pin Code:", pinCode); 
        if (pinCodeCheck !== pinCode) {
            const script = `Invalid Pin!`; 
            //console.log(script);    
            return script; 
        } else if(pinCodeCheck === pinCode){
           // console.log(initialDeposit); 
            return initialDeposit; 
        };
    }, 
    deposit (pinCodeCheck, depositAmount){
       // console.log("Deposit Pin Code:", pinCodeCheck)
        if(pinCodeCheck !== pinCode){
            const script = `Invalid Pin!`; 
            return script; 
        } else if(pinCodeCheck === pinCode){
            const newBalance = initialDeposit + depositAmount; 
            //console.log(`Successfully deposited ${depositAmount}. Current balance: ${newBalance}`); 
            const script = `Successfully deposited ${depositAmount}. Current balance: ${newBalance}`; 
            return script; 
        }
    }, 
    withdraw(pinCodeCheck, withdrawAmount){
        if(pinCodeCheck !== pinCode){
            const script = `Invalid Pin!`; 
            return script; 
        } else if(pinCodeCheck === pinCode){

            if(withdrawAmount > initialDeposit){
                const script = `Withdrawal amount exceeds account balance. Transaction cancelled.`; 
                return script; 
            } else if(withdrawAmount < initialDeposit){
                            const newBalance = initialDeposit - withdrawAmount; 
                    // console.log(`Successfully deposited ${depositAmount}. Current balance: ${newBalance}`); 
                            const script = `Successfully withdrew ${withdrawAmount}. Current balance: ${newBalance}`; 
                            return script; 
            }

        }

    }, 
    changePin(oldPin, newPin){
        if(oldPin !== pinCode){
            const script = `Invalid Pin.`; 
            return script; 
        } else if(oldPin === pinCode){
                const changePin = pinCode = newPin; 
                //console.log("New Pin Code:", changePin); 
                const script = `PIN successfully changed!`; 
                return script; 
        }
    }
}
//console.log(account)
return account; 
}; 

//Account Variables for testing:
// let account = createAccount(12345, 1000); 
// //const checkBalance = account.checkBalance(12345); 
// //const deposit = account.deposit(12345, 200); 
// //const withdraw = account.withdraw(12345, 1);
// const changePin = account.changePin(12345, 63)

// console.log(account.withdraw(63, 10)); 



// console.log(
    
//    //checkBalance, 
//    //deposit, 
//    // withdraw, 
//changePin

// ); 

