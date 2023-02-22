// Set up a variable to hold the input value
let inputValue = '';

// Function to update the display
function updateDisplay() {
  document.getElementById('output-text').innerText = inputValue;
}

// Function to add a digit to the input
function addDigit(digit) {
  // Append the digit to the input value
  inputValue += digit;
  updateDisplay();
}

// Function to add a decimal point to the input
function addDecimal() {
  // Only add a decimal point if one doesn't already exist
  if (!inputValue.includes('.')) {
    inputValue += '.';
    updateDisplay();
  }
}

// Function to perform basic arithmetic operations (+, -, *, /)
function operate(operator) {
  // Save the current value and operator in global variables for use in the calculate() function
  window.currentValue = parseFloat(inputValue);
  window.currentOperator = operator;

  // Clear the input
  inputValue = '';
  updateDisplay();
}

// Function to calculate the result of the arithmetic operation
function calculate() {
  // Get the current value of the input
  let currentValue = parseFloat(inputValue);

  // Calculate the result based on the current value, the saved operator, and the saved value
  let result;
  switch (window.currentOperator) {
    case '+':
      result = window.currentValue + currentValue;
      break;
    case '-':
      result = window.currentValue - currentValue;
      break;
    case '*':
      result = window.currentValue * currentValue;
      break;
    case '/':
      result = window.currentValue / currentValue;
      break;
  }

  // Display the result
  inputValue = result.toString();
  updateDisplay();

  // Reset the saved operator and value
  window.currentOperator = '';
  window.currentValue = '';
}

// Function to perform trigonometric operations (sin, cos, tan)
function trig(operation) {
  // Get the current value of the input
  let currentValue = parseFloat(inputValue);

  // Calculate the result of the trigonometric operation
  let result;
  switch (operation) {
    case 'sin':
      result = Math.sin(currentValue);
      break;
    case 'cos':
      result = Math.cos(currentValue);
      break;
    case 'tan':
      result = Math.tan(currentValue);
      break;
  }

  // Display the result
  inputValue = result.toString();
  updateDisplay();
}

// Animation

const display = document.querySelector('.calculator__display');

gsap.fromTo(display, { opacity: 0 }, { opacity: 1, duration: 1 });

const buttons = document.querySelectorAll('.calculator__button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    gsap.fromTo(button, { y: 0 }, { y: 10, duration: 0.1, yoyo: true, repeat: 1 });
  });
});

const calculatorButton = document.querySelector('.calculator-button');

calculatorButton.addEventListener('click', function() {
  calculatorButton.classList.add('animated');
  setTimeout(function() {
    calculatorButton.classList.remove('animated');
  }, 500);
});


// 

// JavaScript code to create the new element
const newElem = document.createElement('div');
newElem.textContent = inputtedValue;
newElem.classList.add('floating-element');
document.body.appendChild(newElem);

