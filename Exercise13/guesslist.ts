var guestList: string[] = ["Muhammad Hashim", "Umair Nawaz", "Ehtisham Butt"];
var dinnerInvitation = "Dear ";
for (const guest of guestList) {
  console.log(`${dinnerInvitation}${guest}, you are cordially invited to dinner. Please join us for a memorable evening.`);
}
