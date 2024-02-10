#!/usr/bin/env node
import { primeGame, gameConditions } from '../src/games/prime-game.js';
import startGame from '../src/index.js';

startGame(primeGame, gameConditions);
