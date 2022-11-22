'use strict';
// DOM
const contentsArea = document.querySelector('.contents-area')
const calculatorBox = document.querySelector('.calculator-box')
const calculatorArea = document.querySelector('.calculator-area')
const calculatorDisplay = document.querySelector('.calculator-display')
// setting
// variables
// functions
function handleCalculatorBox() {
  toggleDisplay(contentsArea, 'flex')
  toggleDisplay(calculatorArea, 'flex')
}
function toggleDisplay(target, state) { // display 컨트롤
  target.style.display = state;
}
// event handling
calculatorBox.addEventListener('click', handleCalculatorBox)