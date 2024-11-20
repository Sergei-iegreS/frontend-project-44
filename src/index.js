import readlineSync from 'readline-sync';

const maxFinalSteps = 3;
const gameLoop = (questionList, question, getAnswer, checkAnswer, user) => {
  console.log(question);
  let res = 0;
  for (let i = 0; i < questionList.length; i += 1) {
    const currentQuestion = questionList[i];
    console.log('Question:', currentQuestion); // Выводим на экран первое значение
    const otvet = readlineSync.question('Your answer: '); // Вводим ответ
    const result = getAnswer(currentQuestion);
    if (checkAnswer(result, otvet)) { // Сравниваем ответы
      // console.log(otvet)
      console.log('Correct!');
      res += 1;
      if (res === maxFinalSteps) {
        console.log(`Congratulations, ${user}!`);
      }
    } else {
      console.log(`${otvet} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${user}!`);
      break;
    }
  }
};

export default gameLoop;
