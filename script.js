const pcChoices = ["Rock", "Paper", "Scissors"]
const aiChoices = ["Paper", "Scissors", "Rock"]

function getRandChoice(){
    let max = 3;
    return Math.floor(Math.random() * max);
}

function printPrompt() {
    console.log("Choose one of these:\n");
    for (let i = 0; i < pcChoices.length; i++) {
        console.log(`${i+1}. ${pcChoices[i]}\n`);
    }
}

function doPrompt() {
    let userChoice = parseInt(prompt());
    if (userChoice <= 3  && userChoice >= 1) {
        return userChoice;
    } else {
        return doPrompt();
    }
}

function printChoices(){
    console.log(`Computer chose: ${aiChoices[aiChoice]}\nPlayer chose: ${pcChoices[pcChoice]}`)
}

function getBattleResult() {
    if (aiChoice === pcChoice) {
        return "Loss";
    } else if (pcChoices[pcChoice] === aiChoices[aiChoice]) {
        return "Tie"
    } else {
        return "Victory";
    }
}

function printGameResult() {
    console.log(`Game result: ${getBattleResult()}`)
}

function playGame() {
    printPrompt()
    let pcChoice = doPrompt() - 1
    let aiChoice = getRandChoice();
    printChoices()
    printGameResult()
}

playGame()
