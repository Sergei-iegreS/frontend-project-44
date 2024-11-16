import readlineSync from 'readline-sync';

export const greet = () => {
   
    console.log('Welcome to the Brain Games!');
}

export const user = () => {

    const name = readlineSync.question('May I have your name? \n');

    console.log('Hello,', name);
    return name
}
