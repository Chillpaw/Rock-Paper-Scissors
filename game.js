"use strict";
let playerPoints = 0;
let computerPoints = 0;

console.log("Welcome, best of 5 wins!");

let gameOver = false;

while (!gameOver) {
    round();
    gameOver = checkGameOver();
}

function checkGameOver() {
    if (playerPoints >= 3) {
        console.log(`Congratulations! You won! ${playerPoints} - ${computerPoints}`);
        return true;
    } else
        if (computerPoints >= 3) {
            console.log(`Comiserations. You lost...! ${computerPoints} - ${playerPoints}`);
            return true;
        }
        else return false;
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

