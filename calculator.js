const screen = document.getElementById('screen');
const digits = Array.from(document.querySelectorAll('.digit'));
const operators = Array.from(document.querySelectorAll('.operator'))
let displayVal = 0;
let lastEveluated = 0;
let lastValEntered = 0;
let currentOperator;

// add click event to buttons to display button content on screen

for (let digit of digits) {
    digit.addEventListener('click', function() {
        if (screen.innerText === '0') screen.innerText = digit.innerText;
        else {
            if (screen.innerText.length < 18) screen.innerText += digit.innerText;
        }
        displayVal = Number(screen.innerText);
        console.log(screen.innerText)
        console.log(displayVal);
    });
};

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        currentOperator = operator.innerText;
    });  
});

const addNums = (a, b) => (a+b);

const subtractNums = (a, b) => (a-b);

const multiplyNums = (a, b) => (a*b);

const divideNums = (a, b) => (a/b);

const operate = (operator, a, b) => {
    if (operator === '+') addNums(a, b);
    else if (operator === '-') subtractNums(a, b);
    else if (operator === 'x') multiplyNums(a, b);
    else if (operator === '÷') divideNums(a, b);
};