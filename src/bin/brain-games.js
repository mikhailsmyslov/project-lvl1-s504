#!/usr/bin/env node
import readlineSync from 'readline-sync';
import session from '../launcher';
import { greeting, requestUserName } from '..';

greeting();
const userName = requestUserName();

while (session(userName) !== false) {
  readlineSync.keyInPause('Press any key to return to main menu...');
  greeting(userName);
}
