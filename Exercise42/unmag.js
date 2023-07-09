"use strict";
function showMagicianss(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function makeGreatt(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
var m = ["Usman", "Rahul", "Hafsa", "Sara"];
var greatM = makeGreatt([...m]); // Create a copy of the original array
showMagicianss(m);
console.log("-------------------------------");
showMagicianss(greatM);
