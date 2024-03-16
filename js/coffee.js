const output = document.querySelector("#output");

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
function Coffee(size, isDecaf, qtyCream, qtySugar) {
  this.size = size;
  this.isDecaf = isDecaf;
  this.qtyCream = qtyCream;
  this.qtySugar = qtySugar;
  this.description = function () {
    output.textContent = `A ${this.size} ${this.isDecaf} coffee with ${this.qtyCream} creamers and ${this.qtySugar} teaspoons of sugar.`;
  };
}
/* STEP 2: Instatiate a coffee based on the above constructor function */
let scottsCoffee = new Coffee("extra large", false, 2, 1);
console.log(scottsCoffee);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */

/* STEP 6: Create a new instance of the Latte object */

/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
