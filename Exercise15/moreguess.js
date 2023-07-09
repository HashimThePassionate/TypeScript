"use strict";
var guestList = ["Muhammad Hashim", "Umair Nawaz", "Ehtisham Butt"];
var cGuest = "Muhammad Hashim";
var nGuest = "Galib Javed";
var eGuests = ["Usman Qureshi", "Abdul Rehman"];
var dinnerInvitation = "Dear ";
console.log("Good news! We found a bigger dinner table.");
var cancelIndex = guestList.indexOf(cGuest);
if (cancelIndex !== -1) {
    // Replace the guest who can't make it with the new guest
    guestList.splice(cancelIndex, 1, nGuest);
    guestList.unshift(...eGuests);
    for (const guest of guestList) {
        console.log(`${dinnerInvitation}${guest}, you are cordially invited to dinner. Please join us for a memorable evening.`);
    }
}
else {
    console.log("The guest who can't make it was not found in the guest list.");
}
