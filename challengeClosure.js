// For this challenge, you will create your closure:
const counter = () => {
  let count = 0;
  return function() {
    return count += 1;
  }
}

const newCounter = counter(); // initialize => count in "newCounter()" function is 0;
console.log(newCounter());    // increment => count in "newCounter()" function is now 1;
console.log(newCounter())     // increment => count in "newCounter()" function is now 2;


// Create a function that houses two nested functions inside of it
// Create a unique variable for each function you created
// Test out where you can log the unique variables for each function.
// Why can you access variable values in nested functions?

const dog = () => {
  let milesWalked = 0;
  let timesBarked = 0;
  
  function walk(miles) {
    let distance = miles;
    console.log(`walk:`, milesWalked);  // => available
    console.log(`walk:`, timesBarked);  // => available
    console.log(`walk:`, distance);     // => available
    // console.log(barks);              // => not defined
    milesWalked += distance;

  }
  function bark(count) {
    let barks = count;
    console.log(`bark:`, milesWalked);  // => available
    console.log(`bark:`, timesBarked);  // => available
    // console.log(distance);           // => not defined
    console.log(`bark:`, barks);        // => available
    timesBarked += barks;
  }
  console.log(`dog:`, milesWalked);     // => available
  console.log(`dog:`, timesBarked);     // => available
  // console.log(distance);             // => not defined
  // console.log(barks);                // => not defined
  walk(5);
  bark(10);
  console.log(`total miles walked:`, milesWalked);  // => available
  console.log(`total times barked`, timesBarked);   // => available
}

let newDog = dog();

