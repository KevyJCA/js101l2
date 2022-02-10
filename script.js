//Battleship game Chapter 2 of "Head-first JavaScript"//

let location1=3;
let location2=4;
let location3=5;

let guess;
let hits=0;
let guesses=0;

let isSunk = false;

while (isSunk==false) {
    guess = prompt ("Ready, Aim, Fire (Guess number between 0-6):");
    if (guess < 0 || guess > 6) {
        alert ("please enter a valid number...geez!");
    } else {
        guesses = guesses + 1;
    }
}