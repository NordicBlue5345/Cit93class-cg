export function renderTable(data) {
 // Render the table headings
    // ...
}
  
export function renderEditDelBtn(index) {
  // Render the edit and delete buttons for a row
  // ...
}

export function getTripData() {
  // Get trip data from localStorage
  // ...
}

export function saveTripData(data) {
  // Save trip data to localStorage
  // ...
}

// Global constants for updating DOM elements by their id
const ERR = document.getElementById('err');
const AVG_OUTPUT = document.getElementById('output-avg');

const MY_DATA = getTripData();
renderTable(MY_DATA);

/* Eventlisteners for form submit button, checks validation and if valid saves input data and calculated 
data as an object into global array named MY_DATA */

const FORM = document.getElementById ('form-input')

FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const miles = parseInt(e.target.miles.value);
  const gallons = parseInt(e.target.gallons.value);
  const price = parseInt(e.target.price.value);
  const isValid = isFormValid(miles, gallons, price);
  if (isValid) {
      ERR.textContent = '';
      AVG_OUTPUT.textContent = '';
      const dataObj = trackMPGandCost(miles, gallons, price);
      MY_DATA.push(dataObj);
      saveTripData()
      renderTable(MY_DATA, FORM_FORM);
      calculateAvg();
  }
  FORM.reset();
});