import readlineSync from 'readline-sync';

export const requestUserName = () => {
    const userName = readlineSync.question('May I have your name?\n');
    console.log(`Hello, ${userName}!`);
};