#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.clear();
console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name?\n');
console.log(`\nHello, ${userName}!\n`);
