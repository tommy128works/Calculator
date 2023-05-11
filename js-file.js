function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, x, b) {
  a = parseInt(a);
  b = parseInt(b);
  switch (x) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

let display = "0";
let operator = "";
let firstNum = 0;
let startSecondNum = false;

const displayQuery = document.querySelector("#display");
function updateDisplay() {
  displayQuery.textContent = display;
}

for (let i = 0; i < 10; i++) {
  let numTemp = document.querySelector('button[value="' + i + '"]');
  numTemp.addEventListener("click", () => {
    if (display === "0" || (operator != "" && startSecondNum === true)) {
      display = String(i);
      startSecondNum = false;
    } else {
      display += i;
    }
    updateDisplay();
  });
}

const addButton = document.querySelector('button[value="+"]');
addButton.addEventListener("click", () => {
  if (operator === "") {
    operator = "+";
    firstNum = parseInt(display);
    startSecondNum = true;
  }
});

const subtractButton = document.querySelector('button[value="-"]');
subtractButton.addEventListener("click", () => {
  if (operator === "") {
    operator = "-";
    firstNum = parseInt(display);
    startSecondNum = true;
  }
});

const multiplyButton = document.querySelector('button[value="*"]');
multiplyButton.addEventListener("click", () => {
  if (operator === "") {
    operator = "*";
    firstNum = parseInt(display);
    startSecondNum = true;
  }
});

const divideButton = document.querySelector('button[value="/"]');
divideButton.addEventListener("click", () => {
  if (operator === "") {
    operator = "/";
    firstNum = parseInt(display);
    startSecondNum = true;
  }
});

const equalButton = document.querySelector('button[value="="]');
equalButton.addEventListener("click", () => {
  if (firstNum != 0) {
    display = operate(firstNum, operator, display);
    firstNum = 0;
    operator = "";
  }
  updateDisplay();
});

const clearButton = document.querySelector('button[value="clear"]');
clearButton.addEventListener("click", () => {
  display = "0";
  firstNum = 0;
  operator = "";
  updateDisplay();
});
