#!/usr/bin/env node
import engine from '..';
import brainEven, { rules } from '../brain-even-module';

console.clear();
engine(rules, brainEven);
