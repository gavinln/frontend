"use strict";

// number
let n = 123;
console.log(n);

// special numbers
let m = Infinity;
console.log(m);
console.log(-m);

let x = "not a number" / 2;
console.log(x);

let y = NaN;
console.log(y);
console.log(y + 1);

// BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// string
let str1 = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str1}`;

console.log(str2);
console.log(phrase);

console.log(`The result is ${1 + 2}`); // 3

// Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

console.log(nameFieldChecked, ageFieldChecked);

let isGreater = 4 > 1;
console.log(isGreater);

// undefined
let age = 100;
age = undefined;
console.log(age);

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof console.log);

console.log(typeof typeof undefined);
