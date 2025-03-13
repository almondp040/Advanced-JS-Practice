class BankAccount {
    constructor(balance = 0 , accountHolder, accountNumber) {


        if (Number.isFinite(balance)) {
            console.log(balance); 
        } else {
            
            console.log("Balance needs to be a number!!")
        }

        this.balance = balance
        this.accountHolder = accountHolder
        this.accountNumber = accountNumber
    }

    deposit (amount){
        if (amount > 0) {
            const addDeposit = this.balance += amount; 
            console.log(`Deposited ${amount}. Total Balance: ${addDeposit} `)
        } else {
            console.log("Unable to deposit a negative amount!")
        }
    }

    widthdrawl(amount){

        const takeOutMoney = this.balance - amount; 
        if (takeOutMoney < 0) {
            console.log("Insufficient Funds!")
        } else {
            console.log(`Withdrew ${amount}. Total Balance: ${takeOutMoney} `)
  
        }

    }
}

const bankUser = new BankAccount(); 

bankUser.deposit(1000); 
bankUser.widthdrawl(300);
