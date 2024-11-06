#!/usr/bin/env node
import { greet } from '../src/cli.js';
import { user } from '../src/cli.js';
import { brainProgressionGames } from '../src/games/brain-progression.js';

greet()
const name = user()
brainProgressionGames(name)