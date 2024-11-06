
import { gameLoop } from '../index.js';

export const brainGcdGames = (name) => {

    const generateExpression = () => {

        // Генерируем два случайных числа от 1 до 15
        const num1 = Math.floor(Math.random() * 15) + 1;
        const num2 = Math.floor(Math.random() * 15) + 1;

        // Формируем выражение и вычисляем результат
        const expression = `${num1} ${num2}`;
        return expression
    };

    // Создаем массив из трех выражений
    const expressions = [];

    for (let i = 0; i < 3; i++) {
        expressions.push(generateExpression());
    };

    const getAnswer = (num) => {
    let expressionsIndex = num
    let parts = expressionsIndex.split(' '); // Разбиваем строку на части
    let num1 = parseInt(parts[0]);
    let num2 = parseInt(parts[2]);

    const gcd = (num1, num2) => {
        // Базовый случай
        if (!num2) {
            return num1;
        }
        // Рекурсивный шаг
        return gcd(num2, num1 % num2);
    }
    let result = gcd(num1, num2)
    return result
    }

    const checkAnswer = (result, answer) => {
        return result = parseInt(answer)
    };

    const question = "What is the result of the expression?";

    gameLoop (expressions, question, getAnswer, checkAnswer, name);  
}
