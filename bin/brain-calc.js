#!/usr/bin/env node
import { calcGame, gameConditions } from '../src/games/calc-game.js';
import startGame from '../src/index.js';

startGame(calcGame, gameConditions);
