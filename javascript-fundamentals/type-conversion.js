"use strict";

// String conversion

let value = true;
console.log(value, "becomes", String(value));

value = false;
console.log(value, "becomes", String(value));

value = null;
console.log(value, "becomes", String(value));

// Number conversion

let str = "123";
console.log(str, "becomes", Number(str));

value = undefined;
console.log(value, "becomes", Number(value));

value = null;
console.log(value, "becomes", Number(value));

value = true;
console.log(value, "becomes", Number(value));

value = false;
console.log(value, "becomes", Number(value));

value = "123z";
console.log(value, "becomes", Number(value));

// Boolean conversion

value = 1;
console.log(value, "becomes", Boolean(value));

value = 0;
console.log(value, "becomes", Boolean(value));

value = null;
console.log(value, "becomes", Boolean(value));

value = undefined;
console.log(value, "becomes", Boolean(value));

value = NaN;
console.log(value, "becomes", Boolean(value));

value = "hello";
console.log(value, "becomes", Boolean(value));

value = "";
console.log(value, "becomes", Boolean(value));
