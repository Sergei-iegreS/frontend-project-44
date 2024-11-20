import gameLoop from '../index.js';

const brainCalcGames = (name) => {
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
    return expression;
  };
  // Создаем массив из трех выражений
  const expressions = [];
  for (let i = 0; i < 3; i += 1) {
    expressions.push(generateExpression());
  }
  const getAnswer = (num) => {
    const expressionsIndex = num;
    const parts = expressionsIndex.split(' '); // Разбиваем строку на части
    const num1 = parseInt(parts[0], 10);
    const operator = parts[1];
    const num2 = parseInt(parts[2], 10);
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
      default:
        console.error('Неизвестная операция: ' + operator);
    }
    return result;
  };
  const checkAnswer = (result, answer) => result === parseInt(answer, 10);
  const question = 'What is the result of the expression?';
  gameLoop(expressions, question, getAnswer, checkAnswer, name);
};

export default brainCalcGames;
