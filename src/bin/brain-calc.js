#!/usr/bin/env node
import engine from '..';
import brainCalc, { rules } from '../brain-calc-module';

console.clear();
engine(rules, brainCalc);
