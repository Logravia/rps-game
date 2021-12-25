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

function printChoices(aiChoice, pcChoice){
    console.log(`Computer chose: ${aiChoices[aiChoice]}\nPlayer chose: ${pcChoices[pcChoice]}`)
}

function getBattleResult(aiChoice,pcChoice) {
    if (aiChoice === pcChoice) {
        return "Loss";
    } else if (pcChoices[pcChoice] === aiChoices[aiChoice]) {
        return "Tie"
    } else {
        return "Victory";
    }
}

function printGameResult(aiChoice,pcChoice) {
    console.log(`Game result: ${getBattleResult(aiChoice,pcChoice)}`)
}

function playGame() {
    printPrompt()
    let pcChoice = doPrompt() - 1
    let aiChoice = getRandChoice();
    printChoices(aiChoice,pcChoice)
    printGameResult(aiChoice,pcChoice)
}

playGame()
