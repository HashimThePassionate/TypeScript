"use strict";
var pName = "Muhammad Hashim";
console.log(pName.toLocaleLowerCase());
console.log(pName.toLocaleUpperCase());
//For titlt Case we need custom function
function toTitleCase(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
console.log(toTitleCase(pName));
