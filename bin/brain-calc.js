#!/usr/bin/env node

import { greet } from '../src/cli.js';
import { user } from '../src/index.js';
import { brainCalcGames } from '../src/games/brain-calc.js';

greet()
const name = user()

brainCalcGames(name)