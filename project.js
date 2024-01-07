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


const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

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


//the below function contains the bet system. the bet amount should be valid numeric value, positive and should be greater than balance 
const getBet = (balance, lines) => {
    while(true){
        const bet = prompt("Enter the bet amount per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)){
            console.log("Invalid bet, try again.");
        }else{
            return numberBet;
        }
    }
}

const spin = () => {
    const symbols = [];  //this array contains all the available symbols to use
    for ([symbol, count] of Object.entries(SYMBOLS_COUNT)){
        //console.log(symbol, count);
        for (let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }

    const reels = [[], [], []];
    for(let i = 0; i < COLS; i++){
        const reelSymbols = [...symbols];  //here in this array we're using the symbols in the 'symbols' array so that we can use it here
            for(let j = 0; j < ROWS; j++){
                const randomIndex = Math.floor(Math.random() * reelSymbols.length);
                const selectedSymbol = reelSymbols[randomIndex];
                reels[i].push(selectedSymbol);
                reelSymbols.splice(randomIndex, 1);
            }
    }

    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
}


console.log(reels);

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();

const rows = transpose(reels);