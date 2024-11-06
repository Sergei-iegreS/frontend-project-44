import readlineSync from 'readline-sync';

export const user = () => {

    const name = readlineSync.question('May I have your name?: \n');

    console.log("Hello, ", name + "!");
    return name
}

const maxFinalSteps = 3

export const gameLoop = (questionList, question, getAnswer, checkAnswer, user) => {

    console.log(question);

    let res = 0; 

    for (let i = 0; i < questionList.length; i++) {

        const currentQuestion = questionList[i]
      
        console.log("Question:", currentQuestion); // Выводим на экран первое значение
      
        const otvet = readlineSync.question('Your answer: '); // Вводим ответ

        const result = getAnswer(currentQuestion)

        if (checkAnswer(result, otvet)) {     // Сравниваем ответы
            console.log("Correct!");
            res++ 

            if (res === maxFinalSteps) {
                console.log("Congratulations, " + user + '!');
            }

        } else {
            console.log(otvet + " is wrong answer ;(. Correct answer was " + result + '.' + " Let's try again, " + user + '!')
            break;    
        }
    }    
};

 