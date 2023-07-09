function describeCity(city: string, country: string = "Unknown") {
    console.log(`${city} is in ${country}.`);
  }

describeCity("Karachi", "Pakistan"); // Custom city and country
describeCity("London", "United Kingdom"); // Custom city and country
describeCity("Paris"); // Default country
  