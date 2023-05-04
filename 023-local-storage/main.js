/*Global const for updating DOM elements by their id*/

const FORM = document.createElementById('form-input');
const ERR = document.createElementById('err');
const AVG_OUTPUT = document.getElementById('output-avg');
const TBL_OUTPUT = document.getElementById('table-out');

/*MY_DATA is global array that will be updated by the user input and calculate data */


const MY_DATA = [];

/* updateDOM funtion takes in input (string value) and Id (to ) and creates and updates DOM elements*/


function updateDOM(input, id) {
    const divEl = document.querySelector(id);
    const p = document.createElement('p');
    p.textContent = input;
    divEl.appendChild(p);
}

/* trackMPGandCost function takes in miles, gallons and price and returns an object */


