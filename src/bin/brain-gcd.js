#!/usr/bin/env node
import {
  engine, greeting, showGameResult, requestUserName,
} from '..';

import gameModule from '../games-modules/brain-gcd-module';

greeting();
const userName = requestUserName();
showGameResult(engine(gameModule), userName);
