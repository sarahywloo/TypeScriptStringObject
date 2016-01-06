'use strict';
//                 1         2         3         4
//       0123456789012345678901234567890123456789012
var a = 'the quick brown fox jumps over the lazy dog';
console.log(a.indexOf('fox'));
console.log(a.indexOf('o', 42));
//returns -1 because there is no 'o' starting from index 42
console.log(a.indexOf('o', 0));
//Counting through a string
var oIdx = a.indexOf('o');
var count = 0;
while (oIdx >= 0) {
    count++;
    oIdx = a.indexOf('o', oIdx + 1);
}
console.log(count);
//replace()
console.log(a.replace('fox', 'cat'));
console.log(a);
//still logs fox because strings are immunible
//to change the whole string
a = a.replace('fox', 'cat');
console.log(a);
//slice()
console.log(a.slice(5, 15));
console.log(a.substr(5, 15));
console.log(a.substring(5, 15));
console.log(a.slice(15, 5));
console.log(a.substring(15, 5));
//use substring
//split()
console.log(a.split(' '));
console.log(a.split(' ').length);
console.log(a.split('o'));
console.log(a.split('cat'));
//toUpperCase()
console.log(a.toUpperCase());
//toLowerCase()
console.log('HELLO THERE!'.toLowerCase());
//template strings
console.log("1 + 1 = " + (1 + 1));
//let x = parseInt(prompt('Pick a number from 1 toolbar 10'));
//let y = parseInt(prompt('Pick a number from 1 toolbar 10'));
//console.log(`${x} + ${y} = ${x + y}`);
//Regular Expressions
var regex = /\w+/;
console.log(a.replace(regex, 'banana'));
regex = /\w+/g;
console.log(a.replace(regex, 'banana'));
regex = /\d{3}-?\d{2}-?\d{4}/;
if (regex.test('123-45-6789')) {
    console.log('Valid');
}
;
//test returns true or false
regex = /\w+/; // [a-zA-Z0-9_], one or more times
console.log(regex.test(a));
console.log(regex.exec(a));
//replace()
console.log(a.replace(regex, 'banana'));
//split()
console.log(a.split(/\s+/));
console.log(a.split(' '));
//match()
console.log(a.match(regex));
console.log(new Date().toISOString());
console.log(new Date().toDateString());
console.log(new Date('1/1/2016'));
console.log(new Date(2015, 11, 31));
//To find the earliest day in the past that you can represent with JavaScript
console.log(new Date(8640000000000000));
//To find farthest day in the future that you can represent with JavaScript
console.log(new Date(8640000000000000));
var date = new Date;
//setting the time of the 'date'
console.log(date.setTime(8640000000000000));
//logging the date
console.log(date);
