"use strict";

let x = 1;
x = -x;

console.log(x);

let y = 1,
  z = 3;

console.log(y - z);

console.log("remainder", 5 % 2);

console.log("exponentiation", 2 ** 3);

console.log("my" + "string");

console.log(2 + 2 + "1"); // "41"

console.log("1" + 2 + 2); // "122"

console.log(6 - "2"); // 4

console.log("6" / "2"); // 3

// numeric conversion using unary +
console.log(+true); // 1
console.log(+""); // 0

let apples = "2";
let oranges = "3";

console.log(apples + oranges); // 23

console.log(+apples + +oranges); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a); // 3
console.log(c); // 0
