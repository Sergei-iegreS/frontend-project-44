#!/usr/bin/env node

import { greet } from '../src/cli.js';
import { user } from '../src/index.js';
import { brainPrimeGames } from '../src/games/brain-prime.js';

greet()
const name = user()

brainPrimeGames(name)