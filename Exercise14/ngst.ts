var guestList: string[] = ["Muhammad Hashim", "Umair Nawaz", "Ehtisham Butt"];
const cancelGuest = "Muhammad Hashim";
const newGuest = "Galib Javed";
var dinnerInvitation = "Dear "
console.log(`Unfortunately, ${cancelGuest} cannot make it to the dinner.`);
var cancelIndex = guestList.indexOf(cancelGuest);
if (cancelIndex !== -1) {
  // Replace the guest who can't make it with the new guest
  guestList.splice(cancelIndex, 1, newGuest);

  for (const guest of guestList) {
    console.log(`${dinnerInvitation}${guest}, you are cordially invited to dinner. Please join us for a memorable evening.`);
  }
} else {
  console.log("The guest who can't make it was not found in the guest list.");
}
