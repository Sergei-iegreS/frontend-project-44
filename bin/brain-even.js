#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!");

const name = readlineSync.question('May I have your name?: ');

console.log("Hello, ", name + '!\nAnswer "yes" if the number is even, otherwise answer "no".');

let numbers = [10, 17, 33];

let res = 0;



const answer = (num, ans) => {
    if (num % 2 === 0 && ans === "yes") {
        return true;
    }
    else if (num % 2 !== 0 && ans === "no") {
        return true;
    } else {
        return false;
    }
};

for (let i = 0; i < numbers.length; i++) {

    const currentQuestionNum = numbers[i]

    console.log("Question:", currentQuestionNum);

    const otvet = readlineSync.question('Your answer: ');

    let result = answer(currentQuestionNum, otvet);

    if (result === true) {
        console.log("Correct!");
        res++
        if (res === 3) {
            console.log("Congratulations, " + name + '!');
        }
    } else {
         console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\nLet\'\s try again, "+  name + "!");
         res++ 
    }
};

console.log("Congratulations", name + "!" );