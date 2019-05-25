#!/usr/bin/env node
import {
  engine, greeting, showGameResult, requestUserName,
} from '..';

import gameModule from '../games-modules/brain-calc-module';

greeting();
const userName = requestUserName();
showGameResult(engine(gameModule), userName);
