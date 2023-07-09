"use strict";
const placesToVisit = [
    "Iran",
    "Iraq",
    "Russia",
    "Havana",
    "Sydney"
];
console.log("Original order:", placesToVisit);
const sortedAlphabetical = [...placesToVisit].sort();
console.log("Alphabetical order:", sortedAlphabetical);
console.log("Original order (still):", placesToVisit);
const sortedReverseAlphabetical = [...placesToVisit].sort().reverse();
console.log("Reverse alphabetical order:", sortedReverseAlphabetical);
console.log("Original order (still):", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Original order (back):", placesToVisit);
placesToVisit.sort();
console.log("Alphabetical order (changed):", placesToVisit);
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order (changed):", placesToVisit);
