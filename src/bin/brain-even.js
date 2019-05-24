#!/usr/bin/env node
import { requestUserName } from '..';
import BrainEven from '../brain-even-module';

console.clear();
console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = requestUserName();
BrainEven(userName);
