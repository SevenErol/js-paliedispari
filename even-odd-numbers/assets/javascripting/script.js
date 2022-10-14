
// take input
const userChoice = prompt ("Even or Odd: ");

// take second input
const userNumber = Number (prompt("Choose a number between 1 and 5"));

// minimum number
const minumumNumber = 1;

// maximum number
const maxNumber = 5;

// get element in DOM
const visualElement = document.querySelector("h1");

// check proper number choice
if (userNumber < 1 || userNumber > 5) {
    alert("Number inserted not valid!");
}

// randomness function
function randomNumber (min,max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

// pc choice
const pcChoice = randomNumber(minumumNumber, maxNumber); 

console.log(pcChoice)

// sum function 
function sum (numberOne, numberTwo) {

    const addition = numberOne + numberTwo;

    return addition;
}

// user choice plus pc choice
const result = sum(pcChoice, userChoice);

// check for winning
if(result % 2 === 0) {

    if(userChoice.toLowerCase === "even") {

        visualElement.innerHTML = "Player wins!"

    } else {

        visualElement.innerHTML = "PC wins!"
    }
   
} else if (result % 2 !== 0) {

    if (userChoice.toLowerCase === "odd") {

        visualElement.innerHTML = "Player wins!"

    } else {

        visualElement.innerHTML = "PC wins!"
    }
}