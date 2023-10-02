/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generateExcuse() {
    // Arrays of possible words
    let who = ["The cat", "My sims character", "My mentor", "Ryan Reynolds"];
    let action = ["ate", "put in the freezer", "hid", "destroyed", "buried"];
    let what = ["my homework", "the keys", "the car", "my code"];
    let when = [
      "before the class",
      "during the test",
      "while I was buying some tea",
      "while I was cooking",
      "while I was sleeping"
    ];

    // Randomly select one word from each array
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    // Combine the selected words into a sentence
    let excuse =
      randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

    return excuse;
  }
  // Get the HTML element with id "excuse"
  var excuseElement = document.getElementById("excuse");

  // Generate a random excuse using your function
  var randomExcuse = generateExcuse();

  // Set the innerHTML of the #excuse element to the generated excuse
  excuseElement.innerHTML = randomExcuse;

  // Call the function to generate and print a random excuse
  console.log(generateExcuse());
};
