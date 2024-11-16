
import { gameLoop } from '../index.js';

export const brainPrimeGames = (name) => {
  const generateExpression = () => {
    // Генерируем два случайных числа от 1 до 15
    const num1 = Math.floor(Math.random() * 10) + 1;

    return num1;
  };

  const expressions = [];

  for (let i = 0; i < 3; i++) {
    expressions.push(generateExpression());
  };

  const answer = (num) => {
    // Простые числа всегда больше 1
    if (num <= 1) return 'no';

    // Проверяем делимость на числа от 2 до корня из num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return 'no';
    }
    // Если ни один делитель не подошел, число простое
    return 'yes';
  };

  const checkAnswer = (result, otvet) => {
    return result === otvet;
  };

  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameLoop (expressions, question, answer, checkAnswer, name);
};
