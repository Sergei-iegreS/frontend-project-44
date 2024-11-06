#!/usr/bin/env node
import { greet } from '../src/cli.js';
import { user } from '../src/index.js';
import { brainGcdGames } from '../src/games/brain-gcd.js';

greet()
const name = user()

brainGcdGames(name)