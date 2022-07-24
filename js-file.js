function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, x, b) {
    switch (x) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

let display = '';
let operator = '';

const displayQuery = document.querySelector('#display');
function updateDisplay() {
    displayQuery.textContent = display;
}

for (let i = 0; i < 10; i++) {
    let numTemp = document.querySelector('button[value="' +i+ '"]');
    numTemp.addEventListener('click', () => {
        display += i;
        updateDisplay();
    })
}

