import gameLoop from '../index.js';

const brainGcdGames = (name) => {
  const generateExpression = () => {
    // Генерируем два случайных числа от 1 до 15
    const num1 = Math.floor(Math.random() * 15) + 1;
    const num2 = Math.floor(Math.random() * 15) + 1;
    // Формируем выражение и вычисляем результат
    const expression = `${num1} ${num2}`;
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
    const num2 = parseInt(parts[1], 10);
    const gcd = (a, b) => {
      // Базовый случай
      if (!b) {
        return a;
      }
      // Рекурсивный шаг
      return gcd(b, a % b);
    };
    const result = gcd(a, b);
    return result;
  };
  const checkAnswer = (result, answer) => result === parseInt(answer, 10);
  const question = 'Find the greatest common divisor of given numbers.';
  gameLoop(expressions, question, getAnswer, checkAnswer, name);
};

export default brainGcdGames;
