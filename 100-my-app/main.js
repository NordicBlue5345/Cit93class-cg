// Define the global variables
let globalString = "Hello";
let globalNumber = 42;
let globalBoolean = true;

// Function to perform calculation
function performCalculation(input1, input2) {
  return input1 + input2;
}

// Validate the form input
function validateForm() {
  // Get the form element and inputs
  const formEl = document.getElementById('myForm');
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');

  // Get the values of the inputs
  const value1 = input1.value;
  const value2 = input2.value;

  // Validate the inputs
  if (value1 === '' || value2 === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Convert the inputs to numbers
  const number1 = parseFloat(value1);
  const number2 = parseFloat(value2);

  // Check if the conversion was successful
  if (isNaN(number1) || isNaN(number2)) {
    alert('Please enter valid numbers.');
    return;
  }

  // Call the function and get the result
  const result = performCalculation(number1, number2);

  // Create the object with data and decision
  const dataObject = {
    input1: number1,
    input2: number2,
    result: result,
  };

  // Push the object into an array
  dataArray.push(dataObject);

  // Reset the form
  formEl.reset();
}

// Array to store the data objects
const dataArray = [];

// Add event listener to the form submission
const formEl = document.getElementById('myForm');
formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();
});