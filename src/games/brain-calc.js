
import { gameLoop } from '../index.js';


export const brainCalcGames = (name) => {

        // Формируем выражение
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
    }
    
        // Создаем массив из трех выражений

    const expressions = [];
    for (let i = 0; i < 3; i++) {
        expressions.push(generateExpression());
    };

    const getAnswer = (num) => {   
        let expressionsIndex = num
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
        return result
    };

    const checkAnswer = (result, answer) => {
        return result === parseInt(answer)
    };

    const question = "What is the result of the expression?";

    gameLoop (expressions, question, getAnswer, checkAnswer, name);   
    
};