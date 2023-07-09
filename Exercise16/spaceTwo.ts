var guestList: string[] = ["Muhammad Hashim", "Umair Nawaz", "Ehtisham Butt","Usman Qureshi", "Abdul Rehman"];
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");

while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner this time.`);
 }
for (const guest of guestList) {
console.log(`Dear ${guest}, you are still invited to dinner. Please join us for a memorable evening.`);
}
guestList.length = 0;
console.log("The guest list is now empty:", guestList);

