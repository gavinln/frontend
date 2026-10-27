"use strict";

// npm install prompt-sync
const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log(`Hi ${name}`);
