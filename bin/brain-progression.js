#!/usr/bin/env node
import {
  progressionGame,
  gameConditions,
} from '../src/games/progression-game.js';
import startGame from '../src/index.js';

startGame(progressionGame, gameConditions);
