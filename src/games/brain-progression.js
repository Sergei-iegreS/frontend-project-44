
import { gameLoop } from '../index.js';


export const brainProgressionGames = (name) => {

    const generateExpression = () => {

    // Параметры игры
        const minLength = 5;
        const maxLength = 10;
        const minNum = 1
        const maxNum = 100 

    // Генерация длины, начального числа и разности
        const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        const firstNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        const difference = Math.floor(Math.random() * 10);
    
    // Создание прогрессии и скрытие элемента
        const progression = [];
        const hiddenIndex = Math.floor(Math.random() * length);
        let hiddenNumber;
        for (let i = 0; i < length; i++) {
            if (i === hiddenIndex) {
            hiddenNumber = firstNumber + i * difference;
             progression.push('..');
            } else {
            progression.push(firstNumber + i * difference);
            }
        }
        return progression.join(' ')
    };

    const expressions = [];

    for (let i = 0; i < 3; i++) {
        expressions.push(generateExpression());
    };

    const getAnswer = (progression) => {

    // Находим разность между элементами
        const difference = progression[1] - progression[0];

    // Проходим по массиву и ищем место, где разность нарушается
        for (let i = 1; i < progression.length - 1; i++) {
            if (progression[i + 1] - progression[i] !== difference) {

    // Возвращаем пропущенное число
                return progression[i] + difference;
            }
        }
    }

    const checkAnswer = (result, answer) => {
        return result === parseInt(answer)
    };

    const question = "What number is missing in the progression?";

    gameLoop (expressions, question, getAnswer, checkAnswer, name);  
}