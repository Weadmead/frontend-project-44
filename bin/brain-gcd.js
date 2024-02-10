#!/usr/bin/env node
import startGame from '../src/index.js';
import { gcdGame, gameConditions } from '../src/games/gcd-game.js';

startGame(gcdGame, gameConditions);
