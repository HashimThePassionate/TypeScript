"use strict";
function showMagician(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
var magicians = ["hashim", "umair", "Galib", "Usman"];
makeGreat(magicians);
showMagician(magicians);
