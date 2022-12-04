//Having two seperate arrays allows for simpler logic
// When pc and  ai choose the same indice, pc always looses
const pcChoices = ["Wood", "Fire", "Water"];
const aiChoices = ["Fire", "Water", "Wood"];

// rand choice from 0 to 2
function getRandChoice(){
    let max = 3;
    return Math.floor(Math.random() * max);
}

// Prints choices made by the computer and player
function printChoices(aiChoice, pcChoice){
    let pcChoiceShowplace = document.getElementById('pcChoice');
    let vs = document.getElementById('vs');
    let aiChoiceShowplace = document.getElementById('aiChoice');

    pcChoiceShowplace.textContent = `${pcChoices[pcChoice]}`;
    vs.textContent = 'vs';
    aiChoiceShowplace.textContent = `${aiChoices[aiChoice]}`;
}
function getBattleResult(aiChoice,pcChoice) {
    // When the same indice is chosen on two sorted arrays, player always looses
    if (aiChoice === pcChoice) {
        return "Loss";
    } else if (pcChoices[pcChoice] === aiChoices[aiChoice]) {
        return "Tie";
    } else { // Not a tie, not a loss, must be victory
        return "Victory";
    }
}
function printGameResult(result) {
    document.getElementById('battleResult').textContent = result;
}
function printScore() {
    document.getElementById('pcScore').textContent = pcWins;
    document.getElementById('aiScore').textContent = aiWins;
    document.getElementById('roundCount').textContent = roundCount;
}
function updateScore(gameResult) {
    if (gameResult === "Victory") {
        pcWins++;
    } else if (gameResult === "Loss") {
        aiWins++;
    }
    roundCount++;
}
let pcWins = 0;
let aiWins = 0;
let roundCount = 0;

//Game flow for a single round
const playRound = (e) => {

    let target = e.target;

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
