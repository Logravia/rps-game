const fightTools = ["Rock", "Paper", "Scissors"]

function getRandChoice(){
    let max = 3;
    return Math.floor(Math.random() * max);
}

function printPrompt() {
    console.log("Choose one of these:\n");
    for (let i = 0; i < fightTools.length; i++) {
        console.log(`${i+1}. ${fightTools[i]}\n`);
    }
}

function doPrompt() {
    let userChoice = prompt();
    if (userChoice === parseInt(userChoice, 10)) {
        return userChoice;
    } else {
        return false;
    }
}

function getBattleResult() {

}

let computerChoice = fightTools[getRandChoice()];


