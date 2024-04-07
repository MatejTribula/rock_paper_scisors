const playerSelection = 'rock'.toLowerCase()


playGame()

function playGame() {

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice().toLowerCase()
        console.log(round(playerSelection, computerSelection))
    }

}

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!"
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        return "You lose! " + computerSelection + " beats " + playerSelection
    } else {
        return "You win! " + playerSelection + " beats " + computerSelection
    }
}

function getComputerChoice() {
    const computedNum = Math.floor(Math.random() * 3)
    if (computedNum === 0) {
        return "rock"
    } else if (computedNum === 1) {
        return "paper"
    } else if (computedNum === 2) {
        return "scissors"
    }
}