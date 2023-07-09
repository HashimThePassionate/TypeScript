"use strict";
function describeCity(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi", "Pakistan"); // Custom city and country
describeCity("London", "United Kingdom"); // Custom city and country
describeCity("Paris"); // Default country
