const FORM = document.getElementById('form-input');
const ERR = document.getElementById('err');
const AVG_OUTPUT = document.getElementById('output-avg');

const MY_DATA = [];

const updateDOM = (input, id) => {
  const divEl = document.querySelector(id);
  const p = document.createElement('p');
  p.textContent = input;
  divEl.appendChild(p);
};

const trackMPGandCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.round(miles / gallons);
  const tripCost = Math.round(gallons * price);
  updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output');
  const dataObj = {
    miles: miles,
    gallons: gallons,
    price: price,
    MPG: MPG,
    tripCost: tripCost
  };
  MY_DATA.push(dataObj);
};

const calculateSUM = (arr) => {
  let sum = 0;
  for (value of arr) {
    sum += value;
  }
  return sum;
};

const calculateAvg = () => {
    let sumMPG = calculateSUM(MY_MPG)
    let sumTripCost = calculateSUM(MY_TRIP_COST)
    let avgMPG = Math.round(sumMPG/MY_MPG.length)
    let avgTripCost = Math.round(sumTripCost/MY_TRIP_COST.length)
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
    updateDOM(`Average Trip Cost is ${avgTripCost}`, '#output-avg')
}


FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const miles = parseInt(e.target.miles.value);
    const gallons = parseInt(e.target.gallons.value);
    const price = parseInt(e.target.price.value);
    const isValid = isFormValid(miles, gallons, price);
    if (isValid) {
      ERR.textContent = '';
      AVG_OUTPUT.textContent = '';
      trackMPGandCost(miles, gallons, price);
      renderTable();
      calculateAvg();
    }
    FORM.reset();
  });