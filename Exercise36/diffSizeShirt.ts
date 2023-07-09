function make_Shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`The T-shirt size is ${size} and the message on it says: "${message}".`);
  }
  make_Shirt(); // Large shirt with default message
  make_Shirt("medium"); // Medium shirt with default message
  make_Shirt("small", "Hello World!"); // Custom size and message
  