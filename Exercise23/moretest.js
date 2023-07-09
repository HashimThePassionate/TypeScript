"use strict";
// Tests for equality and inequality with strings
var string1 = 'apple';
var string2 = 'orange';
console.log(`Equality test with strings: ${string1} == ${string1} ->` + string1 == string1);
console.log(`Inequality test with strings: ${string1} != ${string2} ->` + string1 != string2);
// Tests using the lowercase function
var lowercase1 = 'Hello';
var lowercase2 = 'WORLD';
console.log(`Lowercase test: ${lowercase1} converted to lowercase is ->` + lowercase1.toLowerCase() === 'hello');
console.log(`Lowercase test: ${lowercase2} converted to lowercase is ->` + lowercase2.toLowerCase() === 'world');
// Numerical tests
var number1 = 5;
var number2 = 7;
var number3 = 10;
console.log(`Equality test with numbers: ${number1} === ${number1} ->` + (number1 === number1));
console.log(`Inequality test with numbers: ${number3} !== ${number2} ->` + (number3 !== number2));
console.log(`Greater than test: ${number3} > ${number1} ->` + (number3 > number1));
console.log(`Less than test: ${number1} < ${number3} ->`, +(number1 < number3));
console.log(`Greater than or equal to test: ${number3} >= ${number3} ->` + (number3 >= number3));
console.log(`Less than or equal to test: ${number1} <= ${number2} ->` + (number1 <= number2));
// Tests using "and" and "or" operators
var bool1 = true;
var bool2 = false;
console.log(`And operator test: ${bool1} && ${bool2} ->` + (bool1 && bool2));
console.log(`Or operator test: ${bool1} || ${bool2} ->` + (bool1 || bool2));
// Test whether an item is in an array
var Fruits = ['apple', 'banana', 'orange'];
var fruit = 'apple';
console.log(`Array inclusion test: ${fruit} in fruits ->` + fruit in Fruits);
