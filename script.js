//Having two seperate arrays allows for simpler logic
// When pc and  ai choose the same indice, pc always looses
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
    let pcChoiceShowplace = document.getElementById('pcChoice')
    let aiChoiceShowplace = document.getElementById('aiChoice')
    let vs = document.getElementById('vs');

    pcChoiceShowplace.textContent = `${pcChoices[pcChoice]}`
    vs.textContent = 'vs'
    aiChoiceShowplace.textContent = `${aiChoices[aiChoice]}`
}
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
    document.getElementById('battleResult').textContent = result;
}
function printScore() {
    document.getElementById('pcScore').textContent = pcWins;
    document.getElementById('aiScore').textContent = aiWins;
}
function updateScore(gameResult) {
    if (gameResult === "Victory") {
        pcWins++;
        aiLosses++;
    } else if (gameResult === "Loss") {
        aiWins++;
        pcLosses++;
    }
}
let pcWins = 0;
let pcLosses = 0;
let aiWins = 0;
let aiLosses = 0;

//Game flow for a single round
const playRound = (e) => {

    let target = e.target
    
    // goes up to parent element containing data-choice of what was clicked() 
    while (!target.hasAttribute("data-choice")) {
        target = target.parentElement;
    }
    
    let pcChoice = parseInt(target.dataset.choice);
    let aiChoice = getRandChoice();

    //Stores whether it is player "Victory", "Loss" or "Tie" with respective string.
    let gameResult = getBattleResult(aiChoice, pcChoice);

    printChoices(aiChoice,pcChoice);
    printGameResult(gameResult);

    updateScore(gameResult);
    printScore();
}

const btnChoices = document.querySelectorAll('.choice');

btnChoices.forEach(choice => choice.addEventListener("click", playRound));



