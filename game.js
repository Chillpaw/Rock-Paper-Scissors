"use strict";
let playerPoints = 0;
let computerPoints = 0;

console.log("Welcome, best of 5 wins!");

let gameOver = false;

document.getElementById("rock").addEventListener("click", () => playGameOnClick("rock"));
document.getElementById("paper").addEventListener("click", () => playGameOnClick("paper"));
document.getElementById("scissors").addEventListener("click", () => playGameOnClick("scissors"));

document.getElementById("reset").addEventListener("click", () => resetGame());

function playGameOnClick(playerSelection) {
    let computerSelection = getComputerSelection();
    document.getElementById("computerSelection").textContent = `Your opponent selected ${computerSelection}!`
    let result = playRound(playerSelection, computerSelection);
    document.getElementById("result").textContent = result;
    document.getElementById("gameEndMessage").textContent = "";
    updatePoints();

    if (checkGameOver()) resetGame();
}

function checkGameOver() {
    if (playerPoints >= 3) {
        console.log(`Congratulations! You won! ${playerPoints} - ${computerPoints}`);
        document.getElementById("gameEndMessage").textContent = `Congratulations! You won! ${playerPoints} - ${computerPoints}`;
        return true;
    } else
        if (computerPoints >= 3) {
            console.log(`Comiserations. You lost...! ${computerPoints} - ${playerPoints}`);
            document.getElementById("gameEndMessage").textContent = `Comiserations. You lost...! ${computerPoints} - ${playerPoints}`
            return true;
        }
        else return false;
}

function updatePoints() {
    document.getElementById("playerScore").textContent = playerPoints;
    document.getElementById("computerScore").textContent = computerPoints;
}

function resetGame() {
    playerPoints = 0;
    computerPoints = 0;
    updatePoints();
    document.getElementById("result").textContent = "";
}

function playRound(playerSelection, computerSelection) {
    console.log(`You selected ${playerSelection}`);
    console.log(`Your opponent selected ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return "It's a draw!"
    }

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                playerPoints++;
                return "You win!";
            }
            else {
                computerPoints++;
                return "You lose...";
            }
        case "scissors":
            if (computerSelection === "paper") {
                playerPoints++;
                return "You win!";
            }
            else {
                computerPoints++;
                return "You lose...";
            }

        case "paper":
            if (computerSelection === "rock") {
                playerPoints++;
                return "You win!";
            }
            else {
                computerPoints++;
                return "You lose...";
            }
    }
}

function round() {
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerSelection();

    console.log(playRound(playerSelection, computerSelection))
}

function getComputerSelection() {
    let selection = Math.floor(Math.random() * 3) + 1
    if (selection === 1) return "rock"
    if (selection === 2) return "paper"
    if (selection === 3) return "scissors"
}

function getPlayerSelection() {
    while (true) {
        let input = prompt();
        input = input.toLowerCase();
        if (input === "rock") return "rock";
        else if (input === "paper") return "paper";
        else if (input === "scissors") return "scissors";
        else console.log("Invalid input. Please enter rock, paper or scissors");
    }
}

