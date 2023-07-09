"use strict";
var currentUsers = ['hashim', 'muhammad', 'Sarah'];
var newUsers = ['galib', 'javed', 'usman', 'admin'];
for (let i = 0; i < newUsers.length; i++) {
    const newUser = newUsers[i];
    const lowerCaseNewUser = newUser.toLowerCase();
    if (currentUsers.includes(lowerCaseNewUser)) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
}
