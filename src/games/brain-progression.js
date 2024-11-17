import { gameLoop } from '../index.js';

const brainProgressionGames = (name) => {
  const generateExpression = () => {
    // Параметры игры
    const minLength = 5;
    const maxLength = 10;
    const minNum = 1;
    const maxNum = 100;
    // Генерация длины, начального числа и разности
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    const firstNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    const difference = Math.floor(Math.random() * 10);
    // Создание прогрессии и скрытие элемента
    const progression = [];
    const hiddenIndex = Math.floor(Math.random() * length);
    for (let i = 0; i < length; i++) {
      if (i === hiddenIndex) {
        progression.push('..');
      } else {
        progression.push(firstNumber + i * difference);
      }
    }
    return progression.join(' ');
  };
  const expressions = [];
  for (let i = 0; i < 3; i++) {
    expressions.push(generateExpression());
  }
  const getAnswer = (progression) => {
    // Находим разность между элементами
    const progressionArr = progression.split(' ');
    let difference;
    for (let i = 0; progressionArr.length - 1; i++) {
      const result = progressionArr[i + 1] - progressionArr[i];
      if (Number.isInteger(result)) {
        difference = result;
        break;
      }
    }
    if (progressionArr[0] === '..') {
      return progressionArr[1] - difference;
    }
    // Проходим по массиву и ищем место, где разность нарушается
    for (let i = 1; i < progressionArr.length; i++) {
      if (progressionArr[i] === '..') {
        return parseInt(progressionArr[i - 1]) + difference;
      }
    }
  };
  const checkAnswer = (result, answer) => result === parseInt(answer);
  const question = 'What number is missing in the progression?';
  gameLoop(expressions, question, getAnswer, checkAnswer, name);
};

export default brainProgressionGames;