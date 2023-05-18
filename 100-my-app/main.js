// Global variables
const decisionForm = document.getElementById('decision-form');
const inputDataField = document.getElementById('input-data');

// Function to make a decision based on input data and selected option
function makeDecision(data, option) {
  let decision;
  
  if (option === 'Option 1') {
    // Decision logic for Option 1
    decision = `Option 1: ${data}`;
  } else if (option === 'Option 2') {
    // Decision logic for Option 2
    decision = `Option 2: ${data}`;
  } else if (option === 'Option 3') {
    // Decision logic for Option 3
    decision = `Option 3: ${data}`;
  }
  
  // Return decision as an object
  return { data, decision };
}

// Event listener for form submission
decisionForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const inputData = inputDataField.value;
  const selectedOption = document.querySelector('input[name="decision-option"]:checked').value;
  
  const result = makeDecision(inputData, selectedOption);
  console.log(result);
  
  decisionForm.reset();
});