// Write your code here
// Use console.log() to print to stdout
var tipCost = mealCost * tipPercent / 100;
var taxCost = mealCost * taxPercent / 100;
var totalCost = Math.round(mealCost + tipCost + taxCost);

console.log("The total meal cost is " + totalCost + " dollars.");