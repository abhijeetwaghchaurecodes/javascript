//the below are the steps in which the actual workflow of the project will work, please note that

//STEP 1 - deposit some money
//STEP 2 - determine the number of lines to bet on
//STEP 3 - collect a bet amount
//STEP 4 - spin the slot machine
//STEP 5 - check if the user won
//STEP 6 - give the user their winnings
//STEP 7 - play again

/*function deposit(){
    return 1;

}*/

const prompt = require("prompt-sync")();


//the below function will handle the deposit process with possible error handling
const deposit = () => {

    while(true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again.");
        }   else {
            return numberDepositAmount;
        }
    }
    
};


//the below function will handle the number of lines the user is trying to predict 
const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter number of lines (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }

    }
}

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
