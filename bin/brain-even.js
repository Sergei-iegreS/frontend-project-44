#!/usr/bin/env node

import { greet, user } from '../src/cli.js';
import { brainEvenGames } from '../src/games/brain-even.js';

greet();
const name = user();
brainEvenGames(name);
