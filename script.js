const fightTools = ["Rock", "Paper", "Scissors"]
const pFightTools = ["Paper", "Scissors", "Rock"]

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
    let userChoice = parseInt(prompt());
    if (userChoice <= 3  && userChoice >= 1) {
        return userChoice;
    } else {
        return doPrompt();
    }
}

function printChoices(){
    console.log(`Computer chose: ${aiChoice}\nPlayer chose: ${pChoice}`)
}

function getBattleResult() {
    if (aiChoice === pChoice) {
        return "Tie";
    } else if ( (aiChoice === "Rock" && pChoice === "Scissors") || (aiChoice === "Paper" && pChoice === "Rock") || (aiChoice === "Scissors" && pChoice === "Paper")
){
        return "Loss";
    } else {
        return "Victory";
    }
}
printPrompt()

let aiChoice = fightTools[getRandChoice()];
let pChoice = fightTools[doPrompt() - 1]

console.log(printChoices())
console.log(`Game result: ${getBattleResult()}`)
