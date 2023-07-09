function showMagicianss(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  function makeGreatt(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push("the Great " + magicians[i]);
    }
  
    return greatMagicians;
  }
  
var m: string[] = ["Usman", "Rahul", "Hafsa", "Sara"];
var greatM :string[] = makeGreatt([...m]); // Create a copy of the original array
showMagicianss(m);
console.log("-------------------------------");
showMagicianss(greatM);
  