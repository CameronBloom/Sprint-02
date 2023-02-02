// For this challenge, we want you to build out a few classes based on your ancestral tree. (If you're not sure about any of your family's 
// information, go ahead and make up names like "Grandpa" and "Grandma").

// Go back a few generations and create a Grandpa or Grandma class. Name either one for your parent's parents.

// Create a Parent class named for one of your parents. Parent inherits from Grandpa/Grandma.

// Create a Child class (you) who inherits from Parent.

// Be sure to log out any methods that you use for this project. Any features (i.e., eye color, hair color) that you'd inherit from your 
// ancestors, be sure to include as attributes and pass them down the class chain. Every class should at least be instantiated with the 
// following attributes. name, birthPlace, eyeColor, hairColor.

class Grandparent {
  constructor(name, birthPlace, eyeColor, hairColor, nationality, children) {
    this.name = name,
    this.birthPlace = birthPlace,
    this.eyeColor = eyeColor,
    this.hairColor = hairColor,
    this.nationality = nationality,
    this.children = children
  }
  questionChildren() {
    console.log("Grandparent Question: Do you have children?")
    console.log(`Grandparent Response: Yes, I have ${this.children} children.`)
  }
}

class Parent extends Grandparent {
  constructor(name, birthPlace, eyeColor, hairColor, nationality, children) {
    super(name, birthPlace, eyeColor, hairColor, nationality, children)
  }
  questionParents() {
    console.log("Parent Question: Do you have parents?")
    console.log("Parent Response: Yes, I have parents.")
  }
}

class Child extends Parent {
  constructor(name, birthPlace, eyeColor, hairColor, nationality, children) {
    super(name, birthPlace, eyeColor, hairColor, nationality, children)
  }
  questionChildren() {
    console.log("Child Question: Do you have children?")
    console.log("Child Response: No, I'm still a kid.")
  }
}

const elder = new Grandparent("Sloth", "New York", "Blue", "Blonde", "Swiss", 4);
const adult = new Parent("Panda", "New Jersey", "Blue", "Blonde", "Swiss", 1);
const kid = new Child("Grizzly", "New Jersey", "Blue", "Brown", "Swiss", 0);

console.log(elder);
elder.questionChildren();

console.log(adult);
adult.questionChildren();
adult.questionParents();


console.log(kid);
kid.questionParents();
kid.questionChildren();
