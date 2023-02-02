/* ==== Prototypes Challenge

  1. Study the console.log() and object method invocations at the bottom of the page. Update the Animal and Dog constructors so that the logs and methods match the commented result next to them.
  
  2. Stretch Challenge: Create a new constructor function called Cat. Add properties and a method unique to a cat.  Make sure cat inherits from Animal so you can use all of the properties and methods found there.


You can check your work here:

https://codepen.io/BloomTech/pen/yxjRJa

*/


function Animal(attributes) {
  this.weight = attributes.weight;
  this.height = attributes.height;
  this.food = attributes.food;
}

Animal.prototype.eat = function() {
  console.log(``);
}

function Dog(dogAttributes) {
  // Connect the attributes so we can use the this keyword
  Animal.call(this, dogAttributes);
  this.name = dogAttributes.name;
  this.bark = dogAttributes.bark;
  this.animalCommonName = "dog";
}
// Set up our __proto__ inheritance to Animal
Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.animalCommonName = "dog";

Dog.prototype.eat = function() {
  console.log(`The dog eats ${this.food}`);
}

Dog.prototype.speak = function() {
  console.log(`${this.name} says: ${this.bark}`);
}

const dog = new Dog({
  'name': 'Dr. Doggo',
  'animalCommonName': "dog",
  'weight': 40,
  'height': 12,
  'food': 'meat',
  'bark': 'Woof!'
});

console.log(dog.animalCommonName); // "dog"
dog.eat(); // "The dog eats meat"
dog.speak(); // "Dr. Doggo says: Woof!"
