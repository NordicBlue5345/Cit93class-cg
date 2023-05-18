// Global variables
let stringValue = "Hello";
let numberValue = 10;
let booleanValue = true;

// Calculation function
function performCalculation(a, b) {
  return a + b;
}

// Decision making process based on inputs and conditions
function makeDecision() {
  if (stringValue === "Hello" && numberValue > 5) {
    console.log("Condition 1: String value is 'Hello' and number value is greater than 5");
  } else if (booleanValue || (numberValue < 0 && stringValue !== "Goodbye")) {
    console.log("Condition 2: Boolean value is true or number value is negative and string value is not 'Goodbye'");
  } else {
    const result = performCalculation(numberValue, 5);
    console.log(`Condition 3: Result of calculation is ${result}`);
  }
}

// Calling the decision making function
makeDecision();