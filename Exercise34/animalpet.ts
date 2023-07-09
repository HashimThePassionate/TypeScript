var animals: string[] = ['Dog', 'Cat', 'Rabbit'];

for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  console.log(animal);
}

console.log('');

for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log('');
console.log('Any of these animals would make a great pet!');
