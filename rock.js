playerChoice = "rock";
function determinewinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        return "You win!";
    }
    return "Computer wins!";
}
console.log(determinewinner(playerChoice, "scissors")); 