//Having two seperate arrays allows for simpler logic
// When pc an ai choose the same indice, pc always looses
const pcChoices = ["Rock", "Paper", "Scissors"]
const aiChoices = ["Paper", "Scissors", "Rock"]

//generates random number of 0 up to 2
function getRandChoice(){
    let max = 3;
    return Math.floor(Math.random() * max);
}

//Prints all the possible choices in a formatted way with a text prompt
function printPrompt() {
    console.log("Choose one of these:\n");
    for (let i = 0; i < pcChoices.length; i++) {
        console.log(`${i+1}. ${pcChoices[i]}\n`);
    }
}

//Prompts user for input from 1 to 3, else prompts again
function doPrompt() {
    let userChoice = parseInt(prompt());
    if (userChoice <= 3  && userChoice >= 1) {
        return userChoice;
    } else {
        return doPrompt();
    }
}

//Prints choices made by the computer and player
function printChoices(aiChoice, pcChoice){
    console.log(`Computer chose: ${aiChoices[aiChoice]}\nPlayer chose: ${pcChoices[pcChoice]}`);
}

//Generates battle result with two checks
function getBattleResult(aiChoice,pcChoice) {
    //When the same indice is chosen on two sorted arrays, player always looses
    if (aiChoice === pcChoice) {
        return "Loss";
    } else if (pcChoices[pcChoice] === aiChoices[aiChoice]) {
        return "Tie"
    } else {
        return "Victory";
    }
}

function printGameResult(result) {
    console.log(`Game result: ${result}`);
}

function printScore() {
    console.log(`You won ${pcWins} times`);
    console.log(`Computer won ${aiWins} times`)
}

let pcWins = 0;
let pcLosses = 0;

let aiWins = 0;
let aiLosses = 0;

//Game flow for a single round
function playRound() {
    printPrompt();
    let pcChoice = doPrompt() - 1;
    let aiChoice = getRandChoice();
    //Stores whether it is player "Victory", "Loss" or "Tie" with respective string.
    let gameResult = getBattleResult(aiChoice, pcChoice);

    printChoices(aiChoice,pcChoice);
    printGameResult(gameResult);

    if (gameResult === "Victory") {
        pcWins++;
        aiLosses++;
    } else if (gameResult === "Loss") {
        aiWins++;
        pcLosses++;
    }

    printScore();

}

playRound()
