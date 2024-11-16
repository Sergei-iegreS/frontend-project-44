#!/usr/bin/env node
import { greet, user } from '../src/cli.js';
import { brainGcdGames } from '../src/games/brain-gcd.js';
greet();
const name = user();
brainGcdGames(name);
