var usernames: string[] = ['admin', 'hashim', 'ehtisham', 'umair', 'Sarah'];
if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];

    if (username === 'admin') {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
// Removing all usernames from the array
usernames = [];

if (usernames.length === 0) {
  console.log("We need to find some users!");
}
