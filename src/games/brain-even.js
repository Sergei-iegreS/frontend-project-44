import gameLoop from '../index.js';

const brainEvenGames = (name) => {
  const numbers = [10, 17, 33];
  const answer = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const checkAnswer = (result, otvet) => result === otvet;
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameLoop(numbers, question, answer, checkAnswer, name);
};

export default brainEvenGames;
