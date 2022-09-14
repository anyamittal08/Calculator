const screen = document.getElementById('screen');
const digits = Array.from(document.querySelectorAll('.digit'));
const operatorsBtns = Array.from(document.querySelectorAll('.operator'));
const evaluateBtn = document.querySelector('.evaluate');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

let displayVal = 0;
let lastEvaluated = 0;
let prevValEntered = 0;
let currentOperator;

const addNums = (a, b) => (a+b);

const subtractNums = (a, b) => (a-b);

const multiplyNums = (a, b) => (a*b);

const divideNums = (a, b) => (a/b);

const operate = (operator, a, b) => {
    if (operator && a && b) {
        let result;
        let numA = parseInt(a);
        let numB = parseInt(b);
        if (operator === '+') result = addNums(a, b);
        else if (operator === '-') result = subtractNums(a, b);
        else if (operator === 'x') result = multiplyNums(a, b);
        else if (operator === '÷') result = divideNums(a, b);
    
        screen.innerText = result;
        displayVal = result;
        currentOperator = undefined;
    }
};

const clear = () => {
    screen.innerText = 0;
    displayVal = 0;
    prevValEntered = 0;
    currentOperator = undefined;
};

const del = () => {
    if (currentOperator === '=') return;
    if (screen.innerText.length === 1) {
        screen.innerText = 0;
        displayVal = 0;
    } else {
        let newVal = screen.innerText.slice(0, screen.innerText.length - 1);
        screen.innerText = newVal;
        displayVal = parseInt(screen.innerText);
        console.log(displayVal);
    }
}
for (let digit of digits) {
    digit.addEventListener('click', function() {
        if (currentOperator === '=') return;
        if (screen.innerText === '0') screen.innerText = digit.innerText;
        else screen.innerText += digit.innerText;
        displayVal = parseInt(screen.innerText);
    });
};

operatorsBtns.forEach(operator => {
    operator.addEventListener('click', () => {
        currentOperator = operator.innerText;
        screen.innerText = '0';
        prevValEntered = displayVal;
        displayVal = 0;
    });  
});

evaluateBtn.addEventListener('click', () => {
    operate(currentOperator, prevValEntered, displayVal);
    currentOperator = '=';
});

clearBtn.addEventListener('click', clear);

deleteBtn.addEventListener('click', del);