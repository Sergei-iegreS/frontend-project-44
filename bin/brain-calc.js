#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!");

const name = readlineSync.question('May I have your name?: ');

console.log("Hello, ", name + '!\nWhat is the result of the expression?');


const generateExpression = () => {

        // Массив с возможными операциями
    const operators = ['+', '-', '*'];
    // Генерируем два случайных числа от 1 до 15
    const num1 = Math.floor(Math.random() * 15) + 1;
    const num2 = Math.floor(Math.random() * 15) + 1;
  
    // Выбираем случайную операцию
    const operator = operators[Math.floor(Math.random() * operators.length)];
  
    // Формируем выражение и вычисляем результат
    const expression = `${num1} ${operator} ${num2}`;
    return expression
};


    // Создаем массив из трех выражений
const expressions = [];
for (let i = 0; i < 3; i++) {
    expressions.push(generateExpression());
};
    
let res = 0;
    
for (let i = 0; i < expressions.length; i++) {

    console.log("Question:", expressions[i]);
    
    let expressionsIndex = expressions[i]
    let parts = expressionsIndex.split(' '); // Разбиваем строку на части
    let num1 = parseInt(parts[0]);
    let operator = parts[1];
    let num2 = parseInt(parts[2]);

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
    }

    const otvet = readlineSync.question('Your answer: ');
console.log("result ", typeof result)
console.log("otvet ", typeof otvet)
    if (result === parseInt(otvet)) {
        console.log("Correct!");
        res++
        if (res === 3) {
            console.log("Congratulations, " + name + '!');
        }
    } else {
        console.log(otvet + " is wrong answer ;(. Correct answer was " + result + '.' + " Let's try again, " + name + '!');
        break;
    }
};
