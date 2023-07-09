function showMagician(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "The Great " + magicians[i];
    }
  }
  
var magicians: string[] = ["hashim", "umair", "Galib", "Usman"];

makeGreat(magicians);
showMagician(magicians);
