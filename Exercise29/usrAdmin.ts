var usernames: string[] = ['admin', 'hashim', 'umair', 'ehtisham', 'Sarah'];
for (let i = 0; i < usernames.length; i++) 
{
 var username = usernames[i];
    if (username === 'admin') {
    console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
