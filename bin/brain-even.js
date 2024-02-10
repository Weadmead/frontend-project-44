#!/usr/bin/env node
import startGame from '../src/index.js';
import { evenGame, gameConditions } from '../src/games/even-game.js';

startGame(evenGame, gameConditions);
